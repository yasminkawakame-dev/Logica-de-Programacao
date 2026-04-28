// ============================================================
//   JOGO: Quiz de Conhecimentos Gerais
// ============================================================
//
// O programa apresenta 8 perguntas de múltipla escolha (A/B/C/D).
// O jogador tem UMA chance por pergunta — sem segunda oportunidade.
// Ao final, o jogo exibe a pontuação, o aproveitamento e
// uma classificação baseada no desempenho.
// ============================================================

// ============================================================
// BANCO DE PERGUNTAS (não altere)
// ============================================================
// Cada pergunta é um objeto com:
//   texto    → enunciado da pergunta
//   opcoes   → array com as 4 alternativas [A, B, C, D]
//   resposta → letra correta ('A', 'B', 'C' ou 'D')

let lerTeclado = require('readline-sync');

const perguntas = [
    {
        texto: "Qual é o maior planeta do Sistema Solar?",
        opcoes: ["Saturno", "Netuno", "Júpiter", "Urano"],
        resposta: "C"
    },
    {
        texto: "Em que ano o Brasil declarou sua independência?",
        opcoes: ["1889", "1500", "1822", "1808"],
        resposta: "C"
    },
    {
        texto: "Qual é o elemento químico com símbolo 'O'?",
        opcoes: ["Ouro", "Osmio", "Oxigênio", "Ósmio"],
        resposta: "C"
    },
    {
        texto: "Quantos lados tem um hexágono?",
        opcoes: ["5", "7", "8", "6"],
        resposta: "D"
    },
    {
        texto: "Qual país é o maior em extensão territorial?",
        opcoes: ["China", "Brasil", "Canadá", "Rússia"],
        resposta: "D"
    },
    {
        texto: "Quem escreveu 'Dom Casmurro'?",
        opcoes: ["José de Alencar", "Machado de Assis", "Clarice Lispector", "Carlos Drummond"],
        resposta: "B"
    },
    {
        texto: "Qual é a capital da Austrália?",
        opcoes: ["Sydney", "Melbourne", "Brisbane", "Camberra"],
        resposta: "D"
    },
    {
        texto: "Quantos bits tem 1 byte?",
        opcoes: ["4", "16", "8", "32"],
        resposta: "C"
    }
];


// ============================================================
// INÍCIO DO JOGO
// ============================================================

console.log("==================================");
console.log("|  QUIZ DE CONHECIMENTOS GERAIS  |");
console.log("==================================");

// PASSO 1 – Peça o nome do jogador e dê as boas-vindas.
//           Exiba as regras:
//           - Total de perguntas. (utilizando .length)
//           - 1 ponto por acerto
//           - Sem segunda chance por pergunta

// → Seu código aqui:

let jogador = lerTeclado.question("Nome jogador:\n");

if (jogador === "") {
    console.log("Nome invalido");
    process.exit()
}

console.log(`
    Bem vindo ${jogador}
    Esse quiz tem 8 questoes de multipla escolha sobre conhecimentos gerais.
    Ao final do quiz você saberá sua pontuação.
    Boa sorte!!!`);

console.log("\n_______________________________");

console.log(`
    Regras do jogo
    ${perguntas.length} perguntas.
    Será 1 ponto por acerto.
    Sem segunda chance por pergunta.`);

console.log("\n_______________________________");


// ============================================================
// REGRAS DE LOOP DAS PERGUNTAS
// ============================================================
//
// PASSO 2 – Inicialize o acumulador de pontos:
//
// PASSO 3 – Use um for() de 0 até perguntas.length - 1 para percorrer o array de perguntas:
//
//   a) Exiba o número da pergunta e o total:
//      "Pergunta <x>, de <x> perguntas"
//
//   b) Exiba o texto da pergunta
//
//   c) Exiba as 4 alternativas acessando cada índice diretamente:
//      A) 1ª opção
//      B) 2ª opção
//      C) 3ª opção
//      D) 4ª opção
//
//   d) Peça a resposta do jogador utilizando question() e garanta que a resposta seja uma letra maiúscula
//      O Javascript possui uma função que pode ser usada para isso
//
//   e) Compare a resposta do jogador com a resposta correta utilizando if/else ou switch:
//      - Se acertou:
//          Exiba: "Correto!"
//          Incremente pontos
//      - Se errou:
//          Exiba: "Errado! A resposta correta era: <resposta>"

// → Seu código aqui:

let pontos = 0;

for (let i = 0; i < perguntas.length; i++) {
    console.log(`Pergunta ${i + 1} de ${perguntas.length}`);
    console.log(`
        ${perguntas[i].texto}
        A) ${perguntas[i].opcoes[0]}
        B) ${perguntas[i].opcoes[1]}
        C) ${perguntas[i].opcoes[2]}
        D) ${perguntas[i].opcoes[3]}`);
    let resposta = lerTeclado.question("Qual a opcao correta: \n").toUpperCase();

    if (resposta === perguntas[i].resposta) {
        console.log("Correto!");
        pontos++;
    } else {
        console.log(`Errado! A resposta correta era: ${perguntas[i].resposta}`);
    }
}

console.log("\n_______________________________");


// ============================================================
// RESULTADO FINAL
// ============================================================
//
// PASSO 4 – Após o for(), calcule o aproveitamento em % (pontos / perguntas.length) * 100;
//
// PASSO 5 – Determine a classificação:
//           100%      → "PERFEITO! Gênio!"
//           75% a 99% → "Excelente! Quase lá!"
//           50% a 74% → "Bom! Você sabe bastante."
//           25% a 49% → "Regular. Vale estudar mais."
//           abaixo    → "Fraco. Bora revisar o conteúdo!"
//
// PASSO 6 – Exiba o resultado final:
//           "|==============================================="
//           "| RESULTADO FINAL"
//           "| Jogador: <nome>"
//           "| Acertos: <pontos> de <total>"
//           "| Aproveitamento: <aproveitamento>%"
//           "| Classificação: <classificacao>"
//           "==============================================="
//
// PASSO 7 – Armazene o resultado em um objeto e exiba com console.table():
//           { jogador, acertos, total, aproveitamento, classificacao }

// → Seu código aqui:

console.log("===============================");
console.log("RESULTADO FINAL");
console.log("===============================");

console.log(`Pontuação: ${pontos} de ${perguntas.length}`);

let aproveitamento = (pontos / perguntas.length) * 100;
console.log(`Aproveitamento: ${aproveitamento}%`);

if (aproveitamento === 100) {
    console.log("Classificação: Excelente!");
} else if (aproveitamento >= 75) {
    console.log("Classificação: Muito bom!");
} else if (aproveitamento >= 50) {
    console.log("Classificação: Regular");
} else {
    console.log("Classificação: Precisa melhorar");
}

console.log("Obrigado por jogar!");