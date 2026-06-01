const topics = [
  {
    id: "introducao-bases-dados",
    title: "Introdução a bases de dados",
    menuTitle: "Introdução",
    cardTitle: "Introdução a bases de dados",
    area: "Bases de dados",
    intro: "Compreender o que é uma base de dados, para que serve e como organiza informação.",
    image: "../assets/img/optimized/tipos-de-dados-bg.webp",
    gammaUrl: "",
    url: "conteudos/introducao-bases-dados.html"
  },
  {
    id: "ambientes-bases-dados",
    title: "Ambientes de bases de dados",
    menuTitle: "Ambientes",
    cardTitle: "Ambientes de bases de dados",
    area: "Bases de dados",
    intro: "Identificar ambientes, ferramentas e sistemas usados para trabalhar com bases de dados.",
    image: "../assets/img/optimized/tipos-de-dados-bg.webp",
    gammaUrl: "",
    url: "conteudos/ambientes-bases-dados.html"
  },
  {
    id: "terminologia-relacional",
    title: "Terminologia de bases de dados relacionais",
    menuTitle: "Terminologia relacional",
    cardTitle: "Terminologia de bases de dados relacionais",
    area: "Bases de dados",
    intro: "Reconhecer tabelas, campos, registos, chaves e relações entre dados.",
    image: "../assets/img/optimized/tipos-de-dados-bg.webp",
    gammaUrl: "",
    url: "conteudos/terminologia-relacional.html"
  },
  {
    id: "planeamento-desenho",
    title: "Planeamento e desenho de bases de dados",
    menuTitle: "Planeamento e desenho",
    cardTitle: "Planeamento e desenho de bases de dados",
    area: "Bases de dados",
    intro: "Planear tabelas, campos e relações antes da criação da base de dados.",
    image: "../assets/img/optimized/tipos-de-dados-bg.webp",
    gammaUrl: "",
    url: "conteudos/planeamento-desenho.html"
  },
  {
    id: "introducao-sql",
    title: "Introdução ao SQL",
    menuTitle: "Introdução ao SQL",
    cardTitle: "Introdução ao SQL",
    area: "SQL",
    intro: "Conhecer a linguagem SQL e o seu papel na consulta e gestão de dados.",
    image: "../assets/img/optimized/tipos-de-dados-bg.webp",
    gammaUrl: "",
    url: "conteudos/introducao-sql.html"
  },
  {
    id: "criacao-bases-dados",
    title: "Criação de bases de dados",
    menuTitle: "Criação de bases de dados",
    cardTitle: "Criação de bases de dados",
    area: "SQL",
    intro: "Criar estruturas iniciais para guardar dados de forma organizada.",
    image: "../assets/img/optimized/tipos-de-dados-bg.webp",
    gammaUrl: "",
    url: "conteudos/criacao-bases-dados.html"
  },
  {
    id: "tabelas-integridade",
    title: "Tabelas e integridade de dados",
    menuTitle: "Tabelas e integridade",
    cardTitle: "Tabelas e integridade de dados",
    area: "SQL",
    intro: "Criar tabelas, definir tipos de dados e respeitar regras de integridade.",
    image: "../assets/img/optimized/tipos-de-dados-bg.webp",
    gammaUrl: "",
    url: "conteudos/tabelas-integridade.html"
  },
  {
    id: "fundamentos-transact-sql",
    title: "Fundamentos de Transact-SQL",
    menuTitle: "Transact-SQL",
    cardTitle: "Fundamentos de Transact-SQL",
    area: "SQL",
    intro: "Aplicar instruções base para criar, inserir, alterar, apagar e consultar dados.",
    image: "../assets/img/optimized/tipos-de-dados-bg.webp",
    gammaUrl: "",
    url: "conteudos/fundamentos-transact-sql.html"
  },
  {
    id: "filtragem-ordenacao",
    title: "Filtragem e ordenação de dados",
    menuTitle: "Filtragem e ordenação",
    cardTitle: "Filtragem e ordenação de dados",
    area: "SQL",
    intro: "Consultar dados com critérios, filtros e ordenação de resultados.",
    image: "../assets/img/optimized/tipos-de-dados-bg.webp",
    gammaUrl: "",
    url: "conteudos/filtragem-ordenacao.html"
  }
];

const topicEmbeds = {};

const DEFAULT_APPS_SCRIPT_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwTZTbLAY7RLR8RSbX3ogc6WT1J8DJZdgDRq_FUD055ByJm2eXvJ8zYzKIGSb1RYxAjaw/exec";
const DEFAULT_APPS_SCRIPT_SPREADSHEET_ID = "1emhv3oRHkAI6T1dtHPCZL8gVAA4P4ExmixlmNDHOSwk";
const APPS_SCRIPT_WEB_APP_URL = window.UFCD10788_APPS_SCRIPT_URL || DEFAULT_APPS_SCRIPT_WEB_APP_URL;
const APPS_SCRIPT_SPREADSHEET_ID = window.UFCD10788_SPREADSHEET_ID || DEFAULT_APPS_SCRIPT_SPREADSHEET_ID;
const TASK_TRACKING_CODES = {
  TI: [
    ...Array.from({ length: 13 }, (_, index) => `TI${String(index).padStart(2, "0")}`),
    "TI_Conclusão"
  ],
  TG: [
    ...Array.from({ length: 13 }, (_, index) => `TG${String(index).padStart(2, "0")}`),
    "TG_Conclusão"
  ]
};
const TASK_TRACKING_FALLBACK_STUDENTS = [
  "PAMELA ALVES",
  "RICARDO ARAÚJO",
  "MANUEL BRENHA",
  "DIOGO CARRILHO",
  "THAISSA CELESTINO",
  "DJALINE CORTEZ",
  "NAUANI DIAS",
  "RUI FERNANDES",
  "ANA GONÇALVES",
  "DIOGO GONÇALVES",
  "BEATRIZ HITOTUZI",
  "RICARDO LAI",
  "BUBACAR LY",
  "CATARINA MANGEL",
  "JORGE MOTA",
  "LEONARDO OLIVEIRA",
  "ALEXANDRA PEREIRA",
  "PEDRO PIMENTA",
  "ARTUR PIMENTEL",
  "VANESSA SÁ",
  "ANA SANTOS",
  "PAULO SANTOS",
  "BEATRIZ SILVA",
  "GABRIEL SOUSA",
  "TATIANA TORRES"
];
let taskTrackingCache = null;
let taskTrackingLoading = null;

const siteVisibility = {
  laboratorioCodigo: {
    // Por agora, o site publico mostra tudo. O painel de controlo fica preparado para voltar a gerir estes estados.
    salas: {
      sala1: true,
      sala2: true,
      sala3: true,
      sala4: true,
      sala5: true,
      sala6: true
    },
    praticasExtra: {
      extra1: true,
      extra2: true,
      extra3: true,
      extra4: true,
      extra5: true,
      extra6: true,
      extra7: true,
      extra8: true,
      extra9: true,
      extra10: true,
      extra11: true,
      extra12: true,
      extra13: true,
      extra14: true,
      extra15: true,
      extra16: true
    }
  },
  linguagensCCpp: {
    praticas: {
      estruturaMinima: true,
      variaveisTipos: true,
      entradaSaida: true,
      primeiraDecisao: true
    }
  }
};

let siteVisibilityItems = [];
let pendingSiteVisibilityItems = null;
let pendingSiteVisibilityMap = null;

const SITE_VISIBILITY_STORAGE_KEY = "ufcd10788-site-visibility-v1";
let siteVisibilityChannel = null;
let siteVisibilityRemoteLoaded = false;
let siteVisibilityRemoteLoading = null;

try {
  siteVisibilityChannel = new BroadcastChannel("ufcd10788-site-visibility");
} catch (error) {
  siteVisibilityChannel = null;
}

function carregarVisibilidadeDoSite() {
  try {
    const saved = JSON.parse(localStorage.getItem(SITE_VISIBILITY_STORAGE_KEY) || "{}");
    aplicarVisibilidadeDoSite(saved);
  } catch (error) {
    try {
      localStorage.removeItem(SITE_VISIBILITY_STORAGE_KEY);
    } catch (storageError) {
      // Em alguns contextos file:// o browser pode bloquear o armazenamento local.
    }
  }
}

function aplicarVisibilidadeDoSite(saved) {
  const legacyVisibility = saved.legacy || saved;

  Object.entries(legacyVisibility.laboratorioCodigo?.salas || {}).forEach(([key, value]) => {
    if (key in siteVisibility.laboratorioCodigo.salas && typeof value === "boolean") {
      siteVisibility.laboratorioCodigo.salas[key] = value;
    }
  });
  Object.entries(legacyVisibility.laboratorioCodigo?.praticasExtra || {}).forEach(([key, value]) => {
    if (key in siteVisibility.laboratorioCodigo.praticasExtra && typeof value === "boolean") {
      siteVisibility.laboratorioCodigo.praticasExtra[key] = value;
    }
  });
  Object.entries(legacyVisibility.linguagensCCpp?.praticas || {}).forEach(([key, value]) => {
    if (key in siteVisibility.linguagensCCpp.praticas && typeof value === "boolean") {
      siteVisibility.linguagensCCpp.praticas[key] = value;
    }
  });

  if (Array.isArray(saved.itens)) {
    pendingSiteVisibilityItems = saved.itens;
  } else if (Array.isArray(saved.items)) {
    pendingSiteVisibilityItems = saved.items;
  } else if (saved.visibilidade && typeof saved.visibilidade === "object") {
    pendingSiteVisibilityMap = saved.visibilidade;
  }
}

function guardarVisibilidadeDoSite() {
  sincronizarVisibilidadeLegacyDoSite();
  try {
    localStorage.setItem(SITE_VISIBILITY_STORAGE_KEY, JSON.stringify({
      legacy: siteVisibility,
      itens: garantirItensVisibilidadeSite()
    }));
  } catch (error) {
    // A página continua funcional mesmo que não seja possível guardar no browser.
  }
  anunciarAlteracaoVisibilidadeDoSite();
}

async function carregarVisibilidadeRemotaDoSite() {
  if (!APPS_SCRIPT_WEB_APP_URL) return false;
  if (siteVisibilityRemoteLoaded) return true;
  if (siteVisibilityRemoteLoading) return siteVisibilityRemoteLoading;

  siteVisibilityRemoteLoading = obterJsonAppsScript({ acao: "visibilidade_site" })
    .then((dados) => {
      if (dados?.sucesso && Array.isArray(dados.itens)) {
        aplicarItensVisibilidadeSite(dados.itens);
        disponibilizarTodosItensDoSite();
        guardarVisibilidadeDoSite();
        siteVisibilityRemoteLoaded = true;
        return true;
      }
      if (dados?.sucesso && dados.visibilidade) {
        if (dados.visibilidade.laboratorioCodigo || dados.visibilidade.linguagensCCpp) {
          aplicarVisibilidadeDoSite(dados.visibilidade);
        } else {
          aplicarMapaVisibilidadeSite(dados.visibilidade);
        }
        disponibilizarTodosItensDoSite();
        guardarVisibilidadeDoSite();
        siteVisibilityRemoteLoaded = true;
        return true;
      }
      siteVisibilityRemoteLoaded = true;
      return false;
    })
    .catch(() => {
      siteVisibilityRemoteLoaded = true;
      return false;
    })
    .finally(() => {
      siteVisibilityRemoteLoading = null;
    });

  return siteVisibilityRemoteLoading;
}

async function guardarVisibilidadeRemotaDoSite() {
  if (!APPS_SCRIPT_WEB_APP_URL) return;

  try {
    sincronizarVisibilidadeLegacyDoSite();
    const constituicao = garantirItensVisibilidadeSite();
    const dados = new URLSearchParams();
    dados.set("acao", "guardar_visibilidade_site");
    dados.set("spreadsheet_id", APPS_SCRIPT_SPREADSHEET_ID);
    dados.set("constituicao", JSON.stringify(constituicao));
    dados.set("visibilidade", JSON.stringify(siteVisibility));

    await fetch(APPS_SCRIPT_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      body: dados
    });
  } catch (error) {
    // Mantém a versão local se a ligação remota falhar.
  }
}

function anunciarAlteracaoVisibilidadeDoSite() {
  siteVisibilityChannel?.postMessage({ type: "site-visibility-updated" });
}

function paginaUsaVisibilidadeDoSite() {
  return document.body.dataset.activity === "laboratorio-codigo" || document.body.dataset.topic === "linguagens-c-cpp";
}

function atualizarPaginaComVisibilidadeDoSite() {
  carregarVisibilidadeDoSite();
  setupEvaluationMenu();
  renderContentMenus();
  renderActivityMenus();
  renderResourceMenus();
  renderHomeCards();
  renderConteudosIndex();
  aplicarVisibilidadeElementosEstaticos();
  if (document.body.dataset.activity === "laboratorio-codigo") {
    renderActivityPage();
  }
  if (document.body.dataset.topic === "linguagens-c-cpp") {
    renderTopicPage();
  }
}

function normalizarBooleanVisibilidade(valor, padrao = true) {
  if (typeof valor === "boolean") return valor;
  if (typeof valor === "number") return valor !== 0;
  const texto = String(valor || "").trim().toLowerCase();
  if (!texto) return Boolean(padrao);
  if (["true", "sim", "s", "1", "yes", "visivel", "visível"].includes(texto)) return true;
  if (["false", "não", "nao", "n", "0", "no", "oculto"].includes(texto)) return false;
  return Boolean(padrao);
}

function criarItemVisibilidade(secao, chave, titulo, url, tipo, nivel, visivel, ordem) {
  return {
    secao,
    chave,
    titulo,
    url: url || "",
    tipo,
    nivel,
    visivel: normalizarBooleanVisibilidade(visivel, true),
    ordem
  };
}

function obterItensConteudoVisibilidade() {
  const items = [];
  const addTopic = (topicId) => {
    const topic = topics.find((item) => item.id === topicId);
    if (!topic) return;
    items.push(criarItemVisibilidade(
      "conteudos",
      `conteudo-${topic.id}`,
      topic.title,
      topic.url,
      "conteudo",
      "item",
      true,
      110 + items.length
    ));
  };

  contentMenuGroups.forEach((item) => {
    if (item.topicId) addTopic(item.topicId);
    if (Array.isArray(item.children)) {
      item.children.forEach((child) => addTopic(child.topicId));
    }
  });

  return items.filter((item) => (
    !["praticas_c", "apresentacao_salas"].includes(item.secao)
    && !(item.secao === "laboratorio_codigo" && item.tipo === "laboratorio")
    && !/C\+\+|Práticas C|Práticas C|Estrutura mínima|Estrutura mínima|Variáveis e tipos|Variáveis e tipos|Entrada e saída|Entrada e saída|Primeira decisão|Primeira decisão/i.test(String(item.titulo || ""))
  ));
}

function obterConstituicaoVisibilidadeSite() {
  const labSessionPracticeItems = labSessionPracticeBlocks.flatMap((block, blockIndex) => (
    block.practices.flatMap((practice, practiceIndex) => [
      criarItemVisibilidade("praticas_c", getLabSessionPracticeControlKey(practice, "conteudo"), `${practice.number}. ${practice.title}`, "atividades/laboratorio-codigo.html", "pratica_c", "item", true, 820 + (blockIndex * 40) + (practiceIndex * 2)),
      criarItemVisibilidade("praticas_c", getLabSessionPracticeControlKey(practice, "tentativa"), `Prática ${practice.number}`, "atividades/laboratorio-codigo.html", "pratica_c", "item", true, 821 + (blockIndex * 40) + (practiceIndex * 2))
    ])
  ));

  const extraPracticeVisibilityItems = extraPracticeBlocks.flatMap((block, blockIndex) => [
    criarItemVisibilidade(block.section, `secao-praticas-extra-${block.number}`, `Extra ${block.number}`, "atividades/laboratorio-codigo.html", "secao", "secao", true, 900 + (blockIndex * 100)),
    ...block.exercises.map((exercise, exerciseIndex) => criarItemVisibilidade(block.section, `pratica-extra-${getExtraPracticeKey(exercise)}`, `P${exercise.number} - ${exercise.title}`, "atividades/laboratorio-codigo.html", "pratica_extra", "item", siteVisibility.laboratorioCodigo.praticasExtra[getExtraPracticeKey(exercise)], 910 + (blockIndex * 100) + exerciseIndex))
  ]);

  const items = [
    criarItemVisibilidade("conteudos", "secao-conteudos", "Conteúdos", "index.html#conteudos", "secao", "secao", true, 100),
    ...obterItensConteudoVisibilidade(),
    criarItemVisibilidade("atividades", "secao-atividades", "Atividades", "index.html#atividades", "secao", "secao", true, 200),
    ...activities.flatMap((activity, index) => [
      criarItemVisibilidade("atividades", `atividade-${activity.id}`, activity.title, activity.url, "atividade", "item", true, 210 + (index * 10)),
      ...(activity.children || [])
        .filter((child) => !["programa-final", "galeria-projetos"].includes(child.id))
        .map((child, childIndex) => criarItemVisibilidade("atividades", `atividade-${child.id}`, child.title, child.url, "atividade", "item", true, 211 + (index * 10) + childIndex))
    ]),
    criarItemVisibilidade("programa_galeria", "secao-programa-galeria", "Programa e Galeria", "atividades/programa-final.html", "secao", "secao", true, 250),
    criarItemVisibilidade("programa_galeria", "atividade-programa-final", "Programa final", "atividades/programa-final.html", "atividade", "item", true, 251),
    criarItemVisibilidade("programa_galeria", "atividade-galeria-projetos", "Galeria de programas", "atividades/galeria-projetos.html", "atividade", "item", true, 252),
    criarItemVisibilidade("programa_galeria", "galeria-formulario-submissao", "Formulário de submissão", "atividades/galeria-projetos.html", "galeria", "item", true, 253),
    criarItemVisibilidade("programa_galeria", "galeria-lista-salas", "Apresentação das salas", "atividades/galeria-projetos.html", "galeria", "item", true, 254),
    criarItemVisibilidade("apresentacao_salas", "secao-apresentacao-salas", "Apresentação das salas", "atividades/galeria-projetos.html", "secao", "secao", true, 260),
    ...[...Array.from({ length: 6 }, (_, index) => `Sala ${index + 1}`), "Sala Preview"].map((sala, index) => criarItemVisibilidade("apresentacao_salas", `galeria-${slugify(sala)}`, sala, "atividades/galeria-projetos.html", "sala_galeria", "item", true, 261 + index)),
    criarItemVisibilidade("avaliacao", "secao-avaliacao", "Avaliação", "index.html#avaliacao", "secao", "secao", true, 300),
    ...evaluationItems.flatMap((item, index) => [
      criarItemVisibilidade("avaliacao", `avaliacao-${item.id}`, item.title, item.url, "avaliacao", "item", true, 310 + (index * 10)),
      ...(item.children || []).map((child, childIndex) => criarItemVisibilidade("avaliacao", `avaliacao-${child.id}`, child.title, child.url, "avaliacao", "item", true, 311 + (index * 10) + childIndex))
    ]),
    criarItemVisibilidade("recursos", "secao-recursos", "Recursos", "index.html#recursos", "secao", "secao", true, 400),
    ...resources.map((resource, index) => criarItemVisibilidade("recursos", `recurso-${resource.id}`, resource.title, resource.url, "recurso", "item", true, 410 + index)),
    criarItemVisibilidade("tarefas_grupo", "secao-tarefas-grupo", "Tarefas de Grupo", "atividades/tarefas-grupo.html", "secao", "secao", true, 500),
    ...groupTasks.map((task, index) => criarItemVisibilidade("tarefas_grupo", `tarefa-grupo-${slugify(task.topic || `grupo-${index + 1}`)}`, task.topic || `Tarefa de Grupo ${index + 1}`, task.forumUrl || task.url || "", "tarefa_grupo", "item", true, 510 + index)),
    criarItemVisibilidade("tarefas_individuais", "secao-tarefas-individuais", "Tarefas Individuais", "atividades/tarefas-individuais.html", "secao", "secao", true, 600),
    ...individualTasks.map((task, index) => criarItemVisibilidade("tarefas_individuais", `tarefa-individual-${slugify(task.title || `individual-${index + 1}`)}`, task.title || `Tarefa Individual ${index + 1}`, task.forumUrl || task.url || "", "tarefa_individual", "item", true, 610 + index)),
    criarItemVisibilidade("laboratorio_codigo", "secao-laboratorio-codigo", "Laboratório SQL", "atividades/laboratorio-sql.html", "secao", "secao", true, 700),
    ...labRooms.map((room, index) => criarItemVisibilidade("laboratorio_codigo", `laboratorio-sala-${getLabRoomKey(room)}`, `${room.room} - ${room.title}`, "atividades/laboratorio-codigo.html", "laboratorio", "item", siteVisibility.laboratorioCodigo.salas[getLabRoomKey(room)], 710 + index)),
    criarItemVisibilidade("praticas_c", "secao-praticas-c", "Práticas C", "atividades/laboratorio-codigo.html", "secao", "secao", true, 800),
    criarItemVisibilidade("praticas_c", "pratica-c-conteudo-estruturaMinima", "1. Estrutura mínima", "atividades/laboratorio-codigo.html", "pratica_c", "item", siteVisibility.linguagensCCpp.praticas.estruturaMinima, 810),
    criarItemVisibilidade("praticas_c", "pratica-c-tentativa-estruturaMinima", "Prática 1", "atividades/laboratorio-codigo.html", "pratica_c", "item", siteVisibility.linguagensCCpp.praticas.estruturaMinima, 811),
    criarItemVisibilidade("praticas_c", "pratica-c-conteudo-variaveisTipos", "2. Variáveis e tipos", "atividades/laboratorio-codigo.html", "pratica_c", "item", siteVisibility.linguagensCCpp.praticas.variaveisTipos, 812),
    criarItemVisibilidade("praticas_c", "pratica-c-tentativa-variaveisTipos", "Prática 2", "atividades/laboratorio-codigo.html", "pratica_c", "item", siteVisibility.linguagensCCpp.praticas.variaveisTipos, 813),
    criarItemVisibilidade("praticas_c", "pratica-c-conteudo-entradaSaida", "3. Entrada e saída", "atividades/laboratorio-codigo.html", "pratica_c", "item", siteVisibility.linguagensCCpp.praticas.entradaSaida, 814),
    criarItemVisibilidade("praticas_c", "pratica-c-tentativa-entradaSaida", "Prática 3", "atividades/laboratorio-codigo.html", "pratica_c", "item", siteVisibility.linguagensCCpp.praticas.entradaSaida, 815),
    criarItemVisibilidade("praticas_c", "pratica-c-conteudo-primeiraDecisao", "4. Primeira decisão", "atividades/laboratorio-codigo.html", "pratica_c", "item", siteVisibility.linguagensCCpp.praticas.primeiraDecisao, 816),
    criarItemVisibilidade("praticas_c", "pratica-c-tentativa-primeiraDecisao", "Prática 4", "atividades/laboratorio-codigo.html", "pratica_c", "item", siteVisibility.linguagensCCpp.praticas.primeiraDecisao, 817),
    ...labSessionPracticeItems,
    ...extraPracticeVisibilityItems
  ];

  return items;
}

function juntarItensVisibilidadeComConstituicao(items) {
  const existentes = {};
  const usados = new Set();
  const constituicao = obterConstituicaoVisibilidadeSite();
  const aliases = {
    "pratica-c-conteudo-estruturaMinima": "pratica-c-estruturaMinima",
    "pratica-c-tentativa-estruturaMinima": "pratica-c-estruturaMinima",
    "pratica-c-conteudo-variaveisTipos": "pratica-c-variaveisTipos",
    "pratica-c-tentativa-variaveisTipos": "pratica-c-variaveisTipos",
    "pratica-c-conteudo-entradaSaida": "pratica-c-entradaSaida",
    "pratica-c-tentativa-entradaSaida": "pratica-c-entradaSaida",
    "pratica-c-conteudo-primeiraDecisao": "pratica-c-primeiraDecisao",
    "pratica-c-tentativa-primeiraDecisao": "pratica-c-primeiraDecisao"
  };
  const output = [];

  (items || []).forEach((item) => {
    if (item && item.chave) {
      existentes[item.chave] = item;
    }
  });

  constituicao.forEach((item) => {
    const existente = existentes[item.chave] || existentes[aliases[item.chave]];
    usados.add(item.chave);
    output.push({
      ...item,
      visivel: existente ? normalizarBooleanVisibilidade(existente.visivel, item.visivel) : normalizarBooleanVisibilidade(item.visivel, true),
      data_atualizacao: existente?.data_atualizacao || item.data_atualizacao || ""
    });
  });

  (items || []).forEach((item) => {
    if (item && item.chave && !usados.has(item.chave)) {
      output.push({
        ...item,
        visivel: normalizarBooleanVisibilidade(item.visivel, true)
      });
    }
  });

  return output.sort((a, b) => (Number(a.ordem) || 0) - (Number(b.ordem) || 0) || String(a.chave).localeCompare(String(b.chave)));
}

function garantirItensVisibilidadeSite() {
  const sourceItems = pendingSiteVisibilityItems || siteVisibilityItems;
  siteVisibilityItems = juntarItensVisibilidadeComConstituicao(sourceItems);
  pendingSiteVisibilityItems = null;

  if (pendingSiteVisibilityMap) {
    const map = pendingSiteVisibilityMap;
    pendingSiteVisibilityMap = null;
    siteVisibilityItems = siteVisibilityItems.map((item) => ({
      ...item,
      visivel: Object.prototype.hasOwnProperty.call(map, item.chave)
        ? normalizarBooleanVisibilidade(map[item.chave], item.visivel)
        : item.visivel
    }));
  }

  return siteVisibilityItems;
}

function disponibilizarTodosItensDoSite() {
  const items = garantirItensVisibilidadeSite();
  siteVisibilityItems = items.map((item) => ({
    ...item,
    visivel: true
  }));
  sincronizarVisibilidadeLegacyDoSite();
  return siteVisibilityItems;
}

function aplicarItensVisibilidadeSite(items) {
  siteVisibilityItems = juntarItensVisibilidadeComConstituicao(Array.isArray(items) ? items : []);
  sincronizarVisibilidadeLegacyDoSite();
}

function aplicarMapaVisibilidadeSite(map) {
  const base = garantirItensVisibilidadeSite();
  siteVisibilityItems = base.map((item) => ({
    ...item,
    visivel: Object.prototype.hasOwnProperty.call(map, item.chave)
      ? normalizarBooleanVisibilidade(map[item.chave], item.visivel)
      : item.visivel
  }));
  sincronizarVisibilidadeLegacyDoSite();
}

function itemSiteVisivel(chave) {
  const items = garantirItensVisibilidadeSite();
  const item = items.find((visibilityItem) => visibilityItem.chave === chave);

  if (!item) return true;

  const sectionItem = items.find((visibilityItem) => visibilityItem.secao === item.secao && visibilityItem.nivel === "secao");

  return normalizarBooleanVisibilidade(item.visivel, true) && normalizarBooleanVisibilidade(sectionItem?.visivel, true);
}

function sincronizarVisibilidadeLegacyDoSite() {
  const items = garantirItensVisibilidadeSite();
  const findVisible = (chave, padrao = true) => {
    const item = items.find((visibilityItem) => visibilityItem.chave === chave);
    return item ? normalizarBooleanVisibilidade(item.visivel, padrao) : padrao;
  };

  Object.keys(siteVisibility.laboratorioCodigo.salas).forEach((key) => {
    siteVisibility.laboratorioCodigo.salas[key] = findVisible(`laboratorio-sala-${key}`, siteVisibility.laboratorioCodigo.salas[key]);
  });
  Object.keys(siteVisibility.laboratorioCodigo.praticasExtra).forEach((key) => {
    siteVisibility.laboratorioCodigo.praticasExtra[key] = findVisible(`pratica-extra-${key}`, siteVisibility.laboratorioCodigo.praticasExtra[key]);
  });
  Object.keys(siteVisibility.linguagensCCpp.praticas).forEach((key) => {
    siteVisibility.linguagensCCpp.praticas[key] = findVisible(`pratica-c-conteudo-${key}`, siteVisibility.linguagensCCpp.praticas[key])
      || findVisible(`pratica-c-tentativa-${key}`, siteVisibility.linguagensCCpp.praticas[key]);
  });
}

function topicSiteVisivel(topicId) {
  return itemSiteVisivel(`conteudo-${topicId}`);
}

function activitySiteVisivel(activityId) {
  return itemSiteVisivel(`atividade-${activityId}`);
}

function evaluationSiteVisivel(evaluationId) {
  return itemSiteVisivel(`avaliacao-${evaluationId}`);
}

function resourceSiteVisivel(resourceId) {
  return itemSiteVisivel(`recurso-${resourceId}`);
}

carregarVisibilidadeDoSite();

const contentMenuGroups = [
  { topicId: "introducao-bases-dados" },
  { topicId: "ambientes-bases-dados" },
  { topicId: "terminologia-relacional" },
  { topicId: "planeamento-desenho" },
  { topicId: "introducao-sql" },
  { topicId: "criacao-bases-dados" },
  { topicId: "tabelas-integridade" },
  { topicId: "fundamentos-transact-sql" },
  { topicId: "filtragem-ordenacao" }
];

const officialProgramTopicIds = [
  "introducao-bases-dados",
  "ambientes-bases-dados",
  "terminologia-relacional",
  "planeamento-desenho",
  "introducao-sql",
  "criacao-bases-dados",
  "tabelas-integridade",
  "fundamentos-transact-sql",
  "filtragem-ordenacao"
];

function getOfficialProgramTopics() {
  return officialProgramTopicIds.map((id) => topics.find((topic) => topic.id === id)).filter(Boolean);
}

const activities = [
  {
    id: "controlo-teams",
    title: "Partilha de ecrã",
    intro: "Tabela para acompanhar quantas vezes cada formando já partilhou o ecrã nas reuniões Teams.",
    url: "atividades/controlo-teams.html"
  },
  {
    id: "brainstorming",
    title: "Brainstorming",
    intro: "Atividade inicial para recolher ideias, expectativas e conhecimentos prévios sobre bases de dados e SQL.",
    url: "atividades/brainstorming.html",
    externalUrl: window.UFCD10788_MENTIMETER_URL || "",
    participationUrl: window.UFCD10788_MENTIMETER_URL || ""
  },
  {
    id: "tarefas-individuais",
    title: "Tarefas individuais",
    intro: "Síntese das tarefas individuais associadas aos conteúdos trabalhados na UFCD.",
    url: "atividades/tarefas-individuais.html",
    children: [
      { id: "acompanhamento-ti", title: "Acompanhamento TI", intro: "Área de acompanhamento das tarefas individuais.", url: "atividades/acompanhamento-ti.html" }
    ]
  },
  {
    id: "tarefas-grupo",
    title: "Tarefas de grupo",
    intro: "Síntese das tarefas de grupo associadas aos conteúdos trabalhados na UFCD.",
    url: "atividades/tarefas-grupo.html",
    children: [
      { id: "acompanhamento-tg", title: "Acompanhamento TG", intro: "Área de acompanhamento das tarefas de grupo.", url: "atividades/acompanhamento-tg.html" }
    ]
  },
  {
    id: "laboratorio-sql",
    title: "Laboratório SQL",
    intro: "Espaço de prática para criar, consultar, inserir, alterar e apagar dados com SQL.",
    url: "atividades/laboratorio-sql.html",
    children: [
      { id: "programa-final", title: "Projeto final", intro: "Área preparada para orientar o projeto final da UFCD.", url: "atividades/programa-final.html" },
      { id: "galeria-projetos", title: "Galeria", intro: "Espaço preparado para publicar e consultar os projetos finais.", url: "atividades/galeria-projetos.html" }
    ]
  }
];
const labRooms = [
  {
    room: "Sala 1",
    day: "Dia 1",
    title: "Entrada no laboratório",
    level: "Aquecimento",
    publisher: "Sala 1 publica",
    mission: "Criar uma sequência em pseudocódigo que peça o nome e o ano de nascimento, calcule a idade aproximada e apresente uma mensagem personalizada.",
    rules: [
      "Identificar claramente os dados de entrada.",
      "Calcular a idade a partir do ano atual.",
      "Apresentar uma mensagem final com nome e idade.",
      "Testar com pelo menos dois exemplos."
    ],
    focus: "Entrada, processamento e saída de dados.",
    cNotes: [
      "Usar uma variável de texto para o nome e variáveis inteiras para o ano de nascimento, ano atual e idade.",
      "Ler o nome com scanf e o ano de nascimento com scanf.",
      "Calcular a idade com a expressão idade = anoAtual - anoNascimento.",
      "Apresentar a mensagem final com printf, mostrando nome e idade."
    ]
  },
  {
    room: "Sala 2",
    day: "Dia 1",
    title: "Primeira decisão",
    level: "Decisão simples",
    publisher: "Sala 2 publica",
    mission: "Construir uma solução que leia a idade de uma pessoa e indique se pode votar.",
    rules: [
      "Usar uma condição clara.",
      "Definir a idade mínima para votar.",
      "Mostrar uma mensagem para cada resultado possível.",
      "Testar com uma idade abaixo e uma idade acima do limite."
    ],
    focus: "Condição, decisão e mensagens alternativas.",
    cNotes: [
      "Declarar uma variável inteira para guardar a idade.",
      "Ler a idade com scanf.",
      "Usar if para testar se idade >= 18.",
      "Usar else para apresentar a mensagem alternativa quando a idade for menor que 18."
    ]
  },
  {
    room: "Sala 3",
    day: "Dia 2",
    title: "Média em análise",
    level: "Cálculo com decisão",
    publisher: "Sala 3 publica",
    mission: "Ler três notas, calcular a média e indicar se o resultado é suficiente ou precisa de melhorar.",
    rules: [
      "Ler três valores numéricos.",
      "Calcular corretamente a média.",
      "Usar uma decisão para classificar o resultado.",
      "Apresentar a média final e a mensagem correspondente."
    ],
    focus: "Variáveis numéricas, cálculo e decisão.",
    cNotes: [
      "Usar variáveis float para as três notas e para a média.",
      "Ler as três notas com scanf.",
      "Calcular a média com (nota1 + nota2 + nota3) / 3.",
      "Usar if/else para indicar se a média é suficiente ou precisa de melhorar."
    ]
  },
  {
    room: "Sala 4",
    day: "Dia 3",
    title: "Repetir com controlo",
    level: "Repetição",
    publisher: "Sala 4 publica",
    mission: "Criar uma solução que leia cinco números e conte quantos são positivos, negativos ou iguais a zero.",
    rules: [
      "Usar uma repetição para ler os cinco números.",
      "Usar contadores para cada categoria.",
      "Classificar cada número lido.",
      "Apresentar o total de positivos, negativos e zeros."
    ],
    focus: "Ciclos, contadores e classificação de valores.",
    cNotes: [
      "Usar um ciclo for para repetir a leitura cinco vezes.",
      "Declarar três contadores: positivos, negativos e zeros.",
      "A cada número lido, usar if/else if/else para classificar o valor.",
      "Incrementar o contador correto com contador++."
    ]
  },
  {
    room: "Sala 5",
    day: "Dia 4",
    title: "Organizar a solução",
    level: "Estruturação",
    publisher: "Sala 5 publica",
    mission: "Planear uma solução para registar várias notas, calcular a média geral e identificar a nota mais alta.",
    rules: [
      "Definir que dados precisam de ser guardados.",
      "Usar repetição para tratar várias notas.",
      "Calcular a média geral.",
      "Indicar a maior nota encontrada."
    ],
    focus: "Organização, repetição, acumulador e comparação.",
    cNotes: [
      "Usar uma variável float para cada nota lida e outra para a soma.",
      "Usar um acumulador para somar as notas.",
      "Guardar a maior nota numa variável e atualizar quando surgir uma nota superior.",
      "Calcular a média no final, depois do ciclo terminar."
    ]
  },
  {
    room: "Sala 6",
    day: "Dia 5",
    title: "Projeto final",
    level: "Síntese",
    publisher: "Todas as salas apresentam",
    mission: "Criar um programa em C que leia as notas de 5 tarefas de um formando, calcule a média final, conte quantas notas são positivas, identifique a nota mais alta e indique se o formando tem média suficiente.",
    rules: [
      "Ler exatamente 5 notas.",
      "Usar uma repetição para recolher e tratar as notas.",
      "Calcular a soma e a média final.",
      "Contar quantas notas são maiores ou iguais a 10.",
      "Identificar a maior nota introduzida.",
      "Apresentar a média, a maior nota, o total de positivas e a indicação final: suficiente ou insuficiente."
    ],
    focus: "Integração de entrada, variáveis, repetição, acumulador, contador, comparação e decisão.",
    cNotes: [
      "Declarar nota, soma, media e maiorNota como float.",
      "Declarar positivas e i como int.",
      "Usar for para ler exatamente 5 notas.",
      "Somar cada nota no acumulador soma.",
      "Contar notas positivas com if (nota >= 10).",
      "Comparar cada nota com maiorNota para guardar a mais alta.",
      "No final, calcular media = soma / 5 e usar if/else para indicar suficiente ou insuficiente."
    ]
  }
];

