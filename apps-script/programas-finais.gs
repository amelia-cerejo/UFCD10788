// Adicionar este bloco ao projeto Apps Script que serve o site UFCD 10788.
// Objetivo: receber a submissao do programa final, guardar o ZIP na pasta
// Drive indicada e registar a linha na Google Sheet.
//
// Pasta principal:
// https://drive.google.com/drive/folders/1wKhc6R33GzCmJsIT8S4aapHiifR_3sG0
//
// No doPost(e) existente, adicionar antes da logica generica:
//
// const payload = e.parameter && Object.keys(e.parameter).length
//   ? e.parameter
//   : JSON.parse(e.postData.contents || "{}");
//
// if (payload.acao === "submeter_programa_final") {
//   return ContentService
//     .createTextOutput(JSON.stringify(tratarSubmissaoProgramaFinal_(payload)))
//     .setMimeType(ContentService.MimeType.JSON);
// }
//
// if (payload.acao === "galeria_programas_drive") {
//   return responderJsonProgramas_(tratarGaleriaProgramasDrive_(payload), payload.callback);
// }

const PROGRAMAS_FINAIS_FOLDER_ID = "1wKhc6R33GzCmJsIT8S4aapHiifR_3sG0";
const PROGRAMAS_FINAIS_SALAS = {
  "sala-1-programa-final": "Sala 1",
  "sala-2-programa-final": "Sala 2",
  "sala-3-programa-final": "Sala 3",
  "sala-4-programa-final": "Sala 4",
  "sala-5-programa-final": "Sala 5",
  "sala-6-programa-final": "Sala 6",
  "sala-preview-programa-final": "Sala Preview"
};

function tratarSubmissaoProgramaFinal_(payload) {
  const spreadsheetId = payload.spreadsheet_id || PROGRAM_SUBMISSIONS_SPREADSHEET_ID;
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const sheet = obterOuCriarFolha_(spreadsheet, "Programas finais");
  const respostas = normalizarObjeto_(payload.respostas);
  const ficheiroZip = normalizarObjeto_(payload.ficheiro_zip);

  const pastaMae = DriveApp.getFolderById(PROGRAMAS_FINAIS_FOLDER_ID);
  const nomeSala = limparNomeFicheiro_(respostas.Sala || "Sala");
  const nomePrograma = limparNomeFicheiro_(respostas["Nome do programa"] || "Programa");
  const pastaSala = obterOuCriarPasta_(pastaMae, nomeSala);

  let zipUrl = "";
  let zipId = "";

  if (ficheiroZip && ficheiroZip.conteudo) {
    const nomeZip = limparNomeFicheiro_(ficheiroZip.nome || respostas["Pasta zipada"] || `${nomeSala}-${nomePrograma}.zip`);
    const blob = converterDataUrlParaBlob_(ficheiroZip.conteudo, nomeZip, ficheiroZip.tipo || "application/zip");
    const zipFile = pastaSala.createFile(blob);
    zipUrl = zipFile.getUrl();
    zipId = zipFile.getId();
  }

  const linha = {
    "Data": new Date(),
    "Questionario": "Programas finais",
    "Submissao ID": respostas["Submissão ID"] || respostas["Submissao ID"] || "",
    "Sala": respostas.Sala || "",
    "Nome do programa": respostas["Nome do programa"] || "",
    "Objetivo": respostas.Objetivo || "",
    "Observacoes": respostas["Observações"] || respostas.Observacoes || "",
    "Pasta zipada": respostas["Pasta zipada"] || ficheiroZip.nome || "",
    "ZIP URL": zipUrl,
    "ZIP ID": zipId,
    "Pasta da sala URL": pastaSala.getUrl(),
    "Pasta da sala ID": pastaSala.getId(),
    "Ficheiros": JSON.stringify([
      {
        nome: ficheiroZip.nome || respostas["Pasta zipada"] || "programa-final.zip",
        tipo: "zip",
        tamanho: ficheiroZip.tamanho || "",
        url: zipUrl
      }
    ])
  };

  escreverLinhaPorCabecalhos_(sheet, linha);

  return {
    sucesso: true,
    mensagem: "Programa final registado.",
    registo: linha
  };
}

