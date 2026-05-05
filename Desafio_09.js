// ============================================================
//   DESAFIOS (para quem já terminou a atividade 09) – For
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================

// ------------------------------------------------------------
// DESAFIO 1 – Progressão de saldo bancário
// ------------------------------------------------------------
// Um investimento rende juros compostos mensais.
//
// a) Pergunte ao usuário:
//    - Saldo inicial (questionFloat())
//    - Taxa de juros mensal em % (questionFloat()) — ex: 1.5
//    - Número de meses
// b) Usando um for, calcule e exiba mês a mês:
//    "Mês 1:  R$ <saldo>"
//    "Mês 2:  R$ <saldo>"
//    ...
//    A fórmula de juros compostos é:
//    saldo = saldo * (1 + taxa / 100)
// c) Ao final, exiba o saldo total e o lucro obtido (saldo final - saldo inicial).
// d) Armazene cada mês como objeto { mes, saldo } em um array e exiba com console.table().

// → Seu código aqui:
let lerTeclado = require('readline-sync');

let saldoInicial = lerTeclado.questionFloat("Saldo inicial:\n");
if (saldoInicial != 0) {
    let taxaJuros = lerTeclado.questionFloat("Qual a taxa de juros mensal?\n");
    let meses1 = lerTeclado.questionInt("Numero meses:\n");
    let saldoFinal = saldoInicial;
    let historico = [];

    for (let i = 1; i <= meses1; i++) {
        saldoFinal = saldoFinal * (1 + taxaJuros / 100);
        console.log(`Mês: ${i} - R$ ${saldoFinal.toFixed(2)}`);

        historico.push({
            meses: i,
            saldo: saldoFinal.toFixed(2)
        })
    }

    let lucro = saldoFinal - saldoInicial;

    console.log(`
Seu saldo final: R$ ${saldoFinal.toFixed(2)}
Seu lucro foi de: R$ ${lucro.toFixed(2)}
`);

    console.table(historico)
}
console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 2 – Cadastro e relatório de alunos
// ------------------------------------------------------------
// a) Pergunte ao usuário quantos alunos serão cadastrados.
// b) Usando um for, colete de cada aluno:
//    - Nome (question())
//    - Nota 1, Nota 2 e Nota 3 (questionFloat() para cada)
// c) Calcule a média de cada aluno e armazene como objeto:
//    { nome, notas, media, situacao }
//    A situação deve ser:
//      "Aprovado"    → média >= 7
//      "Recuperação" → média >= 5 e < 7
//      "Reprovado"   → média < 5
// d) Após coletar todos, percorra o array e exiba o relatório:
//    "<nome> | Média: <media> | <situacao>"
// e) Exiba:
//    - Média geral da turma
//    - Nome do aluno com maior média
//    - Nome do aluno com menor média
//    - Quantidade de aprovados, em recuperação e reprovados
// f) Exiba o array com console.table().

// → Seu código aqui:

let turma = lerTeclado.questionInt("Quantos alunos serão cadastrados?\n");
let alunos = [];

for (let i = 1; i <= turma; i++) {
    let aluno = {
        nome: lerTeclado.question("Nome aluno:\n"),
        nota1: lerTeclado.questionFloat("Qual a primeira nota?\n"),
        nota2: lerTeclado.questionFloat("Qual a segunda nota?\n"),
        nota3: lerTeclado.questionFloat("Qual a terceira nota?\n"),
        media: 0,
        situacao: ""
    };

    aluno.media = ((aluno.nota1 + aluno.nota2 + aluno.nota3) / 3);

    if (aluno.media >= 7) {
        aluno.situacao = "Aprovado"
    } else if (aluno.media >= 5 && aluno.media < 7) {
        aluno.situacao = "Recuperação"
    } else if (aluno.media < 5) {
        aluno.situacao = "Reprovado"
    }

    console.log(`${aluno.nome} | Média: ${aluno.media.toFixed(2)} | ${aluno.situacao}`);

    alunos.push(aluno);
}
if (turma != 0) {
    console.table(alunos);
}

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Jogo de adivinhar o número
// ------------------------------------------------------------
// O programa sorteia um número de 1 a 100 e o usuário tem no máximo 7 tentativas para adivinhar.
//
// a) Gere um número aleatório
//    Para gerar um número aleatório, utilize a função Math.random()
// b) Usando um for:
//    - Peça ao usuário um palpite.
//    - Se errar: exiba "Muito alto!" ou "Muito baixo!" conforme o caso.
//    - Informe quantas tentativas restam: "Tentativas restantes: <restantes>"
//    - Se acertar: exiba "Parabéns! Acertou em <i> tentativa(s)!"
// c) Se o usuário esgotar as tentativas sem acertar, exiba:
//    "Game over! O número era <secreto>."
// d) Ao final, exiba um resumo:
//    - Número secreto
//    - Número de tentativas usadas
//    - Resultado: "Vitória" ou "Derrota"