const extraPracticeExercises = [
  {
    number: 1,
    title: "Celsius para Fahrenheit",
    focus: "Entrada, fórmula e saída formatada",
    statement: "Converter uma temperatura indicada em graus Celsius para graus Fahrenheit, usando a fórmula F = (9 * C + 160) / 5.",
    tags: ["float", "scanf", "printf", "fórmula"],
    solution: `#include <stdio.h>

int main() {
    float grausF, grausC;

    printf("Indique a temperatura em graus Celsius\\n");
    scanf("%f", &grausC);

    grausF = (9 * grausC + 160) / 5;

    printf("A temperatura em graus Fahrenheit e: %.2f", grausF);
    return 0;
}`
  },
  {
    number: 2,
    title: "Quadrado e cubo",
    focus: "Operadores aritméticos",
    statement: "Pedir um número inteiro ao utilizador e apresentar o seu quadrado e o seu cubo.",
    tags: ["int", "multiplicação", "printf"],
    solution: `#include <stdio.h>

int main() {
    int num;

    printf("Indique um numero inteiro\\n");
    scanf("%d", &num);

    printf("O quadrado de %d e: %d\\n", num, num * num);
    printf("O cubo de %d e: %d\\n", num, num * num * num);

    return 0;
}`
  },
  {
    number: 3,
    title: "Comprimento da hipotenusa",
    focus: "Biblioteca matemática",
    statement: "Ler o comprimento dos dois catetos e calcular o comprimento da hipotenusa.",
    tags: ["math.h", "sqrt", "float"],
    solution: `#include <stdio.h>
#include <math.h>

int main() {
    float c1, c2, hipotenusa;

    printf("Indique o comprimento de um cateto\\n");
    scanf("%f", &c1);

    printf("Indique o comprimento do outro cateto\\n");
    scanf("%f", &c2);

    hipotenusa = sqrt(c1 * c1 + c2 * c2);

    printf("O comprimento da hipotenusa e: %.2f\\n", hipotenusa);
    return 0;
}`
  },
  {
    number: 4,
    title: "Minutos em dias e horas",
    focus: "Divisão inteira e resto",
    statement: "Converter um total de minutos em dias, horas e minutos. Por exemplo, 3040 minutos correspondem a 2 dias, 2 horas e 40 minutos.",
    tags: ["divisão", "módulo", "int"],
    solution: `#include <stdio.h>

int main() {
    int totalMinutos, dias, horas, minutos, resto;

    printf("Indique o numero de minutos a converter\\n");
    scanf("%d", &totalMinutos);

    dias = totalMinutos / 1440;
    resto = totalMinutos % 1440;
    horas = resto / 60;
    minutos = resto % 60;

    printf("%d minutos corresponde a %d dias, %d horas e %d minutos",
           totalMinutos, dias, horas, minutos);

    return 0;
}`
  },
  {
    number: 5,
    title: "Quatro operações",
    focus: "Cálculo e decisão",
    statement: "Pedir dois números e apresentar a soma, subtração, multiplicação e divisão, tratando o caso em que a divisão por zero não é possível.",
    tags: ["if", "float", "operações"],
    solution: `#include <stdio.h>

int main() {
    float n1, n2, soma, subtracao, multiplicacao, divisao;

    printf("Indique o primeiro numero\\n");
    scanf("%f", &n1);

    printf("Indique o segundo numero\\n");
    scanf("%f", &n2);

    soma = n1 + n2;
    subtracao = n1 - n2;
    multiplicacao = n1 * n2;

    printf("A soma e: %.2f\\n", soma);
    printf("A subtracao e: %.2f\\n", subtracao);
    printf("A multiplicacao e: %.2f\\n", multiplicacao);

    if (n2 == 0) {
        printf("Nao e possivel efetuar a divisao\\n");
    } else {
        divisao = n1 / n2;
        printf("A divisao e: %.2f\\n", divisao);
    }

    return 0;
}`
  },
  {
    number: 6,
    title: "Par ou ímpar",
    focus: "Condição com resto da divisão",
    statement: "Ler um número inteiro e indicar se esse número é par ou ímpar.",
    tags: ["if", "else", "%"],
    solution: `#include <stdio.h>

int main() {
    int n;

    printf("Indique o numero\\n");
    scanf("%d", &n);

    if (n % 2 == 0) {
        printf("%d e par\\n", n);
    } else {
        printf("%d e impar\\n", n);
    }

    return 0;
}`
  },
  {
    number: 7,
    title: "Quadrados dos dois maiores",
    focus: "Comparação entre valores",
    statement: "Pedir três números e devolver a soma dos quadrados dos dois maiores.",
    tags: ["if", "comparação", "quadrado"],
    solution: `#include <stdio.h>

int main() {
    int n1, n2, n3, soma;

    printf("Indique o primeiro numero\\n");
    scanf("%d", &n1);

    printf("Indique o segundo numero\\n");
    scanf("%d", &n2);

    printf("Indique o terceiro numero\\n");
    scanf("%d", &n3);

    if (n1 <= n2 && n1 <= n3) {
        soma = n2 * n2 + n3 * n3;
    } else if (n2 <= n1 && n2 <= n3) {
        soma = n1 * n1 + n3 * n3;
    } else {
        soma = n1 * n1 + n2 * n2;
    }

    printf("A soma dos quadrados dos dois maiores e: %d\\n", soma);

    return 0;
}`
  },
  {
    number: 8,
    title: "Custo de envio",
    focus: "Decisões encadeadas",
    statement: "Calcular o custo de envio de uma encomenda a partir do peso e, quando necessário, da distância em quilómetros.",
    tags: ["else if", "tarifa", "float"],
    solution: `#include <stdio.h>

int main() {
    int peso, km = 0;
    float tarifa;

    printf("Indique o peso da encomenda em gramas\\n");
    scanf("%d", &peso);

    if (peso <= 15) {
        tarifa = peso * 0.20;
    } else if (peso <= 30) {
        tarifa = peso * 0.25;
    } else {
        printf("Indique os km a percorrer\\n");
        scanf("%d", &km);

        if (peso <= 60) {
            tarifa = peso * 0.35 + 0.05 * km;
        } else {
            tarifa = peso * 0.40 + 0.07 * km;
        }
    }

    printf("O valor a pagar e de: %.2f euros\\n", tarifa);
    return 0;
}`
  },
  {
    number: 9,
    title: "Contar positivos, negativos e zeros",
    focus: "Repetição e contadores",
    statement: "Ler cinco números inteiros e contar quantos são positivos, quantos são negativos e quantos são iguais a zero.",
    tags: ["for", "if", "contador"],
    solution: `#include <stdio.h>

int main() {
    int i, numero;
    int positivos = 0, negativos = 0, zeros = 0;

    for (i = 1; i <= 5; i++) {
        printf("Indique o %d.o numero\\n", i);
        scanf("%d", &numero);

        if (numero > 0) {
            positivos++;
        } else if (numero < 0) {
            negativos++;
        } else {
            zeros++;
        }
    }

    printf("Positivos: %d\\n", positivos);
    printf("Negativos: %d\\n", negativos);
    printf("Zeros: %d\\n", zeros);

    return 0;
}`
  },
  {
    number: 10,
    title: "Média de cinco notas",
    focus: "Acumulador e média",
    statement: "Ler cinco notas, calcular a soma e apresentar a média final.",
    tags: ["for", "float", "acumulador"],
    solution: `#include <stdio.h>

int main() {
    int i;
    float nota, soma = 0, media;

    for (i = 1; i <= 5; i++) {
        printf("Indique a nota %d\\n", i);
        scanf("%f", &nota);

        soma = soma + nota;
    }

    media = soma / 5;

    printf("A soma das notas e: %.2f\\n", soma);
    printf("A media final e: %.2f\\n", media);

    return 0;
}`
  },
  {
    number: 11,
    title: "Maior valor introduzido",
    focus: "Comparação dentro de um ciclo",
    statement: "Ler seis números inteiros e indicar qual foi o maior valor introduzido.",
    tags: ["for", "maior", "comparação"],
    solution: `#include <stdio.h>

int main() {
    int i, numero, maior;

    printf("Indique o 1.o numero\\n");
    scanf("%d", &maior);

    for (i = 2; i <= 6; i++) {
        printf("Indique o %d.o numero\\n", i);
        scanf("%d", &numero);

        if (numero > maior) {
            maior = numero;
        }
    }

    printf("O maior valor introduzido foi: %d\\n", maior);

    return 0;
}`
  },
  {
    number: 12,
    title: "Notas positivas e negativas",
    focus: "Acumulador, contador e decisão",
    statement: "Ler cinco notas, calcular a média e contar quantas notas são positivas e quantas são negativas.",
    tags: ["for", "contador", "media"],
    solution: `#include <stdio.h>

int main() {
    int i, positivas = 0, negativas = 0;
    float nota, soma = 0, media;

    for (i = 1; i <= 5; i++) {
        printf("Indique a nota %d\\n", i);
        scanf("%f", &nota);

        soma = soma + nota;

        if (nota >= 10) {
            positivas++;
        } else {
            negativas++;
        }
    }

    media = soma / 5;

    printf("Media final: %.2f\\n", media);
    printf("Notas positivas: %d\\n", positivas);
    printf("Notas negativas: %d\\n", negativas);

    return 0;
}`
  },
  {
    number: 13,
    title: "Tabuada de um número",
    focus: "Ciclo for e repetição controlada",
    statement: "Pedir um número inteiro ao utilizador e apresentar a respetiva tabuada, do 1 ao 10.",
    tags: ["for", "int", "multiplicação"],
    solution: `#include <stdio.h>

int main() {
    int numero, i;

    printf("Indique um numero inteiro\\n");
    scanf("%d", &numero);

    for (i = 1; i <= 10; i++) {
        printf("%d x %d = %d\\n", numero, i, numero * i);
    }

    return 0;
}`
  },
  {
    number: 14,
    title: "Somar até introduzir zero",
    focus: "Ciclo while e valor de paragem",
    statement: "Ler números inteiros sucessivamente e calcular a soma. A leitura termina quando o utilizador introduzir o valor 0.",
    tags: ["while", "soma", "sentinela"],
    solution: `#include <stdio.h>

int main() {
    int numero, soma = 0;

    printf("Indique um numero inteiro (0 para terminar)\\n");
    scanf("%d", &numero);

    while (numero != 0) {
        soma = soma + numero;

        printf("Indique outro numero inteiro (0 para terminar)\\n");
        scanf("%d", &numero);
    }

    printf("A soma dos valores introduzidos e: %d\\n", soma);

    return 0;
}`
  },
  {
    number: 15,
    title: "Validar uma nota",
    focus: "Validação de dados com do while",
    statement: "Pedir uma nota ao utilizador e repetir o pedido enquanto a nota não estiver entre 0 e 20. No final, apresentar a nota válida.",
    tags: ["do while", "validação", "float"],
    solution: `#include <stdio.h>

int main() {
    float nota;

    do {
        printf("Indique uma nota entre 0 e 20\\n");
        scanf("%f", &nota);

        if (nota < 0 || nota > 20) {
            printf("Nota invalida. Tente novamente.\\n");
        }
    } while (nota < 0 || nota > 20);

    printf("Nota registada: %.2f\\n", nota);

    return 0;
}`
  },
  {
    number: 16,
    title: "Menu de operações",
    focus: "Menu simples com switch",
    statement: "Pedir dois números e uma opção de menu. A opção deve permitir escolher soma, subtração, multiplicação ou divisão.",
    tags: ["switch", "menu", "operações"],
    solution: `#include <stdio.h>

int main() {
    float n1, n2, resultado;
    int opcao;

    printf("Indique o primeiro numero\\n");
    scanf("%f", &n1);

    printf("Indique o segundo numero\\n");
    scanf("%f", &n2);

    printf("Escolha uma opcao:\\n");
    printf("1 - Soma\\n");
    printf("2 - Subtracao\\n");
    printf("3 - Multiplicacao\\n");
    printf("4 - Divisao\\n");
    scanf("%d", &opcao);

    switch (opcao) {
        case 1:
            resultado = n1 + n2;
            printf("Resultado: %.2f\\n", resultado);
            break;
        case 2:
            resultado = n1 - n2;
            printf("Resultado: %.2f\\n", resultado);
            break;
        case 3:
            resultado = n1 * n2;
            printf("Resultado: %.2f\\n", resultado);
            break;
        case 4:
            if (n2 == 0) {
                printf("Nao e possivel dividir por zero.\\n");
            } else {
                resultado = n1 / n2;
                printf("Resultado: %.2f\\n", resultado);
            }
            break;
        default:
            printf("Opcao invalida.\\n");
    }

    return 0;
}`
  }
];

const extraPracticeBlocks = [
  {
    number: 1,
    section: "praticas_extra_1",
    exercises: extraPracticeExercises.filter((exercise) => exercise.number >= 1 && exercise.number <= 4)
  },
  {
    number: 2,
    section: "praticas_extra_2",
    exercises: extraPracticeExercises.filter((exercise) => exercise.number >= 5 && exercise.number <= 8)
  },
  {
    number: 3,
    section: "praticas_extra_3",
    exercises: extraPracticeExercises.filter((exercise) => exercise.number >= 9 && exercise.number <= 12)
  },
  {
    number: 4,
    section: "praticas_extra_4",
    exercises: extraPracticeExercises.filter((exercise) => exercise.number >= 13 && exercise.number <= 16)
  }
];

function getExtraPracticeExercise(number) {
  return extraPracticeExercises.find((exercise) => exercise.number === number);
}

const labSessionPracticeBlocks = [
  {
    number: 2,
    title: "Cálculos e decisões",
    intro: "Segunda fase do laboratório: consolidar cálculos, operadores e decisões simples em C.",
    practices: [
      {
        number: 5,
        id: "precoFinalIva",
        title: "Preço final com IVA",
        sections: [
          {
            title: "Cálculo percentual",
            text: "Alguns problemas pedem para aplicar uma percentagem a um valor. Em C, podemos guardar o preço e a taxa em variáveis do tipo float."
          },
          {
            title: "Preço final",
            text: "O valor do IVA é calculado a partir do preço sem IVA e depois somado ao preço inicial."
          },
          {
            title: "Objetivo da prática",
            text: "Ler um preço sem IVA e uma taxa de IVA, calcular o valor do IVA e apresentar o preço final."
          }
        ],
        prompt: "Escreve um programa em C que leia o preço sem IVA e a taxa de IVA. Calcula o valor do IVA e apresenta o preço final.",
        expected: "scanf|printf|float|iva|preco|preço",
        model: "A solução deve ler dois valores reais, calcular iva = preco * taxa / 100 e depois somar esse valor ao preço inicial.",
        solution: `#include <stdio.h>

int main() {
    float precoSemIva, taxaIva, valorIva, precoFinal;

    printf("Indique o preco sem IVA: ");
    scanf("%f", &precoSemIva);

    printf("Indique a taxa de IVA: ");
    scanf("%f", &taxaIva);

    valorIva = precoSemIva * taxaIva / 100;
    precoFinal = precoSemIva + valorIva;

    printf("Valor do IVA: %.2f\\n", valorIva);
    printf("Preco final: %.2f\\n", precoFinal);

    return 0;
}`
      },
      {
        number: 6,
        id: "classificarNota",
        title: "Classificar nota",
        sections: [
          {
            title: "Decisão simples",
            text: "Uma condição permite escolher entre dois caminhos. Neste caso, a nota determina se o resultado é positivo ou negativo."
          },
          {
            title: "Critério",
            text: "Na escala de 0 a 20, uma nota maior ou igual a 10 é positiva. Uma nota inferior a 10 é negativa."
          },
          {
            title: "Objetivo da prática",
            text: "Ler uma nota e apresentar a classificação correspondente."
          }
        ],
        prompt: "Escreve um programa em C que leia uma nota de 0 a 20 e indique se a nota é positiva ou negativa.",
        expected: "scanf|printf|if|else|nota|positiva",
        model: "A solução deve ler uma nota e usar if para testar se a nota é maior ou igual a 10.",
        solution: `#include <stdio.h>

int main() {
    float nota;

    printf("Indique a nota: ");
    scanf("%f", &nota);

    if (nota >= 10) {
        printf("Nota positiva.\\n");
    } else {
        printf("Nota negativa.\\n");
    }

    return 0;
}`
      },
      {
        number: 7,
        id: "maiorTresNumeros",
        title: "Maior de três números",
        sections: [
          {
            title: "Comparação entre valores",
            text: "Comparar valores permite descobrir qual deles cumpre uma determinada condição, como ser o maior."
          },
          {
            title: "Decisões encadeadas",
            text: "Podemos começar por assumir um valor como maior e depois substituí-lo quando encontramos outro superior."
          },
          {
            title: "Objetivo da prática",
            text: "Ler três números e apresentar o maior valor introduzido."
          }
        ],
        prompt: "Escreve um programa em C que leia três números e apresente o maior dos três.",
        expected: "scanf|printf|if|maior",
        model: "A solução deve guardar inicialmente o primeiro número como maior e comparar os outros dois com esse valor.",
        solution: `#include <stdio.h>

int main() {
    float n1, n2, n3, maior;

    printf("Indique o primeiro numero: ");
    scanf("%f", &n1);

    printf("Indique o segundo numero: ");
    scanf("%f", &n2);

    printf("Indique o terceiro numero: ");
    scanf("%f", &n3);

    maior = n1;

    if (n2 > maior) {
        maior = n2;
    }

    if (n3 > maior) {
        maior = n3;
    }

    printf("Maior valor: %.2f\\n", maior);

    return 0;
}`
      },
      {
        number: 8,
        id: "escalaoTemperatura",
        title: "Escalão de temperatura",
        sections: [
          {
            title: "Decisões por intervalos",
            text: "Alguns problemas dependem de escalões. Nestes casos, testamos intervalos com if e else if."
          },
          {
            title: "Classificação",
            text: "A mesma variável pode originar mensagens diferentes, consoante o intervalo onde se encontra."
          },
          {
            title: "Objetivo da prática",
            text: "Ler uma temperatura e classificá-la como frio, ameno ou quente."
          }
        ],
        prompt: "Escreve um programa em C que leia uma temperatura e indique: frio se for inferior a 15, ameno se estiver entre 15 e 25, e quente se for superior a 25.",
        expected: "scanf|printf|if|else if|else|temperatura",
        model: "A solução deve testar a temperatura por intervalos e apresentar uma mensagem para cada escalão.",
        solution: `#include <stdio.h>

int main() {
    float temperatura;

    printf("Indique a temperatura: ");
    scanf("%f", &temperatura);

    if (temperatura < 15) {
        printf("Frio.\\n");
    } else if (temperatura <= 25) {
        printf("Ameno.\\n");
    } else {
        printf("Quente.\\n");
    }

    return 0;
}`
      }
    ]
  },
  {
    number: 3,
    title: "Ciclos, contadores e acumuladores",
    intro: "Terceira fase do laboratório: repetir instruções, contar ocorrências e acumular valores.",
    practices: [
      {
        number: 9,
        id: "contarPresencas",
        title: "Contar presenças",
        sections: [
          {
            title: "Repetição controlada",
            text: "Quando sabemos quantas vezes uma ação se repete, o ciclo for é uma boa opção."
          },
          {
            title: "Contadores",
            text: "Um contador é uma variável que aumenta sempre que acontece uma situação específica."
          },
          {
            title: "Objetivo da prática",
            text: "Ler o estado de presença em várias sessões e contar quantas presenças foram registadas."
          }
        ],
        prompt: "Escreve um programa em C que pergunte, para 5 sessões, se o formando esteve presente. Usa 1 para presente e 0 para ausente. No final, apresenta o total de presenças.",
        expected: "for|scanf|if|presencas|presenças|contador",
        model: "A solução deve repetir 5 vezes, ler 1 ou 0 e aumentar o contador sempre que o valor for 1.",
        solution: `#include <stdio.h>

int main() {
    int sessao, estado, presencas = 0;

    for (sessao = 1; sessao <= 5; sessao++) {
        printf("Sessao %d - presente? (1 sim / 0 nao): ", sessao);
        scanf("%d", &estado);

        if (estado == 1) {
            presencas++;
        }
    }

    printf("Total de presencas: %d\\n", presencas);

    return 0;
}`
      },
      {
        number: 10,
        id: "totalVendas",
        title: "Total de vendas",
        sections: [
          {
            title: "Acumulador",
            text: "Um acumulador guarda uma soma progressiva. A cada repetição, acrescentamos o novo valor à soma anterior."
          },
          {
            title: "Média",
            text: "Depois de somar todos os valores, a média é calculada dividindo a soma pela quantidade de valores."
          },
          {
            title: "Objetivo da prática",
            text: "Ler vários valores de vendas, calcular o total e apresentar a média."
          }
        ],
        prompt: "Escreve um programa em C que leia 5 valores de vendas, calcule o total vendido e apresente a média das vendas.",
        expected: "for|float|soma|total|media|média",
        model: "A solução deve usar um acumulador para somar as vendas e dividir o total por 5 no final.",
        solution: `#include <stdio.h>

int main() {
    int i;
    float venda, total = 0, media;

    for (i = 1; i <= 5; i++) {
        printf("Indique o valor da venda %d: ", i);
        scanf("%f", &venda);
        total = total + venda;
    }

    media = total / 5;

    printf("Total vendido: %.2f\\n", total);
    printf("Media das vendas: %.2f\\n", media);

    return 0;
}`
      },
      {
        number: 11,
        id: "menorValor",
        title: "Menor valor",
        sections: [
          {
            title: "Guardar uma referência",
            text: "Para encontrar o menor valor, começamos por guardar um primeiro valor como referência."
          },
          {
            title: "Atualizar quando necessário",
            text: "A cada novo valor lido, comparamos com o menor atual e substituímos se o novo valor for inferior."
          },
          {
            title: "Objetivo da prática",
            text: "Ler seis números e indicar o menor valor introduzido."
          }
        ],
        prompt: "Escreve um programa em C que leia seis números inteiros e apresente o menor valor introduzido.",
        expected: "for|scanf|if|menor",
        model: "A solução deve ler o primeiro número para inicializar o menor e depois comparar os restantes valores dentro de um ciclo.",
        solution: `#include <stdio.h>

int main() {
    int i, numero, menor;

    printf("Indique o numero 1: ");
    scanf("%d", &numero);
    menor = numero;

    for (i = 2; i <= 6; i++) {
        printf("Indique o numero %d: ", i);
        scanf("%d", &numero);

        if (numero < menor) {
            menor = numero;
        }
    }

    printf("Menor valor: %d\\n", menor);

    return 0;
}`
      },
      {
        number: 12,
        id: "notasAcimaMedia",
        title: "Notas acima da média",
        sections: [
          {
            title: "Acumular e contar",
            text: "Alguns problemas precisam de duas passagens: primeiro calcular uma referência, depois comparar valores com essa referência."
          },
          {
            title: "Média como referência",
            text: "Depois de calcular a média, podemos contar quantas notas são maiores ou iguais a esse valor."
          },
          {
            title: "Objetivo da prática",
            text: "Ler notas, calcular a média e contar quantas notas ficaram acima ou iguais à média."
          }
        ],
        prompt: "Escreve um programa em C que leia 5 notas, calcule a média e indique quantas notas são maiores ou iguais à média.",
        expected: "for|if|media|média|contador|vetor",
        model: "A solução pode guardar as notas num vetor, calcular a média e depois fazer nova passagem para contar as notas maiores ou iguais à média.",
        solution: `#include <stdio.h>

int main() {
    int i, acimaOuIgual = 0;
    float notas[5], soma = 0, media;

    for (i = 0; i < 5; i++) {
        printf("Indique a nota %d: ", i + 1);
        scanf("%f", &notas[i]);
        soma = soma + notas[i];
    }

    media = soma / 5;

    for (i = 0; i < 5; i++) {
        if (notas[i] >= media) {
            acimaOuIgual++;
        }
    }

    printf("Media: %.2f\\n", media);
    printf("Notas maiores ou iguais a media: %d\\n", acimaOuIgual);

    return 0;
}`
      }
    ]
  },
  {
    number: 4,
    title: "Repetição avançada e síntese",
    intro: "Quarta fase do laboratório: trabalhar ciclos com condições, validação de dados e menus simples.",
    practices: [
      {
        number: 13,
        id: "contagemProgressiva",
        title: "Contagem progressiva",
        sections: [
          {
            title: "Sequência de valores",
            text: "Um ciclo pode ser usado para apresentar uma sequência de números de forma controlada."
          },
          {
            title: "Ciclo for",
            text: "O ciclo for permite controlar o início, o fim e o avanço da repetição."
          },
          {
            title: "Objetivo da prática",
            text: "Ler um limite e apresentar todos os números de 1 até esse limite."
          }
        ],
        prompt: "Escreve um programa em C que leia um número inteiro positivo e apresente a contagem de 1 até esse número.",
        expected: "for|scanf|printf|limite",
        model: "A solução deve ler um limite e usar um ciclo for para apresentar os números de 1 até ao limite.",
        solution: `#include <stdio.h>

int main() {
    int limite, i;

    printf("Indique um numero inteiro positivo: ");
    scanf("%d", &limite);

    for (i = 1; i <= limite; i++) {
        printf("%d\\n", i);
    }

    return 0;
}`
      },
      {
        number: 14,
        id: "somarAteNegativo",
        title: "Somar até número negativo",
        sections: [
          {
            title: "Valor de paragem",
            text: "Alguns ciclos terminam quando o utilizador introduz um valor especial. Neste caso, o valor de paragem é qualquer número negativo."
          },
          {
            title: "Ciclo while",
            text: "O ciclo while repete enquanto a condição for verdadeira."
          },
          {
            title: "Objetivo da prática",
            text: "Somar números enquanto forem positivos ou zero, parando quando surgir um valor negativo."
          }
        ],
        prompt: "Escreve um programa em C que leia números inteiros e some apenas os valores positivos ou zero. O programa deve parar quando for introduzido um número negativo.",
        expected: "while|scanf|soma|negativo",
        model: "A solução deve ler um número, repetir enquanto ele for maior ou igual a zero e acumular a soma.",
        solution: `#include <stdio.h>

int main() {
    int numero, soma = 0;

    printf("Indique um numero (negativo para terminar): ");
    scanf("%d", &numero);

    while (numero >= 0) {
        soma = soma + numero;

        printf("Indique um numero (negativo para terminar): ");
        scanf("%d", &numero);
    }

    printf("Soma dos valores introduzidos: %d\\n", soma);

    return 0;
}`
      },
      {
        number: 15,
        id: "validarIdade",
        title: "Validar idade",
        sections: [
          {
            title: "Validação de dados",
            text: "Validar dados significa garantir que o valor introduzido respeita as regras esperadas."
          },
          {
            title: "do while",
            text: "O ciclo do while executa pelo menos uma vez e só depois testa se deve repetir."
          },
          {
            title: "Objetivo da prática",
            text: "Pedir uma idade até que esteja entre 0 e 120."
          }
        ],
        prompt: "Escreve um programa em C que peça uma idade e repita o pedido enquanto a idade não estiver entre 0 e 120.",
        expected: "do|while|idade|0|120",
        model: "A solução deve usar do while para repetir a leitura enquanto a idade for menor que 0 ou maior que 120.",
        solution: `#include <stdio.h>

int main() {
    int idade;

    do {
        printf("Indique uma idade entre 0 e 120: ");
        scanf("%d", &idade);

        if (idade < 0 || idade > 120) {
            printf("Idade invalida. Tente novamente.\\n");
        }
    } while (idade < 0 || idade > 120);

    printf("Idade registada: %d\\n", idade);

    return 0;
}`
      },
      {
        number: 16,
        id: "menuEstadoTarefa",
        title: "Menu de estado de tarefa",
        sections: [
          {
            title: "Escolha por menu",
            text: "Um menu permite ao utilizador escolher uma opção entre várias alternativas."
          },
          {
            title: "switch",
            text: "A estrutura switch é útil quando a decisão depende de uma opção com vários valores possíveis."
          },
          {
            title: "Objetivo da prática",
            text: "Construir um menu simples para apresentar o estado de uma tarefa."
          }
        ],
        prompt: "Escreve um programa em C com um menu de estado de tarefa: 1 - Pendente, 2 - Em curso, 3 - Concluída. O programa deve ler a opção e apresentar a mensagem correspondente.",
        expected: "switch|case|scanf|printf|opcao|opção",
        model: "A solução deve ler uma opção e usar switch para apresentar uma mensagem diferente para cada estado.",
        solution: `#include <stdio.h>

int main() {
    int opcao;

    printf("Estado da tarefa:\\n");
    printf("1 - Pendente\\n");
    printf("2 - Em curso\\n");
    printf("3 - Concluida\\n");
    printf("Escolha uma opcao: ");
    scanf("%d", &opcao);

    switch (opcao) {
        case 1:
            printf("A tarefa ainda esta pendente.\\n");
            break;
        case 2:
            printf("A tarefa esta em curso.\\n");
            break;
        case 3:
            printf("A tarefa foi concluida.\\n");
            break;
        default:
            printf("Opcao invalida.\\n");
    }

    return 0;
}`
      }
    ]
  }
];

function getLabRoomKey(room) {
  return room.room.toLowerCase().replace(/\s+/g, "");
}

function isLabRoomVisible(room) {
  return itemSiteVisivel(`laboratorio-sala-${getLabRoomKey(room)}`);
}

function getExtraPracticeKey(exercise) {
  return `extra${exercise.number}`;
}

function isExtraPracticeVisible(exercise) {
  return itemSiteVisivel(`pratica-extra-${getExtraPracticeKey(exercise)}`);
}

function isExtraPracticeBlockVisible(block) {
  return block.exercises.some(isExtraPracticeVisible);
}

function isCPracticeVisible(id) {
  return itemSiteVisivel(`pratica-c-${id}`);
}

function hasVisibleCPractices() {
  return [
    "conteudo-estruturaMinima",
    "tentativa-estruturaMinima",
    "conteudo-variaveisTipos",
    "tentativa-variaveisTipos",
    "conteudo-entradaSaida",
    "tentativa-entradaSaida",
    "conteudo-primeiraDecisao",
    "tentativa-primeiraDecisao"
  ].some(isCPracticeVisible);
}

function applyVisibilityControls(root) {
  root.querySelectorAll("[data-c-practice]").forEach((element) => {
    element.hidden = !isCPracticeVisible(element.dataset.cPractice);
  });
}

function getCPracticeHtml() {
  return simpleLessonPages["linguagens-c-cpp"].activityHtml;
}

function getLabSessionPracticeControlKey(practice, part) {
  return `pratica-c-${part}-${practice.id}`;
}

function isLabSessionPracticeVisible(practice, part) {
  return itemSiteVisivel(getLabSessionPracticeControlKey(practice, part));
}

function renderLabSessionPracticeBlock(block, options = {}) {
  const visiblePractices = options.showAll
    ? block.practices
    : block.practices.filter((practice) => isLabSessionPracticeVisible(practice, "conteudo") || isLabSessionPracticeVisible(practice, "tentativa"));

  if (!visiblePractices.length) return "";

  return `
    <div class="lab-practice-section lab-session-practice-section">
      <details class="card coding-practice-card practice-overview-accordion lab-session-heading-card">
        <summary>
          <span class="eyebrow">Prática progressiva</span>
          <span>Praticar C ${block.title}</span>
        </summary>
        <div class="practice-overview-body">
          <strong>Como funciona</strong>
          <p>${block.intro}</p>
        </div>
      </details>
      <div class="exercise-list coding-practice-list">
        ${visiblePractices.map((practice) => renderLabSessionPractice(practice)).join("")}
      </div>
    </div>
  `;
}

function renderLabSessionPractice(practice) {
  const sourceExercise = getExtraPracticeExercise(practice.sourceExercise);
  const solution = practice.solution || sourceExercise?.solution || "";
  const expected = practice.expected || sourceExercise?.tags.join("|") || "";
  const model = practice.model || sourceExercise?.statement || "";
  const safeSolution = escapeHtml(solution);
  const safeModel = escapeHtml(model);

  return `
    <section class="exercise-card" data-c-practice="conteudo-${practice.id}">
      <h3>${practice.number}. ${practice.title}</h3>
      ${practice.sections.map((section) => `
        <h4>${section.title}</h4>
        <p>${section.text}</p>
      `).join("")}
    </section>
    <details class="practice-attempt-card" data-c-practice="tentativa-${practice.id}" data-c-exercise data-expected="${escapeHtml(expected)}" data-model="${safeModel}" data-solution="${safeSolution}">
      <summary>
        <span class="practice-task-card" data-practice-task>
          <span class="practice-task-title" data-practice-title>Prática ${practice.number}</span>
          <span class="practice-prompt">${practice.prompt}</span>
          <button class="small-button practice-download-button" type="button" data-action="download-practice-txt">Descarregar TXT</button>
        </span>
      </summary>
      <div class="practice-attempt-body">
        <label>A tua tentativa</label>
        <textarea rows="5" placeholder="Escreve aqui a tua resposta..."></textarea>
        <button class="small-button" type="button" data-action="check-c-exercise">Pedir correção</button>
        <div class="exercise-feedback" data-c-feedback></div>
      </div>
    </details>
  `;
}

