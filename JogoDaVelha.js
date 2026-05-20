// JOGO DA VELHA

// DESENVOLVA EM JS, PARA TERMINAL CMD
// UTILIZANDO O QUE VIMOS EM SALA
// JOGO DA VELHA (JOGADOR VS JOGADOR)

// CÓDIGO:
const lerTeclado = require('readline-sync');

console.log("======================");
console.log("     JOGO DA VELHA    ");
console.log("======================");

let tabuleiro = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]];

console.table(tabuleiro);

let jogador1 = lerTeclado.question("Qual o nome do Jogador 1:\n");
let jogador2 = lerTeclado.question("Qual o nome do Jogador 2:\n");

let jogador;
let jogadorAtual;

for (let jogadas = 1; jogadas <= 9; jogadas++) {
    if (jogadas % 2 != 0) {
        jogador = "X" // Jogadas impares
        jogadorAtual = jogador1
        let linha = lerTeclado.questionInt(`${jogador1} qual linha deseja marcar? (De 0 a 2):\n`);
        if (linha > 2 || linha < 0) {
            console.log("Tente novamente");
            jogadas--
            continue
        }
        let coluna = lerTeclado.questionInt(`E qual coluna deseja marcar? (De 0 a 2):\n`);
        if (coluna > 2 || coluna < 0) {
            console.log("Tente novamente");
            jogadas--
            continue
        }
        if (tabuleiro[linha][coluna] !== "-") {
            console.log("Campo já preenchido. Tente novamente");
            jogadas--
            console.table(tabuleiro);
            continue;
        } else {
            tabuleiro[linha][coluna] = jogador;
            console.table(tabuleiro);
        }

    } else {
        jogador = "O" // Jogadas pares
        jogadorAtual = jogador2
        linha = lerTeclado.questionInt(`${jogador2} qual linha deseja marcar? (De 0 a 2):\n`);
        if (linha > 2 || linha < 0) {
            console.log("Tente novamente");
            jogadas--
            continue
        }
        coluna = lerTeclado.questionInt(`E qual coluna deseja marcar? (De 0 a 2):\n`);
        if (coluna > 2 || coluna < 0) {
            console.log("Tente novamente");
            jogadas--
            continue
        }
        if (tabuleiro[linha][coluna] !== "-") {
            console.log("Campo já preenchido. Tente novamente");
            jogadas--
            console.table(tabuleiro);
            continue;
        } else {
            tabuleiro[linha][coluna] = jogador;
            console.table(tabuleiro);
        }
    }
}


let ganhou = false;

for (let i = 0; i < 3; i++) {
    if (tabuleiro[i][0] === jogador && tabuleiro[i][0] === jogador && tabuleiro[i][0] === jogador) {
        ganhou = true
    }
}

for (let j = 0; j < 3; j++) {
    if (tabuleiro[0][j] === jogador && tabuleiro[1][j] === jogador && tabuleiro[2][j] === jogador) {
        ganhou = true
    }
}

if (tabuleiro[0][0] === jogador && tabuleiro[1][1] === jogador && tabuleiro[1][1] === jogador) {
    ganhou = true
}

if (tabuleiro[0][2] === jogador && tabuleiro[1][1] === jogador && tabuleiro[2][0] === jogador) {
    ganhou = true
}

if (ganhou) {
    console.log(`Ganhador: ${jogadorAtual}`);
    break;
}