// → Seu código aqui:

let tentativas = 0;
let venceu = false
let maxtentativas = 7
let secreto = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

console.log("Tente adivinhar o número entre 1 e 100!\n");

for (let i = 1; i <= maxtentativas; i++) {
    let palpite = lerTeclado.questionInt("Qual o numero?\n");
    tentativas++;

    if (palpite === secreto) {
        console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s)!`);
        venceu = true
        break;
    } else if (palpite > secreto) {
        console.log("Muito alto! Tente um número menor.");
        console.log(`Faltam ${maxtentativas - i} tentativas`);
    } else {
        console.log("Muito baixo! Tente um número maior.");
        console.log(`Faltam ${maxtentativas - i} tentativas`);
    }
}
if (!venceu) {
    console.log(`Game over! O número era ${secreto}.`)
}

console.log(`Número secreto: ${secreto}
Tentativas usadas: ${tentativas}
Resultado: ${venceu ? "Vitória" : "Derrota"}`);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Análise de vendas mensais
// ------------------------------------------------------------
// a) Declare o array de vendas mensais (Jan a Dez):
//    const vendas = [12500, 9800, 15200, 11000, 13750, 8900,
//                    17300, 14600, 10200, 16800, 19500, 22000];
// b) Usando fors, calcule e exiba:
//    - Total de vendas no ano
//    - Média mensal
//    - Mês com maior venda (nome do mês e valor)
//    - Mês com menor venda (nome do mês e valor)
//    - Quantos meses ficaram acima da média
//    - Quantos meses ficaram abaixo da média
// c) Exiba um relatório mês a mês indicando se ficou acima ou abaixo da média:
//    "Janeiro:   R$ 12.500,00 – Abaixo da média"
//    "Fevereiro: R$  9.800,00 – Abaixo da média"
//    ...
//    Dica: use um array com os nomes dos meses para exibir o nome correto.
// d) Exiba o array de objetos { mes, venda, situacao } com console.table().

// → Seu código aqui:

const vendas = [12500, 9800, 15200, 11000, 13750, 8900, 17300, 14600, 10200, 16800, 19500, 22000];
let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let total = 0;

for (let i = 0; i < vendas.length; i++) {
    total += vendas[i];
}
let media = total / vendas.length;

for (let i = 0; i < vendas.length; i++) {
    console.log(`Mês: ${meses[i]}, ${vendas[i]}`);
}

let maior = vendas[0];
let mesMaior = meses[0];
let menor = vendas[0];
let mesMenor = meses[0];

for (let i = 1; i < vendas.length; i++) {
    if (vendas[i] > maior) {
        maior = vendas[i];
        mesMaior = meses[i];
    }
    if (vendas[i] < menor) {
        menor = vendas[i];
        mesMenor = meses[i];
    }
}

let acima = 0;
let abaixo = 0;
let relatorio = [];

for (let i = 0; i < vendas.length; i++) {
    let situacao;
    if (vendas[i] > media) {
        situacao = "Acima da média";
        acima++;
    } else {
        situacao = "Abaixo da média";
        abaixo++;
    }

    console.log(`${meses[i]}: R$ ${vendas[i].toFixed(2)} – ${situacao}`);

    relatorio.push({
        mes: meses[i],
        venda: vendas[i],
        situacao: situacao
    });
}

console.table(relatorio);

console.log("_______________________________");