function renderLaboratoryPracticeSequence(options = {}) {
  const extraBlocks = new Map(extraPracticeBlocks.map((block) => [block.number, block]));
  const initialPractice = hasVisibleCPractices() || options.showAll
    ? `
      <div class="lab-practice-section">
        <article class="task-overview-card simple-page-heading-card">
          <p class="eyebrow">Prática C</p>
          <h2>Linguagens C e C++</h2>
          <p>Práticas progressivas associadas ao Laboratório de Código, para resolver, pedir correção e descarregar a solução comentada.</p>
        </article>
        ${getCPracticeHtml()}
      </div>
    `
    : "";

  return `
    ${initialPractice}
    ${extraBlocks.has(1) ? renderExtraPracticeCarousel(extraBlocks.get(1), options) : ""}
    ${renderLabSessionPracticeBlock(labSessionPracticeBlocks[0], options)}
    ${extraBlocks.has(2) ? renderExtraPracticeCarousel(extraBlocks.get(2), options) : ""}
    ${renderLabSessionPracticeBlock(labSessionPracticeBlocks[1], options)}
    ${extraBlocks.has(3) ? renderExtraPracticeCarousel(extraBlocks.get(3), options) : ""}
    ${renderLabSessionPracticeBlock(labSessionPracticeBlocks[2], options)}
    ${extraBlocks.has(4) ? renderExtraPracticeCarousel(extraBlocks.get(4), options) : ""}
  `;
}

function renderExtraPracticeCarousel(block, options = {}) {
  const visibleExercises = options.showAll ? block.exercises : block.exercises.filter(isExtraPracticeVisible);
  if (!visibleExercises.length) return "";
  const slideCount = visibleExercises.length + 1;
  const blockLabel = `Extra ${block.number}`;
  const blockIntro = block.intro || "Quatro propostas para treinar entrada de dados, cálculos, decisões e apresentação de resultados em C.";

  return `
    <details class="task-overview-card extra-practice-section" open>
      <summary>
        <span class="task-module-copy">
          <strong>${blockLabel}</strong>
          <small>${blockIntro}</small>
        </span>
        <span class="task-module-mark" aria-hidden="true">E${block.number}</span>
      </summary>
      <div class="extra-practice-slider" data-extra-practice-slider>
        <div class="extra-practice-slider-track">
          ${visibleExercises.map((exercise, index) => `
            <article class="extra-practice-slide ${index === 0 ? "is-active" : ""}" data-extra-practice-slide>
              <div>
                <strong>${exercise.focus}</strong>
                <h3>${exercise.title}</h3>
                <p>${exercise.statement}</p>
                <div class="criteria-tags extra-practice-tags">
                  ${exercise.tags.map((tag) => `<span>${tag}</span>`).join("")}
                </div>
                <div class="assessment-actions">
                  <button class="small-button" type="button" data-modal="extraPractice${exercise.number}">Ver resolução</button>
                </div>
              </div>
              <em>P${exercise.number}</em>
            </article>
          `).join("")}
          <article class="extra-practice-slide extra-practice-print-row" data-extra-practice-slide>
            <div>
              <strong>Síntese final</strong>
              <h3>${blockLabel} com resolução</h3>
              <p>Gera uma versão organizada com as propostas deste bloco e respetivas resoluções para consulta ou impressão.</p>
            </div>
            <button class="small-button orange" type="button" data-action="print-extra-practice" data-extra-practice-block="${block.number}" data-extra-practice-show-all="${options.showAll ? "true" : "false"}">Imprimir exercícios e resoluções</button>
          </article>
        </div>
        <div class="extra-practice-slider-controls">
          <button class="small-button" type="button" data-action="extra-practice-prev">Anterior</button>
          <span data-extra-practice-counter>1 / ${slideCount}</span>
          <button class="small-button" type="button" data-action="extra-practice-next">Seguinte</button>
        </div>
      </div>
    </details>
  `;
}

function renderExtraPracticeBlocks(options = {}) {
  return extraPracticeBlocks
    .filter((block) => options.showAll || isExtraPracticeBlockVisible(block))
    .map((block) => renderExtraPracticeCarousel(block, options))
    .join("");
}

const evaluationItems = [
  {
    id: "avaliacao-diagnostica",
    title: "Avaliação Diagnóstica",
    menuTitle: "Diagnóstica",
    intro: "Questionário inicial para perceber conhecimentos prévios sobre bases de dados e SQL.",
    url: "avaliacao/avaliacao-diagnostica.html",
    externalUrl: "https://avaliacoes-formacao.netlify.app/ufcd-10788/00-diagnostico.html",
    children: [
      {
        id: "resultados-diagnostica",
        title: "Resultados da Avaliação Diagnóstica",
        menuTitle: "Resultados",
        intro: "Área preparada para apresentar os resultados da avaliação diagnóstica quando forem disponibilizados.",
        url: "avaliacao/resultados-diagnostica.html",
        externalUrl: ""
      }
    ]
  },
  {
    id: "avaliacao-sumativa",
    title: "Avaliação Sumativa",
    menuTitle: "Sumativa",
    intro: "Momento final para demonstrar a capacidade de criar, consultar, inserir, alterar e apagar dados.",
    url: "avaliacao/avaliacao-sumativa.html",
    externalUrl: ""
  },
  {
    id: "autoavaliacao-final",
    title: "Autoavaliação",
    menuTitle: "Autoavaliação",
    intro: "Reflexão individual sobre aprendizagens, dificuldades e evolução no trabalho com SQL.",
    url: "avaliacao/autoavaliacao-final.html",
    externalUrl: ""
  },
  {
    id: "avaliacao-entre-pares",
    title: "Avaliação entre pares",
    menuTitle: "Entre pares",
    intro: "Apreciação colaborativa do trabalho desenvolvido, com critérios claros e construtivos.",
    url: "avaliacao/avaliacao-entre-pares.html",
    externalUrl: ""
  },
  {
    id: "avaliacao-formacao",
    title: "Avaliação da formação",
    menuTitle: "Formação",
    intro: "Recolha de opinião sobre organização, recursos, metodologia e desenvolvimento da formação.",
    url: "avaliacao/avaliacao-formacao.html",
    externalUrl: ""
  }
];
const resources = [
  {
    id: "manual",
    title: "Manual para download",
    intro: "Página preparada para consultar e descarregar o manual da UFCD.",
    url: "recursos/manual.html",
    anchor: "index.html#recursos-manual",
    pdfUrl: ""
  },
  {
    id: "assistente-gpt",
    title: "Assistente UFCD 10788",
    menuTitle: "Assistente GPT",
    intro: "Apoio orientado para colocar dúvidas, rever conceitos e pedir ajuda durante o estudo da UFCD.",
    url: "recursos/assistente-gpt.html",
    anchor: "index.html#recursos-assistente-gpt",
    menuIcon: "assets/img/assistente-gpt.png",
    gptUrl: ""
  }
];
const modalContent = {
  exemplo: {
    title: "Espaço para exemplo",
    body: "<p>Este espaço está preparado para receber exemplos desenvolvidos a partir do manual da UFCD 10788.</p>"
  },
  laboratorioC: {
    title: "O que considerar em C",
    body: `
      <p>Para construir o código em C, começa por transformar o enunciado em entradas, variáveis, processamento, decisões e saídas.</p>
      <ul class="moodle-like-list">
        <li><strong>Estrutura base:</strong> usar <code>#include &lt;stdio.h&gt;</code>, <code>int main()</code> e terminar com <code>return 0;</code>.</li>
        <li><strong>Variáveis:</strong> escolher <code>int</code> para contagens/idades, <code>float</code> para notas e médias, e <code>char</code> ou texto quando for necessário guardar nomes.</li>
        <li><strong>Entrada de dados:</strong> usar <code>printf</code> para pedir informação e <code>scanf</code> para ler valores.</li>
        <li><strong>Processamento:</strong> calcular somas, médias, contadores ou classificações antes de apresentar o resultado.</li>
        <li><strong>Decisão:</strong> usar <code>if</code>, <code>else if</code> e <code>else</code> para escolher mensagens ou caminhos diferentes.</li>
        <li><strong>Repetição:</strong> usar <code>for</code> quando sabes quantas vezes repetir e <code>while</code> quando a repetição depende de uma condição.</li>
        <li><strong>Testes:</strong> testar com valores pequenos, limites e casos diferentes para confirmar se o programa responde bem.</li>
      </ul>
      <pre><code>#include &lt;stdio.h&gt;

int main() {
    /* declarar variáveis */

    /* pedir e ler dados */

    /* processar dados */

    /* decidir e apresentar resultados */

    return 0;
}</code></pre>
    `
  }
};

labRooms.forEach((room, index) => {
  modalContent[`laboratorioC${index + 1}`] = {
    title: `${room.room}: o que considerar em C`,
    body: `
      <p>Para esta sala, transforma primeiro a missão em variáveis, entradas, processamento e saídas. Depois escreve o código por etapas.</p>
      <ul class="moodle-like-list">
        <li><strong>Estrutura base:</strong> <code>#include &lt;stdio.h&gt;</code>, <code>int main()</code> e <code>return 0;</code>.</li>
        ${room.cNotes.map((note) => `<li>${note}</li>`).join("")}
        <li><strong>Testes:</strong> executa o programa com pelo menos dois conjuntos de valores diferentes.</li>
      </ul>
    `
  };
  modalContent[`laboratorioC${getLabRoomKey(room)}`] = modalContent[`laboratorioC${index + 1}`];
});

extraPracticeExercises.forEach((exercise) => {
  modalContent[`extraPractice${exercise.number}`] = {
    title: `Exercício ${exercise.number}: ${exercise.title}`,
    body: `
      <p>${exercise.statement}</p>
      <p><strong>Foco:</strong> ${exercise.focus}</p>
      <pre><code>${escapeHtml(exercise.solution)}</code></pre>
    `
  };
});

modalContent.labProposalIde = {
  title: "IDE de leitura comentada",
  body: `
    <div class="ide-window">
      <div class="ide-titlebar">
        <span></span><span></span><span></span>
        <strong>trabalho-final.c</strong>
      </div>
      <pre><code><span class="code-comment">/* Trabalho final: classificador simples de notas */</span>
<span class="code-keyword">#include</span> <span class="code-string">&lt;stdio.h&gt;</span>

<span class="code-keyword">int</span> main() {
    <span class="code-keyword">float</span> nota1, nota2, nota3, media;

    printf(<span class="code-string">"Indica tres notas: "</span>);
    scanf(<span class="code-string">"%f %f %f"</span>, &nota1, &nota2, &nota3);

    media = (nota1 + nota2 + nota3) / 3;

    <span class="code-keyword">if</span> (media &gt;= 10) {
        printf(<span class="code-string">"Media %.1f: suficiente\\n"</span>, media);
    } <span class="code-keyword">else</span> {
        printf(<span class="code-string">"Media %.1f: insuficiente\\n"</span>, media);
    }

    <span class="code-keyword">return</span> 0;
}</code></pre>
    </div>
  `
};

modalContent.labProposalReview = {
  title: "Exemplo de comentários dos colegas",
  body: `
    <div class="review-thread">
      <article>
        <strong>Sala 2</strong>
        <p>A solução está clara. Podiam acrescentar um teste com nota exatamente 10 para confirmar o limite.</p>
      </article>
      <article>
        <strong>Sala 4</strong>
        <p>Boa utilização do <code>if</code>. Sugestão: apresentar também as três notas antes da média.</p>
      </article>
      <article>
        <strong>Sala 6</strong>
        <p>O código compila e está organizado. Falta só comentar melhor a parte do cálculo da média.</p>
      </article>
    </div>
  `
};

function getBasePath() {
  return document.body.dataset.depth === "sub" ? "../" : "";
}

