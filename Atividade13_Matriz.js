// ============================================================
//   ATIVIDADE 13 – Estruturas de Dados: Matriz
// ============================================================
let lerTeclado = require('readline-sync');

// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo uma matriz
// ------------------------------------------------------------
// a) Declare a matriz:
const m = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
];
// b) Exiba: número de linhas e número de colunas.
// c) Exiba o elemento central (m[1][1]).
// d) Exiba o canto inferior direito (use .length).

// → Seu código aqui:
console.log(`Linhas: ${m.length}, Colunas: ${m[0].length}`);

console.log(`${m[1][1]}`);

console.log(`${m[0][2]}`);
console.log(`${m[1][2]}`);
console.log(`${m[2][2]}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Percorrendo com for aninhado
// ------------------------------------------------------------
// a) Declare a matriz:
const n = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];
// b) Usando dois for aninhados, exiba cada elemento no formato:
//    "m[i][j] = <valor>"
// c) Calcule e exiba a SOMA de todos os elementos da matriz.

// → Seu código aqui:
let soma = 0;

for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n[i].length; j++) {
        console.log(`${n[i][j]}`);
        soma += n[i][j]
    }
}
console.log(`Soma: ${soma}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor valor
// ------------------------------------------------------------
// a) Utilizando a matriz:
const o = [
    [12, 7, 25],
    [3, 18, 9],
    [31, 14, 22],
];
// b) Usando for aninhado, encontre o MAIOR e o MENOR valor da matriz.
// c) Exiba também a posição (linha, coluna) onde cada um está.

// → Seu código aqui:
let maior = o[0][0];
let menor = o[0][0];

for (let i = 0; i < o.length; i++) {
    for (let j = 0; j < o[i].length; j++) {
        if (maior < o[i][j]) {
            maior = o[i][j];
        } else if (menor > o[i][j]) {
            menor = o[i][j];
        }
    }
}
console.log(`Maior: ${maior}
Menor: ${menor}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Soma das linhas e das colunas
// ------------------------------------------------------------
// a) Use a mesma matriz do Exercício 3.
// b) Exiba a soma de cada LINHA: "Linha <i>: <soma>"
// c) Exiba a soma de cada COLUNA: "Coluna <j>: <soma>"
// d) Exiba a soma da DIAGONAL principal (m[i][i]).

// → Seu código aqui:

console.log("Soma por LINHA:");
for (let i = 0; i < o.length; i++) {
    let somaLinha = 0;
    for (let j = 0; j < o[i].length; j++) {
        somaLinha += o[i][j];
    }
    console.log(`Linha ${i}: ${somaLinha}`);
}

console.log("_______________________________");

console.log("Soma por COLUNA:");
for (let j = 0; j < o[0].length; j++) {
    let somaColuna = 0;
    for (let i = 0; i < o.length; i++) {
        somaColuna += o[i][j];
    }
    console.log(`Coluna ${j}: ${somaColuna}`);
}

console.log("_______________________________");

let somaDiagonal = 0;

console.log("Soma DIAGONAL:");
for (let i = 0; i < o.length; i++) {
    somaDiagonal += o[i][i];
}

console.log("Soma da diagonal principal:", somaDiagonal);

// ------------------------------------------------------------
// EXERCÍCIO 5 – Preenchendo uma matriz dinamicamente
// ------------------------------------------------------------
// a) Pergunte ao usuário quantas linhas e quantas colunas terá a matriz.
// b) Usando dois for aninhados, peça cada valor:
//    "Digite m[<i>][<j>]: "
// c) Exiba a matriz final com console.table().

// → Seu código aqui:

let linha = lerTeclado.questionInt("Quantas linhas terá a matriz?\n");
let coluna = lerTeclado.questionInt("Quantas colunas terá a matriz?\n");
let matriz = []

for (let i = 0; i < linha; i++) {
    matriz[i] = [];
    for (let j = 0; j < coluna; j++) {
        matriz[i][j] = lerTeclado.questionInt(`Digite m[${i}][${j}]: `);
    }
}
console.table(matriz);


console.log("_______________________________");