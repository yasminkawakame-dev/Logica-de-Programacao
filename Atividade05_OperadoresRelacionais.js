// ============================================================
//   ATIVIDADE 05 – Operadores Relacionais em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-05.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================

let lerTeclado = require('readline-sync');

// ------------------------------------------------------------
// EXERCÍCIO 1 – Comparando com == e ===
// ------------------------------------------------------------
// Para cada par de valores abaixo, declare duas variáveis e exiba:
//   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
//   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
//
// Pares de valores:
//   1) 10 e 10
//   2) 10 e "10"
//   3) 0 e false
//   4) null e undefined
//   5) "JS" e "JS"
/*
// → Seu código aqui:

let a = 10;
let b = 10;
console.log(`o resultado de ${a} == ${b} é`, (a == b));
console.log(`o resultado de ${a} === ${b} é`, (a === b));
console.log("_______________________________");

let c = "10";
console.log(`o resultado de ${a} == ${c} é`, (a == c));
console.log(`o resultado de ${a} === ${c} é`, (a === c));
console.log("_______________________________");

let d = 0;
let e = false;
console.log(`o resultado de ${d} == ${e} é`, (d == e));
console.log(`o resultado de ${d} === ${e} é`, (d === e));
console.log("_______________________________");

let f = null;
let g ;
console.log(`o resultado de ${f} == ${g} é`, (f == g));
console.log(`o resultado de ${f} === ${g} é`, (f === g));
console.log("_______________________________");

let h = "JS";
console.log(`o resultado de ${h} == ${h} é`, (h == h));
console.log(`o resultado de ${h} === ${h} é`, (h === h));
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Comparando com != e !==
// ------------------------------------------------------------
// Para cada par de valores abaixo, exiba:
//   a) O resultado de != : "<a> != <b> → <resultado>"
//   b) O resultado de !== : "<a> !== <b> → <resultado>"
//
// Pares de valores:
//   1) 5 e 5
//   2) 5 e "5"
//   3) 7 e 3
//   4) true e 1

// → Seu código aqui:

let i = 5;
let j = "5";
let k = 7;
let l = 3;
let m = true;
let n = 1;

console.log(`o resultado de ${i} != ${i} é`, (i != i));
console.log(`o resultado de ${i} !== ${i} é`, (i !== i));
console.log("_______________________________");

console.log(`o resultado de ${i} != ${j} é`, (i != j));
console.log(`o resultado de ${i} !== ${j} é`, (i !== j));
console.log("_______________________________");

console.log(`o resultado de ${k} != ${l} é`, (k != l));
console.log(`o resultado de ${k} !== ${l} é`, (k !== l));
console.log("_______________________________");

console.log(`o resultado de ${m} != ${n} é`, (m != n));
console.log(`o resultado de ${m} !== ${n} é`, (m !== n));
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior, menor e igual
// ------------------------------------------------------------
// a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// b) Calcule e armazene em variáveis (booleanas) os resultados de:
//    - salarioA > salarioB
//    - salarioA < salarioB
//    - salarioA >= salarioB
//    - salarioA <= salarioB
//    - salarioA === salarioB
// c) Exiba cada resultado com template literal e verificação ternária no formato:
//    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"

// → Seu código aqui:

let salarioA = 3500;
let salarioB = 4200;

let calculo1 = salarioA > salarioB;
let calculo2 = salarioA < salarioB;
let calculo3 = salarioA >= salarioB;
let calculo4 = salarioA <= salarioB;
let calculo5 = salarioA === salarioB;

console.log(`Salário A (R$ ${salarioA}) > Salário B (R$ ${salarioB}): ${calculo1}`);
console.log(`Salário A (R$ ${salarioA}) < Salário B (R$ ${salarioB}): ${calculo2}`);
console.log(`Salário A (R$ ${salarioA}) >= Salário B (R$ ${salarioB}): ${calculo3}`);
console.log(`Salário A (R$ ${salarioA}) <= Salário B (R$ ${salarioB}): ${calculo4}`);
console.log(`Salário A (R$ ${salarioA}) === Salário B (R$ ${salarioB}): ${calculo5}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Armazenando resultados em variáveis
// ------------------------------------------------------------
// a) Declare "estoque" com valor 0.
// b) Armazene em "temEstoque" o resultado de: estoque > 0
// c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// d) Declare "temperatura" com valor 36.5.
// e) Armazene em "febre" o resultado de: temperatura >= 37.6
// f) Exiba cada variável usando template literal.

// → Seu código aqui:

let estoque = 0;
let temEstoque = estoque > 0;
let estoqueZerado = estoque === 0;

let temperatura = 36.5;
let febre = temperatura >= 37.6;

console.log(`Quantidade em estoque: ${estoque}`);
console.log(`Tem estoque: ${temEstoque}`);
console.log(`Temperatura: ${temperatura}`);
console.log(`Tem febre: ${febre}`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Comparações com input do usuário
// ------------------------------------------------------------
// a) Peça ao usuário dois números.
// b) Armazene em variáveis o resultado das seguintes comparações:
//    - num1 > num2
//    - num1 < num2
//    - num1 === num2
//    - num1 >= num2
// c) Exiba cada resultado com template literal.

// → Seu código aqui:

let num1 = lerTeclado.questionInt('Digite um numero:\n');
let num2 = lerTeclado.questionInt('Digite outro numero:\n');

let calculo6 = num1 > num2;
let calculo7 = num1 < num2;
let calculo8 = num1 === num2;
let calculo9 = num1 >= num2;

console.log(`O resultado de ${num1} > ${num2}:`, (calculo6));
console.log(`O resultado de ${num1} < ${num2}:`, (calculo7));
console.log(`O resultado de ${num1} === ${num2}:`, (calculo8));
console.log(`O resultado de ${num1} >= ${num2}:`, (calculo9));

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Verificação de preço
// ------------------------------------------------------------
// a) Peça ao usuário o preço de um produto.
// b) Defina uma constante "precoMaximo" com valor 100.
// c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// e) Exiba no console:
//    "Preço informado: R$ <preco>"
//    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
//    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"

// → Seu código aqui:

let preco = lerTeclado.questionFloat("Preco do produto:\n");

const precoMaximo = 100;

let estaDentroDoOrcamento = preco <= precoMaximo;

let esteItemEhCaro = preco > precoMaximo;

console.log(`
______________________________________________________________________
Preco informado: R$ ${preco}
Dentro do orcamento: (≤ R$ ${precoMaximo})? ${estaDentroDoOrcamento ? "Sim" : "Não"}
Item caro (> R$ ${precoMaximo})? ${esteItemEhCaro ? "Sim" : "Não"}
_______________________________________________________________________
`);


// ------------------------------------------------------------
// EXERCÍCIO 7 – Comparando notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// b) Armazene os resultados das comparações:
//    - idadePessoa1 > idadePessoa2
//    - idadePessoa1 === idadePessoa2
//    - idadePessoa1 >= 18 (maior de idade)
//    - idadePessoa2 >= 18 (maior de idade)
// c) Exiba todos os resultados com template literal e verificação ternária.
//    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
// d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.

// → Seu código aqui:

let cadastro = [
    {
        nome: lerTeclado.question("Nome da primeira pessoa:"),
        idade: lerTeclado.questionInt("Idade da primeira pessoa:"),
    },
    {
        nome: lerTeclado.question("Nome da segunda pessoa:"),
        idade: lerTeclado.questionInt("Idade da segunda pessoa:"),
    }
];

let comparacao1 = cadastro[0].idade > cadastro[1].idade;
let comparacao2 = cadastro[0].idade === cadastro[1].idade;
let comparacao3 = cadastro[0].idade >= 18;
let comparacao4 = cadastro[1].idade >= 18;

console.log(`Idade da ${cadastro[0].nome} é ${cadastro[0].idade} e é > que 18 "maior de idade"? ${comparacao3}`);
console.log(`Idade da ${cadastro[1].nome} é ${cadastro[1].idade} e é > que 18 "maior de idade"? ${comparacao4}`);
console.log(`A idade de ${cadastro[0].nome} é maior que a idade de ${cadastro[1].nome}? ${comparacao1}`);
console.log(`A idade de ${cadastro[0].nome} é igual a idade de ${cadastro[1].nome}? ${comparacao2}`);


console.log(`A pessoa mais velha é: ${cadastro[0].idade > cadastro[1].idade ? cadastro[0].nome : cadastro[1].nome}`);


console.log("_______________________________");

*/
// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    Exemplo: `Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nomeAluno2}`
// → Seu código aqui:

