// ============================================================
//   DESAFIOS (para quem já terminou a atividade 15)
//   Funções com Parâmetros e Retornos
// ============================================================

let lerTeclado = require('readline-sync');

// ------------------------------------------------------------
// DESAFIO 1 – Validador de senhas
// ------------------------------------------------------------
// Crie um conjunto de funções para validar uma senha.
//
// a) 'temTamanhoMinimo(senha, min)'  → true/false (senha.length >= min).
// b) 'temNumero(senha)'              → true se houver algum dígito (0-9).
// c) 'temMaiuscula(senha)'           → true se houver alguma letra maiúscula.
// d) 'temEspecial(senha)'            → true se houver !@#$%&*?
// e) 'validarSenha(senha)'           → retorna um OBJETO com:
//        { valida, motivos }
//    'motivos' é um VETOR de strings com tudo que falta. Ex:
//        { valida: false, motivos: ["Mínimo de 8 caracteres", "Deve conter número"] }
// f) Pergunte uma senha ao usuário e exiba o resultado da validação.

// → Seu código aqui:

// function temTamanhoMinimo(senha, min) {
//     if (senha.length >= min) {
//         return true
//     }
// }

// function temNumero(senha) {
//     return /\d/.test(senha);
// }

// function temMaiuscula(senha) {
//     return /[A-Z]/.test(senha);
// }

// function temEspecial(senha) {
//     return /[\W_]/.test(senha);
// }

// function validarSenha(senha) {
//     const motivos = [];
//     const min = 8
//     if (!temTamanhoMinimo(senha, min)) {
//         motivos.push("Tem tamanho minimo")
//     } if (!temNumero(senha)) {
//         motivos.push("Deve conter numero");
//     } if (!temMaiuscula(senha)) {
//         motivos.push("Deve conter maiuscula");
//     } if (!temEspecial(senha)) {
//         motivos.push("Deve conter caracter especial");
//     }

//     const valida = motivos.length === 0;

//     return { valida: valida, motivos: motivos };
// }

// let senha = lerTeclado.question("Qual a senha:\n");

// const resultado = validarSenha(senha || "");

// if (resultado.valida) {
//     console.log("Parabéns! Sua senha é forte e válida.");
// } else {
//     console.log("Senha inválida!\n\nErros encontrados:\n- " + resultado.motivos.join("\n- "));
// }

// console.log(resultado);

// console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Conversor de unidades
// ------------------------------------------------------------
// Crie uma "biblioteca" de funções de conversão.
//
// a) 'celsiusParaFahrenheit(c)'  → C * 1.8 + 32
// b) 'fahrenheitParaCelsius(f)'  → (F - 32) / 1.8
// c) 'kmParaMilhas(km)'          → km * 0.621371
// d) 'milhasParaKm(mi)'          → mi / 0.621371
// e) 'kgParaLibras(kg)'          → kg * 2.20462
// f) 'librasParaKg(lb)'          → lb / 2.20462
//
// g) Crie 'converter(valor, dePara)' que recebe a unidade de origem
//    e a unidade de destino e RETORNA o valor convertido, chamando a função correta.
//
// h) Faça um menu (do...while) onde o usuário digita o valor, e a unidade para qual deseja converter
//    e mostre o resultado formatado com toFixed(2).

// → Seu código aqui:

function celsiusParaFahrenheit(c) {
    return c * 1.8 + 32;
}

function fahrenheitParaCelsius(f) {
    return (f - 32) / 1.8;
}

function kmParaMilhas(km) {
    return km * 0.621371;
}

function milhasParaKm(mi) {
    return mi / 0.621371;
}

function kgParaLibras(kg) {
    return kg * 2.20462;
}

function librasParaKg(lb) {
    return lb / 2.20462;
}

function converter(valor, dePara) {
    switch (dePara) {
        case 1:
            return celsiusParaFahrenheit(valor);
        case 2:
            return fahrenheitParaCelsius(valor);
        case 3:
            return kmParaMilhas(valor);
        case 4:
            return milhasParaKm(valor);
        case 5:
            return kgParaLibras(valor);
        case 6:
            return librasParaKg(valor);
        default:
            return null;
    }
}
let opcao;