function navegarParaDestinoMenu(targetHref) {
  if (!targetHref) return;

  const targetUrl = new URL(targetHref, window.location.href);
  const currentPath = window.location.pathname.replace(/\/+$/, "");
  const targetPath = targetUrl.pathname.replace(/\/+$/, "");
  const isSamePage = currentPath === targetPath;

  if (!isSamePage) {
    window.location.href = targetUrl.href;
    return;
  }

  if (!targetUrl.hash) return;

  const target = document.querySelector(targetUrl.hash);
  if (!target) return;

  history.pushState(null, "", targetUrl.hash);
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function obterSecaoIndexPorSubmenu() {
  return {
    "submenu-conteudos": "conteudos",
    "submenu-atividades": "atividades",
    "submenu-avaliacao": "avaliacao",
    "submenu-recursos": "recursos"
  };
}

function abrirSubmenuPrincipal(submenuId) {
  document.querySelectorAll(".nav-parent").forEach((button) => {
    button.setAttribute("aria-expanded", String(button.getAttribute("aria-controls") === submenuId));
  });

  document.querySelectorAll(".submenu").forEach((submenu) => {
    submenu.classList.toggle("open", submenu.id === submenuId);
  });
}

function abrirMenuPeloHashDoIndex() {
  if (document.body.dataset.page !== "home") return;

  const hash = window.location.hash.replace("#", "");
  if (!hash) return;

  const submenuId = Object.entries(obterSecaoIndexPorSubmenu())
    .find(([, sectionId]) => sectionId === hash)?.[0];

  if (submenuId) abrirSubmenuPrincipal(submenuId);
}

function setupMenu() {
  const homeSectionBySubmenu = obterSecaoIndexPorSubmenu();

  document.querySelectorAll(".nav-parent").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
  document.querySelectorAll(".submenu").forEach((submenu) => {
    submenu.classList.remove("open");
  });

  document.querySelectorAll(".nav-parent").forEach((button) => {
    if (button.dataset.navParentReady) return;
    button.dataset.navParentReady = "true";

    button.addEventListener("click", () => {
      const submenuId = button.getAttribute("aria-controls");

      if (document.body.dataset.page !== "home" && homeSectionBySubmenu[submenuId]) {
        window.location.href = `${getBasePath()}index.html#${homeSectionBySubmenu[submenuId]}`;
        return;
      }

      const submenu = document.getElementById(submenuId);
      if (submenu) abrirSubmenuPrincipal(submenuId);

      if (document.body.dataset.page === "home" && homeSectionBySubmenu[submenuId]) {
        const section = document.getElementById(homeSectionBySubmenu[submenuId]);
        section?.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${homeSectionBySubmenu[submenuId]}`);
      }
    });
  });

  const toggle = document.querySelector(".menu-toggle");
  if (toggle && !toggle.dataset.menuToggleReady) {
    toggle.dataset.menuToggleReady = "true";
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  document.querySelectorAll(".side-nav a:not(.nav-parent)").forEach((link) => {
    if (link.dataset.menuLinkReady) return;
    link.dataset.menuLinkReady = "true";
    link.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  abrirMenuPeloHashDoIndex();
}

function setupFloatingActions() {
  document.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action]");
    if (!actionButton) return;
    if (actionButton.dataset.action === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (actionButton.dataset.action === "print") {
      window.print();
    }
    if (actionButton.dataset.action === "check-c-exercise") {
      corrigirExercicioC(actionButton);
    }
    if (actionButton.dataset.action === "download-practice-txt") {
      event.preventDefault();
      event.stopPropagation();
      descarregarPraticaTxt(actionButton);
    }
    if (actionButton.dataset.action === "print-extra-practice") {
      imprimirPraticaExtra(actionButton);
    }
    if (actionButton.dataset.action === "extra-practice-prev" || actionButton.dataset.action === "extra-practice-next") {
      navegarPraticaExtra(actionButton, actionButton.dataset.action === "extra-practice-next" ? 1 : -1);
    }
    if (actionButton.dataset.action === "proposal-code-step") {
      ativarPassoCodigoProposta(actionButton);
    }
    if (actionButton.dataset.action === "proposal-practice-select") {
      ativarPraticaCodigoProposta(actionButton);
    }
    if (actionButton.dataset.action === "proposal-terminal-run") {
      executarTerminalProposta(actionButton);
    }
  });
}

function ativarPassoCodigoProposta(button) {
  const root = button.closest("[data-lab-proposal]");
  if (!root) return;

  const scope = button.closest("[data-proposal-practice-block]") || root;
  const exercise = getExtraPracticeExercise(Number(scope.dataset.proposalPractice || 1)) || extraPracticeExercises[0];
  const steps = criarPassosCodigoProposta(exercise);
  const stepIndex = Math.max(0, steps.findIndex((item) => item.id === button.dataset.codeStep));
  scope.querySelectorAll("[data-action='proposal-code-step']").forEach((control) => {
    control.classList.toggle("is-active", control === button);
  });

  atualizarJanelaCodigoProposta(scope, steps, stepIndex, exercise);
}

function ativarPraticaCodigoProposta(button) {
  const root = button.closest("[data-lab-proposal]");
  if (!root) return;

  const scope = button.closest("[data-proposal-practice-block]") || root;
  const exercise = getExtraPracticeExercise(Number(button.dataset.practiceNumber)) || extraPracticeExercises[0];
  const steps = criarPassosCodigoProposta(exercise);
  scope.dataset.proposalPractice = String(exercise.number);

  scope.querySelectorAll("[data-action='proposal-practice-select']").forEach((control) => {
    control.classList.toggle("is-active", control === button);
  });

  const commentList = scope.querySelector("[data-proposal-comment-list]");
  if (commentList) {
    commentList.innerHTML = renderLabProposalCommentSteps(steps);
  }

  atualizarJanelaCodigoProposta(scope, steps, 0, exercise);
}

function atualizarJanelaCodigoProposta(root, steps, activeIndex = 0, exercise = null) {
  const safeIndex = Math.max(0, Math.min(activeIndex, steps.length - 1));
  const step = steps[safeIndex];
  const title = root.querySelector("[data-proposal-code-title]");
  const note = root.querySelector("[data-proposal-code-note]");
  const code = root.querySelector("[data-proposal-code-content]");

  if (title) title.textContent = exercise ? `P${exercise.number}_${slugify(exercise.title)}.c` : step.ideTitle;
  if (note) note.textContent = step.note;
  if (code) code.innerHTML = obterCodigoPropostaAtePasso(steps, safeIndex);
  atualizarTerminalProposta(root, exercise, safeIndex);
}

function navegarPraticaExtra(button, direction) {
  const slider = button.closest("[data-extra-practice-slider]");
  if (!slider) return;

  const slides = [...slider.querySelectorAll("[data-extra-practice-slide]")];
  if (!slides.length) return;

  const currentIndex = Math.max(0, slides.findIndex((slide) => slide.classList.contains("is-active")));
  const nextIndex = (currentIndex + direction + slides.length) % slides.length;

  slides.forEach((slide, index) => {
    slide.classList.toggle("is-active", index === nextIndex);
  });

  const counter = slider.querySelector("[data-extra-practice-counter]");
  if (counter) {
    counter.textContent = `${nextIndex + 1} / ${slides.length}`;
  }
}

function imprimirPraticaExtra(buttonOrBlockNumber) {
  const blockNumber = typeof buttonOrBlockNumber === "object"
    ? buttonOrBlockNumber.dataset.extraPracticeBlock
    : buttonOrBlockNumber;
  const showAll = typeof buttonOrBlockNumber === "object" && buttonOrBlockNumber.dataset.extraPracticeShowAll === "true";
  const numericBlock = Number(blockNumber);
  const block = extraPracticeBlocks.find((item) => item.number === numericBlock);
  const sourceExercises = block ? block.exercises : extraPracticeExercises;
  const exercisesToPrint = showAll ? sourceExercises : sourceExercises.filter(isExtraPracticeVisible);
  if (!exercisesToPrint.length) return;
  const printTitle = block ? `Extra ${block.number}` : "Práticas Extra";

  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    window.print();
    return;
  }

  const content = exercisesToPrint.map((exercise) => `
    <article class="print-exercise">
      <h2>Exercício ${exercise.number}: ${exercise.title}</h2>
      <p><strong>Enunciado:</strong> ${escapeHtml(exercise.statement)}</p>
      <p><strong>Foco:</strong> ${escapeHtml(exercise.focus)}</p>
      <h3>Resolução comentada</h3>
      <pre><code>${escapeHtml(exercise.solution)}</code></pre>
    </article>
  `).join("");

  printWindow.document.write(`
    <!doctype html>
    <html lang="pt">
      <head>
        <meta charset="utf-8">
        <title>UFCD 10788 | ${printTitle}</title>
        <style>
          body {
            margin: 32px;
            color: #0B1F3A;
            font-family: Arial, sans-serif;
            line-height: 1.5;
          }
          h1, h2, h3 {
            color: #173B8F;
          }
          .print-exercise {
            break-inside: avoid;
            border: 1px solid #CFE0F5;
            border-left: 6px solid #0F766E;
            border-radius: 8px;
            margin: 0 0 18px;
            padding: 18px;
          }
          pre {
            overflow: auto;
            border-radius: 8px;
            padding: 14px;
            color: #D7E7FF;
            background: #0B1220;
            white-space: pre-wrap;
          }
          @media print {
            body {
              margin: 18mm;
            }
          }
        </style>
      </head>
      <body>
        <h1>UFCD 10788 - ${printTitle}</h1>
        <p>Propostas extra de SQL em C com resolução comentada.</p>
        ${content}
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

function descarregarPraticaTxt(button) {
  const practice = button.closest("[data-c-exercise]");
  if (!practice) return;

  const exercise = practice.previousElementSibling?.classList.contains("exercise-card")
    ? practice.previousElementSibling
    : practice.closest(".exercise-card");
  const title = exercise.querySelector("h3")?.textContent.trim() || "Prática";
  const practiceTitle = practice.querySelector("[data-practice-title]")?.textContent.trim() || "Prática";
  const solution = practice.dataset.solution || "Solução ainda não disponível.";
  const text = `${title}\n${practiceTitle}\n\n${solution}\n`;
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${slugify(title)}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function corrigirExercicioC(button) {
  const exercise = button.closest("[data-c-exercise]");
  if (!exercise) return;

  const answer = exercise.querySelector("textarea")?.value.trim() || "";
  const feedback = exercise.querySelector("[data-c-feedback]");
  const expected = (exercise.dataset.expected || "").split("|").filter(Boolean);
  const model = exercise.dataset.model || "";
  const now = new Date().toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" });
  const matched = expected.filter((word) => answer.toLowerCase().includes(word.toLowerCase()));

  const message = answer
    ? `
      <div class="exercise-feedback-entry">
        <strong>Correção ${now}</strong>
        <p>${matched.length ? `Bom caminho: a tua resposta já refere ${matched.map((word) => `<em>${escapeHtml(word)}</em>`).join(", ")}.` : "A resposta ainda está muito incompleta. Revê a explicação e tenta acrescentar os conceitos essenciais."}</p>
        <p><strong>Resposta orientadora:</strong> ${model}</p>
      </div>
    `
    : `
      <div class="exercise-feedback-entry">
        <strong>Correção ${now}</strong>
        <p>Ainda não escreveste uma resposta. Escreve primeiro a tua tentativa e volta a pedir correção.</p>
      </div>
    `;

  if (feedback) {
    feedback.insertAdjacentHTML("beforeend", message);
    if (answer) {
      exercise.classList.add("is-corrected");
    }
  }
}

function setupModal() {
  let backdrop = document.querySelector(".modal-backdrop");

  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    backdrop.hidden = true;
    backdrop.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button class="modal-close" type="button" aria-label="Fechar">×</button>
        <h2 id="modal-title"></h2>
        <div id="modal-body"></div>
      </div>
    `;
    document.body.appendChild(backdrop);
  }

  const close = backdrop.querySelector(".modal-close");
  const title = backdrop.querySelector("#modal-title");
  const body = backdrop.querySelector("#modal-body");

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-modal]");
    if (!trigger) return;

    const content = modalContent[trigger.dataset.modal];
    if (!content || !backdrop || !title || !body) return;

    title.textContent = content.title;
    body.innerHTML = content.body;
    backdrop.hidden = false;
  });

  function hideModal() {
    if (backdrop) backdrop.hidden = true;
  }

  close?.addEventListener("click", hideModal);
  backdrop?.addEventListener("click", (event) => {
    if (event.target === backdrop) hideModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") hideModal();
  });
}

function renderHomeCards() {
  const grid = document.getElementById("home-content-grid");
  if (!grid) return;

  const visibleTopics = getOfficialProgramTopics();

  grid.innerHTML = visibleTopics.length ? visibleTopics.map((topic, index) => `
    <a class="card card-link" href="${topic.url}">
      <h3>${index + 1}. ${topic.cardTitle || topic.title}</h3>
      <p>${topic.intro}</p>
    </a>
  `).join("") : '<p class="submenu-note">Conteúdos ocultos neste momento.</p>';
}

function renderConteudosIndex() {
  const grid = document.getElementById("conteudos-index-grid");
  if (!grid) return;

  const visibleTopics = getOfficialProgramTopics();

  grid.innerHTML = visibleTopics.length ? visibleTopics.map((topic, index) => `
    <a class="card card-link" href="${topic.url}">
      <h3>${index + 1}. ${topic.cardTitle || topic.title}</h3>
      <p>${topic.intro}</p>
    </a>
  `).join("") : '<p class="submenu-note">Conteúdos ocultos neste momento.</p>';
}

function aplicarVisibilidadeElementosEstaticos() {
  document.querySelectorAll("[data-site-section]").forEach((element) => {
    const key = element.dataset.siteSection;
    element.hidden = key ? !itemSiteVisivel(key) : false;
  });

  resources.forEach((resource) => {
    const element = document.getElementById(`recursos-${resource.id}`);
    if (element) {
      element.hidden = !resourceSiteVisivel(resource.id);
    }
  });

  evaluationItems.forEach((item) => {
    const selector = `.assessment-row a[href$="${item.url.replace("atividades/", "")}"], .assessment-row a[href$="${item.url}"]`;
    document.querySelectorAll(selector).forEach((link) => {
      const row = link.closest(".assessment-row");
      if (row) {
        row.hidden = !evaluationSiteVisivel(item.id);
      }
    });

    (item.children || []).forEach((child) => {
      const childSelector = `.assessment-row a[href$="${child.url.replace("atividades/", "")}"], .assessment-row a[href$="${child.url}"]`;
      document.querySelectorAll(childSelector).forEach((link) => {
        link.hidden = !evaluationSiteVisivel(child.id);
      });
    });
  });

  activities.forEach((activity) => {
    const selector = `a[href$="${activity.url.replace("atividades/", "")}"], a[href$="${activity.url}"]`;
    document.querySelectorAll(selector).forEach((link) => {
      const card = link.closest(".activity-summary, .activity-info-card, article");
      if (card && card.closest("#atividades")) {
        card.hidden = !activitySiteVisivel(activity.id);
      }
    });
  });
}

function renderContentMenus() {
  const menus = document.querySelectorAll("#submenu-conteudos");
  if (!menus.length) return;

  const basePath = getBasePath();
  const topicById = Object.fromEntries(topics.map((topic) => [topic.id, topic]));
  const currentFile = window.location.pathname.split("/").pop() || "";

  function renderTopicLink(item) {
    const topic = topicById[item.topicId];

    if (topic) {
      const topicFile = topic.url.split("/").pop();
      const isActive = topicFile === currentFile;
      const classes = [isActive ? "active" : "", item.theme ? `submenu-link-${item.theme}` : ""].filter(Boolean).join(" ");
      return `<a href="${basePath}${topic.url}" class="${classes}" ${isActive ? 'aria-current="page"' : ""}>${topic.title}</a>`;
    }

    return `<span class="submenu-note submenu-placeholder">${item.title}${item.status ? ` <small>${item.status}</small>` : ""}</span>`;
  }

  menus.forEach((menu) => {
    menu.innerHTML = contentMenuGroups.map((item) => {
      if (item.children) {
        const visibleChildren = item.children;
        if (!visibleChildren.length) return "";
        const groupId = `content-group-${item.title.toLowerCase().replace(/\s+/g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
        const groupIsActive = visibleChildren.some((child) => {
          const topic = topicById[child.topicId];
          return topic && topic.url.split("/").pop() === currentFile;
        });

        return `
          <button class="submenu-heading ${item.theme ? `submenu-heading-${item.theme}` : ""}" type="button" aria-expanded="${groupIsActive ? "true" : "false"}" aria-controls="${groupId}">
            <span>${item.title}</span>
            <b aria-hidden="true">&#9662;</b>
          </button>
          <div class="submenu-children submenu-group-children" id="${groupId}" ${groupIsActive ? "" : "hidden"}>
            ${visibleChildren.map(renderTopicLink).join("")}
          </div>
        `;
      }

      return renderTopicLink(item);
    }).join("") || '<span class="submenu-note">Conteúdos ocultos neste momento</span>';

    menu.querySelectorAll(".submenu-heading[aria-controls]").forEach((button) => {
      button.addEventListener("click", () => {
        const group = document.getElementById(button.getAttribute("aria-controls"));
        const isOpen = button.getAttribute("aria-expanded") === "true";

        button.setAttribute("aria-expanded", String(!isOpen));
        if (group) {
          group.hidden = isOpen;
        }
      });
    });
  });
}

function getAllActivities() {
  return [...activities, ...evaluationItems].flatMap((activity) => [activity, ...(activity.children || [])]);
}

function setupEvaluationMenu() {
  const evaluationLink = document.querySelector('.side-nav a[href$="#avaliacao"]');
  const existingButton = document.querySelector('[aria-controls="submenu-avaliacao"]');
  const existingSubmenu = document.getElementById("submenu-avaliacao");

  if (!evaluationLink && !existingSubmenu) return;

  const basePath = getBasePath();
  const button = existingButton || document.createElement("a");
  const submenu = existingSubmenu || document.createElement("div");

  if (!existingButton) {
    button.className = "nav-parent";
    button.href = `${basePath}index.html#avaliacao`;
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", "submenu-avaliacao");
    button.innerHTML = 'Avaliação <span aria-hidden="true">&#9662;</span>';
  }

  if (!existingSubmenu) {
    submenu.className = "submenu evaluation-submenu";
    submenu.id = "submenu-avaliacao";
  }

  const visibleEvaluationItems = evaluationItems;

  submenu.innerHTML = visibleEvaluationItems.length ? visibleEvaluationItems.map((item) => `
    <a href="${basePath}${item.url}">${item.menuTitle || item.title}</a>
    ${(item.children || []).length ? `
      <div class="submenu-children">
        ${item.children.map((child) => `<a href="${basePath}${child.url}">${child.menuTitle || child.title}</a>`).join("")}
      </div>
    ` : ""}
  `).join("") : '<span class="submenu-note">Avaliações ocultas neste momento</span>';

  if (evaluationLink && !existingButton) {
    evaluationLink.replaceWith(button);
    button.after(submenu);
  }

  const currentActivity = document.body.dataset.activity;
  const evaluationIds = evaluationItems.flatMap((item) => [item.id, ...(item.children || []).map((child) => child.id)]);
  if (evaluationIds.includes(currentActivity)) {
    button.setAttribute("aria-expanded", "true");
    submenu.classList.add("open");
    document.querySelector('[aria-controls="submenu-atividades"]')?.setAttribute("aria-expanded", "false");
    document.getElementById("submenu-atividades")?.classList.remove("open");
  }
}

function renderActivityMenus() {
  const menus = document.querySelectorAll(".activity-submenu");
  if (!menus.length) return;

  const basePath = getBasePath();
  const currentFile = window.location.pathname.split("/").pop() || "";

  menus.forEach((menu) => {
    const visibleActivities = activities;

    if (!visibleActivities.length) {
      menu.innerHTML = '<span class="submenu-note">A acrescentar gradualmente</span>';
      return;
    }

    menu.innerHTML = visibleActivities.map((activity) => `
      <a href="${basePath}${activity.url}" class="${activity.url.split("/").pop() === currentFile ? "active" : ""}">${activity.title}</a>
      ${(activity.children || []).length ? `
        <div class="submenu-children">
          ${activity.children.map((child) => `<a href="${basePath}${child.url}" class="${child.url.split("/").pop() === currentFile ? "active" : ""}">${child.title}</a>`).join("")}
        </div>
      ` : ""}
    `).join("");
  });
}

function renderResourceMenus() {
  const menus = document.querySelectorAll(".resource-submenu");
  if (!menus.length) return;

  const basePath = getBasePath();

  menus.forEach((menu) => {
    menu.innerHTML = resources.filter((resource) => resource.url && resourceSiteVisivel(resource.id)).map((resource) => `
      <a href="${basePath}${resource.url}" class="${resource.menuIcon ? "submenu-icon-link" : ""}">
        ${resource.menuIcon ? `<img src="${basePath}${resource.menuIcon}" alt="" aria-hidden="true">` : ""}
        <span>${resource.menuTitle || resource.title}</span>
      </a>
    `).join("") || '<span class="submenu-note">Recursos ocultos neste momento</span>';
  });
}

function renderSiteVisibilityControls() {
  const items = garantirItensVisibilidadeSite();
  const sectionTitles = {
    conteudos: "Conteúdos",
    atividades: "Atividades",
    programa_galeria: "Programa e Galeria",
    apresentacao_salas: "Apresentação das salas",
    avaliacao: "Avaliação",
    recursos: "Recursos",
    tarefas_grupo: "Tarefas de Grupo",
    tarefas_individuais: "Tarefas Individuais",
    laboratorio_codigo: "Laboratório de Código",
    praticas_c: "Práticas C",
    praticas_extra_1: "Extra 1",
    praticas_extra_2: "Extra 2",
    praticas_extra_3: "Extra 3",
    praticas_extra_4: "Extra 4"
  };

  const sections = Object.keys(sectionTitles).map((secao) => {
    const sectionItems = items
      .filter((item) => item.secao === secao)
      .sort((a, b) => (Number(a.ordem) || 0) - (Number(b.ordem) || 0));
    const sectionItem = sectionItems.find((item) => item.nivel === "secao");
    const childItems = sectionItems.filter((item) => item.nivel !== "secao");

    return {
      secao,
      title: sectionItem?.titulo || sectionTitles[secao],
      sectionItem,
      childItems
    };
  }).filter((section) => section.sectionItem || section.childItems.length);

  const renderToggle = (item) => {
    const checked = normalizarBooleanVisibilidade(item.visivel, true) ? "checked" : "";
    return `
      <label class="site-control-option ${item.nivel === "secao" ? "site-control-option-section" : ""}">
        <input
          type="checkbox"
          data-site-visibility-key="${escapeHtml(item.chave)}"
          ${checked}>
        <span>${escapeHtml(item.titulo)}</span>
      </label>
    `;
  };

  const renderGroup = (section) => {
    const open = ["programa_galeria", "apresentacao_salas"].includes(section.secao) ? "open" : "";
    return `
    <details class="site-control-group" ${open}>
      <summary class="site-control-group-heading">
        <h3>${escapeHtml(section.title)}</h3>
        <span>${section.childItems.length} itens</span>
      </summary>
      <div class="site-control-group-body">
        ${section.sectionItem ? `
          <div class="site-control-section-toggle">
            ${renderToggle(section.sectionItem)}
          </div>
        ` : ""}
        <div class="site-control-options">
          ${section.childItems.map(renderToggle).join("")}
        </div>
      </div>
    </details>
  `;
  };

  return `
    <div class="site-control-card">
      <div class="site-control-heading">
        <div>
          <p>Aqui o formador decide o que fica disponível em cada momento da formação. As secções podem ser ligadas ou desligadas como bloco, e cada item pode ser controlado individualmente.</p>
        </div>
        <div class="site-control-actions">
          <button class="small-button orange" type="button" data-action="show-all-site-visibility">Disponibilizar tudo</button>
          <button class="small-button" type="button" data-action="save-site-visibility">Guardar na Apps Script</button>
          <p class="teams-control-status" data-site-control-status>Alterações guardadas neste browser.</p>
        </div>
      </div>
      <div class="site-control-grid">
        ${sections.map(renderGroup).join("")}
      </div>
    </div>
  `;
}

function atualizarControlosVisibilidadeDoSite(root) {
  garantirItensVisibilidadeSite();
  sincronizarVisibilidadeLegacyDoSite();

  root.querySelectorAll("[data-site-visibility-key]").forEach((input) => {
    const key = input.dataset.siteVisibilityKey;
    const item = siteVisibilityItems.find((visibilityItem) => visibilityItem.chave === key);
    if (item) {
      input.checked = normalizarBooleanVisibilidade(item.visivel, true);
    }
  });
}

function renderTeamsControl(root, options = {}) {
  const compact = Boolean(options.compact);
  const publicView = Boolean(options.publicView);

  root.innerHTML = `
    <section class="section task-page-section teams-control-section ${compact ? "compact-page-section" : ""}">
      <div class="section-inner">
        <details class="teams-page-accordion" ${publicView ? "open" : ""}>
          <summary>
            <span class="teams-accordion-copy">
              <span class="eyebrow">Teams</span>
              <strong>Partilha de ecrã</strong>
              <small>Tabela simples para acompanhar quantas vezes cada formando já partilhou o ecrã nas reuniões Teams.</small>
            </span>
          </summary>

          <div class="teams-accordion-body">
            <div class="teams-control-layout teams-control-layout-simple">
              <article class="card teams-summary-card">
                <p class="eyebrow">Resumo</p>
                <div class="teams-summary-grid">
                  <span><strong data-teams-total>0</strong><em>Total</em></span>
                  <span><strong data-teams-done>0</strong><em>Já partilharam</em></span>
                  <span><strong data-teams-missing>0</strong><em>Ainda sem partilha</em></span>
                </div>
                <p class="teams-config-note" data-teams-config-note></p>
                <p class="teams-control-status" data-teams-status></p>
              </article>
            </div>

            <div class="card teams-table-card">
              <div class="teams-table-heading">
                <div>
                  <p class="eyebrow">Mapa</p>
                  <h2>Formandos</h2>
                </div>
                ${publicView ? "" : `<label class="teams-toggle">
                  <input type="checkbox" data-action="teams-show-inactive">
                  <span>Mostrar desativados</span>
                </label>`}
              </div>
              <div class="teams-table-wrap">
                <table class="teams-control-table ${publicView ? "teams-public-table" : ""}">
                  <thead>
                    <tr>
                      <th>Nome do formando</th>
                      <th>N.º de partilhas</th>
                      <th>Último registo</th>
                      ${publicView ? "" : "<th>Estado</th>"}
                      ${publicView ? "" : "<th>Partilhas</th>"}
                    </tr>
                  </thead>
                  <tbody data-teams-table-body>
                    <tr><td colspan="${publicView ? "3" : "5"}">Ainda não existem formandos carregados.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </details>

        ${publicView ? "" : `
          <details class="teams-page-accordion site-control-accordion" open>
            <summary>
              <span class="teams-accordion-copy">
                <span class="eyebrow">Administração</span>
                <strong>Controlo do site</strong>
                <small>Ativa ou desativa conteúdos, atividades, programa final, galeria, apresentação das salas, avaliações, recursos e tarefas.</small>
              </span>
            </summary>
            <div class="teams-accordion-body">
              ${renderSiteVisibilityControls()}
            </div>
          </details>
        `}
      </div>
    </section>
  `;

  root.dataset.teamsPublicView = publicView ? "true" : "false";
  setupTeamsAccordions(root);
  setupTeamsControl(root);
}

function setupTeamsAccordions(root) {
  const accordions = [...root.querySelectorAll(".teams-page-accordion")];
  if (!accordions.length) return;

  accordions.forEach((accordion) => {
    accordion.addEventListener("toggle", () => {
      if (!accordion.open) return;
      accordions.forEach((otherAccordion) => {
        if (otherAccordion !== accordion) {
          otherAccordion.open = false;
        }
      });
    });
  });
}

function setupSiteControlAccordions(root) {
  const accordions = [...root.querySelectorAll(".site-control-group")];
  if (!accordions.length) return;

  accordions.forEach((accordion) => {
    accordion.addEventListener("toggle", () => {
      if (!accordion.open) return;
      accordions.forEach((otherAccordion) => {
        if (otherAccordion !== accordion) {
          otherAccordion.open = false;
        }
      });
    });
  });
}

async function setupTeamsControl(root) {
  const status = root.querySelector("[data-teams-status]");
  const configNote = root.querySelector("[data-teams-config-note]");
  const controlStatus = root.querySelector("[data-site-control-status]");

  if (!APPS_SCRIPT_WEB_APP_URL) {
    if (configNote) {
      configNote.textContent = "Ligação ao Apps Script ainda não configurada. A página está pronta, mas precisa do URL da Web App para carregar formandos e guardar partilhas.";
    }
    if (status) {
      status.textContent = "Configura o URL da Web App do Apps Script em APPS_SCRIPT_WEB_APP_URL.";
    }
  }

  if (controlStatus) controlStatus.textContent = "A carregar visibilidade do site...";
  const visibilidadeRemotaOk = await carregarVisibilidadeRemotaDoSite();
  if (document.body.dataset.page === "teams-control") {
    disponibilizarTodosItensDoSite();
    guardarVisibilidadeDoSite();
    guardarVisibilidadeRemotaDoSite();
  }
  atualizarControlosVisibilidadeDoSite(root);
  setupSiteControlAccordions(root);
  if (controlStatus) {
    controlStatus.textContent = document.body.dataset.page === "teams-control"
      ? "Tudo disponivel no controlo do site. Pedido enviado para a Apps Script."
      : (visibilidadeRemotaOk
        ? "Visibilidade carregada da configuração central."
        : "Alterações guardadas neste browser. A configuração central ainda não respondeu.");
  }

  await carregarDadosTeams(root);

  if (APPS_SCRIPT_WEB_APP_URL) {
    window.setInterval(() => carregarDadosTeams(root), 30000);
  }

  root.addEventListener("click", async (event) => {
    const showAllVisibilityButton = event.target.closest('[data-action="show-all-site-visibility"]');
    if (showAllVisibilityButton) {
      const controlStatus = root.querySelector("[data-site-control-status]");
      const totalItens = disponibilizarTodosItensDoSite().length;
      showAllVisibilityButton.disabled = true;
      guardarVisibilidadeDoSite();
      atualizarControlosVisibilidadeDoSite(root);
      await guardarVisibilidadeRemotaDoSite();
      if (controlStatus) controlStatus.textContent = `Tudo disponivel. Pedido enviado com ${totalItens} itens.`;
      showAllVisibilityButton.disabled = false;
      return;
    }

    const saveVisibilityButton = event.target.closest('[data-action="save-site-visibility"]');
    if (saveVisibilityButton) {
      const controlStatus = root.querySelector("[data-site-control-status]");
      const totalItens = garantirItensVisibilidadeSite().length;
      saveVisibilityButton.disabled = true;
      if (controlStatus) controlStatus.textContent = `A guardar ${totalItens} itens na Apps Script...`;
      guardarVisibilidadeDoSite();
      await guardarVisibilidadeRemotaDoSite();
      if (controlStatus) controlStatus.textContent = `Pedido enviado para a Apps Script: ${totalItens} itens. Confirma a folha Visibilidade_Site.`;
      saveVisibilityButton.disabled = false;
      return;
    }

    const button = event.target.closest("[data-teams-action]");
    if (!button) return;
    await registarAcaoPartilhaEcra(root, button.dataset.nome || "", button.dataset.teamsAction || "incrementar");
  });

  root.addEventListener("change", (event) => {
    if (event.target.matches('[data-action="teams-show-inactive"]')) {
      root.dataset.showInactiveTeams = event.target.checked ? "true" : "false";
      carregarDadosTeams(root);
      return;
    }

    if (event.target.matches("[data-site-visibility-key]")) {
      const key = event.target.dataset.siteVisibilityKey;
      const item = siteVisibilityItems.find((visibilityItem) => visibilityItem.chave === key);
      if (item) {
        item.visivel = event.target.checked;

        if (item.nivel === "secao") {
          siteVisibilityItems.forEach((visibilityItem) => {
            if (visibilityItem.secao === item.secao && visibilityItem.nivel !== "secao") {
              visibilityItem.visivel = event.target.checked;
            }
          });
        } else if (event.target.checked) {
          const sectionItem = siteVisibilityItems.find((visibilityItem) => (
            visibilityItem.secao === item.secao && visibilityItem.nivel === "secao"
          ));
          if (sectionItem) {
            sectionItem.visivel = true;
          }
        }

        sincronizarVisibilidadeLegacyDoSite();
        const totalItens = garantirItensVisibilidadeSite().length;
        guardarVisibilidadeDoSite();
        atualizarControlosVisibilidadeDoSite(root);
        guardarVisibilidadeRemotaDoSite();
        const controlStatus = root.querySelector("[data-site-control-status]");
        if (controlStatus) controlStatus.textContent = `Visibilidade atualizada. Pedido enviado com ${totalItens} itens.`;
      }
    }
  });
}

async function carregarDadosTeams(root) {
  if (!APPS_SCRIPT_WEB_APP_URL) {
    preencherTabelaTeams(root, [], []);
    atualizarResumoTeams(root, [], []);
    return;
  }

  const status = root.querySelector("[data-teams-status]");

  try {
    const [formandos, registos] = await Promise.all([
      obterJsonAppsScript({ acao: "formandos" }),
      obterJsonAppsScript({ acao: "registos", questionario: "Partilha de ecrã" })
    ]);

    preencherTabelaTeams(root, formandos.formandos || [], registos.registos || []);
    atualizarResumoTeams(root, registos.registos || [], formandos.formandos || []);

    if (status) status.textContent = "Dados carregados.";
  } catch (erro) {
    if (status) status.textContent = "Não foi possível carregar dados do Apps Script.";
  }
}

function preencherTabelaTeams(root, formandos, registos) {
  const tbody = root.querySelector("[data-teams-table-body]");
  if (!tbody) return;

  const nomes = obterNomesTeams(formandos, registos);
  const estado = calcularEstadoPartilhaTeams(registos);
  const publicView = root.dataset.teamsPublicView === "true";
  const mostrarDesativados = root.dataset.showInactiveTeams === "true";
  const nomesVisiveis = nomes.filter((nome) => mostrarDesativados || estado[nome]?.ativo !== false);
  const colspan = publicView ? 3 : 5;

  if (!nomesVisiveis.length) {
    tbody.innerHTML = `<tr><td colspan="${colspan}">Ainda não existem formandos carregados.</td></tr>`;
    return;
  }

  const maxPartilhas = Math.max(...nomesVisiveis.map((nome) => estado[nome]?.total || 0), 0);

  tbody.innerHTML = nomesVisiveis.map((nome) => {
    const dados = estado[nome] || { total: 0, ultimo: "", ativo: true };
    const ativo = dados.ativo !== false;
    const total = dados.total || 0;
    const percentagem = maxPartilhas > 0 ? Math.max((total / maxPartilhas) * 100, 6) : 0;
    const barClass = total === 0 ? "is-zero" : total === maxPartilhas ? "is-max" : "is-mid";
    return `
    <tr class="${ativo ? "" : "teams-row-inactive"}">
      <td>${escapeHtml(nome)}</td>
      <td>
        <div class="teams-share-meter ${barClass}" style="--share-level: ${percentagem}%">
          <strong>${total > 0 ? total : ""}</strong>
          <span aria-hidden="true"></span>
        </div>
      </td>
      <td>${escapeHtml(formatarDataTeams(dados.ultimo || ""))}</td>
      ${publicView ? "" : `
      <td>
        <div class="teams-state-actions">
          <button class="small-button teams-status-button teams-activate-button" type="button" data-teams-action="ativar" data-nome="${escapeHtml(nome)}" ${ativo ? "disabled" : ""}>Ativar</button>
          <button class="small-button teams-status-button teams-deactivate-button" type="button" data-teams-action="desativar" data-nome="${escapeHtml(nome)}" ${ativo ? "" : "disabled"}>Desativar</button>
        </div>
      </td>
      `}
      ${publicView ? "" : `<td>
        <div class="teams-actions">
          <button class="small-button teams-count-button teams-plus-button" type="button" data-teams-action="incrementar" data-nome="${escapeHtml(nome)}" ${ativo ? "" : "disabled"} aria-label="Adicionar partilha de ${escapeHtml(nome)}">+</button>
          <button class="small-button teams-count-button teams-minus-button" type="button" data-teams-action="decrementar" data-nome="${escapeHtml(nome)}" ${ativo ? "" : "disabled"} aria-label="Remover uma partilha de ${escapeHtml(nome)}">-</button>
        </div>
      </td>`}
    </tr>
  `;
  }).join("");
}

function atualizarResumoTeams(root, registos, formandos = []) {
  const nomes = obterNomesTeams(formandos, registos);
  const estado = calcularEstadoPartilhaTeams(registos);
  const nomesAtivos = nomes.filter((nome) => estado[nome]?.ativo !== false);
  const apresentaram = nomesAtivos.filter((nome) => (estado[nome]?.total || 0) > 0);

  const total = nomesAtivos.length;
  const done = apresentaram.length;
  const missing = Math.max(total - done, 0);

  const totalEl = root.querySelector("[data-teams-total]");
  const doneEl = root.querySelector("[data-teams-done]");
  const missingEl = root.querySelector("[data-teams-missing]");

  if (totalEl) totalEl.textContent = String(total);
  if (doneEl) doneEl.textContent = String(done);
  if (missingEl) missingEl.textContent = String(missing);
}

function obterNomesTeams(formandos, registos) {
  const nomes = new Set(formandos.filter(Boolean));
  registos.forEach((registo) => {
    if (registo["Nome do formando"]) nomes.add(registo["Nome do formando"]);
  });
  return Array.from(nomes).sort((a, b) => a.localeCompare(b, "pt-PT"));
}

function normalizarAcaoTeams(valor) {
  return String(valor || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function calcularEstadoPartilhaTeams(registos) {
  return registos.reduce((acc, registo) => {
    const nome = registo["Nome do formando"];
    if (!nome) return acc;

    if (!acc[nome]) {
      acc[nome] = { total: 0, ultimo: "", ativo: true };
    }

    const acao = normalizarAcaoTeams(registo["Ação"] || registo.Acao || registo["Acção"] || registo["Partilha de ecrã"]);

    if (acao === "desativar" || acao === "desativado") {
      acc[nome].ativo = false;
    } else if (acao === "ativar" || acao === "ativo") {
      acc[nome].ativo = true;
    } else if (acao === "decrementar" || acao === "remover" || acao === "removida" || acao === "removido" || acao === "nao" || acao === "não" || acao === "-1") {
      acc[nome].total = Math.max((acc[nome].total || 0) - 1, 0);
      acc[nome].ultimo = registo["Data da reunião"] || registo.Data || acc[nome].ultimo;
    } else if (acao === "" || acao === "sim" || acao === "incrementar" || acao === "+1") {
      acc[nome].total += 1;
      acc[nome].ultimo = registo["Data da reunião"] || registo.Data || acc[nome].ultimo;
    }

    return acc;
  }, {});
}

async function registarAcaoPartilhaEcra(root, nome, acao) {
  const status = root.querySelector("[data-teams-status]");

  if (!nome) {
    if (status) status.textContent = "Não foi possível identificar o formando.";
    return;
  }

  if (!APPS_SCRIPT_WEB_APP_URL) {
    if (status) status.textContent = "Não foi possível guardar: falta configurar o URL do Apps Script.";
    return;
  }

  try {
    await fetch(APPS_SCRIPT_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        spreadsheet_id: APPS_SCRIPT_SPREADSHEET_ID,
        questionario: "Partilha de ecrã",
        respostas: {
          "Nome do formando": nome,
          "Data da reunião": new Date().toISOString().slice(0, 10),
          "Partilha de ecrã": obterValorPartilhaTeams(acao),
          "Ação": acao
        }
      }),
      headers: { "Content-Type": "text/plain;charset=utf-8" }
    });

    if (status) status.textContent = mensagemAcaoPartilhaTeams(nome, acao);
    await aguardar(1200);
    await carregarDadosTeams(root);
  } catch (erro) {
    if (status) status.textContent = "Não foi possível guardar a alteração.";
  }
}

function mensagemAcaoPartilhaTeams(nome, acao) {
  if (acao === "decrementar") return `Foi removida uma partilha de ${nome}.`;
  if (acao === "desativar") return `${nome} foi desativado da lista.`;
  if (acao === "ativar") return `${nome} voltou à lista ativa.`;
  return `Partilha registada para ${nome}.`;
}

function obterValorPartilhaTeams(acao) {
  if (acao === "decrementar") return "Removida";
  if (acao === "desativar") return "Desativar";
  if (acao === "ativar") return "Ativar";
  return "Sim";
}

function formatarDataTeams(valor) {
  const texto = String(valor || "").trim();
  if (!texto) return "";

  if (/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
    const [ano, mes, dia] = texto.split("-");
    return `${dia}/${mes}/${ano}`;
  }

  const data = new Date(texto);
  if (!Number.isNaN(data.getTime())) {
    return data.toLocaleDateString("pt-PT");
  }

  return texto.split("T")[0] || texto;
}

function aguardar(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function criarIdCurto(prefixo) {
  const valor = window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  return `${prefixo}-${valor}`;
}

async function obterJsonAppsScript(params) {
  const url = new URL(APPS_SCRIPT_WEB_APP_URL);
  if (APPS_SCRIPT_SPREADSHEET_ID) {
    url.searchParams.set("spreadsheet_id", APPS_SCRIPT_SPREADSHEET_ID);
  }
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  return obterJsonp(url.toString());
}

function obterJsonp(url) {
  return new Promise((resolve, reject) => {
    const callbackName = `ufcd10788Callback_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const separator = url.includes("?") ? "&" : "?";

    window[callbackName] = (dados) => {
      delete window[callbackName];
      script.remove();
      resolve(dados);
    };

    script.onerror = () => {
      delete window[callbackName];
      script.remove();
      reject(new Error("Não foi possível carregar dados do Apps Script."));
    };

    script.src = `${url}${separator}callback=${callbackName}`;
    document.body.appendChild(script);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function slugify(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "pratica";
}

function renderTaskTrackingShell(tipo) {
  const label = tipo === "TI" ? "Tarefas Individuais" : "Tarefas de Grupo";
  return `
    <details class="task-tracking-card">
      <summary>
        <span class="task-module-copy">
          <strong>Acompanhamento das tarefas</strong>
          <small>${label}: consulta rápida das entregas registadas na folha Tarefas.</small>
        </span>
        <span class="task-module-mark task-tracking-mark" aria-hidden="true">${tipo}</span>
      </summary>
      <div class="task-tracking-body" data-task-tracking="${tipo}">
        <p class="task-tracking-status">A carregar dados da folha Tarefas...</p>
      </div>
    </details>
  `;
}

async function carregarERenderizarAcompanhamentoTarefas(tipo) {
  const container = document.querySelector(`[data-task-tracking="${tipo}"]`);
  if (!container) return;

  if (!APPS_SCRIPT_WEB_APP_URL) {
    renderTaskTrackingError(container, "A ligação ao Apps Script ainda não está configurada.");
    return;
  }

  try {
    const dados = await carregarAcompanhamentoTarefas();
    const normalizado = normalizarAcompanhamentoTarefas(dados, tipo);
    renderTaskTracking(container, normalizado, tipo);
  } catch (error) {
    renderTaskTrackingError(container, "Não foi possível carregar a folha Tarefas. Confirma se a Apps Script já expõe a ação acompanhamento_tarefas.");
  }
}

function carregarAcompanhamentoTarefas() {
  if (taskTrackingCache) return Promise.resolve(taskTrackingCache);
  if (taskTrackingLoading) return taskTrackingLoading;

  taskTrackingLoading = Promise.allSettled([
    obterJsonAppsScript({ acao: "formandos" }),
    obterJsonAppsScript({ acao: "acompanhamento_tarefas" }),
    obterJsonAppsScript({ acao: "tarefas" })
  ])
    .then(([formandosResult, acompanhamentoResult, tarefasResult]) => {
      const formandosDados = formandosResult.status === "fulfilled" ? formandosResult.value : {};
      const acompanhamentoDados = acompanhamentoResult.status === "fulfilled" ? acompanhamentoResult.value : {};
      const tarefasDados = tarefasResult.status === "fulfilled" ? tarefasResult.value : {};
      const linhasAcompanhamento = obterLinhasAcompanhamentoTarefas(acompanhamentoDados);
      const linhasTarefas = obterLinhasAcompanhamentoTarefas(tarefasDados);

      const formandos = extrairListaFormandosTarefas(formandosDados);

      taskTrackingCache = {
        formandos: formandos.length ? formandos : TASK_TRACKING_FALLBACK_STUDENTS,
        linhas: [
          ...linhasAcompanhamento,
          ...linhasTarefas
        ],
        tarefasDisponiveis: linhasAcompanhamento.length > 0 || linhasTarefas.length > 0,
        origem: {
          formandos: formandosDados,
          acompanhamento: acompanhamentoDados,
          tarefas: tarefasDados
        }
      };
      return taskTrackingCache;
    })
    .finally(() => {
      taskTrackingLoading = null;
    });

  return taskTrackingLoading;
}

function normalizarAcompanhamentoTarefas(dados, tipo) {
  const codes = TASK_TRACKING_CODES[tipo] || [];
  const linhas = obterLinhasAcompanhamentoTarefas(dados);

  if (tipo === "TG") {
    return normalizarAcompanhamentoTarefasGrupo(dados, codes, linhas);
  }

  const nomesOficiais = Array.from(new Set([
    ...extrairListaFormandosTarefas(dados),
    ...obterNomesOficiaisTarefas(dados, linhas)
  ])).sort((a, b) => a.localeCompare(b, "pt-PT"));
  const linhasPorNome = new Map();

  linhas.forEach((linha) => {
    const nome = obterNomeLinhaTarefa(linha);
    const chave = normalizarNomeTarefa(nome);
    if (chave && !linhasPorNome.has(chave)) linhasPorNome.set(chave, linha);
  });

  const formandos = nomesOficiais.map((nome) => {
    const linha = linhasPorNome.get(normalizarNomeTarefa(nome)) || {};
    const entregas = codes.reduce((acc, code) => {
      acc[code] = celulaTarefaPreenchida(obterValorTarefa(linha, code));
      return acc;
    }, {});
    const totalEntregues = codes.filter((code) => entregas[code]).length;
    return { nome, entregas, totalEntregues };
  });

  const resumoTarefas = codes.map((code) => {
    const entregues = formandos.filter((formando) => formando.entregas[code]).length;
    const emFalta = formandos.length - entregues;
    return { code, entregues, emFalta, total: formandos.length };
  });

  return {
    tipo,
    codes,
    linhas: formandos,
    resumoTarefas,
    totalUnidades: formandos.length,
    unidadeLabel: "Formandos",
    primeiraColunaLabel: "Formando",
    tarefasDisponiveis: Boolean(dados?.tarefasDisponiveis)
  };
}

function normalizarAcompanhamentoTarefasGrupo(dados, codes, linhas) {
  const salasPorNome = new Map();

  linhas.forEach((linha) => {
    const sala = obterGrupoLinhaTarefa(linha);
    if (!sala) return;
    const chave = normalizarNomeTarefa(sala);
    if (!salasPorNome.has(chave)) {
      salasPorNome.set(chave, { nome: sala, linhas: [] });
    }
    salasPorNome.get(chave).linhas.push(linha);
  });

  const salas = Array.from(salasPorNome.values())
    .sort((a, b) => ordenarSalas(a.nome, b.nome))
    .map((sala) => {
      const entregas = codes.reduce((acc, code) => {
        acc[code] = sala.linhas.some((linha) => celulaTarefaPreenchida(obterValorTarefa(linha, code)));
        return acc;
      }, {});
      const totalEntregues = codes.filter((code) => entregas[code]).length;
      return {
        nome: sala.nome,
        displayName: obterNumeroSala(sala.nome) || sala.nome,
        entregas,
        totalEntregues
      };
    });

  const resumoTarefas = codes.map((code) => {
    const entregues = salas.filter((sala) => sala.entregas[code]).length;
    const emFalta = salas.length - entregues;
    return { code, entregues, emFalta, total: salas.length };
  });

  return {
    tipo: "TG",
    codes,
    linhas: salas,
    resumoTarefas,
    totalUnidades: salas.length,
    unidadeLabel: "Salas",
    primeiraColunaLabel: "Sala",
    tarefasDisponiveis: Boolean(dados?.tarefasDisponiveis)
  };
}

function obterLinhasAcompanhamentoTarefas(dados) {
  if (!dados) return [];
  if (Array.isArray(dados)) return dados;
  if (Array.isArray(dados.tarefas)) return dados.tarefas;
  if (Array.isArray(dados.linhas)) return dados.linhas;
  if (Array.isArray(dados.rows)) return dados.rows;
  if (Array.isArray(dados.registos)) return dados.registos;
  if (dados.tarefas && typeof dados.tarefas === "object") {
    if (Array.isArray(dados.tarefas.linhas)) return dados.tarefas.linhas;
    if (Array.isArray(dados.tarefas.rows)) return dados.tarefas.rows;
  }
  return [];
}

function extrairListaFormandosTarefas(dados) {
  const listas = [
    dados?.formandos,
    dados?.Formandos,
    dados?.dados?.formandos,
    dados?.linhas,
    dados?.rows
  ];

  return listas.flatMap((lista) => {
    if (!Array.isArray(lista)) return [];
    return lista.map((item) => {
      if (typeof item === "string") return item.trim();
      return obterNomeLinhaTarefa(item);
    }).filter(Boolean);
  });
}

function obterNomesOficiaisTarefas(dados, linhas) {
  const nomes = new Set();
  const candidatos = [
    dados?.formandos,
    dados?.Formandos,
    dados?.dados?.formandos,
    dados?.tarefas?.formandos
  ];

  candidatos.forEach((lista) => {
    if (!Array.isArray(lista)) return;
    lista.forEach((item) => {
      const nome = typeof item === "string" ? item : obterNomeLinhaTarefa(item);
      if (nome) nomes.add(nome);
    });
  });

  linhas.forEach((linha) => {
    const nome = obterNomeLinhaTarefa(linha);
    if (nome) nomes.add(nome);
  });

  if (!nomes.size) {
    TASK_TRACKING_FALLBACK_STUDENTS.forEach((nome) => nomes.add(nome));
  }

  return Array.from(nomes).sort((a, b) => a.localeCompare(b, "pt-PT"));
}

function normalizarNomeTarefa(nome) {
  return String(nome || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase();
}

function obterNomeLinhaTarefa(linha) {
  if (!linha || typeof linha !== "object") return "";
  return String(
    linha.Nome ||
    linha.nome ||
    linha.Formando ||
    linha.formando ||
    linha["Nome do formando"] ||
    linha["Formando"] ||
    ""
  ).trim();
}

function obterGrupoLinhaTarefa(linha) {
  if (!linha || typeof linha !== "object") return "";
  return String(
    linha.Grupo ||
    linha.grupo ||
    linha.Sala ||
    linha.sala ||
    linha["Grupo"] ||
    linha["Sala"] ||
    ""
  ).trim();
}

function ordenarSalas(a, b) {
  const numeroA = Number(String(a).match(/\d+/)?.[0] || Number.MAX_SAFE_INTEGER);
  const numeroB = Number(String(b).match(/\d+/)?.[0] || Number.MAX_SAFE_INTEGER);
  if (numeroA !== numeroB) return numeroA - numeroB;
  return String(a).localeCompare(String(b), "pt-PT");
}

function obterNumeroSala(nome) {
  return String(nome || "").match(/\d+/)?.[0] || "";
}

function obterValorTarefa(linha, code) {
  if (!linha || typeof linha !== "object") return "";
  if (Object.prototype.hasOwnProperty.call(linha, code)) return linha[code];
  if (Object.prototype.hasOwnProperty.call(linha, code.toLowerCase())) return linha[code.toLowerCase()];
  if (linha.tarefas && Object.prototype.hasOwnProperty.call(linha.tarefas, code)) return linha.tarefas[code];
  if (linha.Tarefas && Object.prototype.hasOwnProperty.call(linha.Tarefas, code)) return linha.Tarefas[code];
  return "";
}

function obterRotuloCodigoTarefa(code) {
  return String(code || "").endsWith("_Conclusão") ? "Conclusão" : code;
}

function celulaTarefaPreenchida(valor) {
  return String(valor ?? "").trim() !== "";
}

function renderTaskTracking(container, dados, tipo) {
  if (!dados.totalUnidades) {
    container.innerHTML = `
      <div class="task-tracking-warning">
        <strong>Dados indisponíveis</strong>
        <span>Para apresentar a tabela, a Apps Script tem de devolver a folha Tarefas e a lista oficial da folha Formandos.</span>
      </div>
    `;
    return;
  }

  const totalPossivel = dados.totalUnidades * dados.codes.length;
  const totalEntregues = dados.resumoTarefas.reduce((total, item) => total + item.entregues, 0);
  const totalEmFalta = totalPossivel - totalEntregues;
  const label = tipo === "TI" ? "tarefas individuais" : "tarefas de grupo";
  const avisoTarefas = dados.tarefasDisponiveis ? "" : `
    <div class="task-tracking-warning">
      <strong>Folha Tarefas ainda não recebida</strong>
      <span>A lista foi carregada, mas a Apps Script ainda não devolveu as colunas ${tipo}00 a ${tipo}12 da folha Tarefas.</span>
    </div>
  `;

  container.innerHTML = `
    ${avisoTarefas}

    <div class="task-tracking-summary">
      <span><strong>${dados.totalUnidades}</strong><em>${dados.unidadeLabel}</em></span>
      <span><strong>${totalEntregues}</strong><em>Entregas registadas</em></span>
      <span><strong>${totalEmFalta}</strong><em>Em falta</em></span>
    </div>

    <div class="task-tracking-table-wrap" aria-label="Acompanhamento de ${label}">
      <table class="task-tracking-table">
        <thead>
          <tr>
            <th scope="col">${dados.primeiraColunaLabel}</th>
            <th scope="col">Total</th>
            ${dados.codes.map((code) => `<th scope="col">${obterRotuloCodigoTarefa(code)}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${dados.linhas.map((linha) => `
            <tr>
              <th scope="row">${escapeHtml(linha.displayName || linha.nome)}</th>
              <td class="task-tracking-total">${linha.totalEntregues}/${dados.codes.length}</td>
              ${dados.codes.map((code) => {
                const entregue = linha.entregas[code];
                const estado = entregue ? "entregue" : "em falta";
                const rotulo = obterRotuloCodigoTarefa(code);
                return `
                  <td>
                    <span class="task-check ${entregue ? "is-done" : "is-missing"}" title="${rotulo}: ${estado}" aria-label="${rotulo}: ${estado}">
                      ${entregue ? "✓" : "×"}
                    </span>
                  </td>
                `;
              }).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderTaskTrackingError(container, mensagem) {
  container.innerHTML = `
    <div class="task-tracking-warning">
      <strong>Acompanhamento indisponível</strong>
      <span>${mensagem}</span>
    </div>
  `;
}

function renderStandaloneTaskTrackingPage() {
  const root = document.getElementById("task-tracking-root");
  if (!root) return;

  const tipo = document.body.dataset.taskTrackingType === "TG" ? "TG" : "TI";
  const titulo = tipo === "TG" ? "Acompanhamento das Tarefas de Grupo" : "Acompanhamento das Tarefas Individuais";
  const descricao = tipo === "TG"
    ? "Consulta rápida das entregas por sala, registadas na folha Tarefas."
    : "Consulta rápida das entregas por formando, registadas na folha Tarefas.";

  document.title = `UFCD 10788 | ${titulo}`;
  root.innerHTML = `
    <main class="task-tracking-standalone">
      <details class="task-tracking-card" open>
        <summary>
          <span class="task-module-copy">
            <strong>${titulo}</strong>
            <small>${descricao}</small>
          </span>
          <span class="task-module-mark task-tracking-mark" aria-hidden="true">${tipo}</span>
        </summary>
        <div class="task-tracking-body" data-task-tracking="${tipo}">
          <p class="task-tracking-status">A carregar dados da folha Tarefas...</p>
        </div>
      </details>
    </main>
  `;
  carregarERenderizarAcompanhamentoTarefas(tipo);
}

function renderActivityPage() {
  const root = document.getElementById("activity-root");
  if (!root) return;

  const id = document.body.dataset.activity || "brainstorming";
  if (id === "laboratorio-proposta") {
    renderLabProposal(root);
    return;
  }

  if (id === "programa-final") {
    renderFinalProgramPage(root);
    return;
  }

  if (id === "galeria-projetos") {
    renderProjectGalleryPage(root);
    return;
  }

  if (id === "laboratorio-formandos") {
    renderLabForStudents(root);
    return;
  }

  const activity = getAllActivities().find((item) => item.id === id) || activities[0];
  const evaluationIds = evaluationItems.flatMap((item) => [item.id, ...(item.children || []).map((child) => child.id)]);
  const isEvaluationActivity = evaluationIds.includes(activity.id);

  document.title = `UFCD 10788 | ${activity.title}`;
  document.querySelectorAll(`.activity-submenu a[href$="${activity.url.replace("atividades/", "")}"], .activity-submenu a[href$="${activity.url}"], .evaluation-submenu a[href$="${activity.url.replace("atividades/", "")}"], .evaluation-submenu a[href$="${activity.url}"]`).forEach((link) => link.classList.add("active"));

  if (activity.id === "controlo-teams") {
    renderTeamsControl(root, { compact: false, publicView: true });
    return;
  }

  if (activity.id === "laboratorio-sql" || activity.id === "laboratorio-codigo") {
    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <article class="task-overview-card simple-page-heading-card">
            <p class="eyebrow">Laboratório</p>
            <h1>Laboratório SQL</h1>
            <p>Área preparada para a prática orientada da UFCD 10788, sem enunciados finais definidos nesta fase.</p>
          </article>

          <div class="activity-accordion">
            <details class="activity-accordion-card" open>
              <summary>
                <span>Prática de consulta</span>
                <em>SELECT</em>
              </summary>
              <div class="activity-accordion-body">
                <h3>Consultar dados</h3>
                <p>Espaço preparado para exercícios de consulta, filtragem e ordenação de dados.</p>
                <div class="criteria-tags">
                  <span>SELECT</span>
                  <span>WHERE</span>
                  <span>ORDER BY</span>
                </div>
              </div>
            </details>

            <details class="activity-accordion-card">
              <summary>
                <span>Estrutura de dados</span>
                <em>Tabelas</em>
              </summary>
              <div class="activity-accordion-body">
                <h3>Criar e organizar tabelas</h3>
                <p>Espaço preparado para exercícios de criação de bases de dados, tabelas, campos, tipos de dados e regras de integridade.</p>
                <div class="criteria-tags">
                  <span>CREATE DATABASE</span>
                  <span>CREATE TABLE</span>
                  <span>Integridade</span>
                </div>
              </div>
            </details>

            <details class="activity-accordion-card">
              <summary>
                <span>Manipulação de dados</span>
                <em>DML</em>
              </summary>
              <div class="activity-accordion-body">
                <h3>Inserir, alterar e apagar informação</h3>
                <p>Espaço preparado para exercícios de inserção, atualização e eliminação de registos.</p>
                <div class="criteria-tags">
                  <span>INSERT</span>
                  <span>UPDATE</span>
                  <span>DELETE</span>
                </div>
              </div>
            </details>

            <details class="activity-accordion-card">
              <summary>
                <span>Projeto final</span>
                <em>A preparar</em>
              </summary>
              <div class="activity-accordion-body">
                <h3>Aplicação integrada</h3>
                <p>Área preparada para receber orientações do projeto final quando os enunciados forem definidos.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    `;
    return;
  }

  if (false && activity.id === "laboratorio-codigo") {
    if (!siteVisibilityRemoteLoaded && APPS_SCRIPT_WEB_APP_URL) {
      root.innerHTML = `
        <section class="section task-page-section">
          <div class="section-inner">
            <article class="task-overview-card simple-page-heading-card">
              <h1>Laboratório de Código</h1>
              <p>A carregar a configuração de visibilidade do site...</p>
            </article>
          </div>
        </section>
      `;
      carregarVisibilidadeRemotaDoSite().then(() => renderActivityPage());
      return;
    }

    const visibleLabRooms = labRooms.filter(isLabRoomVisible);
    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <details class="task-overview-card">
            <summary>
              <span class="task-module-copy">
                <strong>Laboratório de Código</strong>
                <small>Resolver missões de SQL por etapas, testar ideias, explicar o raciocínio e melhorar a solução com o contributo dos colegas.</small>
              </span>
              <span class="task-module-mark" aria-hidden="true">LC</span>
            </summary>
            <div class="task-module-body">
              <p>Este laboratório funciona como um percurso de prática orientada, com salas organizadas por etapas.</p>
              <ul class="moodle-like-list">
                <li>Ler a missão da sala com atenção.</li>
                <li>Resolver passo a passo, sem saltar diretamente para a resposta final.</li>
                <li>Testar a solução com exemplos simples.</li>
                <li>Comentar o raciocínio usado e comparar ideias com os colegas.</li>
                <li>Melhorar a solução antes de avançar para a sala seguinte.</li>
              </ul>
            </div>
          </details>

          <div class="activity-accordion">
            <details class="activity-accordion-card" open>
              <summary>
                <span>Como funciona</span>
                <em>Protótipo</em>
              </summary>
              <div class="activity-accordion-body">
                <strong>Da missão à solução comentada</strong>
                <p>Começar por uma missão simples, construir uma solução, testar com exemplos e comentar o raciocínio usado. Cada resposta deve mostrar o caminho seguido, não apenas o resultado final.</p>
                <div class="criteria-tags">
                  <span>1. Ler</span>
                  <span>2. Resolver</span>
                  <span>3. Testar</span>
                  <span>4. Comentar</span>
                  <span>5. Melhorar</span>
                </div>
              </div>
            </details>

            <details class="activity-accordion-card">
              <summary>
                <span>Ideia central</span>
              </summary>
              <div class="activity-accordion-body">
                <h3>Um percurso por etapas</h3>
              <p>Avançar por uma sequência de salas, uma de cada vez. Resolver, explicar, comparar ideias e só depois passar à sala seguinte.</p>
              <div class="task-block">
                <strong>Ritmo sugerido</strong>
                <ul class="clean-list task-prompt-list">
                  <li>Uma sala de cada vez.</li>
                  <li>Uma solução comentada por sala.</li>
                  <li>Feedback dos colegas.</li>
                  <li>Avançar para a sala seguinte após comentar a solução.</li>
                </ul>
              </div>
              </div>
            </details>

            <details class="activity-accordion-card">
              <summary>
                <span>Progressão</span>
              </summary>
              <div class="activity-accordion-body">
                <h3>Desbloquear depois de resolver</h3>
                <p>Organizar cada sala como uma pequena missão: ler o enunciado, usar uma pista se for necessário, apresentar a solução e comentar o raciocínio antes de avançar.</p>
                <div class="criteria-tags">
                  <span>Missão</span>
                  <span>Pista</span>
                  <span>Solução</span>
                  <span>Comentário</span>
                  <span>Próxima sala</span>
                </div>
              </div>
            </details>

            <details class="activity-accordion-card">
              <summary>
                <span>Interação entre salas</span>
              </summary>
              <div class="activity-accordion-body">
                <h3>Regra geral de colaboração</h3>
                <p>Esta orientação aplica-se a todas as salas do laboratório, independentemente da missão atribuída.</p>
                <div class="task-block">
                  <strong>Como participar</strong>
                  <ul class="clean-list task-prompt-list">
                    <li>A sala responsável publica a resolução.</li>
                    <li>As outras salas comentam com perguntas, melhorias ou alternativas.</li>
                    <li>A sala responsável revê a proposta com base nos comentários recebidos.</li>
                  </ul>
                </div>
              </div>
            </details>

            ${visibleLabRooms.length ? `
              <details class="activity-accordion-card" open>
                <summary>
                  <span>Salas disponíveis</span>
                </summary>
                <div class="activity-accordion-body">
                  <h3>Percurso de dificuldade crescente</h3>
                  <p>As salas podem ser disponibilizadas gradualmente, à medida que forem sendo trabalhadas na formação.</p>
                  <div class="criteria-tags">
                    ${visibleLabRooms.map((room) => `<span>${room.day}: ${room.room}</span>`).join("")}
                  </div>
                </div>
              </details>
            ` : ""}

            ${visibleLabRooms.map((room) => `
              <details class="activity-accordion-card lab-room-card">
                <summary>
                  <span>${room.room} - ${room.title}</span>
                  <em>${room.day}</em>
                </summary>
                <div class="activity-accordion-body">
                  <h3>${room.title}</h3>
                  <p>${room.mission}</p>
                  <div class="criteria-tags">
                    <span>${room.level}</span>
                    <span>${room.publisher}</span>
                    <span>${room.focus}</span>
                  </div>
                  <div class="task-block">
                    <strong>Regras da sala</strong>
                    <ul class="clean-list task-prompt-list">
                      ${room.rules.map((rule) => `<li>${rule}</li>`).join("")}
                    </ul>
                  </div>
                  <div class="inline-actions">
                    <button class="small-button" type="button" data-modal="laboratorioC${getLabRoomKey(room)}">O que considerar em C</button>
                  </div>
                </div>
              </details>
            `).join("")}

            <details class="activity-accordion-card">
              <summary>
                <span>Comentário da solução</span>
              </summary>
              <div class="activity-accordion-body">
                <h3>Modelo de publicação</h3>
                <p>Comentar o termo da sala com uma solução clara, indicando os passos seguidos, os testes realizados e uma possível melhoria.</p>
                <div class="task-block">
                  <strong>Comentário sugerido</strong>
                  <ul class="clean-list task-prompt-list">
                    <li>Abrir o link do termo da sala no Glossário.</li>
                    <li>Comentar o termo com a solução proposta.</li>
                    <li>Estratégia usada para resolver.</li>
                    <li>Pseudocódigo ou código apresentado.</li>
                    <li>Teste realizado com valores de exemplo.</li>
                    <li>Dificuldade encontrada e melhoria possível.</li>
                  </ul>
                </div>
              </div>
            </details>

            <details class="activity-accordion-card">
              <summary>
                <span>Critérios</span>
              </summary>
              <div class="activity-accordion-body">
                <h3>O que conta como boa participação</h3>
                <p>A solução deve mostrar que o formando compreendeu o problema, estruturou o raciocínio e testou o resultado.</p>
                <div class="criteria-tags">
                  <span>Problema compreendido</span>
                  <span>Passos organizados</span>
                  <span>Uso correto da condição</span>
                  <span>Teste apresentado</span>
                  <span>Reflexão curta</span>
                </div>
              </div>
            </details>
          </div>

          ${renderLaboratoryPracticeSequence()}
        </div>
      </section>
    `;
    applyVisibilityControls(root);
    return;
  }

  if (activity.id === "tarefas-grupo" || activity.id === "tarefas-individuais") {
    const isIndividual = activity.id === "tarefas-individuais";
    const tasks = isIndividual ? individualTasks : groupTasks;
    const overviewTitle = isIndividual ? "Fórum de atividades" : "Glossário colaborativo de SQL";
    const overviewIntro = isIndividual
      ? "Espaço dedicado às tarefas individuais, organizado por tópicos."
      : "Todos os dias se acrescentam novos termos, definições e exemplos para construir uma base comum de vocabulário técnico.";
    const overviewItems = isIndividual
      ? [
        "Consultar o tópico correspondente ao tema em estudo.",
        "Ler o enunciado com atenção antes de começar.",
        "Resolver a tarefa de forma autónoma.",
        "Organizar a resposta de forma clara e completa.",
        "Sempre que fizer sentido, aplicar exemplos práticos relacionados com a formação.",
        "Rever o trabalho antes de submeter ou publicar a resposta."
      ]
      : [
        "Escolher um termo relacionado com a sessão do dia.",
        "Explicar o significado por palavras próprias.",
        "Acrescentar um pequeno exemplo sempre que fizer sentido.",
        "Consultar os contributos do grupo e evitar repetir termos já existentes."
      ];

    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <details class="task-overview-card">
            <summary>
              <span class="task-module-copy">
                <strong>${overviewTitle}</strong>
                <small>${overviewIntro}</small>
              </span>
              <span class="task-module-mark" aria-hidden="true">${isIndividual ? "TI" : "TG"}</span>
            </summary>
            <div class="task-module-body">
              <p>${isIndividual ? "Cada tópico corresponde a um tema da UFCD 10788 e inclui a respetiva atividade individual." : "Nesta atividade vamos construir, diariamente, um glossário colaborativo da UFCD 10788."}</p>
              <ul class="moodle-like-list">
                ${overviewItems.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </details>

          ${renderTaskTrackingShell(isIndividual ? "TI" : "TG")}

          <div class="task-module-list">
            ${tasks.map((task, index) => `
              <details class="task-module-card">
                <summary>
                  <span class="task-module-copy">
                    <strong>${isIndividual ? task.title : task.topic}</strong>
                    <small>${task.intro}</small>
                  </span>
                  <span class="task-module-mark" aria-hidden="true">${isIndividual ? `TI ${index + 1}` : `TG ${index + 1}`}</span>
                </summary>

                <div class="task-module-body">
                  <p>${isIndividual ? `Tema associado: ${task.topic}.` : "Cada termo deve ser trabalhado com uma definição clara, um exemplo simples e linguagem acessível."}</p>

                  <div class="task-block">
                    <strong>${isIndividual ? "Orientações" : "Palavras a trabalhar"}</strong>
                    ${isIndividual ? `
                      <ul class="clean-list task-prompt-list">
                        ${task.prompts.map((prompt) => `<li>${prompt}</li>`).join("")}
                      </ul>
                    ` : `
                      <div class="word-list">
                        ${task.words.map(([word, group]) => `<span><strong>${word}</strong> ${group}</span>`).join("")}
                      </div>
                    `}
                  </div>

                  ${task.forumUrl ? `
                    <div class="embed-fallback resource-action-row align-right">
                      <a class="small-button" href="${task.forumUrl}" target="_blank" rel="noopener">${isIndividual ? "Abrir tarefa" : "Abrir glossário"}</a>
                    </div>
                  ` : ""}
                </div>
              </details>
            `).join("")}
          </div>
        </div>
      </section>
    `;
    carregarERenderizarAcompanhamentoTarefas(isIndividual ? "TI" : "TG");
    return;
  }

  if (activity.id === "avaliacao-diagnostica" && !activity.externalUrl) {
    const diagnosticQuestions = [
      {
        title: "1. O que é uma base de dados?",
        type: "Escolha múltipla",
        options: [
          "Um conjunto organizado de dados que pode ser consultado e gerido.",
          "Um ficheiro usado apenas para escrever texto.",
          "Uma imagem guardada no computador.",
          "Um programa de desenho."
        ]
      },
      {
        title: "2. Numa base de dados relacional, o que representa uma tabela?",
        type: "Escolha múltipla",
        options: [
          "Uma estrutura com campos e registos sobre um tema.",
          "Uma palavra-passe de acesso.",
          "Um comando para apagar ficheiros.",
          "Uma ligação à Internet."
        ]
      },
      {
        title: "3. O que é um campo?",
        type: "Escolha múltipla",
        options: ["Uma coluna da tabela", "Uma linha da tabela", "Uma base de dados completa", "Um relatório impresso"]
      },
      {
        title: "4. O que é um registo?",
        type: "Escolha múltipla",
        options: ["Uma linha da tabela", "Uma coluna da tabela", "Uma regra visual", "Um tipo de gráfico"]
      },
      {
        title: "5. Para que serve SQL?",
        type: "Escolha múltipla",
        options: [
          "Para consultar e gerir dados em bases de dados relacionais.",
          "Para editar fotografias.",
          "Para criar apresentações animadas.",
          "Para compactar ficheiros."
        ]
      },
      {
        title: "6. Dá um exemplo de dados que poderiam estar numa tabela.",
        type: "Resposta curta",
        prompts: [
          "Indica o nome possível da tabela.",
          "Indica dois ou três campos dessa tabela.",
          "Explica que tipo de informação ficaria guardada."
        ]
      },
      {
        title: "7. O que gostarias de conseguir consultar numa base de dados?",
        type: "Resposta orientada",
        prompts: [
          "Escolhe uma situação simples.",
          "Indica que dados seriam necessários.",
          "Indica que pergunta gostarias de fazer aos dados."
        ]
      },
      {
        title: "8. Ordena uma ideia simples para criar uma base de dados.",
        type: "Resposta aberta",
        prompts: [
          "Identifica o tema da base de dados.",
          "Indica uma tabela principal.",
          "Indica campos importantes dessa tabela."
        ]
      },
      {
        title: "9. Que dúvidas tens sobre bases de dados ou SQL?",
        type: "Resposta aberta",
        prompts: [
          "Escreve uma ou mais dúvidas.",
          "Indica se já trabalhaste antes com dados, tabelas ou folhas de cálculo.",
          "Indica o que te parece mais difícil neste momento."
        ]
      },
      {
        title: "10. Autoavaliação inicial",
        type: "Escala",
        prompts: [
          "De 1 a 5, como avalias a tua confiança para aprender SQL?",
          "Que tema te parece mais fácil neste momento?",
          "Que tema te parece mais difícil neste momento?"
        ]
      }
    ];

    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <details class="task-overview-card" open>
            <summary>
              <span class="task-module-copy">
                <strong>Avaliação Diagnóstica</strong>
                <small>Questionário inicial para perceber conhecimentos prévios, dificuldades e pontos de partida antes de avançar na UFCD 10788.</small>
              </span>
              <span class="task-module-mark" aria-hidden="true">AD</span>
            </summary>
            <div class="task-module-body">
              <p>Esta avaliação não serve para penalizar. Serve para ajustar o ritmo, identificar necessidades de apoio e orientar melhor as primeiras atividades.</p>
              <ul class="moodle-like-list">
                <li>Responde com calma e pelas tuas próprias palavras.</li>
                <li>Nas perguntas de escolha múltipla, seleciona apenas uma opção.</li>
                <li>Nas perguntas abertas, escreve respostas curtas, mas completas.</li>
                <li>Se não souberes responder, indica o que pensas ou onde tens dúvida.</li>
              </ul>
            </div>
          </details>

          <div class="diagnostic-meta-grid">
            <article class="diagnostic-info-box">
              <strong>Objetivo</strong>
              <p>Identificar conhecimentos iniciais sobre bases de dados relacionais, tabelas, campos, registos e noções iniciais de SQL.</p>
            </article>
            <article class="diagnostic-info-box">
              <strong>Duração sugerida</strong>
              <p>20 a 30 minutos, com possibilidade de esclarecimento das instruções antes do início.</p>
            </article>
            <article class="diagnostic-info-box">
              <strong>Registo</strong>
              <p>As respostas podem ser entregues em papel, no Moodle ou num formulário HTML ligado ao Google Sheets.</p>
            </article>
          </div>

          <form class="diagnostic-form" data-questionario="Avaliação Diagnóstica">
            <fieldset class="diagnostic-fieldset">
              <legend>Identificação</legend>
              <label>
                Nome do formando
                <input name="Nome do formando" type="text" autocomplete="name">
              </label>
              <label>
                Data
                <input name="Data" type="date">
              </label>
            </fieldset>

            <div class="task-module-list diagnostic-question-list">
              ${diagnosticQuestions.map((question, index) => `
                <article class="task-module-card diagnostic-question-card">
                  <div class="task-module-body">
                    <p class="eyebrow">${question.type}</p>
                    <h2>${question.title}</h2>
                    ${question.options ? `
                      <div class="diagnostic-options">
                        ${question.options.map((option) => `
                          <label>
                            <input name="${question.title}" type="radio" value="${option}">
                            <span>${option}</span>
                          </label>
                        `).join("")}
                      </div>
                    ` : `
                      <ul class="clean-list task-prompt-list">
                        ${question.prompts.map((prompt) => `<li>${prompt}</li>`).join("")}
                      </ul>
                      <label class="diagnostic-answer">
                        Resposta
                        <textarea name="${question.title}" rows="${index === 7 ? 7 : 5}"></textarea>
                      </label>
                    `}
                  </div>
                </article>
              `).join("")}
            </div>

            <article class="task-module-card diagnostic-question-card">
              <div class="task-module-body">
                <p class="eyebrow">Síntese do formador</p>
                <h2>Observações iniciais</h2>
                <label class="diagnostic-answer">
                  Pontos fortes observados
                  <textarea name="Pontos fortes observados" rows="4"></textarea>
                </label>
                <label class="diagnostic-answer">
                  Necessidades de apoio
                  <textarea name="Necessidades de apoio" rows="4"></textarea>
                </label>
              </div>
            </article>

            <div class="resource-action-row align-right diagnostic-actions">
              <button class="small-button" type="button" data-action="print">Imprimir avaliação</button>
            </div>
          </form>
        </div>
      </section>
    `;
    return;
  }

  if (!activity.externalUrl) {
    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">${isEvaluationActivity ? "Avaliação" : "Atividades"}</p>
            <h1>${activity.title}</h1>
            <p class="lead">${activity.intro}</p>
          </div>

          <article class="card group-task-card">
            <p class="eyebrow">A preparar</p>
            <h3>Espaço reservado</h3>
            <p>Esta página está pronta para receber o questionário, formulário, resultados ou recurso externo correspondente.</p>
          </article>
        </div>
      </section>
    `;
    return;
  }

  root.innerHTML = `
    <section class="embedded-page-shell" aria-label="${activity.title}">
      ${isEvaluationActivity ? `
        <div class="section evaluation-embed-section">
          <div class="section-inner">
            <div class="section-heading task-page-heading">
              <p class="eyebrow">Avaliação</p>
              <h1>${activity.title}</h1>
            </div>
            <iframe
              class="evaluation-frame"
              src="${activity.externalUrl}"
              width="100%"
              height="900"
              style="border:0;"
              loading="lazy"
              referrerpolicy="unsafe-url"
              title="${activity.title}">
            </iframe>
          </div>
        </div>
      ` : `
        <div class="mentimeter-frame-wrap">
          <iframe
            class="mentimeter-frame"
            sandbox="allow-popups allow-scripts allow-same-origin allow-presentation"
            allowfullscreen
            allowtransparency="true"
            frameborder="0"
            src="${activity.externalUrl}"
            title="${activity.title}"
            loading="lazy">
          </iframe>
        </div>
      `}
      ${!isEvaluationActivity ? `
        <div class="embed-fallback">
          <a class="small-button" href="${activity.externalUrl}" target="_blank" rel="noopener">Abrir apresentação</a>
          ${activity.participationUrl ? `<a class="small-button orange" href="${activity.participationUrl}" target="_blank" rel="noopener">Participar</a>` : ""}
        </div>
      ` : ""}
    </section>
  `;
}

function renderLabForStudents(root) {
  const studentRooms = labRooms;
  document.title = "UFCD 10788 | Laboratório de Código";
  document.querySelectorAll(`.activity-submenu a[href$="laboratorio-codigo.html"], .activity-submenu a[href$="laboratorio-formandos.html"]`).forEach((link) => {
    link.classList.add("active");
    link.setAttribute("href", "laboratorio-formandos.html");
  });

  root.innerHTML = `
    <section class="section task-page-section">
      <div class="section-inner">
        <article class="task-overview-card simple-page-heading-card">
          <h1>Laboratório de Código</h1>
          <p>Versão disponível para os formandos com todas as salas de prática orientada.</p>
        </article>

        <div class="activity-accordion">
          <details class="activity-accordion-card" open>
            <summary>
              <span>Como funciona</span>
              <em>Orientação</em>
            </summary>
            <div class="activity-accordion-body">
              <strong>Da missão à solução comentada</strong>
              <p>Em cada sala, lê a missão com atenção, organiza a solução passo a passo, testa com exemplos simples e prepara uma explicação curta do raciocínio usado.</p>
              <div class="criteria-tags">
                <span>1. Ler</span>
                <span>2. Resolver</span>
                <span>3. Testar</span>
                <span>4. Comentar</span>
              </div>
            </div>
          </details>

          <details class="activity-accordion-card">
            <summary>
              <span>Ideia central</span>
            </summary>
            <div class="activity-accordion-body">
              <h3>Um percurso por etapas</h3>
              <p>Avançar por uma sequência de salas, uma de cada vez. Resolver, explicar, comparar ideias e só depois passar à sala seguinte.</p>
              <div class="task-block">
                <strong>Ritmo sugerido</strong>
                <ul class="clean-list task-prompt-list">
                  <li>Uma sala de cada vez.</li>
                  <li>Uma solução comentada por sala.</li>
                  <li>Feedback dos colegas.</li>
                  <li>Avançar para a sala seguinte após comentar a solução.</li>
                </ul>
              </div>
            </div>
          </details>

          <details class="activity-accordion-card">
            <summary>
              <span>Progressão</span>
            </summary>
            <div class="activity-accordion-body">
              <h3>Desbloquear depois de resolver</h3>
              <p>Organizar cada sala como uma pequena missão: ler o enunciado, usar uma pista se for necessário, apresentar a solução e comentar o raciocínio antes de avançar.</p>
              <div class="criteria-tags">
                <span>Missão</span>
                <span>Pista</span>
                <span>Solução</span>
                <span>Comentário</span>
                <span>Próxima sala</span>
              </div>
            </div>
          </details>

          <details class="activity-accordion-card">
            <summary>
              <span>Interação entre salas</span>
            </summary>
            <div class="activity-accordion-body">
              <h3>Regra geral de colaboração</h3>
              <p>Esta orientação aplica-se a todas as salas do laboratório, independentemente da missão atribuída.</p>
              <div class="task-block">
                <strong>Como participar</strong>
                <ul class="clean-list task-prompt-list">
                  <li>A sala responsável publica a resolução.</li>
                  <li>As outras salas comentam com perguntas, melhorias ou alternativas.</li>
                  <li>A sala responsável revê a proposta com base nos comentários recebidos.</li>
                </ul>
              </div>
            </div>
          </details>

          <details class="activity-accordion-card" open>
            <summary>
              <span>Salas disponíveis</span>
            </summary>
            <div class="activity-accordion-body">
              <h3>Percurso inicial</h3>
              <p>Para já, ficam disponíveis apenas as duas primeiras salas, de acordo com o trabalho a partilhar com os formandos.</p>
              <div class="criteria-tags">
                ${studentRooms.map((room) => `<span>${room.day}: ${room.room}</span>`).join("")}
              </div>
            </div>
          </details>

          ${studentRooms.map((room) => `
            <details class="activity-accordion-card lab-room-card" ${room.room === "Sala 1" ? "open" : ""}>
              <summary>
                <span>${room.room} - ${room.title}</span>
                <em>${room.day}</em>
              </summary>
              <div class="activity-accordion-body">
                <h3>${room.title}</h3>
                <p>${room.mission}</p>
                <div class="criteria-tags">
                  <span>${room.level}</span>
                  <span>${room.publisher}</span>
                  <span>${room.focus}</span>
                </div>
                <div class="task-block">
                  <strong>Regras da sala</strong>
                  <ul class="clean-list task-prompt-list">
                    ${room.rules.map((rule) => `<li>${rule}</li>`).join("")}
                  </ul>
                </div>
                <div class="inline-actions">
                  <button class="small-button" type="button" data-modal="laboratorioC${getLabRoomKey(room)}">O que considerar em C</button>
                </div>
              </div>
            </details>
          `).join("")}

          <details class="activity-accordion-card">
            <summary>
              <span>Comentário da solução</span>
            </summary>
            <div class="activity-accordion-body">
              <h3>Modelo de publicação</h3>
              <p>Comentar o termo da sala com uma solução clara, indicando os passos seguidos, os testes realizados e uma possível melhoria.</p>
              <div class="task-block">
                <strong>Comentário sugerido</strong>
                <ul class="clean-list task-prompt-list">
                  <li>Abrir o link do termo da sala no Glossário.</li>
                  <li>Comentar o termo com a solução proposta.</li>
                  <li>Estratégia usada para resolver.</li>
                  <li>Pseudocódigo ou código apresentado.</li>
                  <li>Teste realizado com valores de exemplo.</li>
                  <li>Dificuldade encontrada e melhoria possível.</li>
                </ul>
              </div>
            </div>
          </details>

          <details class="activity-accordion-card">
            <summary>
              <span>Critérios</span>
            </summary>
            <div class="activity-accordion-body">
              <h3>O que conta como boa participação</h3>
              <p>A solução deve mostrar que o formando compreendeu o problema, estruturou o raciocínio e testou o resultado.</p>
              <div class="criteria-tags">
                <span>Problema compreendido</span>
                <span>Passos organizados</span>
                <span>Uso correto da condição</span>
                <span>Teste apresentado</span>
                <span>Reflexão curta</span>
              </div>
            </div>
          </details>
        </div>

        ${renderLaboratoryPracticeSequence({ showAll: true })}
      </div>
    </section>
  `;
}

const labProposalCodeSteps = [
  {
    id: "biblioteca",
    label: "// Biblioteca para entrada e saída de dados",
    title: "Biblioteca",
    ideTitle: "biblioteca_stdio.h",
    text: "Este comentário identifica a biblioteca necessária para usar printf e scanf.",
    note: "A linha #include <stdio.h> importa funções de entrada e saída de dados.",
    code: `<span class="code-keyword">#include</span> &lt;stdio.h&gt;`
  },
  {
    id: "main",
    label: "// O programa começa aqui",
    title: "Função main",
    ideTitle: "funcao_main.c",
    text: "Este comentário marca o ponto onde a execução do programa começa.",
    note: "A função main é obrigatória: é o ponto de entrada do programa em C.",
    code: `<span class="code-keyword">int</span> main() {
    ...
}`
  },
  {
    id: "declarar-variaveis",
    label: "// Guardar as notas e a média",
    title: "Variáveis",
    ideTitle: "variaveis.c",
    text: "Este comentário explica que vamos reservar espaços para guardar os valores usados no programa.",
    note: "Usamos float porque as notas e a média podem ter casas decimais.",
    code: `<span class="code-keyword">float</span> nota1, nota2, nota3;
<span class="code-keyword">float</span> media;`
  },
  {
    id: "pedir-dados",
    label: "// Pedir e ler as três notas",
    title: "Entrada de dados",
    ideTitle: "entrada_dados.c",
    text: "Este comentário corresponde às instruções que pedem dados ao utilizador e os guardam nas variáveis.",
    note: "O printf mostra a pergunta. O scanf lê o valor e guarda-o na variável indicada.",
    code: `printf(<span class="code-string">"Indica a primeira nota: "</span>);
scanf(<span class="code-string">"%f"</span>, &amp;nota1);

printf(<span class="code-string">"Indica a segunda nota: "</span>);
scanf(<span class="code-string">"%f"</span>, &amp;nota2);

printf(<span class="code-string">"Indica a terceira nota: "</span>);
scanf(<span class="code-string">"%f"</span>, &amp;nota3);`
  },
  {
    id: "calcular-media",
    label: "// Calcular a média",
    title: "Processamento",
    ideTitle: "calculo_media.c",
    text: "Este comentário mostra a parte em que o programa transforma os dados de entrada num resultado.",
    note: "A média é calculada somando as três notas e dividindo o total por 3.",
    code: `media = (nota1 + nota2 + nota3) / 3;`
  },
  {
    id: "decidir",
    label: "// Decidir se a média é suficiente",
    title: "Decisão",
    ideTitle: "decisao_media.c",
    text: "Este comentário corresponde ao momento em que o programa escolhe uma de duas respostas.",
    note: "A condição media >= 10 representa o critério usado para considerar a média suficiente.",
    code: `<span class="code-keyword">if</span> (media &gt;= 10) {
    printf(<span class="code-string">"Media %.1f: suficiente\\n"</span>, media);
} <span class="code-keyword">else</span> {
    printf(<span class="code-string">"Media %.1f: insuficiente\\n"</span>, media);
}`
  },
  {
    id: "codigo-completo",
    label: "// Código completo comentado",
    title: "Síntese",
    ideTitle: "media_tres_notas.c",
    text: "Este comentário junta todas as partes anteriores num programa completo.",
    note: "A leitura por comentários ajuda a perceber que cada bloco de código tem uma função específica.",
    code: `<span class="code-comment">// Programa: calcular média de três notas</span>
<span class="code-keyword">#include</span> &lt;stdio.h&gt;

<span class="code-keyword">int</span> main() {
    <span class="code-keyword">float</span> nota1, nota2, nota3, media;

    printf(<span class="code-string">"Indica a primeira nota: "</span>);
    scanf(<span class="code-string">"%f"</span>, &amp;nota1);

    printf(<span class="code-string">"Indica a segunda nota: "</span>);
    scanf(<span class="code-string">"%f"</span>, &amp;nota2);

    printf(<span class="code-string">"Indica a terceira nota: "</span>);
    scanf(<span class="code-string">"%f"</span>, &amp;nota3);

    media = (nota1 + nota2 + nota3) / 3;

    <span class="code-keyword">if</span> (media &gt;= 10) {
        printf(<span class="code-string">"Media %.1f: suficiente\\n"</span>, media);
    } <span class="code-keyword">else</span> {
        printf(<span class="code-string">"Media %.1f: insuficiente\\n"</span>, media);
    }

    <span class="code-keyword">return</span> 0;
}`
  }
];

function criarPassosCodigoProposta(exercise) {
  const finalCode = obterCodigoFinalProposta(exercise);
  const blocks = dividirCodigoEmBlocosProposta(finalCode);
  const safeBlocks = blocks.length ? blocks : [finalCode];
  const ideTitle = `P${exercise.number}_${slugify(exercise.title)}.c`;

  return safeBlocks.map((block, index) => {
    const meta = obterMetaBlocoCodigoProposta(index, safeBlocks.length);
    return {
      id: meta.id,
      label: meta.label,
      title: meta.title,
      ideTitle,
      text: meta.text,
      note: meta.note,
      fullCode: safeBlocks.slice(0, index + 1).join("\n\n")
    };
  });
}

function obterCodigoFinalProposta(exercise) {
  if (Number(exercise?.number) === 1) {
    return `// Biblioteca para entrada e saída de dados
#include <stdio.h>

// O programa começa aqui
int main() {

    // Guardar os dados necessários
    float grausF, grausC;

    // Pedir e ler a temperatura em graus Celsius
    printf("Indique a temperatura em graus Celsius: ");
    scanf("%f", &grausC);

    // Converter Celsius para Fahrenheit
    grausF = (grausC * 9 / 5) + 32;

    // Apresentar o resultado
    printf("A temperatura em graus Fahrenheit é: %.2f\\n", grausF);

    return 0;
}`;
  }

  return String(exercise?.solution || "").trim();
}

function dividirCodigoEmBlocosProposta(code) {
  return String(code || "")
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/)
    .map((block) => block.trimEnd())
    .filter(Boolean);
}

function obterMetaBlocoCodigoProposta(index, total) {
  const metas = [
    {
      id: "biblioteca",
      label: "// Biblioteca para entrada e saída de dados",
      title: "Biblioteca",
      text: "Mostra as bibliotecas necessárias para o programa poder usar funções já existentes.",
      note: "As bibliotecas indicam ao programa que funções já pode utilizar."
    },
    {
      id: "main",
      label: "// O programa começa aqui",
      title: "Função main",
      text: "Mostra o ponto de entrada do programa.",
      note: "Em C, a execução começa dentro da função main."
    },
    {
      id: "variaveis",
      label: "// Guardar os dados necessários",
      title: "Variáveis",
      text: "Mostra as variáveis usadas para guardar entradas, cálculos e resultados.",
      note: "Nesta parte interessa observar os tipos escolhidos para cada dado."
    },
    {
      id: "entrada",
      label: "// Pedir e ler dados",
      title: "Entrada de dados",
      text: "Mostra a parte em que o programa pede informação ao utilizador.",
      note: "O printf apresenta mensagens e o scanf guarda valores em variáveis."
    },
    {
      id: "processamento",
      label: "// Calcular, decidir ou repetir",
      title: "Processamento",
      text: "Mostra a parte em que o programa transforma os dados num resultado.",
      note: "Aqui podem aparecer fórmulas, condições, ciclos ou comparações."
    },
    {
      id: "saida",
      label: "// Apresentar o resultado",
      title: "Saída",
      text: "Mostra a parte em que o programa apresenta o resultado ao utilizador.",
      note: "As mensagens finais ajudam a confirmar se a solução responde ao problema."
    }
  ];

  if (index === total - 1 && total > 1) {
    return {
      id: "codigo-completo",
      label: "// Código completo comentado",
      title: "Síntese",
      text: "Junta todos os blocos anteriores para ver o programa completo.",
      note: "Esta vista serve para rever a solução final e perceber como cada parte se liga às restantes."
    };
  }

  return metas[index] || {
    id: `bloco-${index + 1}`,
    label: `// Bloco ${index + 1}`,
    title: `Bloco ${index + 1}`,
    text: "Mostra mais uma parte do programa.",
    note: "Cada bloco acrescenta uma nova peça à solução final."
  };
}

function formatarBlocoCodigoProposta(step) {
  if (!step) return "";
  if (step.fullCode) return colorirCodigoC(step.fullCode);
  return `<span class="code-comment">${escapeHtml(step.label)}</span>\n${step.code}`;
}

function obterCodigoPropostaAtePasso(steps, activeIndex = 0) {
  const safeIndex = Math.max(0, Math.min(activeIndex, steps.length - 1));
  const activeStep = steps[safeIndex];
  if (activeStep?.fullCode) {
    return colorirCodigoC(activeStep.fullCode);
  }
  return steps
    .slice(0, safeIndex + 1)
    .map(formatarBlocoCodigoProposta)
    .join("\n\n");
}

function extrairLinhasDeclaracaoC(lines) {
  return lines.filter((line) => {
    const trimmed = line.trim();
    return /^(int|float|double|char)\s+/.test(trimmed) && !trimmed.startsWith("int main");
  });
}

function extrairLinhasEntradaC(lines) {
  const selected = [];
  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed.startsWith("scanf")) return;
    const previous = lines[index - 1] || "";
    if (previous.trim().startsWith("printf") && !selected.includes(previous)) {
      selected.push(previous);
    }
    selected.push(line);
  });
  return selected;
}

function extrairLinhasSaidaC(lines) {
  return lines.filter((line, index) => {
    const trimmed = line.trim();
    const next = (lines[index + 1] || "").trim();
    return trimmed.startsWith("printf") && !next.startsWith("scanf");
  });
}

function extrairLinhasProcessamentoC(lines) {
  return lines.filter((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#include") || trimmed.startsWith("printf") || trimmed.startsWith("scanf") || trimmed.startsWith("return")) {
      return false;
    }
    if (/^(int|float|double|char)\s+/.test(trimmed) || trimmed === "int main() {" || trimmed === "}") {
      return false;
    }
    return /(^if\b|^else\b|^for\b|^while\b|^do\b|^switch\b|^case\b|^break\b|=|%|sqrt|\+\+|--)/.test(trimmed);
  });
}

function colorirCodigoC(code) {
  let html = escapeHtml(code || "");
  html = html.replace(/(\/\/.*)$/gm, '<span class="code-comment">$1</span>');
  html = html.replace(/("(?:\\.|[^"\\])*")/g, '<span class="code-string">$1</span>');
  html = html.replace(/(#include|\bint\b|\bfloat\b|\bdouble\b|\bchar\b|\bif\b|\belse\b|\bfor\b|\bwhile\b|\bdo\b|\bswitch\b|\bcase\b|\bbreak\b|\breturn\b)/g, '<span class="code-keyword">$1</span>');
  return html;
}

function obterConfiguracaoTerminalProposta(exercise) {
  const number = exercise?.number || 1;
  const configs = {
    1: { command: "./P1_celsius_para_fahrenheit", fields: [{ id: "celsius", label: "Graus Celsius", value: 25, step: "0.1" }] },
    2: { command: "./P2_quadrado_e_cubo", fields: [{ id: "numero", label: "Número inteiro", value: 4, step: "1" }] },
    3: { command: "./P3_hipotenusa", fields: [{ id: "cateto1", label: "1.º cateto", value: 3, step: "0.1" }, { id: "cateto2", label: "2.º cateto", value: 4, step: "0.1" }] },
    4: { command: "./P4_minutos", fields: [{ id: "minutos", label: "Total de minutos", value: 3040, step: "1" }] },
    5: { command: "./P5_quatro_operacoes", fields: [{ id: "n1", label: "1.º número", value: 8, step: "0.1" }, { id: "n2", label: "2.º número", value: 2, step: "0.1" }] },
    6: { command: "./P6_par_ou_impar", fields: [{ id: "numero", label: "Número inteiro", value: 7, step: "1" }] },
    7: { command: "./P7_quadrados", fields: [{ id: "n1", label: "1.º número", value: 5, step: "1" }, { id: "n2", label: "2.º número", value: 3, step: "1" }, { id: "n3", label: "3.º número", value: 9, step: "1" }] },
    8: { command: "./P8_custo_envio", fields: [{ id: "peso", label: "Peso", value: 35, step: "1" }, { id: "km", label: "Quilómetros", value: 42, step: "1" }] },
    9: { command: "./P9_contar_valores", fields: [{ id: "valores", label: "5 valores", value: "3 -1 0 7 -4", type: "text" }] },
    10: { command: "./P10_media_notas", fields: [{ id: "notas", label: "5 notas", value: "12 15 9 14 10", type: "text" }] },
    11: { command: "./P11_maior_valor", fields: [{ id: "valores", label: "6 valores", value: "7 2 15 4 11 9", type: "text" }] },
    12: { command: "./P12_notas_media", fields: [{ id: "notas", label: "5 notas", value: "11 8 16 13 10", type: "text" }] },
    13: { command: "./P13_tabuada", fields: [{ id: "numero", label: "Número inteiro", value: 7, step: "1" }] },
    14: { command: "./P14_somar_ate_zero", fields: [{ id: "valores", label: "Valores", value: "4 6 3 0", type: "text" }] },
    15: { command: "./P15_validar_nota", fields: [{ id: "valores", label: "Tentativas", value: "25 -2 14", type: "text" }] },
    16: { command: "./P16_menu_operacoes", fields: [{ id: "n1", label: "1.º número", value: 12, step: "0.1" }, { id: "n2", label: "2.º número", value: 4, step: "0.1" }, { id: "opcao", label: "Opção", value: 4, step: "1" }] }
  };
  return configs[number] || configs[1];
}

function normalizarNumeroTerminal(value, fallback = 0) {
  const text = String(value ?? "").trim();
  if (!text) return fallback;
  const parsed = Number(text.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : fallback;
}

function normalizarListaNumerosTerminal(value, fallback = []) {
  const text = String(value ?? "").trim();
  if (!text) return fallback;
  const numbers = text
    .split(/[,\s;]+/)
    .map((item) => normalizarNumeroTerminal(item, Number.NaN))
    .filter((item) => Number.isFinite(item));
  return numbers.length ? numbers : fallback;
}

function renderTerminalInputsProposta(exercise) {
  return obterConfiguracaoTerminalProposta(exercise).fields.map((field) => `
    <label class="lab-terminal-field">
      <span>${field.label}</span>
      <input type="${field.type || "number"}" step="${field.step || "1"}" value="" data-terminal-input="${field.id}" data-terminal-default="${escapeHtml(field.value)}">
    </label>
  `).join("");
}

function obterValoresTerminalProposta(panel) {
  const values = {};
  panel?.querySelectorAll("[data-terminal-input]").forEach((input) => {
    values[input.dataset.terminalInput] = input.value;
  });
  return values;
}

function executarTerminalProposta(button) {
  const panel = button.closest("[data-proposal-terminal-panel]");
  const scope = button.closest("[data-proposal-practice-block]");
  const exercise = getExtraPracticeExercise(Number(scope?.dataset.proposalPractice || panel?.dataset.terminalExercise || 1)) || extraPracticeExercises[0];
  const output = panel?.querySelector("[data-proposal-terminal-output]");
  if (output) output.textContent = obterSaidaTerminalProposta(exercise, 99, obterValoresTerminalProposta(panel));
}

function atualizarTerminalProposta(root, exercise, activeIndex = 0) {
  const panel = root.querySelector("[data-proposal-terminal-panel]");
  if (!panel) return;

  panel.dataset.terminalExercise = String(exercise?.number || 1);
  const inputs = panel.querySelector("[data-proposal-terminal-inputs]");
  const output = panel.querySelector("[data-proposal-terminal-output]");

  if (inputs) inputs.innerHTML = renderTerminalInputsProposta(exercise);
  if (output) output.textContent = "";
}

function obterSaidaTerminalProposta(exercise, activeIndex = 0, inputValues = null) {
  const number = exercise?.number || 1;
  const config = obterConfiguracaoTerminalProposta(exercise);
  const defaults = Object.fromEntries(config.fields.map((field) => [field.id, field.value]));
  const values = { ...defaults, ...(inputValues || {}) };
  const isSimulation = inputValues !== null;
  const readyPrefix = !isSimulation && activeIndex < 5
    ? "A execução final aparece quando o código estiver completo.\n\n"
    : "";
  let output = "";

  if (number === 1) {
    const celsius = normalizarNumeroTerminal(values.celsius, 25);
    const fahrenheit = (celsius * 9 / 5) + 32;
    output = `Indique a temperatura em graus Celsius: ${celsius}\nA temperatura em graus Fahrenheit é: ${fahrenheit.toFixed(2)}`;
  } else if (number === 2) {
    const numero = Math.trunc(normalizarNumeroTerminal(values.numero, 4));
    output = `Indique um numero inteiro: ${numero}\nQuadrado: ${numero * numero}\nCubo: ${numero * numero * numero}`;
  } else if (number === 3) {
    const cateto1 = normalizarNumeroTerminal(values.cateto1, 3);
    const cateto2 = normalizarNumeroTerminal(values.cateto2, 4);
    output = `Indique o primeiro cateto: ${cateto1}\nIndique o segundo cateto: ${cateto2}\nHipotenusa: ${Math.sqrt(cateto1 * cateto1 + cateto2 * cateto2).toFixed(2)}`;
  } else if (number === 4) {
    const total = Math.max(0, Math.trunc(normalizarNumeroTerminal(values.minutos, 3040)));
    const dias = Math.floor(total / 1440);
    const resto = total % 1440;
    output = `Indique o total de minutos: ${total}\n${dias} dias, ${Math.floor(resto / 60)} horas e ${resto % 60} minutos`;
  } else if (number === 5) {
    const n1 = normalizarNumeroTerminal(values.n1, 8);
    const n2 = normalizarNumeroTerminal(values.n2, 2);
    output = `Indique o primeiro numero: ${n1}\nIndique o segundo numero: ${n2}\nSoma: ${(n1 + n2).toFixed(2)}\nSubtracao: ${(n1 - n2).toFixed(2)}\nMultiplicacao: ${(n1 * n2).toFixed(2)}\n${n2 === 0 ? "Nao e possivel efetuar a divisao" : `Divisao: ${(n1 / n2).toFixed(2)}`}`;
  } else if (number === 6) {
    const numero = Math.trunc(normalizarNumeroTerminal(values.numero, 7));
    output = `Indique um numero inteiro: ${numero}\nO numero ${numero} e ${numero % 2 === 0 ? "par" : "impar"}.`;
  } else if (number === 7) {
    const numeros = normalizarListaNumerosTerminal(values.n1 !== undefined ? `${values.n1} ${values.n2} ${values.n3}` : values.valores, [5, 3, 9]).slice(0, 3);
    const maiores = [...numeros].sort((a, b) => b - a).slice(0, 2);
    output = `Indique tres numeros: ${numeros.join(" ")}\nOs dois maiores sao ${maiores[0]} e ${maiores[1]}.\nSoma dos quadrados: ${maiores[0] * maiores[0] + maiores[1] * maiores[1]}`;
  } else if (number === 8) {
    const peso = normalizarNumeroTerminal(values.peso, 35);
    const km = normalizarNumeroTerminal(values.km, 42);
    const tarifa = peso <= 15 ? peso * 0.2 : peso <= 30 ? peso * 0.25 : peso <= 60 ? peso * 0.35 + 0.05 * km : peso * 0.4 + 0.07 * km;
    output = `Peso da encomenda: ${peso}\nDistancia em km: ${km}\nCusto estimado de envio: ${tarifa.toFixed(2)} euros`;
  } else if (number === 9) {
    const numeros = normalizarListaNumerosTerminal(values.valores, [3, -1, 0, 7, -4]).slice(0, 5);
    output = `Valores: ${numeros.join(" ")}\nPositivos: ${numeros.filter((item) => item > 0).length}\nNegativos: ${numeros.filter((item) => item < 0).length}\nZeros: ${numeros.filter((item) => item === 0).length}`;
  } else if (number === 10) {
    const notas = normalizarListaNumerosTerminal(values.notas, [12, 15, 9, 14, 10]).slice(0, 5);
    const soma = notas.reduce((total, item) => total + item, 0);
    output = `Notas: ${notas.join(" ")}\nSoma: ${soma.toFixed(2)}\nMedia final: ${(soma / notas.length).toFixed(2)}`;
  } else if (number === 11) {
    const numeros = normalizarListaNumerosTerminal(values.valores, [7, 2, 15, 4, 11, 9]).slice(0, 6);
    output = `Valores: ${numeros.join(" ")}\nMaior valor introduzido: ${Math.max(...numeros)}`;
  } else if (number === 12) {
    const notas = normalizarListaNumerosTerminal(values.notas, [11, 8, 16, 13, 10]).slice(0, 5);
    const media = notas.reduce((total, item) => total + item, 0) / notas.length;
    output = `Notas: ${notas.join(" ")}\nMedia: ${media.toFixed(2)}\nNotas positivas: ${notas.filter((item) => item >= 10).length}\nNotas negativas: ${notas.filter((item) => item < 10).length}`;
  } else if (number === 13) {
    const numero = Math.trunc(normalizarNumeroTerminal(values.numero, 7));
    const linhas = Array.from({ length: 10 }, (_, index) => {
      const fator = index + 1;
      return `${numero} x ${fator} = ${numero * fator}`;
    });
    output = `Numero da tabuada: ${numero}\n${linhas.join("\n")}`;
  } else if (number === 14) {
    const numeros = normalizarListaNumerosTerminal(values.valores, [4, 8, 2, 0]);
    const usados = [];
    for (const item of numeros) {
      if (item === 0) break;
      usados.push(item);
    }
    const soma = usados.reduce((total, item) => total + item, 0);
    output = `Valores introduzidos: ${numeros.join(" ")}\nValores somados: ${usados.join(" ") || "nenhum"}\nSoma: ${soma}`;
  } else if (number === 15) {
    const nota = normalizarNumeroTerminal(values.nota, 14);
    const estado = nota >= 0 && nota <= 20
      ? "Nota valida."
      : "Nota invalida. A nota deve estar entre 0 e 20.";
    output = `Nota introduzida: ${nota}\n${estado}`;
  } else if (number === 16) {
    const opcao = Math.trunc(normalizarNumeroTerminal(values.opcao, 2));
    const n1 = normalizarNumeroTerminal(values.n1, 9);
    const n2 = normalizarNumeroTerminal(values.n2, 3);
    let resultado = "Opcao invalida.";
    if (opcao === 1) resultado = `Soma: ${(n1 + n2).toFixed(2)}`;
    if (opcao === 2) resultado = `Subtracao: ${(n1 - n2).toFixed(2)}`;
    if (opcao === 3) resultado = `Multiplicacao: ${(n1 * n2).toFixed(2)}`;
    if (opcao === 4) {
      resultado = n2 === 0
        ? "Nao e possivel dividir por zero."
        : `Divisao: ${(n1 / n2).toFixed(2)}`;
    }
    output = `Opcao escolhida: ${opcao}\n1.º numero: ${n1}\n2.º numero: ${n2}\n${resultado}`;
  } else {
    output = "Execucao simulada do programa.";
  }

  return isSimulation ? output : `${readyPrefix}> ${config.command}\n${output}`;
}

function renderLabProposalCommentSteps(steps) {
  return steps.map((step, index) => `
    <button class="lab-code-step ${index === 0 ? "is-active" : ""}" type="button" data-action="proposal-code-step" data-code-step="${step.id}">
      <span>${step.text}</span>
    </button>
  `).join("");
}

function renderLabProposalPracticeBlock({ title, intro, marker, exercises }) {
  const initialExercise = exercises[0] || extraPracticeExercises[0];
  const initialCodeSteps = criarPassosCodigoProposta(initialExercise);

  return `
    <details class="card coding-practice-card practice-overview-accordion lab-proposal-accordion lab-proposal-practice-block" data-proposal-practice-block data-proposal-practice="${initialExercise.number}" open>
      <summary>
        <span class="task-module-copy">
          <strong>${title}</strong>
          <small>${intro}</small>
        </span>
        <span class="task-module-mark" aria-hidden="true">${marker}</span>
      </summary>
      <div class="lab-practice-picker" aria-label="Escolher prática">
        ${exercises.map((exercise, index) => `
          <button class="lab-practice-picker-button ${index === 0 ? "is-active" : ""}" type="button" data-action="proposal-practice-select" data-practice-number="${exercise.number}">
            <span>P${exercise.number}</span>
            <strong>${exercise.title}</strong>
          </button>
        `).join("")}
      </div>
      <div class="lab-proposal-workbench">
        <div class="lab-comment-steps" data-proposal-comment-list aria-label="Comentários do código">
          ${renderLabProposalCommentSteps(initialCodeSteps)}
        </div>

        <article class="lab-code-panel" aria-live="polite">
          <div class="ide-window lab-visible-ide">
            <div class="ide-titlebar">
              <span></span><span></span><span></span>
              <strong data-proposal-code-title>P${initialExercise.number}_${slugify(initialExercise.title)}.c</strong>
            </div>
            <pre><code data-proposal-code-content>${obterCodigoPropostaAtePasso(initialCodeSteps, 0)}</code></pre>
          </div>
          <p class="lab-code-note" data-proposal-code-note>${initialCodeSteps[0].note}</p>
          <div class="lab-terminal-panel" data-proposal-terminal-panel data-terminal-exercise="${initialExercise.number}">
            <div class="lab-terminal-titlebar">
              <span></span>
              <strong>Terminal simulado</strong>
            </div>
            <div class="lab-terminal-body">
              <div class="lab-terminal-inputs" data-proposal-terminal-inputs>
                ${renderTerminalInputsProposta(initialExercise)}
              </div>
              <button class="small-button lab-terminal-run-button" type="button" data-action="proposal-terminal-run">Simular</button>
              <pre data-proposal-terminal-output></pre>
            </div>
          </div>
        </article>
      </div>
    </details>
  `;
}

function renderLabProposalExtraBlock({ title, intro, marker, exercises }) {
  const number = Number(String(marker).replace(/\D/g, "")) || 1;
  return renderExtraPracticeCarousel({ number, intro, exercises }, { showAll: true });
}

function renderLabProposal(root) {
  document.title = "UFCD 10788 | Proposta de Laboratório";
  const firstPracticeGroup = extraPracticeExercises.filter((exercise) => exercise.number >= 1 && exercise.number <= 4);
  const secondPracticeGroup = extraPracticeExercises.filter((exercise) => exercise.number >= 5 && exercise.number <= 8);
  const thirdPracticeGroup = extraPracticeExercises.filter((exercise) => exercise.number >= 9 && exercise.number <= 12);
  const fourthPracticeGroup = extraPracticeExercises.filter((exercise) => exercise.number >= 13 && exercise.number <= 16);

  root.innerHTML = `
    <section class="section task-page-section lab-proposal-page" data-lab-proposal>
      <div class="section-inner">
        <article class="task-overview-card simple-page-heading-card lab-proposal-hero">
          <p class="eyebrow">Laboratório de Código</p>
          <h1>Laboratório de Código</h1>
          <p>Proposta para trabalhar C por etapas: primeiro compreender o código, depois resolver práticas Extra e, por fim, publicar o vosso código e fazer e receber comentários dos colegas.</p>
        </article>

        ${renderLabProposalPracticeBlock({
          title: "Prática passo a passo 1",
          intro: "Primeiro bloco guiado: cada comentário revela mais uma parte do código completo e comentado.",
          marker: "C1",
          exercises: firstPracticeGroup
        })}

        ${renderLabProposalExtraBlock({
          title: "Extra 1",
          intro: "Propostas de consolidação para aplicar, de forma autónoma, os conceitos trabalhados no primeiro bloco.",
          marker: "E1",
          exercises: firstPracticeGroup
        })}

        ${renderLabProposalPracticeBlock({
          title: "Prática passo a passo 2",
          intro: "Segundo bloco guiado: os comentários continuam a construir o código completo, agora com cálculos e decisões mais exigentes.",
          marker: "C2",
          exercises: secondPracticeGroup
        })}

        ${renderLabProposalExtraBlock({
          title: "Extra 2",
          intro: "Propostas adicionais para reforçar a autonomia antes da sessão seguinte e preparar dúvidas concretas.",
          marker: "E2",
          exercises: secondPracticeGroup
        })}

        ${renderLabProposalPracticeBlock({
          title: "Prática passo a passo 3",
          intro: "Terceiro bloco guiado: os comentários ajudam a compreender contadores, acumuladores, médias e comparação de valores.",
          marker: "C3",
          exercises: thirdPracticeGroup
        })}

        ${renderLabProposalExtraBlock({
          title: "Extra 3",
          intro: "Propostas para consolidar ciclos, contadores, acumuladores e análise de valores em C.",
          marker: "E3",
          exercises: thirdPracticeGroup
        })}

        ${renderLabProposalPracticeBlock({
          title: "Prática passo a passo 4",
          intro: "Quarto bloco guiado: os comentários apoiam a leitura de ciclos, validação de dados e menus simples.",
          marker: "C4",
          exercises: fourthPracticeGroup
        })}

        ${renderLabProposalExtraBlock({
          title: "Extra 4",
          intro: "Propostas finais para treinar ciclos, validação de dados, repetição controlada e menus simples.",
          marker: "E4",
          exercises: fourthPracticeGroup
        })}

        <article class="card final-project-board">
          <div>
            <p class="eyebrow">Trabalho final</p>
            <h2>Publicar e comentar</h2>
            <p>Cada grupo constrói o seu código, à sua escolha, respeitando os critérios básicos trabalhados no laboratório. Depois publica a solução e comenta o trabalho dos colegas.</p>
          </div>
          <div class="final-project-columns">
            <section>
              <h3>Entrega do grupo</h3>
              <ul class="clean-list task-prompt-list">
                <li>Objetivo do programa.</li>
                <li>Código C comentado.</li>
                <li>Testes realizados.</li>
                <li>Dificuldades encontradas.</li>
              </ul>
            </section>
            <section>
              <h3>Comentários dos colegas</h3>
              <ul class="clean-list task-prompt-list">
                <li>Uma pergunta sobre a solução.</li>
                <li>Uma melhoria possível.</li>
                <li>Um ponto forte do código.</li>
                <li>Uma sugestão de teste adicional.</li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderFinalProgramPage(root) {
  document.title = "UFCD 10788 | Programa final";
  root.innerHTML = `
    <section class="section task-page-section lab-proposal-page">
      <div class="section-inner">
        <article class="task-overview-card simple-page-heading-card lab-proposal-hero">
          <h1>Programa final</h1>
          <p>Cada grupo constrói um programa em C, à sua escolha, respeitando os critérios trabalhados no laboratório. Depois publica a solução e comenta o trabalho dos colegas.</p>
        </article>

        <details class="card final-project-board final-project-accordion">
          <summary>
            <p class="eyebrow">Seleção do problema</p>
            <h2>Seleção do problema para o programa</h2>
            <p>O problema escolhido para o projeto deve ser claro, adequado ao nível de SQL em C++, possível de resolver no tempo disponível e permitir a aplicação dos conteúdos trabalhados.</p>
          </summary>
          <div class="final-project-columns">
            <section>
              <h3>Critérios para selecionar o problema</h3>
              <ul class="clean-list task-prompt-list">
                <li>Ter um objetivo claro e fácil de compreender.</li>
                <li>Estar relacionado com uma situação real ou prática.</li>
                <li>Ser adequado ao nível de conhecimentos dos alunos em C++.</li>
                <li>Permitir a utilização de variáveis, entrada e saída de dados, cálculos, estruturas de decisão, estruturas de repetição e funções, se aplicável.</li>
                <li>Permitir a criação de um programa com entrada, processamento e saída de dados.</li>
                <li>Ter um grau de dificuldade equilibrado.</li>
                <li>Ser possível de concluir dentro do tempo disponível.</li>
                <li>Ter regras ou condições bem definidas.</li>
                <li>Permitir testes com diferentes dados de entrada.</li>
                <li>Possibilitar uma avaliação clara do resultado final.</li>
                <li>Ser original ou adaptado pelo aluno, evitando a simples cópia de soluções prontas.</li>
                <li>Permitir melhorias futuras.</li>
              </ul>
            </section>
            <section>
              <h3>Perguntas de apoio</h3>
              <ul class="clean-list task-prompt-list">
                <li>Qual é o problema que quero resolver?</li>
                <li>Qual é o objetivo principal do programa?</li>
                <li>Que dados o utilizador terá de introduzir?</li>
                <li>Que cálculos, decisões ou repetições o programa terá de realizar?</li>
                <li>Que resultados o programa deve apresentar?</li>
                <li>Que estruturas de C++ posso utilizar?</li>
                <li>O problema é possível de resolver com os conhecimentos que já tenho?</li>
                <li>Consigo testar o programa com vários exemplos?</li>
              </ul>
              <h3>Formulação final curta</h3>
              <p>O problema escolhido para o projeto deve ser claro, prático, adequado ao nível de SQL em C++ e possível de resolver no tempo disponível. Deve permitir a utilização de variáveis, entrada e saída de dados, cálculos, estruturas de decisão e estruturas de repetição. O problema deve ainda ter regras bem definidas, permitir testes com diferentes dados e possibilitar uma avaliação objetiva do programa desenvolvido.</p>
            </section>
          </div>
        </details>

        <details class="card final-project-board final-project-accordion">
          <summary>
            <p class="eyebrow">Objetivo</p>
            <h2>Construir um programa em C</h2>
            <p>O programa deve resolver uma situação simples, com entrada de dados, processamento, saída formatada e, sempre que fizer sentido, decisões ou repetição.</p>
          </summary>
          <div class="final-project-columns">
            <section>
              <h3>O programa deve incluir</h3>
              <ul class="clean-list task-prompt-list">
                <li>Objetivo claro do programa.</li>
                <li>Dados de entrada bem identificados.</li>
                <li>Variáveis com tipos adequados.</li>
                <li>Pelo menos um cálculo ou transformação de dados.</li>
                <li>Mensagens de saída claras para o utilizador.</li>
                <li>Código comentado nas partes principais.</li>
                <li>Testes com exemplos diferentes.</li>
              </ul>
            </section>
            <section>
              <h3>Publicação</h3>
              <ul class="clean-list task-prompt-list">
                <li>Título do programa.</li>
                <li>Breve explicação do problema resolvido.</li>
                <li>Código C completo e comentado.</li>
                <li>Exemplo de execução.</li>
                <li>Dificuldades encontradas ou decisões tomadas.</li>
              </ul>
            </section>
          </div>
        </details>

        <details class="card final-project-board final-project-accordion">
          <summary>
            <p class="eyebrow">Interação entre grupos</p>
            <h2>Publicar e comentar</h2>
            <p>Depois da publicação, cada grupo observa soluções de outros grupos e deixa comentários que ajudem a compreender, testar e melhorar o trabalho apresentado.</p>
          </summary>
          <div class="final-project-columns">
            <section>
              <h3>Cada comentário deve incluir</h3>
              <ul class="clean-list task-prompt-list">
                <li>Um ponto forte do programa.</li>
                <li>Uma pergunta sobre a solução.</li>
                <li>Uma sugestão de melhoria.</li>
                <li>Um teste adicional que o grupo poderia experimentar.</li>
              </ul>
            </section>
            <section>
              <h3>Critérios básicos</h3>
              <ul class="clean-list task-prompt-list">
                <li>Clareza do objetivo.</li>
                <li>Utilização correta das estruturas trabalhadas.</li>
                <li>Organização e legibilidade do código.</li>
                <li>Comentários úteis no código.</li>
                <li>Participação na análise dos trabalhos dos colegas.</li>
              </ul>
            </section>
          </div>
        </details>
      </div>
    </section>
  `;
}

const PROGRAM_SUBMISSIONS_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwTZTbLAY7RLR8RSbX3ogc6WT1J8DJZdgDRq_FUD055ByJm2eXvJ8zYzKIGSb1RYxAjaw/exec";
const PROGRAM_SUBMISSIONS_SPREADSHEET_ID = "1SOIeVwg5W2t0_iBJkJpnjwZ_O1lWM1yvlKMYQShFXwg";
const PROGRAM_COMMENTS_STORAGE_KEY = "ufcd10788-program-gallery-comments";
const PROGRAM_GALLERY_ROOMS = [...Array.from({ length: 6 }, (_, index) => `Sala ${index + 1}`), "Sala Preview"];
const PROGRAM_GALLERY_PREVIEW_PROGRAM = {
  sala: "Sala Preview",
  nome_programa: "Conversor Celsius para Fahrenheit",
  objetivo: "Programa de exemplo para testar a visualização da galeria, o modal, o IDE e o terminal simulado.",
  codigo_comentado: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    // Declarar as variáveis necessárias
    double celsius;
    double fahrenheit;

    // Pedir a temperatura ao utilizador
    cout << "Indique a temperatura em graus Celsius: ";
    cin >> celsius;

    // Converter Celsius para Fahrenheit
    fahrenheit = (celsius * 9 / 5) + 32;

    // Apresentar o resultado com duas casas decimais
    cout << fixed << setprecision(2);
    cout << "Temperatura em Fahrenheit: " << fahrenheit << endl;

    return 0;
}`,
  exemplo_execucao: `Indique a temperatura em graus Celsius: 25
Temperatura em Fahrenheit: 77.00`,
  pdf_url: "../submissoes-teste/sala-preview-programa-final/descricao.pdf",
  pasta_zip_url: "../submissoes-teste/sala-preview-programa-final.zip",
  ficheiros: [
    {
      nome: "programa.cpp",
      tipo: "codigo",
      tamanho: "624 B",
      descricao: "Código principal em C++.",
      conteudo: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double celsius;
    double fahrenheit;

    cout << "Indique a temperatura em graus Celsius: ";
    cin >> celsius;

    fahrenheit = (celsius * 9 / 5) + 32;

    cout << fixed << setprecision(2);
    cout << "Temperatura em Fahrenheit: " << fahrenheit << endl;

    if (fahrenheit < 50) {
        cout << "Classificacao: temperatura baixa." << endl;
    } else if (fahrenheit <= 86) {
        cout << "Classificacao: temperatura amena." << endl;
    } else {
        cout << "Classificacao: temperatura elevada." << endl;
    }

    return 0;
}`
    },
    {
      nome: "descricao.pdf",
      tipo: "pdf",
      tamanho: "844 B",
      descricao: "Documento de apoio pedido aos formandos.",
      url: "../submissoes-teste/sala-preview-programa-final/descricao.pdf"
    },
    {
      nome: "descricao.md",
      tipo: "texto",
      tamanho: "852 B",
      descricao: "Explicação curta do objetivo, entradas, processamento e saídas.",
      conteudo: [
        "# Conversor Celsius para Fahrenheit",
        "",
        "## Objetivo",
        "",
        "Criar um programa simples em C++ que leia uma temperatura em graus Celsius, converta esse valor para Fahrenheit e apresente uma classificacao basica da temperatura.",
        "",
        "## Entradas",
        "",
        "- Temperatura em graus Celsius, introduzida pelo utilizador.",
        "",
        "## Processamento",
        "",
        "O programa aplica a formula: fahrenheit = (celsius * 9 / 5) + 32",
        "",
        "Depois usa uma estrutura de decisao para classificar a temperatura.",
        "",
        "## Saidas",
        "",
        "- Temperatura convertida para Fahrenheit.",
        "- Classificacao da temperatura."
      ].join("\n")
    },
    {
      nome: "dados-teste.txt",
      tipo: "texto",
      tamanho: "315 B",
      descricao: "Entradas e saídas esperadas para testar o programa.",
      conteudo: `Teste 1
Entrada:
25

Saida esperada:
Temperatura em Fahrenheit: 77.00
Classificacao: temperatura amena.

Teste 2
Entrada:
5

Saida esperada:
Temperatura em Fahrenheit: 41.00
Classificacao: temperatura baixa.

Teste 3
Entrada:
35

Saida esperada:
Temperatura em Fahrenheit: 95.00
Classificacao: temperatura elevada.`
    },
    {
      nome: "guiao-apresentacao.txt",
      tipo: "texto",
      tamanho: "611 B",
      descricao: "Roteiro simples para apresentação em sessão.",
      conteudo: `Guiao curto para apresentar o programa

1. Apresentar o problema
   O programa converte uma temperatura de Celsius para Fahrenheit.

2. Explicar a entrada
   O utilizador escreve uma temperatura em graus Celsius.

3. Explicar o processamento
   O programa aplica a formula de conversao e depois classifica a temperatura.

4. Mostrar o codigo
   Destacar as variaveis, a formula e a estrutura if / else if / else.

5. Testar ao vivo
   Usar os valores 25, 5 e 35 para mostrar resultados diferentes.

6. Conclusao
   O programa usa entrada, processamento, saida e decisao.`
    },
    {
      nome: "README.txt",
      tipo: "texto",
      tamanho: "703 B",
      descricao: "Resumo da organização da pasta zipada.",
      conteudo: `UFCD 10788 - Programa final de teste

Sala: Sala Preview
Programa: Conversor Celsius para Fahrenheit

Objetivo:
Este programa serve para testar a submissao da Galeria de programas e para mostrar, em sessao, como um trabalho final pode ser organizado.

Ficheiros incluidos:
- programa.cpp: codigo principal em C++.
- descricao.md: explicacao curta do programa.
- dados-teste.txt: exemplos de entrada e saida esperada.
- guiao-apresentacao.txt: roteiro simples para apresentar o trabalho aos colegas.

Como testar:
1. Abrir o ficheiro programa.cpp num compilador C++.
2. Compilar e executar.
3. Introduzir uma temperatura em graus Celsius.
4. Confirmar o valor em Fahrenheit e a classificacao apresentada.`
    }
  ]
};

function readProgramGalleryComments() {
  try {
    return JSON.parse(localStorage.getItem(PROGRAM_COMMENTS_STORAGE_KEY) || "{}");
  } catch (error) {
    return {};
  }
}

function saveProgramGalleryComments(comments) {
  localStorage.setItem(PROGRAM_COMMENTS_STORAGE_KEY, JSON.stringify(comments));
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("Não foi possível ler o ficheiro."));
    reader.readAsDataURL(file);
  });
}

function getLatestProgramForRoom(programs, sala) {
  return [...programs].reverse().find((program) => program.sala === sala && (!program.estado || program.estado === "ativo"));
}

function parseProgramJsonField(value, fallback) {
  if (!value) return fallback;
  if (typeof value !== "string") return value;
  try {
    return JSON.parse(value);
  } catch (error) {
    return fallback;
  }
}

function normalizeProgramGalleryRecord(record) {
  const respostas = parseProgramJsonField(record?.respostas || record?.Respostas, {});
  const source = { ...record, ...(respostas && typeof respostas === "object" ? respostas : {}) };
  const ficheiros = parseProgramJsonField(
    source.Ficheiros || source.ficheiros || source["Ficheiros da pasta"] || source.ficheiros_zip,
    []
  );

  return {
    sala: source.Sala || source.sala || "",
    nome_programa: source["Nome do programa"] || source.nome_programa || source.Programa || source.programa || "",
    objetivo: source.Objetivo || source.objetivo || "",
    observacoes: source["Observações"] || source.Observacoes || source.observacoes || "",
    codigo_comentado: source["Código comentado"] || source.codigo_comentado || source.codigo || "",
    exemplo_execucao: source["Execução"] || source["Exemplo de execução"] || source["Dados de teste"] || source.exemplo_execucao || "",
    pdf_url: source["PDF URL"] || source.pdf_url || source.documento_url || "",
    pasta_zip_url: source["ZIP URL"] || source["Pasta zipada URL"] || source.pasta_zip_url || source.zip_url || "",
    ficheiros: Array.isArray(ficheiros) ? ficheiros : [],
    estado: source.Estado || source.estado || "ativo",
    data: source["Data de submissão"] || source.Data || source.data || ""
  };
}

async function carregarProgramasGaleria() {
  const programasDrive = await obterProgramasGaleriaDrive();
  if (programasDrive.length) return programasDrive;

  const registos = await obterRegistosProgramas("Programas finais");
  return registos
    .map(normalizeProgramGalleryRecord)
    .filter((program) => program.sala && program.nome_programa);
}

async function obterProgramasGaleriaDrive() {
  try {
    const url = new URL(PROGRAM_SUBMISSIONS_APPS_SCRIPT_URL);
    url.searchParams.set("spreadsheet_id", PROGRAM_SUBMISSIONS_SPREADSHEET_ID);
    url.searchParams.set("acao", "galeria_programas_drive");
    const dados = await obterJsonp(url.toString());
    const programas = dados?.programas || dados?.registos || [];
    return Array.isArray(programas)
      ? programas.map(normalizeProgramGalleryRecord).filter((program) => program.sala && program.nome_programa)
      : [];
  } catch (error) {
    return [];
  }
}

function renderProgramCode(program, sala) {
  const code = program?.codigo_comentado || program?.codigo || program?.conteudo_codigo;
  if (code) return escapeHtml(code);

  return `// O código comentado de ${escapeHtml(sala)} aparece aqui depois de ser tratado a partir do ficheiro ZIP.
// A galeria já está preparada para o mostrar numa janela tipo IDE.`;
}

function getProgramExecution(program) {
  return program?.exemplo_execucao || "A execução será apresentada aqui depois de o programa ser publicado.";
}

function parseProjectExecutionTests(execution) {
  const text = String(execution || "").trim();
  if (!text) return [];

  const matches = [...text.matchAll(/(?:^|\n)(Teste\s+\d+[^\n]*)\n([\s\S]*?)(?=\nTeste\s+\d+|\s*$)/gi)];
  const blocks = matches.length
    ? matches.map((match) => ({ title: match[1].trim(), body: match[2].trim() }))
    : [{ title: "Teste", body: text }];

  return blocks.map((block, index) => {
    const entradaMatch = block.body.match(/Entrada:\s*([\s\S]*?)(?=\n\s*(?:#\s*)?Sa[ií]da esperada:|\s*$)/i);
    const saidaMatch = block.body.match(/(?:#\s*)?Sa[ií]da esperada:\s*([\s\S]*)/i);
    const entrada = entradaMatch ? entradaMatch[1].trim() : "";
    const saida = saidaMatch ? saidaMatch[1].trim() : block.body.trim();
    return {
      title: block.title || `Teste ${index + 1}`,
      entrada,
      saida
    };
  }).filter((test) => test.entrada || test.saida);
}

function formatProjectTerminalOutput(test) {
  if (!test) return "Escolhe um teste e carrega em Simular.";

  const lines = [];

  if (test.entrada) {
    lines.push("", "Entrada:", test.entrada);
  }

  if (test.saida) {
    lines.push("", "Saida:", test.saida);
  }

  return lines.join("\n");
}

function renderProjectTerminal(program) {
  const tests = parseProjectExecutionTests(getProgramExecution(program));

  if (!tests.length) {
    return `
      <div class="lab-terminal-body">
        <pre>A execução será apresentada aqui depois de o programa ser publicado.</pre>
      </div>
    `;
  }

  return `
    <div class="lab-terminal-body project-terminal-simulator">
      <div class="project-terminal-controls">
        <label>
          Teste
          <select data-project-terminal-select>
            ${tests.map((test, index) => `<option value="${index}">${escapeHtml(test.title)}</option>`).join("")}
          </select>
        </label>
        <button class="small-button lab-terminal-run-button" type="button" data-project-terminal-run>Simular</button>
      </div>
      <pre
        data-project-terminal-output
        data-project-terminal-tests="${escapeHtml(JSON.stringify(tests))}">${escapeHtml(formatProjectTerminalOutput(tests[0]))}</pre>
    </div>
  `;
}

function renderProjectZipButton(program, title) {
  const files = Array.isArray(program?.ficheiros) ? program.ficheiros : [];
  const zipUrl = program?.pasta_zip_url || program?.zip_url || program?.ficheiro_zip_url || "";
  const disabled = !files.length && !zipUrl ? "disabled" : "";
  const buttonLabel = files.length
    ? `Ver ficheiros da pasta (${files.length})`
    : "Ver ficheiros da pasta";
  const fileList = files.map((file) => ({
    nome: file?.nome || "ficheiro",
    tipo: file?.tipo || "",
    tamanho: file?.tamanho || ""
  }));

  return `
    <button
      class="small-button"
      type="button"
      data-project-zip-open
      data-project-title="${escapeHtml(title)}"
      data-project-zip-url="${escapeHtml(zipUrl)}"
      data-project-zip-files="${escapeHtml(JSON.stringify(fileList))}"
      ${disabled}>
      ${buttonLabel}
    </button>
  `;
}

function renderProjectZipModalFiles(files) {
  if (!files.length) {
    return `<p class="project-zip-modal-empty">A lista de ficheiros ainda não está disponível.</p>`;
  }

  return `
    <ul class="project-zip-modal-files">
      ${files.map((file) => `
        <li>
          <strong>${escapeHtml(file.nome || "ficheiro")}</strong>
          <span>${escapeHtml([file.tipo, file.tamanho].filter(Boolean).join(" · "))}</span>
        </li>
      `).join("")}
    </ul>
  `;
}

function renderProjectGalleryPage(root) {
  document.title = "UFCD 10788 | Galeria";

  root.innerHTML = `
    <section class="section task-page-section lab-proposal-page project-gallery-page">
      <div class="section-inner">
        <article class="task-overview-card simple-page-heading-card lab-proposal-hero">
          <h1>Galeria de programas</h1>
          <p>Espaço para cada sala publicar o seu programa final, consultar os trabalhos dos colegas e deixar comentários orientados.</p>
        </article>

        <details class="card project-info-accordion project-gallery-intro">
          <summary>
            <span>
              <small>Publicação dos trabalhos</small>
              <strong>Como funciona</strong>
            </span>
          </summary>
          <div class="project-info-body">
            <p>Cada grupo prepara o seu programa, publica a explicação e o código comentado. Depois, as outras salas consultam o trabalho e deixam comentários com um ponto forte, uma pergunta e uma sugestão.</p>
            <ol class="project-gallery-steps" aria-label="Etapas da galeria">
              <li><strong>Publicar</strong><span>Enviar o ZIP com o código e os materiais de apoio.</span></li>
              <li><strong>Comentar</strong><span>Ler o trabalho dos colegas e deixar feedback útil.</span></li>
            </ol>
          </div>
        </details>

        <details class="card project-info-accordion project-submission-guide">
          <summary>
            <span>
              <small>Submissão</small>
              <strong>Como entregar o programa</strong>
            </span>
          </summary>
          <div class="project-info-body">
            <p>Cada grupo deve enviar uma pasta zipada <strong>(.zip)</strong>, com os materiais organizados e nomes simples.</p>

            ${PROGRAM_SUBMISSIONS_SPREADSHEET_ID ? "" : `
              <div class="project-config-warning">
                <strong>Configuração em falta</strong>
                <p>Falta indicar o ID da Google Sheet em <code>PROGRAM_SUBMISSIONS_SPREADSHEET_ID</code>. Até lá, o formulário fica visível mas não envia dados.</p>
              </div>
            `}

            ${itemSiteVisivel("galeria-formulario-submissao") ? `
            <form class="project-program-submit-form" data-program-submit-form>
              <div class="project-form-grid">
                <label>
                  Sala
                  <select name="sala" required>
                    ${PROGRAM_GALLERY_ROOMS.map((sala) => `<option value="${sala}">${sala}</option>`).join("")}
                  </select>
                </label>
                <label>
                  Nome do programa
                  <input name="nome_programa" type="text" placeholder="Ex.: Calculadora de média" required>
                </label>
                <label>
                  Objetivo
                  <textarea name="objetivo" rows="3" placeholder="Explica, de forma curta, o problema que o programa resolve." required></textarea>
                </label>
                <label>
                  Observações
                  <textarea name="observacoes" rows="3" placeholder="Dificuldades, decisões tomadas ou notas úteis."></textarea>
                </label>
                <label>
                  Pasta zipada
                  <input name="ficheiro_zip" type="file" accept=".zip,application/zip,application/x-zip-compressed" required>
                </label>
              </div>
              <button class="small-button" type="submit" ${PROGRAM_SUBMISSIONS_SPREADSHEET_ID ? "" : "disabled"}>Submeter programa</button>
              <p class="project-form-status" data-program-submit-status>${PROGRAM_SUBMISSIONS_SPREADSHEET_ID ? "Pronto para submeter." : "Indica primeiro o ID da Sheet para ativar a submissão."}</p>
            </form>
            ` : `
            <div class="project-config-warning">
              <strong>Formulário oculto</strong>
              <p>O formulário de submissão está desligado no controlo do site.</p>
            </div>
            `}

            <div class="submission-package-card">
              <strong>Nome recomendado do ficheiro</strong>
              <code>sala-1-programa-final.zip</code>
              <span>Troquem o número da sala conforme o grupo. Evitem espaços, acentos e nomes muito longos.</span>
            </div>

            <div class="project-submission-grid">
              <section>
                <span>1</span>
                <h3>Pasta compactada</h3>
                <p>O grupo entrega apenas um ficheiro <strong>.zip</strong>. Dentro dele devem estar todos os materiais necessários para apresentar o programa.</p>
              </section>
              <section>
                <span>2</span>
                <h3>Código do programa</h3>
                <p>Incluir o código principal em C++ comentado. Este ficheiro será usado para mostrar o programa na galeria, no quadro tipo IDE.</p>
                <code>programa.cpp</code>
              </section>
              <section>
                <span>3</span>
                <h3>Funcionamento</h3>
                <p>O programa será testado no nosso terminal. No documento de apoio, indiquem apenas os exemplos usados para confirmar o funcionamento.</p>
              </section>
              <section>
                <span>4</span>
                <h3>Documento de apoio</h3>
                <p>Incluir um PDF curto com objetivo, entradas, processamento, saídas, testes realizados e dificuldades encontradas.</p>
                <code>descricao.pdf</code>
              </section>
            </div>

            <div class="submission-example-box">
              <strong>Estrutura recomendada</strong>
              <pre><code>sala-1-programa-final.zip
  programa.cpp
  descricao.pdf
  README.txt</code></pre>
            </div>

            <div class="submission-warning">
              <strong>Importante</strong>
              <p>O PDF não substitui o código. O ficheiro <code>programa.cpp</code> é essencial para depois conseguirmos colocar o programa na galeria e mostrar o código como se estivesse num IDE.</p>
            </div>
          </div>
        </details>

        ${itemSiteVisivel("galeria-lista-salas") ? `
        <article class="card project-gallery-live">
          <div class="project-gallery-live-heading">
            <h2>Galeria</h2>
          </div>
          <div class="project-gallery-grid" data-project-gallery-list></div>
        </article>
        ` : ""}
      </div>
    </section>

    <div class="project-execution-modal" data-project-execution-modal hidden>
      <div class="project-execution-dialog" role="dialog" aria-modal="true" aria-labelledby="project-execution-title">
        <div class="project-execution-titlebar">
          <span></span><span></span><span></span>
          <strong id="project-execution-title" data-project-execution-title>Programa</strong>
          <button type="button" aria-label="Fechar" data-project-execution-close>×</button>
        </div>
        <div class="project-modal-workbench">
          <div class="ide-window project-modal-ide">
            <div class="ide-titlebar">
              <span></span><span></span><span></span>
              <strong data-project-modal-file>programa.cpp</strong>
            </div>
            <pre><code data-project-modal-code></code></pre>
          </div>
        </div>
      </div>
    </div>

    <div class="project-execution-modal" data-project-zip-modal hidden>
      <div class="project-execution-dialog project-zip-dialog" role="dialog" aria-modal="true" aria-labelledby="project-zip-title">
        <div class="project-execution-titlebar">
          <span></span><span></span><span></span>
          <strong id="project-zip-title" data-project-zip-title>Pasta zipada</strong>
          <button type="button" aria-label="Fechar" data-project-zip-close>×</button>
        </div>
        <div class="project-zip-modal-body">
          <div data-project-zip-list></div>
          <a class="small-button project-zip-download" href="#" data-project-zip-download download hidden>Descarregar ZIP</a>
        </div>
      </div>
    </div>
  `;

  initProjectSubmissionForm(root);
  initProjectGallery(root);
  initProjectTerminalSimulator(root);
  initProjectExecutionModal(root);
  initProjectZipModal(root);
}

function renderProjectGalleryRoomCard(sala, program) {
  const title = program?.nome_programa || "A aguardar programa";
  const code = renderProgramCode(program, sala);
  const pdfUrl = program?.pdf_url || "";
  const fileName = `${slugify(title) || "programa"}.cpp`;

  return `
    <details class="card project-room-card" ${program ? "open" : ""}>
      <summary>
        <small>${escapeHtml(sala)}</small>
        <strong>${escapeHtml(title)}</strong>
      </summary>
      <div class="project-room-body">
        <p>Abre o programa para ver o código comentado no IDE.</p>
        <div class="project-room-actions">
          <button
            class="small-button"
            type="button"
            data-project-open
            data-project-room="${escapeHtml(sala)}"
            data-project-title="${escapeHtml(title)}"
            data-project-file="${escapeHtml(fileName)}"
            data-project-code="${escapeHtml(code)}">
            Abrir programa
          </button>
          ${renderProjectZipButton(program, title)}
        </div>
        <section class="project-terminal-section">
          <h3>Terminal</h3>
          <div class="lab-terminal-panel project-terminal-panel">
            <div class="lab-terminal-titlebar">
              <span></span>
              <strong>Terminal simulado</strong>
            </div>
            ${renderProjectTerminal(program)}
          </div>
        </section>
        <section class="project-pdf-section">
          <h3>Documento de apoio</h3>
          ${pdfUrl ? `
            <iframe class="project-pdf-frame" src="${escapeHtml(pdfUrl)}" title="Documento de apoio de ${escapeHtml(sala)}"></iframe>
          ` : `
            <div class="project-pdf-placeholder">
              <strong>PDF por adicionar</strong>
              <p>Quando o grupo entregar o documento de apoio, a pré-visualização aparece aqui.</p>
            </div>
          `}
        </section>
      </div>
    </details>
  `;
}

function renderProjectComment(comment) {
  return `
    <article>
      <strong>${escapeHtml(comment.sala || "Sala")}</strong>
      ${comment.pontoForte ? `<p><b>Ponto forte:</b> ${escapeHtml(comment.pontoForte)}</p>` : ""}
      ${comment.pergunta ? `<p><b>Pergunta:</b> ${escapeHtml(comment.pergunta)}</p>` : ""}
      ${comment.sugestao ? `<p><b>Sugestão:</b> ${escapeHtml(comment.sugestao)}</p>` : ""}
      ${comment.teste ? `<p><b>Teste proposto:</b> ${escapeHtml(comment.teste)}</p>` : ""}
      ${comment.texto ? `<p>${escapeHtml(comment.texto)}</p>` : ""}
    </article>
  `;
}

function getProjectGalleryPreviewProgram(sala) {
  return sala === PROGRAM_GALLERY_PREVIEW_PROGRAM.sala ? PROGRAM_GALLERY_PREVIEW_PROGRAM : null;
}

async function enviarQuestionarioProgramas(questionario, respostas, extras = {}) {
  const dados = new URLSearchParams();
  dados.set("spreadsheet_id", PROGRAM_SUBMISSIONS_SPREADSHEET_ID);
  dados.set("questionario", questionario);
  dados.set("respostas", JSON.stringify(respostas));
  Object.entries(extras).forEach(([key, value]) => {
    dados.set(key, typeof value === "string" ? value : JSON.stringify(value));
  });

  await fetch(PROGRAM_SUBMISSIONS_APPS_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    body: dados
  });
}

async function obterRegistosProgramas(questionario) {
  const url = new URL(PROGRAM_SUBMISSIONS_APPS_SCRIPT_URL);
  url.searchParams.set("spreadsheet_id", PROGRAM_SUBMISSIONS_SPREADSHEET_ID);
  url.searchParams.set("acao", "registos");
  url.searchParams.set("questionario", questionario);
  const dados = await obterJsonp(url.toString());
  if (Array.isArray(dados?.registos)) return dados.registos;
  if (Array.isArray(dados?.linhas)) return dados.linhas;
  if (Array.isArray(dados?.rows)) return dados.rows;
  if (Array.isArray(dados)) return dados;
  return [];
}

async function confirmarRegistoProgramas(questionario, predicate) {
  for (let tentativa = 0; tentativa < 3; tentativa += 1) {
    await aguardar(tentativa === 0 ? 1200 : 1800);
    const registos = await obterRegistosProgramas(questionario);
    if (registos.some(predicate)) return true;
  }
  return false;
}

function initProjectSubmissionForm(root) {
  const form = root.querySelector("[data-program-submit-form]");
  const status = root.querySelector("[data-program-submit-status]");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!PROGRAM_SUBMISSIONS_SPREADSHEET_ID) {
      if (status) status.textContent = "A submissão fica disponível depois de configurar o ID da Google Sheet.";
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const data = new FormData(form);
    const file = data.get("ficheiro_zip");

    if (!(file instanceof File) || !file.name) {
      if (status) status.textContent = "Escolhe primeiro a pasta zipada do programa.";
      return;
    }

    try {
      if (submitButton) submitButton.disabled = true;
      if (status) status.textContent = "A enviar programa...";

      const ficheiroZip = await readFileAsDataUrl(file);
      const submissaoId = criarIdCurto("programa");
      const nomePrograma = String(data.get("nome_programa") || "").trim();
      const sala = String(data.get("sala") || "").trim();
      const respostas = {
        "Submissão ID": submissaoId,
        Sala: sala,
        "Nome do programa": nomePrograma,
        Objetivo: data.get("objetivo") || "",
        "Observações": data.get("observacoes") || "",
        "Pasta zipada": file.name,
        "Data de submissão": new Date().toISOString()
      };

      await enviarQuestionarioProgramas("Programas finais", respostas, {
        acao: "submeter_programa_final",
        ficheiro_zip: {
          nome: file.name,
          tipo: file.type || "application/zip",
          tamanho: file.size,
          conteudo: ficheiroZip
        }
      });

      if (status) status.textContent = "Pedido enviado. A confirmar registo na Google Sheet...";
      const confirmado = await confirmarRegistoProgramas("Programas finais", (registo) => {
        return registo["Submissão ID"] === submissaoId
          || (
            String(registo.Sala || "").trim() === sala
            && String(registo["Nome do programa"] || "").trim() === nomePrograma
            && String(registo["Pasta zipada"] || registo["Ficheiro ZIP"] || "").trim() === file.name
          );
      });

      form.reset();
      if (status) {
        status.textContent = confirmado
          ? "Programa registado na Google Sheet e enviado para a pasta Drive das salas."
          : "Pedido enviado, mas ainda não aparece na Sheet. A Apps Script precisa de aceitar Programas finais e guardar a pasta zipada na pasta Drive das salas.";
      }
    } catch (error) {
      if (status) status.textContent = "Não foi possível submeter o programa. Verifica a ligação e tenta novamente.";
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
}

async function initProjectGallery(root) {
  const list = root.querySelector("[data-project-gallery-list]");
  if (!list) return;

  const visibleRooms = PROGRAM_GALLERY_ROOMS.filter((sala) => itemSiteVisivel(`galeria-${slugify(sala)}`));

  if (!visibleRooms.length) {
    list.closest(".project-gallery-live")?.remove();
    return;
  }

  const renderRooms = (programs = []) => {
    list.innerHTML = visibleRooms
      .map((sala) => renderProjectGalleryRoomCard(sala, getLatestProgramForRoom(programs, sala) || getProjectGalleryPreviewProgram(sala)))
      .join("");
  };

  renderRooms();

  try {
    const programs = await carregarProgramasGaleria();
    renderRooms(programs);
  } catch (error) {
    renderRooms();
  }
}

function initProjectTerminalSimulator(root) {
  root.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project-terminal-run]");
    if (!button) return;

    const panel = button.closest(".project-terminal-simulator");
    const select = panel?.querySelector("[data-project-terminal-select]");
    const output = panel?.querySelector("[data-project-terminal-output]");
    const tests = parseProgramJsonField(output?.dataset.projectTerminalTests || "[]", []);
    const index = Number(select?.value || 0);

    if (output) {
      output.textContent = formatProjectTerminalOutput(Array.isArray(tests) ? tests[index] : null);
    }
  });
}

function initProjectComments(root) {
  root.addEventListener("submit", async (event) => {
    const form = event.target.closest("[data-project-comment-form]");
    if (!form) return;

    event.preventDefault();

    const status = form.querySelector("[data-project-comment-status]");
    const salaDestino = form.dataset.projectCommentRoom || "";
    const data = new FormData(form);
    const salaComentario = String(data.get("sala_comentario") || "").trim();
    const pontoForte = String(data.get("ponto_forte") || "").trim();
    const pergunta = String(data.get("pergunta") || "").trim();
    const sugestao = String(data.get("sugestao") || "").trim();
    const teste = String(data.get("teste") || "").trim();

    if (!pontoForte || !pergunta || !sugestao) {
      if (status) status.textContent = "Preenche o ponto forte, a pergunta e a sugestão.";
      return;
    }

    const comment = {
      sala: salaComentario,
      pontoForte,
      pergunta,
      sugestao,
      teste,
      data: new Date().toISOString()
    };
    const comments = readProgramGalleryComments();
    comments[salaDestino] = [...(comments[salaDestino] || []), comment];
    saveProgramGalleryComments(comments);

    const list = root.querySelector(`[data-project-comments-list="${CSS.escape(salaDestino)}"]`);
    if (list) list.innerHTML = comments[salaDestino].map(renderProjectComment).join("");
    form.reset();

    try {
      if (status) status.textContent = "A guardar comentário...";
      await fetch(PROGRAM_SUBMISSIONS_APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          spreadsheet_id: PROGRAM_SUBMISSIONS_SPREADSHEET_ID,
          questionario: "Comentários da galeria",
          respostas: {
            "Sala comentada": salaDestino,
            "Sala que comenta": salaComentario,
            "Ponto forte": pontoForte,
            Pergunta: pergunta,
            "Sugestão de melhoria": sugestao,
            "Teste proposto": teste,
            Data: comment.data
          }
        }),
        headers: { "Content-Type": "text/plain;charset=utf-8" }
      });
      if (status) status.textContent = "Comentário guardado.";
    } catch (error) {
      if (status) status.textContent = "Comentário guardado neste browser. Não foi possível enviar para a Sheet.";
    }
  });
}

function initProjectExecutionModal(root) {
  const modal = root.nextElementSibling?.matches?.("[data-project-execution-modal]")
    ? root.nextElementSibling
    : document.querySelector("[data-project-execution-modal]");
  if (!modal) return;

  const title = modal.querySelector("[data-project-execution-title]");
  const code = modal.querySelector("[data-project-modal-code]");
  const file = modal.querySelector("[data-project-modal-file]");
  const closeButton = modal.querySelector("[data-project-execution-close]");

  const close = () => {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  };

  root.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project-open]");
    if (!button) return;

    if (title) title.textContent = `${button.dataset.projectRoom} | ${button.dataset.projectTitle}`;
    if (file) file.textContent = button.dataset.projectFile || "programa.cpp";
    if (code) code.textContent = button.dataset.projectCode || "";
    modal.hidden = false;
    document.body.classList.add("modal-open");
  });

  closeButton?.addEventListener("click", close);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) close();
  });
}

function initProjectZipModal(root) {
  const modal = document.querySelector("[data-project-zip-modal]");
  if (!modal) return;

  const title = modal.querySelector("[data-project-zip-title]");
  const list = modal.querySelector("[data-project-zip-list]");
  const download = modal.querySelector("[data-project-zip-download]");
  const closeButton = modal.querySelector("[data-project-zip-close]");

  const close = () => {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  };

  root.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project-zip-open]");
    if (!button) return;

    const files = parseProgramJsonField(button.dataset.projectZipFiles || "[]", []);
    const zipUrl = button.dataset.projectZipUrl || "";

    if (title) title.textContent = `Ficheiros da pasta | ${button.dataset.projectTitle || "Programa"}`;
    if (list) list.innerHTML = renderProjectZipModalFiles(Array.isArray(files) ? files : []);
    if (download) {
      download.hidden = !zipUrl;
      download.href = zipUrl || "#";
    }

    modal.hidden = false;
    document.body.classList.add("modal-open");
  });

  closeButton?.addEventListener("click", close);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) close();
  });
}