let alunos =[{
    nomeAluno: lerTeclado.question("Nome aluno:\n"),
    notas: [lerTeclado.questionInt("Qual a primeira nota?\n"),
            lerTeclado.questionInt("Qual a segunda nota?\n"),
            lerTeclado.questionInt("Qual a terceira nota?\n"),
        ]
    },
        {
        nomeAluno: lerTeclado.question("Nome aluno:\n"),
        notas: [lerTeclado.questionInt("Qual a primeira nota?\n"),
                lerTeclado.questionInt("Qual a segunda nota?\n"),
                lerTeclado.questionInt("Qual a terceira nota?\n"),
            ]
        }
    ];


let mediaAluno1 = (alunos[0].notas[0] + alunos[0].notas[1] + alunos[0].notas[2]) / alunos[0].notas.length;
console.log(mediaAluno1.toFixed(2));

let mediaAluno2 = (alunos[1].notas[0] + alunos[1].notas[1] + alunos[1].notas[2]) / alunos[1].notas.length;
console.log(mediaAluno2.toFixed(2));

console.log(`O aluno com a maior média de notas foi: ${mediaAluno1 > mediaAluno2 ? alunos[0].nomeAluno : alunos[1].nomeAluno}`);

console.log(`Aluno com primeira maior nota: ${ alunos[0].notas[0] > alunos[1].notas[0] ? alunos[0].nomeAluno : alunos[1].nomeAluno}`);
console.log(`Aluno com segunda maior nota: ${ alunos[0].notas[1] > alunos[1].notas[1] ? alunos[0].nomeAluno : alunos[1].nomeAluno}`);
console.log(`Aluno com terceira maior nota: ${ alunos[0].notas[2] > alunos[1].notas[2] ? alunos[0].nomeAluno : alunos[1].nomeAluno}`);

console.log("_______________________________");