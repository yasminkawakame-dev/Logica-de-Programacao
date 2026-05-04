// ============================================================
//   ATIVIDADE 10 – Estruturas de Controle (Repetição - While)
// ============================================================
let lerTeclado = require('readline-sync');

// ------------------------------------------------------------
// EXERCÍCIO 1 – While simples
// ------------------------------------------------------------
// a) Declare uma variável 'n' com valor 1.
// b) Usando while, exiba os números de 1 a 7 no console.
// c) Ao final, exiba: "Fim da contagem!"

// // → Seu código aqui:

// let n = 1;

// while (n <= 7) {
//     console.log("Numero:", n);
//     n++
// }
// console.log("_______________________________");


// // ------------------------------------------------------------
// // EXERCÍCIO 2 – Contagem regressiva
// // ------------------------------------------------------------
// // a) Declare uma variável 'regressiva' com valor 10.
// // b) Usando while, exiba a contagem de 10 até 1.
// // c) Ao final, exiba: "Lançamento ON!"

// // → Seu código aqui:

// let regressiva = 10;

// while (regressiva >= 1) {
//     console.log(regressiva);
//     regressiva--
// }
// console.log("Lançamento ON!");

// console.log("_______________________________");


// // ------------------------------------------------------------
// // EXERCÍCIO 3 – Validação de entrada
// // ------------------------------------------------------------
// // a) Usando while, peça ao usuário um número entre 1 e 5 e repita enquanto o valor for inválido.
// //    A cada entrada inválida, exiba: "Valor fora do intervalo. Tente novamente."
// // b) Quando o valor for válido, exiba: "Você escolheu: <número>"

// // → Seu código aqui:
// // let numero = 0;

// // while (numero < 1 || numero > 5) {
// //     numero = lerTeclado.questionInt("Digite um numero entre 1 e 5:\n");
// //     if (numero > 5 || numero == 0) {
// //         console.log("Valor fora do intervalo. Tente novamente.")
// //     };
// // }
// // console.log("Você escolheu:", numero);

// // console.log("_______________________________");


// // ------------------------------------------------------------
// // EXERCÍCIO 4 – Acumulador com while
// // ------------------------------------------------------------
// // a) Usando while, peça ao usuário números até que ele digite 0.
// // b) Acumule a soma de todos os números digitados.
// // c) Conte quantos números foram digitados (exceto o 0).
// // d) Ao final, exiba a soma, a quantidade de numeros digitados e quais foram os números digitados.

// // → Seu código aqui:

// // let contador = 12;
// // let soma = 0;
// // let numerosDigitados = [];
// // let quant = 0;

// // while (contador > 0) {
// //     contador = lerTeclado.questionInt("Digite um numero:\n");
// //     numerosDigitados.push(contador);
// //     soma = soma + contador;
// //     quant++
// // }

// // console.log(`
// // Soma dos numeros: ${soma}. 
// // Numeros digitados: ${numerosDigitados}. 
// // Quantidade de numeros digitados: ${quant}.`);

// // console.log("_______________________________");


// // ------------------------------------------------------------
// // EXERCÍCIO 5 – Média com while e validação
// // ------------------------------------------------------------
// // a) Usando while, peça ao usuário notas de 0 a 10 até que ele digite -1 para encerrar.
// //    Se a nota for inválida (< 0 e diferente de -1, ou > 10), exiba: "Nota inválida." e peça novamente.
// // b) Calcule e exiba a média.

// // → Seu código aqui:

// // let nota = 11;
// // let somaNotas = 0;
// // let media = 0;
// // let quantNotas = 0;

// // console.log("Calculo da media das notas");
// // console.log("Caso queira sair basta digitar -1");

// // while (nota > 0) {
// //     nota = lerTeclado.questionInt("Digite uma nota de 0 ate 10:\n");
// //     if (nota > 10) {
// //         console.log("Nota inválida.");
// //     }
// //     if (nota === -1) {
// //         console.log("Saindo.");
// //     } else {
// //         quantNotas++
// //         somaNotas += nota;
// //         media = somaNotas / quantNotas
// //     }
// // }
// // console.log("Sua media foi:", media);

// // console.log("_______________________________");


// // ------------------------------------------------------------
// // EXERCÍCIO 6 – Do...while: menu simples
// // ------------------------------------------------------------
// // a) Usando do...while, exiba um menu repetitivo:
// //    1 – Exibir hora atual  (use: new Date().toLocaleTimeString())
// //    2 – Exibir data atual  (use: new Date().toLocaleDateString())
// //    0 – Sair
// // b) Processe a opção com switch/case.
// // c) O menu deve repetir até o usuário escolher 0.

// // → Seu código aqui:

// let usuario;

// do {
//     console.log("1 – Exibir hora atual");
//     console.log("2 – Exibir data atual");
//     console.log("0 – Sair");