function renderStandaloneTeamsControlPage() {
  const root = document.getElementById("teams-control-root");
  if (!root) return;

  document.title = "UFCD 10788 | Controlo do site";
  renderTeamsControl(root, { compact: false, publicView: false });
}

function renderExternalToolPage() {
  const root = document.getElementById("resource-root");
  if (!root) return;

  const id = document.body.dataset.resource || "onlinegdb";
  const resource = resources.find((item) => item.id === id) || resources[0];

  document.title = `UFCD 10788 | ${resource.title}`;
  document.querySelectorAll(`.resource-submenu a[href$="${resource.url.replace("recursos/", "")}"], .resource-submenu a[href$="${resource.url}"]`).forEach((link) => link.classList.add("active"));

  if (resource.id === "assistente-gpt") {
    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Recursos</p>
            <h1 class="resource-title-with-icon">
              <a href="${resource.gptUrl}" target="_blank" rel="noopener">
                <img src="../${resource.menuIcon}" alt="" aria-hidden="true">
                <span>${resource.title}</span>
              </a>
            </h1>
            <p class="lead">Este assistente serve para apoiar o estudo da UFCD 10788, ajudando a esclarecer dúvidas, rever conceitos e orientar a realização das tarefas.</p>
          </div>

          <div class="resource-list">
            <article class="card group-task-card">
              <p class="eyebrow">Como utilizar</p>
              <h3>Antes de abrir o assistente</h3>
              <ul class="clean-list task-prompt-list">
                <li>Identifica o conteúdo ou atividade em que estás a trabalhar.</li>
                <li>Escreve a tua dúvida de forma clara e concreta.</li>
                <li>Indica o que já tentaste fazer ou compreender.</li>
                <li>Pede explicações passo a passo sempre que precisares.</li>
              </ul>
            </article>

            <article class="card group-task-card">
              <p class="eyebrow">Boas práticas</p>
              <h3>Usa como apoio à aprendizagem</h3>
              <p>O assistente deve ajudar a pensar, rever e melhorar respostas. Não deve substituir o teu trabalho: usa as sugestões para compreender melhor os conceitos e depois constrói a tua própria resposta.</p>
            </article>

            <article class="card group-task-card">
              <p class="eyebrow">Acesso</p>
              <h3>Abrir Assistente UFCD 10788</h3>
              <p>O assistente abre numa nova aba do navegador. Poderá ser necessário iniciar sessão no ChatGPT.</p>
              <div class="embed-fallback resource-action-row align-right">
                <a class="small-button" href="${resource.gptUrl}" target="_blank" rel="noopener">Abrir assistente</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    `;
    return;
  }

  if (resource.id === "manual-interativo") {
    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Recursos</p>
            <h1>${resource.title}</h1>
            <p class="lead">${resource.intro}</p>
          </div>

          <div class="flipbook-frame-wrap">
            <iframe
              src="${resource.flipbookUrl}"
              title="Manual interativo da UFCD 10788"
              seamless="seamless"
              scrolling="no"
              frameborder="0"
              allowtransparency="true"
              allowfullscreen="true">
            </iframe>
          </div>
        </div>
      </section>
    `;
    return;
  }

  root.innerHTML = `
    <iframe class="external-frame full-page-frame" src="${resource.externalUrl}" title="${resource.title}" loading="lazy" allow="fullscreen" allowfullscreen></iframe>
  `;
}