function tratarGaleriaProgramasDrive_(payload) {
  const pastaMae = DriveApp.getFolderById(PROGRAMAS_FINAIS_FOLDER_ID);
  const pastas = pastaMae.getFolders();
  const zipsPorBase = obterZipsProgramas_(pastaMae);
  const programas = [];

  while (pastas.hasNext()) {
    const pasta = pastas.next();
    const base = normalizarSlug_(pasta.getName());
    const sala = PROGRAMAS_FINAIS_SALAS[base];
    if (!sala) continue;

    programas.push(criarRegistoGaleriaPorPasta_(pasta, sala, zipsPorBase[base]));
  }

  return {
    sucesso: true,
    programas: programas
  };
}

function criarRegistoGaleriaPorPasta_(pasta, sala, zipFile) {
  const ficheiros = listarFicheirosPrograma_(pasta);
  const ficheiroCodigo = encontrarFicheiro_(ficheiros, ["programa.cpp", ".cpp", ".c"]);
  const ficheiroPdf = encontrarFicheiro_(ficheiros, ["descricao.pdf", ".pdf"]);
  const ficheiroDescricao = encontrarFicheiro_(ficheiros, ["descricao.md", "README.txt", ".md"]);
  const ficheiroExecucao = encontrarFicheiro_(ficheiros, ["execucao.txt", "execução.txt", "dados-teste.txt"]);
  const descricao = ficheiroDescricao ? lerTextoFicheiro_(ficheiroDescricao.file) : "";
  const codigo = ficheiroCodigo ? lerTextoFicheiro_(ficheiroCodigo.file) : "";
  const execucao = ficheiroExecucao ? lerTextoFicheiro_(ficheiroExecucao.file) : "";
  const nomePrograma = extrairCampoTexto_(descricao, "Programa") || inferirNomePrograma_(pasta.getName());

  return {
    "Questionario": "Programas finais",
    "Sala": sala,
    "Nome do programa": nomePrograma,
    "Objetivo": extrairObjetivoPrograma_(descricao) || "Programa final publicado pela sala.",
    "Observacoes": "",
    "Código comentado": codigo,
    "Execução": execucao,
    "PDF URL": ficheiroPdf ? criarPreviewUrlDrive_(ficheiroPdf.file.getId()) : "",
    "Pasta zipada": zipFile ? zipFile.getName() : pasta.getName(),
    "ZIP URL": zipFile ? zipFile.getUrl() : "",
    "Pasta da sala URL": pasta.getUrl(),
    "Pasta da sala ID": pasta.getId(),
    "Ficheiros": JSON.stringify(ficheiros.map((item) => ({
      nome: item.nome,
      tipo: classificarTipoFicheiro_(item.nome, item.mimeType),
      tamanho: formatarTamanho_(item.tamanho),
      url: item.url
    }))),
    "Data de submissão": pasta.getLastUpdated()
  };
}

function listarFicheirosPrograma_(pasta) {
  const ficheiros = [];
  const iterator = pasta.getFiles();

  while (iterator.hasNext()) {
    const file = iterator.next();
    ficheiros.push({
      file: file,
      nome: file.getName(),
      mimeType: file.getMimeType(),
      tamanho: file.getSize(),
      url: file.getUrl()
    });
  }

  return ficheiros.sort((a, b) => a.nome.localeCompare(b.nome));
}

function obterZipsProgramas_(pastaMae) {
  const zips = {};
  const ficheiros = pastaMae.getFiles();

  while (ficheiros.hasNext()) {
    const file = ficheiros.next();
    const nome = file.getName();
    if (!/\.zip$/i.test(nome)) continue;
    zips[normalizarSlug_(nome.replace(/\.zip$/i, ""))] = file;
  }

  return zips;
}

function encontrarFicheiro_(ficheiros, pistas) {
  const pistasNormalizadas = pistas.map((pista) => pista.toLowerCase());
  return ficheiros.find((item) => {
    const nome = item.nome.toLowerCase();
    return pistasNormalizadas.some((pista) => {
      return pista.startsWith(".") ? nome.endsWith(pista) : nome === pista;
    });
  });
}

function lerTextoFicheiro_(file) {
  try {
    return file.getBlob().getDataAsString("UTF-8");
  } catch (erro) {
    return "";
  }
}

