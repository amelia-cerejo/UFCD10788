#include <iostream>
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
}