function renderManualPage() {
  const root = document.getElementById("manual-root");
  if (!root) return;

  const manual = resources.find((item) => item.id === "manual");
  const pdfUrl = manual?.pdfUrl ? `../${manual.pdfUrl}` : "";

  document.title = "UFCD 10788 | Manual";
  document.querySelectorAll('.resource-submenu a[href$="manual.html"]').forEach((link) => link.classList.add("active"));

  root.innerHTML = pdfUrl ? `
    <section class="pdf-reader-shell" aria-label="Leitor do manual em PDF">
      <iframe class="pdf-frame native-pdf-frame" src="${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1" title="Manual da UFCD 10788"></iframe>
      <div class="pdf-fallback">
        <a class="small-button" href="${pdfUrl}" target="_blank" rel="noopener">Abrir PDF</a>
        <a class="small-button orange" href="${pdfUrl}" download>Descarregar PDF</a>
      </div>
    </section>
  ` : `
    <section class="section task-page-section">
      <div class="section-inner">
        <article class="task-overview-card simple-page-heading-card">
          <p class="eyebrow">Recursos</p>
          <h1>Manual da UFCD</h1>
          <p>Esta página está preparada para receber o manual da UFCD 10788 assim que o ficheiro PDF for acrescentado ao projeto.</p>
        </article>
      </div>
    </section>
  `;
}

