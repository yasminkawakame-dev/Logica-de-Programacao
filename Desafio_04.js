// ============================================================
//   DESAFIOS (para quem já terminou a atividade 05) – Operadores Relacionais
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node desafios.js
//
// Dica: Ao terminar um desafio, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================

    let lerTeclado = require('readline-sync');

// ------------------------------------------------------------
// DESAFIO 1 – Comparador de idades
// ------------------------------------------------------------
// a) Crie um objeto para cada pessoa e peça ao usuário o nome e a idade (question() e questionInt()).
// b) Armazene os objetos em um array "pessoas".
// c) Exiba a array com console.table().
// d) Compare as idades e armazene os resultados em variáveis booleanas:
//    - pessoa1 é mais velha que pessoa2?
//    - pessoa2 é mais nova que pessoa3?
//    - pessoa1 e pessoa3 têm a mesma idade?
//    - alguma das 3 é maior de idade (>= 18)?  (verifique cada uma separadamente)
// e) Exiba cada resultado com template literal identificando as pessoas pelo nome.

// → Seu código aqui:

// let pessoa1 = {
//     nome: lerTeclado.question("Seu nome: \n"),
//     idade: lerTeclado.questionInt("Sua idade: \n"),
// };

// let pessoa2 = {
//     nome: lerTeclado.question("Seu nome: \n"),
//     idade: lerTeclado.questionInt("Sua idade: \n"),
// };

// let pessoa3 = {
//     nome: lerTeclado.question("Seu nome: \n"),
//     idade: lerTeclado.questionInt("Sua idade: \n"),
// };

// let pessoas = [pessoa1, pessoa2, pessoa3];

// console.table(pessoas);

// let maisVelha = pessoa1.idade > pessoa2.idade;
// let maisNova = pessoa2.idade < pessoa3.idade;
// let mesmaIdade = pessoa1.idade == pessoa3.idade;

// let maiorDeIdade = {
//     comparacao1: pessoa1.idade >= 18,
//     comparacao2: pessoa2.idade >= 18,
//     comparacao3: pessoa3.idade >= 18,
// };

// console.log(`
// ${pessoa1.nome}, tem ${pessoa1.idade} anos.
// ${pessoa2.nome}, tem ${pessoa2.idade} anos.
// ${pessoa3.nome}, tem ${pessoa3.idade} anos.
// ${pessoa1.nome} é mais velho(a) que ${pessoa2.nome}? ${maisVelha ? "Sim" : "Não"}
// ${pessoa2.nome} é mais novo(a) que ${pessoa3.nome}? ${maisNova ? "Sim" : "Não"}
// ${pessoa1.nome} tem a mesma idade de ${pessoa3.nome}? ${mesmaIdade ? "Sim" : "Não"}
// ${pessoa1.nome} é maior de idade? ${maiorDeIdade.comparacao1 ? "Sim" : "Não"}
// ${pessoa2.nome} é maior de idade? ${maiorDeIdade.comparacao2 ? "Sim" : "Não"}
// ${pessoa3.nome} é maior de idade? ${maiorDeIdade.comparacao3 ? "Sim" : "Não"}`);

// console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Comparador de produtos
// ------------------------------------------------------------
// a) Peça ao usuário o nome e o preço de 2 produtos (question() e questionFloat()), criando um objeto para cada um.
// b) Exiba os dois objetos com console.table().
// c) Calcule a diferença de preço entre os dois (use Math.abs()).
// d) Armazene e exiba os resultados:
//    - produto1 é mais caro que produto2?
//    - os dois têm o mesmo preço?
//    - o produto mais barato custa menos de R$ 50?
//    - o produto mais caro custa mais de R$ 200?
// e) Exiba cada resultado identificando os produtos pelo nome.

// → Seu código aqui:

// let produto1 = {
//     nome: lerTeclado.question("Qual o nome do produto? \n"),
//     preco: lerTeclado.questionFloat("Qual o preco? \n"),
// };
// let produto2 = {
//     nome: lerTeclado.question("Qual o nome do produto? \n"),
//     preco: lerTeclado.questionFloat("Qual o preco? \n"),
// };

// let produtos = [produto1, produto2]

// console.table(produtos);

// let comparacoes = {
//     maisCaro: produto1.preco > produto2.preco,
//     mesmoPreco: produto1.preco == produto2.preco,
//     maisBarato: (produto1 || produto2 < 50),
//     maior200: (produto1 || produto2 > 200),
// };

// console.log(`
// ${produto1.nome} custa R$ ${produto1.preco}.
// ${produto2.nome} custa R$ ${produto2.preco}.
// ${produto1.nome} é mais caro que ${produto2.nome}? ${comparacoes.maisCaro ? "Sim" : "Não"}
// Os dois têm o mesmo preço? ${comparacoes.mesmoPreco ? "Sim" : "Não"}
// O produto mais barato custa menos de R$ 50? ${comparacoes.maisBarato ? "Sim" : "Não"}
// O produto mais caro custa mais de R$ 200? ${comparacoes.maior200 ? "Sim" : "Não"}`);


// console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Boletim escolar
// ------------------------------------------------------------
// a) Peça ao usuário o nome de um aluno e suas 4 notas (questionFloat()).
// b) Calcule a média das 4 notas (use toFixed(2)).
// c) Crie um objeto "boletim" com as propriedades:
//    nome, notas (array com as 4 notas) e media.
// d) Exiba o objeto com console.table().
// e) Armazene e exiba os resultados das comparações:
//    - O aluno está aprovado (média >= 6)?
//    - O aluno precisa de recuperação (média >= 4 e média < 6)?
//    - Alguma nota é maior que 9?  (verifique cada array separadamente - utilize a função de array "some()" para isso)
//    - A maior nota é maior que a menor nota em mais de 3 pontos?
//      (use Math.max() e Math.min() para encontrar maior e menor)

// → Seu código aqui:

let aluno = {
    nome: lerTeclado.question("Qual seu nome?"),
    nota1: lerTeclado.questionInt("Primeira nota?"),
    nota2: lerTeclado.questionInt("Segunda nota?"),
    nota3: lerTeclado.questionInt("Terceira nota?"),
    nota4: lerTeclado.questionInt("Quarta nota?"),
};

let mediaNotas = (aluno.nota1 + aluno.nota2 + aluno.nota3 + aluno.nota4) / 4;
let boletim = [aluno.nome, [aluno.nota1, aluno.nota2, aluno.nota3, aluno.nota4], mediaNotas];
console.table(boletim);

let aprovado = mediaNotas >= 6;
let recuracao = mediaNotas >= 4 && mediaNotas < 6;

let maxima = (Math.max(aluno.nota1, aluno.nota2, aluno.nota3, aluno.nota4));
let minima = (Math.min(aluno.nota1, aluno.nota2, aluno.nota3, aluno.nota4));



console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Estoque de loja
// ------------------------------------------------------------
// a) Peça ao usuário os dados de 3 produtos e crie um objeto para cada:
//    nome (question()), preço (questionFloat()) e quantidade em estoque (questionInt()).
// b) Crie um array "estoque" e armazene os 3 produtos.
// c) Exiba o array com console.table().
// d) Para cada produto, armazene em variáveis booleanas e exiba:
//    - O produto tem estoque disponível (quantidade > 0)?
//    - O produto está com estoque baixo (quantidade <= 5)?
//    - O produto é considerado caro (preço > 100)?
//    - O produto tem preço abaixo de 50?
// e) Use template literal identificando cada produto pelo nome.

// → Seu código aqui:


console.log("_______________________________");