function extrairCampoTexto_(texto, campo) {
  const linhas = String(texto || "").split(/\r?\n/);
  const prefixo = `${campo}:`.toLowerCase();
  const linha = linhas.find((item) => item.trim().toLowerCase().startsWith(prefixo));
  return linha ? linha.split(":").slice(1).join(":").trim() : "";
}

function extrairObjetivoPrograma_(texto) {
  const linhas = String(texto || "").split(/\r?\n/);
  const objetivoIndex = linhas.findIndex((linha) => /^(#+\s*)?objetivo:?$/i.test(linha.trim()));
  if (objetivoIndex < 0) return "";

  const bloco = [];
  for (let index = objetivoIndex + 1; index < linhas.length; index += 1) {
    const linha = linhas[index].trim();
    if (!linha && bloco.length) break;
    if (/^#+\s+/.test(linha) && bloco.length) break;
    if (linha) bloco.push(linha.replace(/^[-*]\s+/, ""));
  }
  return bloco.join(" ");
}

function inferirNomePrograma_(nomePasta) {
  return String(nomePasta || "")
    .replace(/^sala-\d+-/i, "")
    .replace(/^sala-preview-/i, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letra) => letra.toUpperCase());
}

function classificarTipoFicheiro_(nome, mimeType) {
  const lower = String(nome || "").toLowerCase();
  if (lower.endsWith(".cpp") || lower.endsWith(".c")) return "codigo";
  if (lower.endsWith(".pdf")) return "pdf";
  if (lower.endsWith(".zip")) return "zip";
  if (String(mimeType || "").startsWith("text/") || /\.(txt|md)$/i.test(lower)) return "texto";
  return "ficheiro";
}

function criarPreviewUrlDrive_(fileId) {
  return `https://drive.google.com/file/d/${fileId}/preview`;
}

function formatarTamanho_(bytes) {
  const valor = Number(bytes || 0);
  if (!valor) return "";
  if (valor < 1024) return `${valor} B`;
  if (valor < 1024 * 1024) return `${Math.round(valor / 1024)} KB`;
  return `${(valor / 1024 / 1024).toFixed(1)} MB`;
}

function normalizarSlug_(valor) {
  return String(valor || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizarObjeto_(valor) {
  if (!valor) return {};
  if (typeof valor === "object") return valor;
  try {
    return JSON.parse(valor);
  } catch (erro) {
    return {};
  }
}

function obterOuCriarFolha_(spreadsheet, nome) {
  return spreadsheet.getSheetByName(nome) || spreadsheet.insertSheet(nome);
}

function obterOuCriarPasta_(parentFolder, nome) {
  const pastas = parentFolder.getFoldersByName(nome);
  return pastas.hasNext() ? pastas.next() : parentFolder.createFolder(nome);
}

function limparNomeFicheiro_(valor) {
  return String(valor || "")
    .trim()
    .replace(/[\\/:*?"<>|]/g, "-")
    .replace(/\s+/g, " ")
    .slice(0, 80) || "sem-nome";
}

function converterDataUrlParaBlob_(dataUrl, nome, mimeType) {
  const partes = String(dataUrl || "").split(",");
  const base64 = partes.length > 1 ? partes[1] : partes[0];
  const bytes = Utilities.base64Decode(base64);
  return Utilities.newBlob(bytes, mimeType, nome);
}

function escreverLinhaPorCabecalhos_(sheet, dados) {
  const cabecalhosExistentes = sheet.getLastColumn() > 0
    ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].filter(String)
    : [];
  const novosCabecalhos = Object.keys(dados).filter((cabecalho) => !cabecalhosExistentes.includes(cabecalho));
  const cabecalhos = cabecalhosExistentes.concat(novosCabecalhos);

  if (novosCabecalhos.length || sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, cabecalhos.length).setValues([cabecalhos]);
  }

  const linha = cabecalhos.map((cabecalho) => dados[cabecalho] || "");
  sheet.appendRow(linha);
}

function responderJsonProgramas_(dados, callback) {
  const json = JSON.stringify(dados);
  const conteudo = callback ? `${callback}(${json});` : json;
  return ContentService
    .createTextOutput(conteudo)
    .setMimeType(callback ? ContentService.MimeType.JAVASCRIPT : ContentService.MimeType.JSON);
}
