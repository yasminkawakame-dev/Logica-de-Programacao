// ============================================================
//   ATIVIDADE 09 – Estruturas de Controle (Repetição - For)
// ============================================================

let lerTeclado = require('readline-sync');

// ------------------------------------------------------------
// EXERCÍCIO 1 – Contagem simples
// ------------------------------------------------------------
// a) Usando um for, exiba no console os números de 5 a 12, um por linha.
//    O número exibido deve ser o mesmo utilizado para o contador do 'for' ( i )
// b) Ao final, exiba: "Contagem concluída!"

// → Seu código aqui:

/*
for (let i = 5; i <= 12; i++) {
    console.log("Numero", i);
}
console.log("Contagem concluida");

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Contagem decrescente
// ------------------------------------------------------------
// a) Usando um for, exiba os números de 10 até 3 em ordem decrescente.
//    O número exibido deve ser o mesmo utilizado para o contador do 'for' ( i )
// b) Ao final, exiba: "Lançamento! 🚀"

// → Seu código aqui:

for (let i = 10; i > 2; i--) {
    console.log("Numero:", i);
}
console.log("Lançamento!");

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Números pares
// ------------------------------------------------------------
// a) Usando um for com passo 2, exiba todos os números pares de 0 a 30.
// b) Ao final, exiba quantos números pares foram exibidos.

// → Seu código aqui:

let contador = 0;
for (let i = 0; i <= 30; i += 2) {
        console.log("Valor de i:", i);
        contador++;
    }

console.log(`Total de numeros exibidos: ${contador}`);
 
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Tabuada
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro (questionInt()).
// b) Exiba a tabuada desse número de 1 a 10 no formato:
//    "<número> x <i> = <resultado>"

// → Seu código aqui:

let usuarioNumero = lerTeclado.questionInt("Digite um número:\n");

for (let i = 1; i <= 10; i++) {
    let resultado = usuarioNumero * i;
    console.log(`${usuarioNumero} x ${i} = ${resultado}`);
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Soma acumulada
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro positivo N (questionInt()).
// b) Usando um for, calcule a soma de todos os inteiros de 1 até N.
// c) Exiba: "A soma de 1 até <N> é <soma>"

// → Seu código aqui:

let positivo = lerTeclado.questionInt("Digite um numero inteiro positivo:\n");
let soma = 0;

for(i = 1; i <= positivo; i++) {
    soma += i
}
console.log(`A soma de 1 até ${positivo} é ${soma}`)

console.log("_______________________________");
*/

// ------------------------------------------------------------
// EXERCÍCIO 6 – Fatorial
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro de 1 a 10 (questionInt()).
// b) Calcule o fatorial desse número usando um for.
//    Fatorial de N (N!) = 1 × 2 × 3 × ... × N
//    Exemplo: 5! = 1 × 2 × 3 × 4 × 5 = 120
// c) Exiba: "<N>! = <resultado>"

// → Seu código aqui:

// let inteiro = lerTeclado.questionInt("Digite um numero de 1 a 10:\n");
// let fatorial = 0;

// for(let i = 1; i <= inteiro; i++) {
//     fatorial = inteiro * i;
// }
// console.log(`${inteiro}! = ${fatorial}`);

// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Percorrendo um array
// ------------------------------------------------------------
// a) Utilizando o array:
const cidades = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Fortaleza"];
// b) Utilizando de um for, exiba cada cidade com seu índice no formato:
//    "[<indice>] - <Cidade>"
// c) Ao final, exiba: "Total de cidades: <quantidade>"

// → Seu código aqui:

for (i = 0; i < cidades.length; i++) {
    console.log(`${i} - ${cidades[i]}`);
}
console.log("Total de cidades:", cidades.length);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Maior e menor valor
// ------------------------------------------------------------
// a) Declare o array:
//    const temperaturas = [28, 15, 32, 9, 21, 37, 14, 25];
// b) Usando um for, encontre o maior e o menor valor do array.
// c) Exiba:
//    "Maior temperatura: <maior>°C"
//    "Menor temperatura: <menor>°C"

// → Seu código aqui:
const temperaturas = [28, 15, 32, 9, 21, 37, 14, 25];
let maior = temperaturas[0];
let menor = temperaturas[0];

for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] > maior) {
        maior = temperaturas[i];
    } else if (temperaturas[i] < menor) {
        menor = temperaturas[i];
    }
}

