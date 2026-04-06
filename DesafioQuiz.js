// ============================================================
//   DESAFIO QUIZ – Estruturas de Controle (Switch / Case)
// ============================================================
// Regras: sem loops e sem funções.
// Use apenas switch/case e/ou if/else e operadores.
// ============================================================
//
let lerTeclado = require ('readline-sync');

// Crie um quiz de 5 perguntas sobre alguma tema de sua escolha (tecnologia, filmes, curiosidades, jogos, etc).
// Cada pergunta deve possuir 4 alternativas (1 a 4); apenas uma deve ser considerada correta.
//
// Fluxo geral:
//   a) Pergunte o nome do jogador e armazene em um objeto "jogador".
//   b) Exiba uma mensagem de boas-vindas com o nome, explicando sobre o que se trata o quiz.
//   c) Adicione "pontos" ao objeto, iniciando em 0.
//
// Para cada uma das 5 perguntas, repita este padrão:
//   1. Exiba o enunciado e as 4 alternativas com console.log().
//   2. Leia a resposta do jogador (questionInt()).
//   3. Use switch/case para avaliar a resposta:
//      - No case correto: exiba "Correto!" e some 1 ponto a "pontos".
//      - Nos demais cases: exiba "Errado! A resposta certa era a opção X."
//      - No default: exiba "Opção inválida, nenhum ponto atribuído."
//
// Ao final:
//   d) Exiba o total: "Você fez X de 5 pontos."
//   e) Use switch/case (ou if/else) para exibir um resultado final com frases como as abaixo
//      Dica: você pode modificar o retorno para se adequar ao tema escolhido
//      - 5 pontos        → "Perfeito! Você é um expert!"
//      - 4 pontos        → "Muito bem! Quase lá!"
//      - 3 pontos        → "Bom trabalho, mas pode melhorar."
//      - 1 ou 2 pontos   → "Nheee!"
//      - 0 pontos        → "VIX, tente novamente!"
//   f) Exiba o objeto "resultado" com console.table():
//      { jogador, pontos, total: 5, aprovado: pontos >= 3 }
//
// Desafio extra:
//  Ao final, exiba para cada pergunta do quiz:
//    Pergunta: Qx.
//    Resposta do jogador para pergunta X: <respostaJogadorQx>
//    Resposta correta da pergunta X: <respostaCorretaQx>
//
// ============================================================

// → Seu código aqui:

let jogador = { 
    nome: lerTeclado.question("Nome jogador:\n"),
}

console.log(`
    Bem vindo ${jogador.nome}
    Esse quiz tem 5 questoes de multipla escolha sobre FILMES.
    Ao final do quiz você saberá sua pontuação.
    Boa sorte!!!`);

jogador.pontos = 0;

console.log("_______________________________");

let pergunta1 = lerTeclado.questionInt(`Qual ator interpreta Ken no filme Barbie (2023)?
1) Chris Evans
2) Ryan Gosling
3) Zac Efron
4) Henry Cavill
Sua resposta: \n`);

switch (pergunta1){
    case 1:
        console.log("Errado! A resposta certa era a opção 2.");
        break;
    case 2:
        console.log("Correto!");
        jogador.pontos ++;
        break;
    case 3:
    case 4:
        console.log("Errado! A resposta certa era a opção 2.");
        break        
    default:
        console.log("Opção inválida, nenhum ponto atribuído.");
}

console.log("_______________________________");

let pergunta2 = lerTeclado.questionInt(`Qual desses filmes faz parte do universo da Marvel lançado recentemente?
1) The Batman
2) Guardioes da Galaxia Vol. 3
3) Coringa
4) Duna
Sua resposta: \n`);

switch (pergunta2){
    case 1:
        console.log("Errado! A resposta certa era a opção 2.");
        break;
    case 2:
        console.log("Correto!");
        jogador.pontos ++;
        break;
    case 3:
    case 4:
        console.log("Errado! A resposta certa era a opção 2.");
        break        
    default:
        console.log("Opção inválida, nenhum ponto atribuído.");
}

console.log("_______________________________");

let pergunta3 = lerTeclado.questionInt(`Em Avatar: O Caminho da Água, qual é o nome do planeta onde a história se passa?
1) Terra Nova
2) Pandora
3) Krypton
4) Arrakis
Sua resposta: \n`);

switch (pergunta3){
    case 1:
        console.log("Errado! A resposta certa era a opção 2.");
        break;
    case 2:
        console.log("Correto!");
        jogador.pontos ++;
        break;
    case 3:
    case 4:
        console.log("Errado! A resposta certa era a opção 2.");
        break        
    default:
        console.log("Opção inválida, nenhum ponto atribuído.");
}

console.log("_______________________________");

let pergunta4 = lerTeclado.questionInt(`Qual desses filmes é uma animação recente da Disney/Pixar?
1) Elementos 
2) Shrek
3) Madagascar
4) Kung Fu Panda
Sua resposta: \n`);

switch (pergunta4){
    case 1:
        console.log("Correto!");
        jogador.pontos ++;
        break;
    case 2:
    case 3:
    case 4:
        console.log("Errado! A resposta certa era a opção 1.");
        break        
    default:
        console.log("Opção inválida, nenhum ponto atribuído.");
}

console.log("_______________________________");

let pergunta5 = lerTeclado.questionInt(`Quem interpreta a personagem Wandinha na série Wandinha (Wednesday)?
1) Millie Bobby Brown
2) Jenna Ortega
3) Emma Watson
4) Anya Taylor-Joy
Sua resposta: \n`);

switch (pergunta5){
    case 1:
        console.log("Errado! A resposta certa era a opção 2.");
        break;
    case 2:
        console.log("Correto!");
        jogador.pontos ++;
        break;
    case 3:
    case 4:
        console.log("Errado! A resposta certa era a opção 2.");
        break        
    default:
        console.log("Opção inválida, nenhum ponto atribuído.");
}

console.log("_______________________________");

console.log(`Você fez ${jogador.pontos} de 5 pontos`);

switch (jogador.pontos){
    case 0:
        console.log("VIX, tente novamente!");
        break;
    case 1:
    case 2:
        console.log("Nheee!");
        break;
    case 3:
        console.log("Bom trabalho, mas pode melhorar.");
        break;
    case 4:
        console.log("Muito bem! Quase lá!");
        break;
    case 5:
        console.log("Perfeito! Você é um expert!");        
        break;
}

let resultado = {
    jogador: jogador.nome,
    pontos: jogador.pontos,
    total: 5,
    aprovado: jogador.pontos >=3,
}

console.table(resultado);

console.log("Pergunta 1:");
console.log(`Resposta jogador: ${pergunta1}`);
console.log(`Resposta correta: 2`);

console.log("Pergunta 2:");
console.log(`Resposta jogador: ${pergunta2}`);
console.log(`Resposta correta: 2`);

console.log("Pergunta 3:");
console.log(`Resposta jogador: ${pergunta3}`);
console.log(`Resposta correta: 2`);

console.log("Pergunta 4:");
console.log(`Resposta jogador: ${pergunta4}`);
console.log(`Resposta correta: 1`);

console.log("Pergunta 5:");
console.log(`Resposta jogador: ${pergunta5}`);
console.log(`Resposta correta: 2`);
