// Atividade Avaliativa
// Calculadora em JS

const lerTeclado = require('readline-sync');

let condicao = true

while (condicao) {
    console.log(`
==========================
        CALCULADORA
===========================
`);

    let calculadora = {
        num1: lerTeclado.questionFloat("Digite o primeiro numero:\n"),
        num2: lerTeclado.questionFloat("Digite o segundo numero:\n"),
        operacao: lerTeclado.questionInt(`Escolha uma operação digitando um número:
    1: Soma | 2: Subtracao | 3: Multiplicacao | 4: Divisao: | 5: Resto da divisão \n`),
        simbolo: "",
    };

    let resultado;

    switch (calculadora.operacao) {
        case 1:
            calculadora.simbolo = "+";
            resultado = calculadora.num1 + calculadora.num2;
            console.log(`${calculadora.num1} ${calculadora.simbolo} ${calculadora.num2} = ${resultado}`);
            break;
        case 2:
            calculadora.simbolo = "-";
            resultado = calculadora.num1 - calculadora.num2;
            console.log(`${calculadora.num1} ${calculadora.simbolo} ${calculadora.num2} = ${resultado}`);
            break;
        case 3:
            calculadora.simbolo = "*";
            resultado = calculadora.num1 * calculadora.num2;
            console.log(`${calculadora.num1} ${calculadora.simbolo} ${calculadora.num2} = ${resultado}`);
            break;
        case 4:
            if (calculadora.num2 === 0) {
                console.log("Erro: divisao por zero não é permitida.");
            }
            else {
                calculadora.simbolo = "/";
                resultado = calculadora.num1 / calculadora.num2;
                console.log(`${calculadora.num1} ${calculadora.simbolo} ${calculadora.num2} = ${resultado}`);
            };
            break;
        case 5:
            if (calculadora.num2 === 0) {
                console.log("Erro: divisao por zero não é permitida.");
            }
            else {
                calculadora.simbolo = "%";
                resultado = calculadora.num1 % calculadora.num2;
                console.log(`${calculadora.num1} ${calculadora.simbolo} ${calculadora.num2} = ${resultado}`);
                break;
            }
        default:
            console.log("Operação invalida.");
    };
    condicao = lerTeclado.keyInYN("Deseja fazer outra operação?");
};