console.log(`
Maior temperatura: ${maior}°C
Menor temperatura: ${menor}°C`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Contando com condição
// ------------------------------------------------------------
// a) Utilizando do array:
const idades = [12, 25, 17, 34, 15, 42, 16, 29, 8, 19];
// b) Usando um for, conte:
//    - Quantas pessoas são menores de idade (< 18)
//    - Quantas são maiores de idade (>= 18)
// c) Exiba os dois totais.

// → Seu código aqui:

let maiorIdade = 0;
let menorIdade = 0;

for (let i = 0; i < idades.length; i++) {
    if (idades[i] >= 18) {
        maiorIdade++
    } else {
        menorIdade++;
    }
}

console.log(`
Quantos são menores de idade: ${menorIdade}
Quantos são maiores de idade: ${maiorIdade}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Média com array
// ------------------------------------------------------------
// a) Utilizando do array:
const salarios = [1800, 3200, 950, 4500, 2100, 1500, 7800, 2900];
// b) Usando um for, calcule a média salarial.
// c) Exiba a média no formato: "Média salarial: R$ <media>"
// d) Usando outro for, exiba cada salário e se está acima ou abaixo da média:
//    "R$ 1800,00 – Abaixo da média"
//    "R$ 3200,00 – Acima da média"

// → Seu código aqui:
let somaSalario = 0;

for (let i = 0; i < salarios.length; i++) {
    somaSalario += salarios[i];
}

let mediaSalario = somaSalario / salarios.length;

console.log(`Media salarial: R$${mediaSalario}`);


let abaixoMedia = [];
let acimaMedia = [];

for (let i = 0; i < salarios.length; i++) {
    if (salarios[i] <= 1800) {
        abaixoMedia.push(salarios[i])
    } else if (salarios[i] >= 3200) {
        acimaMedia.push(salarios[i]);
    }
}

console.log(`
Abaixo da media: ${abaixoMedia}
Acima da media: ${acimaMedia}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 11 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Calcule a média das notas da turma e armazene em uma variável 'media'.
// e) Percorra o array e para cada aluno exiba no console:
//    "<nome>: <nota> – <situação>"
//    A situação deve ser:
//      "Aprovado"    → nota >= 7
//      "Recuperação" → nota >= 5 e < 7
//      "Reprovado"   → nota < 5
// f) Ao final, exiba a média da turma no formato:
//    "Média da turma: <media>"
// g) Exiba o array 'turma' com console.table().

// → Seu código aqui:

// let turma = [{
//     nomeAluno: lerTeclado.question("Nome aluno:\n"),
//     notas: [
//         lerTeclado.questionInt("Qual a primeira nota?\n"),
//         lerTeclado.questionInt("Qual a segunda nota?\n"),
//         lerTeclado.questionInt("Qual a terceira nota?\n"),
//     ]
// },
// {
//     nomeAluno: lerTeclado.question("Nome aluno:\n"),
//     notas: [
//         lerTeclado.questionInt("Qual a primeira nota?\n"),
//         lerTeclado.questionInt("Qual a segunda nota?\n"),
//         lerTeclado.questionInt("Qual a terceira nota?\n"),
//     ]
// },
// {
//     nomeAluno: lerTeclado.question("Nome aluno:\n"),
//     notas: [
//         lerTeclado.questionInt("Qual a primeira nota?\n"),
//         lerTeclado.questionInt("Qual a segunda nota?\n"),
//         lerTeclado.questionInt("Qual a terceira nota?\n"),
//     ]
// }
// ];

// let somaTurma = 0;

// for (let i = 0; i < turma.length; i++){
// let somaAluno = 0;

// for (let j = 0; j < turma[i].notas.length; j++){
//         somaAluno += turma[i].notas[j];
// }

// let mediaAluno = somaAluno / turma[i].notas.length;

// somaTurma += mediaAluno;

// let situacao;

// if (mediaAluno >= 7){
//         situacao = "Aprovado";
// } else if (mediaAluno >= 5){
//         situacao = "Recuperação";
// } else {
//         situacao = "Reprovado";
// }

// console.log(`${turma[i].nome}: ${mediaAluno.toFixed(2)} – ${situacao}`);
// }

// let mediaTurma = somaTurma / turma.length;

// console.log(`Média da turma: ${mediaTurma.toFixed(2)}`);

// console.table(turma);

// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 12 – Coletando dados com for e input
// ------------------------------------------------------------
// a) Pergunte ao usuário quantos produtos quer cadastrar (questionInt()).
// b) Usando um for, colete de cada produto:
//    - nome (question())
//    - preco (questionFloat())
// c) Armazene cada produto como objeto em um array 'estoque'.
// d) Após o cadastro, percorra o array e exiba cada produto no formato:
//    "<nome>: R$ <preco>"
// e) Exiba o produto mais caro e o mais barato.
// f) Exiba o array com console.table().

// → Seu código aqui:

let quantidade = lerTeclado.questionInt("Quantos produtos deseja cadastrar?");

let produto = 0;
let estoque = [];

for(let i = 0; i < quantidade; i++){
    let nome = lerTeclado.question("Nome produto:\n");
    let preco = lerTeclado.questionFloat("Preco produto: R$ ");
    estoque.push({
        nome: nome,
        preco: preco
    })
}
console.table(estoque);

for (i = 0; i < estoque.length; i++){
    console.log(`${i} - ${estoque[i].nome} - R$ ${estoque[i].preco}`);
}
console.log("Total de produtos:", quantidade);

let maisCaro = estoque[0];
let maisBarato = estoque[0];

for (let i = 1; i < estoque.length; i++){
    if (estoque[i].preco > maisCaro.preco) {
        maisCaro = estoque[i];
    } else if (estoque[i].preco < maisBarato.preco) {
        maisBarato = estoque[i];
    }
}

console.log(`Produto mais caro: ${maisCaro.nome} - R$ ${maisCaro.preco}`);
console.log(`Produto mais barato: ${maisBarato.nome} - R$ ${maisBarato.preco}`);

console.log("_______________________________");