function getGammaEmbedUrl(url) {
  if (!url.includes("gamma.app/docs/")) return url;
  const id = url.split("-").pop();
  return `https://gamma.app/embed/${id}`;
}

function renderGammaTopicPage(root, topic, image, embedUrl) {
  const frameUrl = getGammaEmbedUrl(embedUrl);
  document.body.classList.add("gamma-view");

  if (topic.id === "linguagens-c-cpp") {
    root.innerHTML = `
      <section class="section gamma-simple-title-section">
        <div class="section-inner">
          <article class="gamma-simple-title-card gamma-simple-title-card-lab">
            <h1>${topic.cardTitle || topic.title}</h1>
          </article>
        </div>
      </section>

      <section class="section gamma-section content-gamma-full">
        <iframe
          class="external-frame full-page-frame gamma-content-frame"
          src="${frameUrl}"
          title="${topic.cardTitle || topic.title}"
          loading="lazy"
          allow="fullscreen"
          allowfullscreen>
        </iframe>
      </section>
    `;
    return;
  }

  root.innerHTML = `
    <section class="hero content-hero" style="background-image: url('${image}')">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>${topic.cardTitle || topic.title}</h1>
      </div>
    </section>

    <section class="section gamma-section content-gamma-full">
      <iframe
        class="external-frame full-page-frame gamma-content-frame"
        src="${frameUrl}"
        title="${topic.cardTitle || topic.title}"
        loading="lazy"
        allow="fullscreen"
        allowfullscreen>
      </iframe>
    </section>
  `;
}

function renderBinarioTopicPage(root, topic, image) {
  root.innerHTML = `
    <section class="section">
      <div class="lesson-layout">
        <div class="lesson-stack">
          <article class="task-overview-card simple-page-heading-card">
            <h1>${topic.cardTitle}</h1>
            <p>${topic.intro}</p>
          </article>

          <figure class="lesson-visual-card">
            <img src="../assets/img/conteudos/binario-visual.svg" alt="Representação visual do sistema binário com bits 0 e 1">
          </figure>

          <article class="card">
            <p class="eyebrow">Representação da informação</p>
            <h2>O que é o sistema binário?</h2>
            <p>O sistema binário é uma forma de representar informação usando apenas dois símbolos: <strong>0</strong> e <strong>1</strong>. Estes dois valores são suficientes para os computadores guardarem e processarem dados.</p>
            <p>Enquanto no sistema decimal usamos dez algarismos, de 0 a 9, no sistema binário usamos apenas dois. A diferença está na base: decimal é base 10, binário é base 2.</p>
          </article>

          <article class="card">
            <h2>Porque é que os computadores usam 0 e 1?</h2>
            <div class="concept-grid compact-concept-grid">
              <div>
                <strong>0</strong>
                <span>Desligado, falso, ausência de sinal.</span>
              </div>
              <div>
                <strong>1</strong>
                <span>Ligado, verdadeiro, presença de sinal.</span>
              </div>
            </div>
            <p>Esta representação é prática porque os circuitos eletrónicos conseguem distinguir estados simples, como passagem ou ausência de corrente. A partir destes estados simples, é possível representar números, texto, imagens, sons e instruções.</p>
          </article>

          <article class="card">
            <h2>Como ler um número binário?</h2>
            <p>Cada posição de um número binário tem um valor. Esses valores são potências de 2 e são lidos da direita para a esquerda.</p>
            <div class="binary-place-table" aria-label="Posições do sistema binário">
              <span>128</span><span>64</span><span>32</span><span>16</span><span>8</span><span>4</span><span>2</span><span>1</span>
            </div>
            <p>Quando aparece um <strong>1</strong>, esse valor conta. Quando aparece um <strong>0</strong>, esse valor não conta.</p>
          </article>

          <article class="card">
            <h2>Exemplo passo a passo</h2>
            <p>Vamos converter o número binário <strong>1011</strong> para decimal.</p>
            <div class="binary-example">
              <div><strong>Binário</strong><span>1</span><span>0</span><span>1</span><span>1</span></div>
              <div><strong>Valores</strong><span>8</span><span>4</span><span>2</span><span>1</span></div>
              <div><strong>Contam</strong><span>8</span><span>-</span><span>2</span><span>1</span></div>
            </div>
            <p>Somamos apenas as posições com 1: <strong>8 + 2 + 1 = 11</strong>. Por isso, <strong>1011â‚‚ = 11â‚â‚€</strong>.</p>
          </article>

          <article class="card">
            <h2>Do decimal para binário</h2>
            <p>Para passar um número decimal para binário, podemos procurar os valores de base 2 que somados dão esse número.</p>
            <div class="task-block">
              <strong>Exemplo: 13</strong>
              <ul class="clean-list task-prompt-list">
                <li>13 contém 8, por isso colocamos 1 na posição 8.</li>
                <li>Falta 5. Como 5 não contém 4? Contém, por isso colocamos 1 na posição 4.</li>
                <li>Falta 1. A posição 2 não conta, por isso recebe 0.</li>
                <li>A posição 1 conta, por isso recebe 1.</li>
              </ul>
            </div>
            <p>Resultado: <strong>13â‚â‚€ = 1101â‚‚</strong>.</p>
          </article>

          <article class="card">
            <h2>Onde aparece o binário?</h2>
            <div class="concept-grid compact-concept-grid">
              <div><strong>Números</strong><span>Valores guardados e calculados pelo computador.</span></div>
              <div><strong>Texto</strong><span>Letras codificadas através de tabelas como ASCII ou Unicode.</span></div>
              <div><strong>Imagens</strong><span>Cores e pontos representados por valores numéricos.</span></div>
              <div><strong>Programas</strong><span>Instruções executadas pela máquina.</span></div>
            </div>
          </article>

          <article class="card activity-card">
            <p class="eyebrow">Prática orientada</p>
            <h2>Experimentar conversões simples</h2>
            <p>Converte os seguintes valores e confirma o raciocínio usado em cada passo.</p>
            <div class="criteria-tags">
              <span>5â‚â‚€ â†’ binário</span>
              <span>9â‚â‚€ â†’ binário</span>
              <span>111â‚‚ â†’ decimal</span>
              <span>1001â‚‚ â†’ decimal</span>
            </div>
          </article>
        </div>

        <aside class="card aside-box">
          <h3>Nesta página</h3>
          <ul class="clean-list">
            <li>O que é binário</li>
            <li>Estados 0 e 1</li>
            <li>Valores das posições</li>
            <li>Conversão para decimal</li>
            <li>Conversão para binário</li>
            <li>Aplicações práticas</li>
          </ul>
        </aside>
      </div>
    </section>
  `;
}

