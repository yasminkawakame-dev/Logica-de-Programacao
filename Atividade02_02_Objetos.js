// ============================================================
//   ATIVIDADE 02-2 – Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando objetos
// ------------------------------------------------------------
// a) Crie um objeto "aluno" com as propriedades: nome, idade, curso.
// b) Exiba o nome do aluno usando notação ponto.

// → Seu código aqui:
const dadosAluno = {
    nome: "Arthur",
    idade: 28,
    curso: "Desenvolvimento de Jogos"
 }

console.log(`Nome do aluno:`, dadosAluno.nome)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Aninhamento e acesso
// ------------------------------------------------------------
// a) Adicione uma propriedade "endereco" ao objeto com cidade e rua.
// b) Exiba a cidade

// → Seu código aqui:
dadosAluno.enderecoCompleto = {
    cidade: "Santa Maria",
    rua: "Alfredo Campos"
}

console.log(`Cidade:`, dadosAluno.enderecoCompleto.cidade);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Habilidades (array dentro do objeto)
// ------------------------------------------------------------
// a) Adicione uma propriedade "habilidades" (array) ao objeto "aluno".
// b) Exiba a primeira habilidade.

// → Seu código aqui:
dadosAluno.habilidades = ["CSS", "HTML", "JS"];

console.log(`Habilidade:`, dadosAluno.habilidades[0]);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Notas e média
// ------------------------------------------------------------
// a) Adicione uma propriedade "notas", sendo esse um array de números.
// b) Exiba em uma única frase, o nome do aluno e suas notas.

// → Seu código aqui:
dadosAluno.notas = [8, 10, 9];

console.log(`Nome do aluno:`, dadosAluno.nome, `e suas notas são:`, dadosAluno.notas);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e alteração
// ------------------------------------------------------------
// a) Adicione uma propriedade "responsavel" que é um objeto com nome e parentesco (mãe ou pai ou irmão, etc).
// b) Exiba o nome do responsável.
// c) Altere o nome do responsável e mostre que o objeto foi atualizado.

// → Seu código aqui:
dadosAluno.responsavel = {
    nome: "Sueli",
    parentesco: "Mãe"
}

console.log(`Nome da mãe:`, dadosAluno.responsavel.nome);

dadosAluno.responsavel.nome = "Irene";

console.log(dadosAluno.responsavel.nome);

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Lista de alunos (array de objetos)
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" e adicione o objeto "aluno".
// b) Crie outros dois objetos com dados de outros alunos.
// c) Adicione os outros alunos na lista de alunos.
// c) Exiba o nome do segundo aluno da lista.

// → Seu código aqui:
let listaDeAlunos = [dadosAluno]

let aluno1 = {
    nome: "Marcos",
    idade: 26
    }

let aluno2 = {
    nome: "Felipe",
    idade: 24
}

listaDeAlunos.push(aluno1, aluno2);

console.log(listaDeAlunos[1].nome);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Objetos e Arrays
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" que contenha 3 alunos. Cada aluno deve ser um objeto (não uma variável que contem um objeto).
// b) Cada objeto aluno deve conter nome(string), idade(number) e notas(array de numbers).
// c) Exiba o nome e as notas de cada aluno.


// → Seu código aqui:

let listaAlunos = [
{
    nome: "Paula",
    idade: 14,
    notas: [8, 7, 9]
},
{
    nome: "Rodrigo",
    idade: 20,
    notas: [5, 7, 6]
},
{
    nome: "Alice",
    idade: 18,
    notas: [7, 8, 10]
}
];

console.log(`Nome Aluno:`, listaAlunos[0].nome, `Notas:`, listaAlunos[0].notas);
console.log(`Nome Aluno:`, listaAlunos[1].nome, `Notas:`, listaAlunos[1].notas);
console.log(`Nome Aluno:`, listaAlunos[2].nome, `Notas:`, listaAlunos[2].notas);
console.log("_______________________________");