//     usuario = lerTeclado.questionInt("Digite a opcao desejada:\n");

//     switch (usuario) {
//         case 1:
//             let agora = new Date();
//             console.log(agora.toLocaleTimeString('pt-BR'));
//             break;
//         case 2:
//             let data = new Date();
//             console.log(data.toLocaleDateString('pt-BR'));
//             break;
//         case 0:
//             console.log("Saindo...");
//             break;
//         default:
//             console.log("Opcao invalida.");
//     }

// } while (usuario != 0);

// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Adivinhe o número (while)
// ------------------------------------------------------------
// a) Gere um número secreto aleatório de 1 a 50 (Math.random())
// b) Peça o nome do jogador.
// c) Usando while, repita até o jogador acertar:
//    - Peça um palpite.
//    - Se muito alto, exiba: "Muito alto! Tente menor."
//    - Se muito baixo, exiba: "Muito baixo! Tente maior."
//    - Se acertou, saia do while.
// d) Ao acertar, exiba:
//    "<nome> acertou após <tentativas> tentativa(s)! O número era <secreto>."

// → Seu código aqui:

// const NUM_MIN = 1;
// const NUM_MAX = 50;
// let tentativas = 0;

// let numeroSecreto = Math.floor(Math.random() * (NUM_MAX - NUM_MIN) + NUM_MIN);

// let nomeUsuario = lerTeclado.question("Qual seu nome?\n");
// let palpite;
// console.log("Tente adivinhar o numero secreto de 1 a 50.");

// while (palpite != numeroSecreto) {
//     palpite = lerTeclado.questionInt("Seu palpite:\n");
//     tentativas++
//     if (palpite > numeroSecreto) {
//         console.log("Muito alto! Tente menor.");
//     } else if (palpite < numeroSecreto) {
//         console.log("Muito baixo! Tente maior.");
//     } else {
//         console.log("Numero invalido");
//     }
//     if(palpite == numeroSecreto){
//         console.log(`${nomeUsuario} acertou apos ${tentativas} tentativas! O numero secreto era ${numeroSecreto}`);
//     }
// }

// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Tabuada com while
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro.
// b) Usando while, exiba a tabuada desse número de 1 a 10:
//    Formato para exibição: "<número> x <i> = <resultado>"

// → Seu código aqui:

// let numUsuario = lerTeclado.questionInt("Digite um numero inteiro:\n");
// let i = 1
// while (i <= 10) {
//     let resultado = numUsuario * i
//     console.log(resultado);
//     i++
// }

// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Contador com condição composta
// ------------------------------------------------------------
// a) Declare 'saldo' com valor 1000 e 'rodada' com valor 0.
// b) Usando while, simule saques aleatórios enquanto o saldo for maior que 0 E a rodada for menor que 10:
//    - A cada rodada, gere um saque aleatório de 50 a 200:
//    - Se o saque for maior que o saldo, exiba: "Saldo insuficiente. Fim!" e encerre.
//    - Caso contrário, desconte do saldo e exiba:
//      "Rodada <rodada>: sacou R$ <saque> | Novo saldo: R$ <saldo>"
// c) Ao final, exiba o saldo restante e o total de rodadas.

// → Seu código aqui:

// let saldo = 1000;
// let rodada = 0;
// let saque = 0;

// while (saldo > 0 && rodada < 10) {
//     saque = Math.random() * (200 - 50) + 50;
//     rodada++
//     if (saque > saldo) {
//         console.log("Saldo insuficiente. Fim!");
//         break
//     } else {
//         saldo = saldo - saque;
//         console.log(`Rodada ${rodada}: sacou R$ ${saque.toFixed(2)} | Novo saldo: R$ ${saldo.toFixed(2)}`);
//     }

// }
// console.log(`Saldo restante: R$ ${saldo.toFixed(2)}. Total de rodadas: ${rodada}`);

// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Do...while: cadastro em loop
// ------------------------------------------------------------
// a) Crie um array vazio 'contatos'.
// b) Usando do...while, repita:
//    - Peça nome e telefone do contato.
//    - Adicione um objeto { nome, telefone } ao array.
//    - Pergunte: "Adicionar outro contato?" (keyInYN()).
//    - Repita enquanto o usuário responder que sim.
// c) Ao sair do loop, exiba todos os contatos com console.table().
// d) Exiba: "Total de contatos cadastrados: <qtd>"

// → Seu código aqui:

let contatos = []
let outroContato;

do {
    let nome = lerTeclado.question("Nome contato:\n");
    let telefone = lerTeclado.questionInt("Numero de telefone:\n");

    contatos.push({
        nome: nome,
        telefone: telefone,
    }
    )
    outroContato = lerTeclado.keyInYN("Adicionar outro contato:") ? "Sim" : "Nao";
} while (outroContato == "Sim")

console.table(contatos);
console.log("Total de contatos cadastrados:", contatos.length);
console.log("_______________________________");