function renderBitsBytesTopicPage(root, topic) {
  root.innerHTML = `
    <section class="section">
      <div class="lesson-layout">
        <div class="lesson-stack">
          <article class="task-overview-card simple-page-heading-card">
            <h1>${topic.cardTitle}</h1>
            <p>${topic.intro}</p>
          </article>

          <figure class="lesson-visual-card">
            <img src="../assets/img/conteudos/bits-bytes-visual.svg" alt="Representação visual de um byte formado por oito bits">
          </figure>

          <article class="card">
            <p class="eyebrow">Representação da informação</p>
            <h2>O que é um bit?</h2>
            <p>Um <strong>bit</strong> é a unidade mais pequena de informação usada pelos computadores. Um bit só pode ter um de dois valores: <strong>0</strong> ou <strong>1</strong>.</p>
            <p>Podemos pensar num bit como uma resposta muito simples: desligado ou ligado, falso ou verdadeiro, não ou sim.</p>
          </article>

          <article class="card">
            <h2>O que é um byte?</h2>
            <p>Um <strong>byte</strong> é um conjunto de <strong>8 bits</strong>. Ao juntar vários bits, o computador consegue representar mais informação do que apenas 0 ou 1.</p>
            <div class="byte-strip" aria-label="Um byte formado por oito bits">
              <span>1</span><span>0</span><span>1</span><span>0</span><span>0</span><span>1</span><span>1</span><span>0</span>
            </div>
            <p>Este conjunto de 8 posições pode representar números, letras, símbolos ou partes de imagens e sons, dependendo do contexto.</p>
          </article>

          <article class="card">
            <h2>Porque é que 8 bits são importantes?</h2>
            <p>Com 8 bits existem muitas combinações possíveis de zeros e uns. Cada posição pode ter 2 estados, por isso um byte permite <strong>256 combinações</strong>.</p>
            <div class="concept-grid compact-concept-grid">
              <div><strong>1 bit</strong><span>2 combinações possíveis: 0 ou 1.</span></div>
              <div><strong>2 bits</strong><span>4 combinações possíveis: 00, 01, 10, 11.</span></div>
              <div><strong>4 bits</strong><span>16 combinações possíveis.</span></div>
              <div><strong>8 bits</strong><span>256 combinações possíveis.</span></div>
            </div>
          </article>

          <article class="card">
            <h2>Exemplo simples</h2>
            <p>Na tabela ASCII, uma letra pode ser representada por um valor numérico. Esse valor pode depois ser representado em binário.</p>
            <div class="binary-example byte-example">
              <div><strong>Carácter</strong><span>A</span></div>
              <div><strong>Decimal</strong><span>65</span></div>
              <div><strong>Binário</strong><span>01000001</span></div>
            </div>
            <p>Neste exemplo, a letra <strong>A</strong> é representada por um byte: <strong>01000001</strong>.</p>
          </article>

          <article class="card">
            <h2>Bit, byte e ficheiros</h2>
            <p>Quando guardamos texto, imagens, vídeos ou programas, estamos a guardar grandes quantidades de bits organizados em bytes.</p>
            <div class="task-block">
              <strong>Ideia essencial</strong>
              <ul class="clean-list task-prompt-list">
                <li>O bit é a unidade mais pequena.</li>
                <li>O byte junta 8 bits.</li>
                <li>Os ficheiros são formados por muitos bytes.</li>
                <li>Quanto mais bytes, maior tende a ser o ficheiro.</li>
              </ul>
            </div>
          </article>

          <article class="card activity-card">
            <p class="eyebrow">Prática orientada</p>
            <h2>Verificar a diferença</h2>
            <p>Responde de forma simples e justificada.</p>
            <div class="criteria-tags">
              <span>Quantos bits tem 1 byte?</span>
              <span>Quantas combinações tem 1 bit?</span>
              <span>Porque 8 bits permitem 256 combinações?</span>
              <span>O que ocupa mais espaço: 1 byte ou 1 bit?</span>
            </div>
          </article>
        </div>

        <aside class="card aside-box">
          <h3>Nesta página</h3>
          <ul class="clean-list">
            <li>O que é um bit</li>
            <li>O que é um byte</li>
            <li>8 bits e combinações</li>
            <li>Exemplo com a letra A</li>
            <li>Relação com ficheiros</li>
          </ul>
        </aside>
      </div>
    </section>
  `;
}

function renderUnidadesInformacaoTopicPage(root, topic) {
  root.innerHTML = `
    <section class="section">
      <div class="lesson-layout">
        <div class="lesson-stack">
          <article class="task-overview-card simple-page-heading-card">
            <h1>${topic.cardTitle}</h1>
            <p>${topic.intro}</p>
          </article>

          <figure class="lesson-visual-card">
            <img src="../assets/img/conteudos/unidades-informacao-visual.svg" alt="Escala visual de bytes, kilobytes, megabytes, gigabytes e terabytes">
          </figure>

          <article class="card">
            <p class="eyebrow">Medir informação digital</p>
            <h2>Para que servem as unidades de informação?</h2>
            <p>As unidades de informação permitem medir a quantidade de dados guardada, enviada ou processada por um computador.</p>
            <p>Quando dizemos que uma imagem tem 2 MB ou que uma pen tem 32 GB, estamos a usar unidades para indicar tamanho digital.</p>
          </article>

          <article class="card">
            <h2>Da unidade mais pequena às maiores</h2>
            <div class="info-units-list">
              <div><strong>bit</strong><span>0 ou 1</span></div>
              <div><strong>byte</strong><span>8 bits</span></div>
              <div><strong>KB</strong><span>kilobyte</span></div>
              <div><strong>MB</strong><span>megabyte</span></div>
              <div><strong>GB</strong><span>gigabyte</span></div>
              <div><strong>TB</strong><span>terabyte</span></div>
            </div>
          </article>

          <article class="card">
            <h2>Escala aproximada</h2>
            <p>De forma simples, cada unidade é cerca de mil vezes maior do que a anterior. Em muitos contextos técnicos, a base real pode ser 1024, mas para leitura geral usamos frequentemente a aproximação decimal.</p>
            <div class="task-block">
              <strong>Leitura prática</strong>
              <ul class="clean-list task-prompt-list">
                <li>1 KB representa texto muito pequeno.</li>
                <li>1 MB pode representar uma imagem ou documento maior.</li>
                <li>1 GB pode guardar muitos ficheiros.</li>
                <li>1 TB é usado para grandes volumes de dados.</li>
              </ul>
            </div>
          </article>

          <article class="card">
            <h2>Exemplos do quotidiano</h2>
            <div class="concept-grid compact-concept-grid">
              <div><strong>Texto simples</strong><span>Pode ocupar poucos KB.</span></div>
              <div><strong>Imagem</strong><span>Pode ocupar alguns MB.</span></div>
              <div><strong>Vídeo</strong><span>Pode ocupar centenas de MB ou vários GB.</span></div>
              <div><strong>Disco externo</strong><span>Pode ter capacidade em GB ou TB.</span></div>
            </div>
          </article>

          <article class="card activity-card">
            <p class="eyebrow">Prática orientada</p>
            <h2>Interpretar tamanhos de ficheiros</h2>
            <p>Observa ficheiros no computador ou no Moodle e identifica a unidade usada em cada caso.</p>
            <div class="criteria-tags">
              <span>KB</span>
              <span>MB</span>
              <span>GB</span>
              <span>Comparar tamanhos</span>
            </div>
          </article>
        </div>

        <aside class="card aside-box">
          <h3>Nesta página</h3>
          <ul class="clean-list">
            <li>Medir dados</li>
            <li>Bit e byte</li>
            <li>KB, MB, GB e TB</li>
            <li>Escala aproximada</li>
            <li>Exemplos práticos</li>
          </ul>
        </aside>
      </div>
    </section>
  `;
}

function renderUnicodeTopicPage(root, topic) {
  root.innerHTML = `
    <section class="section">
      <div class="lesson-layout">
        <div class="lesson-stack">
          <article class="task-overview-card simple-page-heading-card">
            <h1>${topic.cardTitle}</h1>
            <p>${topic.intro}</p>
          </article>

          <figure class="lesson-visual-card">
            <img src="../assets/img/conteudos/unicode-visual.svg" alt="Representação visual de caracteres de várias línguas associados ao Unicode">
          </figure>

          <article class="card">
            <p class="eyebrow">Codificação de caracteres</p>
            <h2>O que é Unicode?</h2>
            <p>Unicode é um padrão usado para representar caracteres de muitas línguas e sistemas de escrita. O objetivo é que o mesmo carácter seja entendido de forma consistente em diferentes computadores, sistemas e aplicações.</p>
            <p>Sem uma codificação comum, letras com acentos, símbolos ou caracteres de outras línguas poderiam aparecer trocados ou ilegíveis.</p>
          </article>

          <article class="card">
            <h2>ASCII e Unicode</h2>
            <p>A tabela ASCII original representa um conjunto limitado de caracteres, adequado sobretudo para inglês básico. O Unicode surgiu para representar muito mais: acentos, símbolos, alfabetos diferentes e emojis.</p>
            <div class="concept-grid compact-concept-grid">
              <div><strong>ASCII</strong><span>Conjunto mais limitado de caracteres.</span></div>
              <div><strong>Unicode</strong><span>Padrão amplo para várias línguas e símbolos.</span></div>
            </div>
          </article>

          <article class="card">
            <h2>Exemplos de caracteres</h2>
            <div class="unicode-sample-grid">
              <span>A</span><span>ç</span><span>á</span><span>â‚¬</span><span>Î©</span><span>ä¸­</span>
            </div>
            <p>Cada carácter tem um código associado. Esse código pode depois ser guardado em bytes através de formatos como UTF-8.</p>
          </article>

          <article class="card">
            <h2>O que é UTF-8?</h2>
            <p><strong>UTF-8</strong> é uma forma muito usada de guardar caracteres Unicode. É comum em páginas web, ficheiros de texto e aplicações.</p>
            <div class="task-block">
              <strong>Ideia essencial</strong>
              <ul class="clean-list task-prompt-list">
                <li>Unicode define os caracteres e os seus códigos.</li>
                <li>UTF-8 define uma forma de guardar esses códigos em bytes.</li>
                <li>Nem todos os caracteres ocupam o mesmo número de bytes.</li>
              </ul>
            </div>
          </article>

          <article class="card">
            <h2>Porque é importante?</h2>
            <p>Em SQL, a codificação correta evita problemas com nomes, mensagens, ficheiros, bases de dados e páginas web.</p>
            <p>Por exemplo, se uma página não usar a codificação certa, palavras como <strong>SQL</strong>, <strong>avaliação</strong> ou <strong>informação</strong> podem aparecer com caracteres estranhos.</p>
          </article>

          <article class="card activity-card">
            <p class="eyebrow">Prática orientada</p>
            <h2>Observar caracteres</h2>
            <p>Identifica caracteres que não existiriam numa tabela ASCII simples e explica por que razão o Unicode é necessário.</p>
            <div class="criteria-tags">
              <span>Acentos</span>
              <span>Símbolos</span>
              <span>Outras línguas</span>
              <span>Codificação correta</span>
            </div>
          </article>
        </div>

        <aside class="card aside-box">
          <h3>Nesta página</h3>
          <ul class="clean-list">
            <li>O que é Unicode</li>
            <li>ASCII e Unicode</li>
            <li>Caracteres especiais</li>
            <li>UTF-8</li>
            <li>Importância em SQL</li>
          </ul>
        </aside>
      </div>
    </section>
  `;
}

function renderSimpleLessonTopicPage(root, topic, config) {
  root.innerHTML = `
    <section class="section">
      <div class="lesson-layout">
        <div class="lesson-stack">
          <article class="task-overview-card simple-page-heading-card">
            <h1>${topic.cardTitle}</h1>
            <p>${topic.intro}</p>
          </article>

          <figure class="lesson-visual-card">
            <img src="../assets/img/conteudos/${config.image}" alt="${config.imageAlt}">
          </figure>

          ${config.sections.map((section) => `
            <article class="card">
              ${section.eyebrow ? `<p class="eyebrow">${section.eyebrow}</p>` : ""}
              <h2>${section.title}</h2>
              ${section.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
              ${section.html || ""}
            </article>
          `).join("")}

          ${topic.id === "linguagens-c-cpp" ? "" : (config.activityHtml || `
            <article class="card activity-card">
              <p class="eyebrow">Prática orientada</p>
              <h2>${config.activity.title}</h2>
              <p>${config.activity.text}</p>
              <div class="criteria-tags">
                ${config.activity.tags.map((tag) => `<span>${tag}</span>`).join("")}
              </div>
            </article>
          `)}
        </div>

        <aside class="card aside-box">
          <h3>Nesta página</h3>
          <ul class="clean-list">
            ${config.aside.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </aside>
      </div>
    </section>
  `;

  applyVisibilityControls(root);
}

const simpleLessonPages = {
  "tabelas-campos": {
    image: "tabelas-campos-visual.svg",
    imageAlt: "Representação visual de uma tabela com campos e registos",
    aside: ["Tabela", "Campo", "Registo", "Chave", "Exemplo prático"],
    sections: [
      {
        eyebrow: "Bases de dados",
        title: "O que é uma tabela?",
        body: [
          "Uma <strong>tabela</strong> é uma forma organizada de guardar dados. É composta por linhas e colunas, tal como uma folha de cálculo simples.",
          "Numa base de dados, cada tabela costuma representar um tema ou conjunto de informação, por exemplo formandos, produtos, inscrições ou avaliações."
        ]
      },
      {
        title: "O que é um campo?",
        body: [
          "Um <strong>campo</strong> corresponde a uma coluna da tabela. Cada campo identifica o tipo de informação que vai ser guardado.",
          "Por exemplo, numa tabela de formandos podemos ter os campos Nome, Email, Sala e Estado."
        ],
        html: `<div class="data-table-demo">
          <span>Nome</span><span>Email</span><span>Sala</span><span>Estado</span>
          <span>Ana</span><span>ana@email.pt</span><span>1</span><span>Ativo</span>
        </div>`
      },
      {
        title: "O que é um registo?",
        body: [
          "Um <strong>registo</strong> corresponde a uma linha da tabela. Cada registo guarda os dados completos de uma ocorrência.",
          "Se a tabela for sobre formandos, cada linha representa um formando diferente."
        ]
      },
      {
        title: "Porque é importante escolher bem os campos?",
        body: [
          "Campos claros ajudam a evitar confusão, repetição e erros. Cada campo deve guardar apenas uma ideia ou tipo de informação.",
          "Por exemplo, é melhor ter um campo Nome e outro Email do que misturar tudo numa só coluna."
        ]
      }
    ],
    activity: {
      title: "Desenhar uma tabela simples",
      text: "Escolhe uma situação simples e define uma tabela com campos adequados.",
      tags: ["Tema da tabela", "Campos", "Registos", "Dados bem separados"]
    }
  },
  "normalizacao": {
    image: "normalizacao-visual.svg",
    imageAlt: "Representação visual de dados repetidos a serem organizados em tabelas relacionadas",
    aside: ["Problema da repetição", "Organização", "Relações", "Consistência", "Exemplo"],
    sections: [
      {
        eyebrow: "Bases de dados",
        title: "O que é normalização?",
        body: [
          "A <strong>normalização</strong> é um processo usado para organizar dados numa base de dados de forma mais clara e consistente.",
          "O objetivo é reduzir repetição, evitar contradições e facilitar a atualização da informação."
        ]
      },
      {
        title: "Qual é o problema da repetição?",
        body: [
          "Quando a mesma informação aparece repetida em muitas linhas, qualquer alteração tem de ser feita em vários sítios.",
          "Se uma parte for atualizada e outra não, a base de dados pode ficar incoerente."
        ],
        html: `<div class="normalization-demo">
          <div><strong>Antes</strong><span>Formando + Curso repetido em várias linhas</span></div>
          <div><strong>Depois</strong><span>Formandos numa tabela, cursos noutra, ligação por identificadores</span></div>
        </div>`
      },
      {
        title: "Separar dados por assunto",
        body: [
          "Uma regra prática é separar os dados por assunto. Informação sobre formandos deve ficar numa tabela; informação sobre cursos deve ficar noutra.",
          "Depois, as tabelas podem ser ligadas através de identificadores, como ID_Formando ou ID_Curso."
        ]
      },
      {
        title: "Vantagens",
        body: [
          "Uma base de dados normalizada é mais fácil de manter, consultar e corrigir.",
          "Também reduz o risco de dados contraditórios, como o mesmo curso aparecer escrito de formas diferentes."
        ]
      }
    ],
    activity: {
      title: "Identificar repetição",
      text: "Observa uma tabela simples e indica que dados estão repetidos e como poderiam ser separados.",
      tags: ["Dados repetidos", "Tabelas separadas", "Identificadores", "Relações"]
    }
  },
  "linguagens-c-cpp": {
    image: "linguagens-c-cpp-visual.svg",
    imageAlt: "Representação visual das linguagens C e C++ com código e blocos de memória",
    aside: ["Linguagem C", "Linguagem C++", "Diferenças", "Usos", "Exemplo"],
    sections: [
      {
        eyebrow: "Linguagens de SQL",
        title: "O que é a linguagem C?",
        body: [
          "A linguagem <strong>C</strong> é uma linguagem de SQL muito importante na história da computação.",
          "É usada para criar programas eficientes e próximos do funcionamento do computador, como sistemas operativos, ferramentas e software de baixo nível."
        ]
      },
      {
        title: "O que é C++?",
        body: [
          "A linguagem <strong>C++</strong> nasceu a partir da linguagem C e acrescentou novas formas de organizar programas.",
          "Uma das grandes diferenças é permitir SQL orientada a objetos, usando conceitos como classes e objetos."
        ]
      },
      {
        title: "C e C++ são iguais?",
        body: [
          "Não. C++ mantém muitas características de C, mas acrescenta recursos próprios.",
          "De forma simples, podemos dizer que C é mais direta e estrutural, enquanto C++ permite organizar soluções maiores com objetos."
        ],
        html: `<div class="concept-grid compact-concept-grid">
          <div><strong>C</strong><span>Estruturas, funções, memória e eficiência.</span></div>
          <div><strong>C++</strong><span>Inclui C e acrescenta classes, objetos e outros recursos.</span></div>
        </div>`
      },
      {
        title: "Porque estudar estas linguagens?",
        body: [
          "Mesmo quando se usam linguagens mais recentes, C e C++ ajudam a compreender conceitos fundamentais: variáveis, tipos de dados, memória, funções, compilação e estruturas de controlo.",
          "São linguagens exigentes, mas muito úteis para perceber como os programas funcionam por dentro."
        ]
      }
    ],
    activityHtml: `
      <details class="card coding-practice-card practice-overview-accordion">
        <summary>
          <span class="eyebrow">Prática progressiva</span>
          <span>Praticar C passo a passo</span>
        </summary>
        <div class="practice-overview-body">
          <strong>Como funciona</strong>
          <p>Resolve cada proposta no espaço indicado. Quando pedires correção, o feedback aparece por baixo e a tua resposta fica sempre guardada no campo onde escreveste.</p>
        </div>
      </details>

      <div class="exercise-list coding-practice-list">
          <section class="exercise-card" data-c-practice="conteudo-estruturaMinima">
            <h3>1. Estrutura mínima</h3>
            <h4>Código e compilação</h4>
            <p>O código em C é texto escrito com regras próprias para que o compilador o consiga transformar num programa executável.</p>
            <h4><code>#include</code> - Bibliotecas</h4>
            <p>Antes das instruções principais, podemos indicar bibliotecas com <code>#include</code>. Cada biblioteca acrescenta funções que o programa pode utilizar.</p>
            <ul class="lesson-mini-list">
              <li><code>#include &lt;stdio.h&gt;</code> permite usar funções de entrada e saída, como <code>printf</code> e <code>scanf</code>.</li>
              <li><code>#include &lt;math.h&gt;</code> pode ser usado para funções matemáticas.</li>
              <li><code>#include &lt;string.h&gt;</code> pode ser usado para trabalhar com texto.</li>
            </ul>
            <h4><code>main</code> - Função</h4>
            <p>A função <code>main</code> é o ponto de entrada do programa: é aí que a execução começa. No final, <code>return 0</code> indica que o programa terminou sem erro.</p>
          </section>
          <details class="practice-attempt-card" data-c-practice="tentativa-estruturaMinima" data-c-exercise data-expected="include|main|printf" data-model="Um programa mínimo em C deve incluir a biblioteca stdio.h, ter a função main e usar printf para apresentar texto no ecrã." data-solution="#include &lt;stdio.h&gt;&#10;&#10;int main() {&#10;    // printf escreve uma mensagem no ecrã.&#10;    printf(&quot;Ola mundo&quot;);&#10;&#10;    // return 0 indica que o programa terminou sem erro.&#10;    return 0;&#10;}">
              <summary>
                <span class="practice-task-card" data-practice-task>
                  <span class="practice-task-title" data-practice-title>Prática 1</span>
                  <button class="small-button practice-download-button" type="button" data-action="download-practice-txt">Descarregar TXT</button>
                </span>
              </summary>
              <div class="practice-attempt-body">
              <p class="practice-prompt">Escreve a estrutura mínima de um programa em C que apresente a mensagem <strong>Ola mundo</strong>.</p>
              <label>A tua tentativa</label>
              <textarea rows="5" placeholder="Escreve aqui a tua resposta..."></textarea>
              <button class="small-button" type="button" data-action="check-c-exercise">Pedir correção</button>
              <div class="exercise-feedback" data-c-feedback></div>
              </div>
            </details>

          <section class="exercise-card" data-c-practice="conteudo-variaveisTipos">
            <h3>2. Variáveis e tipos</h3>
            <h4>Variável</h4>
            <p>Uma variável é um espaço com nome onde o programa guarda um valor. Esse valor pode ser usado, alterado ou apresentado mais tarde.</p>
            <h4>Tipo de dados</h4>
            <p>Em C, cada variável precisa de ter um tipo. O tipo indica ao computador que espécie de informação vai ser guardada e quanto espaço deve reservar.</p>
            <ul class="lesson-mini-list">
              <li><code>int</code> guarda números inteiros, como <code>18</code> ou <code>25</code>.</li>
              <li><code>float</code> guarda números com casas decimais, como <code>16.5</code>.</li>
              <li><code>char</code> guarda um único carácter, como <code>'A'</code>.</li>
            </ul>
            <h4>Objetivo da prática</h4>
            <p>Escolher o tipo adequado para cada situação e declarar variáveis simples de forma correta.</p>
          </section>
          <details class="practice-attempt-card" data-c-practice="tentativa-variaveisTipos" data-c-exercise data-expected="int|float|char|variável|variavel" data-model="Em C, as variáveis devem ter tipo. int guarda números inteiros, float guarda números com casas decimais e char guarda um carácter." data-solution="// int guarda números inteiros.&#10;int idade = 20;&#10;&#10;// float guarda números com casas decimais.&#10;float notaFinal = 16.5;&#10;&#10;// char guarda um único carácter.&#10;char inicialNome = 'A';">
              <summary>
                <span class="practice-task-card" data-practice-task>
                  <span class="practice-task-title" data-practice-title>Prática 2</span>
                  <button class="small-button practice-download-button" type="button" data-action="download-practice-txt">Descarregar TXT</button>
                </span>
              </summary>
              <div class="practice-attempt-body">
              <p class="practice-prompt">Indica o tipo adequado para guardar idade, nota final e inicial do nome. Depois escreve uma linha de código para cada variável.</p>
              <label>A tua tentativa</label>
              <textarea rows="5" placeholder="Escreve aqui a tua resposta..."></textarea>
              <button class="small-button" type="button" data-action="check-c-exercise">Pedir correção</button>
              <div class="exercise-feedback" data-c-feedback></div>
              </div>
            </details>

          <section class="exercise-card" data-c-practice="conteudo-entradaSaida">
            <h3>3. Entrada e saída</h3>
            <h4>Saída com <code>printf</code></h4>
            <p>A saída de dados acontece quando o programa apresenta informação no ecrã. Em C, usamos <code>printf</code> para mostrar mensagens ou valores.</p>
            <h4>Entrada com <code>scanf</code></h4>
            <p>A entrada de dados acontece quando o programa recebe informação do utilizador. Em C, usamos <code>scanf</code> para ler um valor e guardá-lo numa variável.</p>
            <ul class="lesson-mini-list">
              <li><code>printf</code> mostra informação no ecrã.</li>
              <li><code>scanf</code> lê informação introduzida pelo utilizador.</li>
              <li>A variável guarda o valor lido para ser usado depois.</li>
            </ul>
            <h4>Objetivo da prática</h4>
            <p>Distinguir entrada de dados, armazenamento numa variável e saída de informação para o ecrã.</p>
          </section>
          <details class="practice-attempt-card" data-c-practice="tentativa-entradaSaida" data-c-exercise data-expected="scanf|printf|entrada|saída|saida" data-model="Para receber dados usamos scanf. Para mostrar dados usamos printf. A entrada vem do utilizador e a saída é a informação apresentada pelo programa." data-solution="#include &lt;stdio.h&gt;&#10;&#10;int main() {&#10;    int idade;&#10;&#10;    // Pede a idade ao utilizador.&#10;    printf(&quot;Indica a tua idade: &quot;);&#10;&#10;    // Lê o valor introduzido e guarda-o na variável idade.&#10;    scanf(&quot;%d&quot;, &amp;idade);&#10;&#10;    // Mostra o valor guardado.&#10;    printf(&quot;A idade indicada foi %d anos.&quot;, idade);&#10;&#10;    return 0;&#10;}">
              <summary>
                <span class="practice-task-card" data-practice-task>
                  <span class="practice-task-title" data-practice-title>Prática 3</span>
                  <button class="small-button practice-download-button" type="button" data-action="download-practice-txt">Descarregar TXT</button>
                </span>
              </summary>
              <div class="practice-attempt-body">
              <p class="practice-prompt">Escreve um pequeno programa que peça a idade ao utilizador e depois apresente a idade no ecrã.</p>
              <label>A tua tentativa</label>
              <textarea rows="5" placeholder="Escreve aqui a tua resposta..."></textarea>
              <button class="small-button" type="button" data-action="check-c-exercise">Pedir correção</button>
              <div class="exercise-feedback" data-c-feedback></div>
              </div>
            </details>

          <section class="exercise-card" data-c-practice="conteudo-primeiraDecisao">
            <h3>4. Primeira decisão</h3>
            <h4>Condição</h4>
            <p>Muitos programas precisam de tomar decisões. Uma condição é um teste que produz uma resposta lógica: verdadeira ou falsa.</p>
            <h4><code>if</code> e <code>else</code></h4>
            <p>Em C, usamos <code>if</code> para testar uma condição e <code>else</code> para indicar o que acontece quando essa condição não se verifica.</p>
            <ul class="lesson-mini-list">
              <li><code>if</code> executa um bloco quando a condição é verdadeira.</li>
              <li><code>else</code> executa uma alternativa quando a condição é falsa.</li>
              <li>Uma decisão simples permite apresentar mensagens diferentes conforme a situação.</li>
            </ul>
            <h4>Objetivo da prática</h4>
            <p>Construir uma decisão simples, usando uma condição com idade mínima e duas mensagens possíveis.</p>
          </section>
          <details class="practice-attempt-card" data-c-practice="tentativa-primeiraDecisao" data-c-exercise data-expected="if|else|condição|condicao|maior" data-model="A decisão usa if para testar uma condição. Se a condição for verdadeira executa um bloco; caso contrário, o else executa a alternativa." data-solution="#include &lt;stdio.h&gt;&#10;&#10;int main() {&#10;    int idade;&#10;&#10;    printf(&quot;Indica a idade: &quot;);&#10;    scanf(&quot;%d&quot;, &amp;idade);&#10;&#10;    // A condição verifica se a idade é suficiente para votar.&#10;    if (idade &gt;= 18) {&#10;        printf(&quot;Pode votar.&quot;);&#10;    } else {&#10;        printf(&quot;Ainda não pode votar.&quot;);&#10;    }&#10;&#10;    return 0;&#10;}">
              <summary>
                <span class="practice-task-card" data-practice-task>
                  <span class="practice-task-title" data-practice-title>Prática 4</span>
                  <button class="small-button practice-download-button" type="button" data-action="download-practice-txt">Descarregar TXT</button>
                </span>
              </summary>
              <div class="practice-attempt-body">
              <p class="practice-prompt">Escreve uma decisão em C que indique se uma pessoa pode votar, considerando idade mínima de 18 anos.</p>
              <label>A tua tentativa</label>
              <textarea rows="5" placeholder="Escreve aqui a tua resposta..."></textarea>
              <button class="small-button" type="button" data-action="check-c-exercise">Pedir correção</button>
              <div class="exercise-feedback" data-c-feedback></div>
              </div>
            </details>
        </div>
    `
  }
};

function renderTopicPage() {
  const root = document.getElementById("topic-root");
  if (!root) return;

  const id = document.body.dataset.topic || "introducao-bases-dados";
  const topic = topics.find((item) => item.id === id) || topics[0];
  const basePath = getBasePath();
  const image = topic.image.replace("../", basePath);

  document.title = `UFCD 10788 | ${topic.title}`;
  if (topic.activityOnly) {
    abrirAtividadesParaConteudo(topic);
  } else {
    marcarConteudoAtivo(topic);
  }

  const topicEmbed = topic.gammaUrl || topicEmbeds[topic.id];
  if (topicEmbed) {
    renderGammaTopicPage(root, topic, image, topicEmbed);
    return;
  }

  document.body.classList.remove("gamma-view");

  root.innerHTML = `
    <section class="hero content-hero no-image-hero">
      <div class="hero-content">
        <p class="eyebrow">${topic.area || "Conteúdo"}</p>
        <h1>${topic.cardTitle || topic.title}</h1>
        <p>${topic.intro}</p>
      </div>
    </section>

    <section class="section">
      <div class="lesson-layout">
        <div class="lesson-stack">
          <article class="card placeholder-note">
            <p class="eyebrow">Gamma</p>
            <h2>Conteúdo preparado</h2>
            <p>Esta página está pronta para receber o Gamma deste conteúdo. Quando o link estiver definido em <code>gammaUrl</code>, o site passa a mostrar a apresentação incorporada automaticamente.</p>
          </article>

          <article class="card">
            <h2>Referencial</h2>
            <p>${topic.title}</p>
          </article>
        </div>

        <aside class="card aside-box">
          <h3>Nesta página</h3>
          <ul class="clean-list">
            <li>${topic.area || "Conteúdo"}</li>
            <li>Referencial da UFCD 10788</li>
            <li>Gamma a inserir</li>
          </ul>
        </aside>
      </div>
    </section>
  `;
  return;

  if (topic.id === "binario") {
    renderBinarioTopicPage(root, topic, image);
    return;
  }

  if (topic.id === "bits-bytes") {
    renderBitsBytesTopicPage(root, topic);
    return;
  }

  if (topic.id === "unidades-informacao") {
    renderUnidadesInformacaoTopicPage(root, topic);
    return;
  }

  if (topic.id === "unicode") {
    renderUnicodeTopicPage(root, topic);
    return;
  }

  if (simpleLessonPages[topic.id]) {
    renderSimpleLessonTopicPage(root, topic, simpleLessonPages[topic.id]);
    return;
  }

  root.innerHTML = `
    <section class="hero content-hero" style="background-image: url('${image}')">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>${topic.title}</h1>
        <p>${topic.intro}</p>
      </div>
    </section>

    <section class="section">
      <div class="lesson-layout">
        <div class="lesson-stack">
          <article class="card placeholder-note">
            <h2>Conteúdo em preparação</h2>
            <p>Esta página está estruturada para receber posteriormente o desenvolvimento completo com base no manual da UFCD 10788. Para já, mantém apenas a organização visual e os espaços principais de trabalho.</p>
          </article>

          <article class="card">
            <h2>1. Enquadramento</h2>
            <p>Área reservada para a explicação inicial do tema, com blocos curtos e linguagem orientada à autoaprendizagem.</p>
          </article>

          <article class="card">
            <h2>2. Exploração orientada</h2>
            <details open>
              <summary>Conceitos principais</summary>
              <p>Espaço preparado para listar e explicar os conceitos essenciais deste conteúdo.</p>
            </details>
            <details>
              <summary>Exemplo prático</summary>
              <p>Espaço preparado para inserir exemplos simples, pseudocódigo ou esquemas visuais.</p>
            </details>
            <div class="inline-actions">
              <button class="small-button" type="button" data-modal="exemplo">Ver exemplo</button>
            </div>
          </article>

          <article class="card">
            <h2>3. Síntese</h2>
            <p>Área reservada para um pequeno resumo da aula, com os pontos que o formando deve reter.</p>
          </article>

          <article class="card activity-card">
            <p class="eyebrow">Atividades</p>
            <h2>Tarefa associada</h2>
            <p>Espaço reservado para uma tarefa prática ligada a este conteúdo, visualmente separada da parte teórica.</p>
          </article>
        </div>

        <aside class="card aside-box">
          <h3>Nesta página</h3>
          <ul class="clean-list">
            <li>Enquadramento</li>
            <li>Exploração orientada</li>
            <li>Exemplo prático</li>
            <li>Síntese</li>
            <li>Atividade</li>
          </ul>
        </aside>
      </div>
    </section>
  `;
}

function marcarConteudoAtivo(topic) {
  const contentMenu = document.getElementById("submenu-conteudos");
  const contentButton = document.querySelector('[aria-controls="submenu-conteudos"]');

  if (!contentMenu) return;

  contentMenu.classList.add("open");
  contentButton?.setAttribute("aria-expanded", "true");

  const topicFile = topic.url.replace("conteudos/", "");
  const currentFile = window.location.pathname.split("/").pop() || "";
  const links = contentMenu.querySelectorAll("a");

  links.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const linkFile = href.split("/").pop() || "";
    const isActive = href.endsWith(topicFile) || href.endsWith(topic.url) || linkFile === currentFile;

    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function abrirAtividadesParaConteudo(topic) {
  const activityMenu = document.getElementById("submenu-atividades");
  const activityButton = document.querySelector('[aria-controls="submenu-atividades"]');
  const contentMenu = document.getElementById("submenu-conteudos");
  const contentButton = document.querySelector('[aria-controls="submenu-conteudos"]');

  activityMenu?.classList.add("open");
  activityButton?.setAttribute("aria-expanded", "true");
  contentMenu?.classList.remove("open");
  contentButton?.setAttribute("aria-expanded", "false");

  const topicFile = topic.url.replace("conteudos/", "");
  activityMenu?.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const isActive = href.endsWith(topicFile) || href.endsWith(topic.url);
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

siteVisibilityChannel?.addEventListener("message", (event) => {
  if (event.data?.type === "site-visibility-updated") {
    atualizarPaginaComVisibilidadeDoSite();
  }
});

window.addEventListener("storage", (event) => {
  if (event.key === SITE_VISIBILITY_STORAGE_KEY) {
    atualizarPaginaComVisibilidadeDoSite();
  }
});

window.addEventListener("focus", atualizarPaginaComVisibilidadeDoSite);
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    atualizarPaginaComVisibilidadeDoSite();
  }
});

function renderizarSite() {
  setupEvaluationMenu();
  renderContentMenus();
  renderHomeCards();
  renderConteudosIndex();
  renderActivityMenus();
  renderResourceMenus();
  aplicarVisibilidadeElementosEstaticos();
  renderActivityPage();
  renderStandaloneTeamsControlPage();
  renderStandaloneTaskTrackingPage();
  renderTopicPage();
  renderExternalToolPage();
  renderManualPage();
}

setupFloatingActions();
setupModal();
renderizarSite();
setupMenu();

if (APPS_SCRIPT_WEB_APP_URL && document.body.dataset.page !== "teams-control" && document.body.dataset.activity !== "controlo-teams") {
  carregarVisibilidadeRemotaDoSite().then((ok) => {
    if (ok) {
      renderizarSite();
      setupMenu();
    }
  });
}