do {
    console.log(
        "--- CONVERSOR DE UNIDADES ---\n" +
        "1 - Celsius para Fahrenheit\n" +
        "2 - Fahrenheit para Celsius\n" +
        "3 - Quilômetros para Milhas\n" +
        "4 - Milhas para Quilômetros\n" +
        "5 - Quilos para Libras\n" +
        "6 - Libras para Quilos\n" +
        "0 - Sair\n\n"
    )

    opcao = lerTeclado.questionInt("Escolha uma opção:");

    if (opcao >= 1 && opcao <= 6) {
        let valor = lerTeclado.questionFloat("Qual o valor para converter:\n");
        if (!isNaN(valor)) {
            let resultado = converter(valor, opcao);
            console.log(`Resultado da conversão: ${resultado.toFixed(2)}`);
        } else {
            console.log("Por favor, insira um número válido.");
        }
    }
    else if (opcao !== 0) {
        console.log("Opção inválida! Escolha um número de 0 a 6.");
    }
} while (opcao !== 0);

console.log("Programa encerrado.");

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Quizz
// ------------------------------------------------------------
// a) Declare uma lista com 5 objetos, contendo cada objeto:
//    pergunta: "..."
//    jaRespondida: false
//    acertou: false
// b) Crie a função 'exibirPergunta' que exibe a pergunta de forma estilizada.
// c) Crie a função 'verificarResposta' que verifica se a resposta está correta.
// d) Crie a função 'iniciarQuiz' que chama as perguntas em sequência.
// e) Crie a função 'mostrarResultado' que exibe o resultado atual.
// f) Crie a função 'iniciarQuiz' para iniciar o quiz.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Banco de funcionários
// ------------------------------------------------------------
//
// a) Estrutura do funcionário:
//        { id, nome, cargo, salario, ativo }
// b) Crie funções:
//    - 'criarFuncionario(lista, nome, cargo, salario)' → adiciona um novo objeto (funcionário) em uma lista de funcionários.
//    - 'buscarPorId(lista, id)'                        → retorna o objeto ou null.
//    - 'atualizarSalario(lista, id, novoSalario)'      → true/false (atualizou ou não).
//    - 'desligar(lista, id)'                           → marca ativo = false; true/false.
//    - 'reintegrar(lista, id)'                         → marca ativo = true; true/false.
//    - 'totalFolha(lista)'                             → soma dos salários dos ATIVOS.
//    - 'mediaSalarial(lista)'                          → média dos salários dos ATIVOS.
//    - 'maiorSalario(lista)'                           → retorna o funcionário ATIVO
//                                                        com maior salário.
// c) Construa um menu (do...while + switch) que permita usar todas as funções.
// d) Após cada operação, exiba a lista atualizada com console.table().

// → Seu código aqui:

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Jogo de adivinhação modularizado
// ------------------------------------------------------------
// Recrie o "jogo da adivinhação", agora SEPARADO em funções.
//
// a) 'sortearNumero(min, max)'              → retorna um inteiro aleatório no intervalo.
// b) 'pedirPalpite(min, max)'               → pergunta e retorna um inteiro válido
//                                              (refaz a pergunta se estiver fora).
// c) 'compararPalpite(palpite, alvo)'       → retorna "maior", "menor" ou "acertou".
// d) 'classificarTentativas(qtd)'           → retorna uma string:
//                                              1     → "Sorte de principiante!"
//                                              2-3   → "Excelente!"
//                                              4-6   → "Bom!"
//                                              7-10  → "Regular."
//                                              >10   → "Continue tentando!"
// e) 'jogar(min, max)'                      → executa o jogo completo:
//                                              sorteia, faz o loop de palpites,
//                                              e RETORNA a quantidade de tentativas.
// f) No programa principal, pergunte se o usuário quer jogar de novo (keyInYN()).
//    Mantenha um vetor 'historico' com todas as partidas:
//        { partida, tentativas, classificacao }
//    Ao final, exiba console.table(historico).

// → Seu código aqui:


console.log("_______________________________");