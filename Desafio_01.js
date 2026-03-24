// ============================================================
//   DESAFIOS (para quem já terminou as atividades 02 e 02-2) – Arrays e Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Acessar e alterar elementos de array
// ------------------------------------------------------------
const frutas = ['maçã', 'banana', 'laranja', 'uva'];
// a) Acesse o primeiro e o terceiro elemento e exiba com console.log().
// b) Substitua o segundo elemento por 'abacaxi' usando atribuição direta.

// → Seu código aqui:
console.log(`Primeira fruta: ${frutas[0]}, Terceira fruta: ${frutas[2]}`);

frutas[1] = "abacaxi"

console.log(frutas);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Criar novos arrays por seleção
// ------------------------------------------------------------
const letras1 = ['a', 'b', 'c', 'd', 'e', 'f'];
// a) Crie um novo array contendo apenas o primeiro, o terceiro e o sexto elementos.
// b) Crie outro array que contenha os dois últimos elementos.
// Observação: Utilize o valor de um array dentro de outro, exemplo: array2[array1[3], array[5]]

// → Seu código aqui:

let novaLetras = [letras1[0], letras1[2], letras1[5]];

let outroArray = [letras1[4], letras1[5]];


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Batata?
// ------------------------------------------------------------
const letras2 = ['a', 'b', 'c', 'd', 'e', 't'];
// a) Crie um novo array que retorne a palavra "batata" ao ser exibido no console.

let comida = [letras2[1], letras2[0], letras2[5], letras2[0], letras2[5], letras2[0]]

console.log(comida);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Objetos: acessar e adicionar propriedades
// ------------------------------------------------------------
const pessoa = { 
  nome: 'Junin',
  idade: 22,
  endereco: {
    cidade: 'Porto Alegre',
    rua: 'Avenida Brasil'
  } 
};
// a) Acesse e exiba a propriedade 'nome' e 'cidade' do objeto 'pessoa'.
// b) Adicione uma nova propriedade 'curso' com valor 'Programação' ao objeto 'pessoa'.

// → Seu código aqui:

console.log(pessoa.nome, pessoa.endereco.cidade);

pessoa.curso = "Programação";

console.log(pessoa);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e arrays dentro de objetos
// ------------------------------------------------------------
const perfil = {
  usuario: 'ana123',
  dados: { 
    nome: 'Ana',
    idade: 19,
    interesses: ['música', 'fotografia', 'viagens']
  }
};
// a) Exiba o nome da pessoa cadastrada em 'perfil'.
// b) Exiba o segundo interesse da pessoa.
// c) Altere o primeiro interesse para 'arte' por atribuição direta.
// d) Exiba o nome, a idade e a lista de interesse da pessoa.

// → Seu código aqui:

console.log(perfil.dados.nome);

console.log(perfil.dados.interesses[1]);

perfil.dados.interesses[0] = "arte";

console.log(perfil.dados.nome, perfil.dados.idade, perfil.dados.interesses);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Criar um catálogo (array de objetos e objeto indexado)
// ------------------------------------------------------------
// Crie um array 'produtos' contendo 3 produtos, onde cada produto é um objeto contendo:
//    id(number), nomeDoProduto(string) e preço(number).
// Crie um objeto 'catalogo' onde as chaves são os ids dos produtos (1, 2, 3)
//    e os valores são o nome dos produtos correspondentes.

// → Seu código aqui:

let produtos = [{
  id: 1,
  nomeDoProduto: "Teclado",
  preco: 200,
},
{
  id: 2,
  nomeDoProduto: "Mouse",
  preco: 100,
},
{
  id: 3,
  nomeDoProduto: "Fone de ouvido",
  preco: 150,
}];

let catalogo = {
  1: "Teclado",
  2: "Mouse",
  3: "Fone de ouvido"
};

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Estrutura composta: tarefas simples
// ------------------------------------------------------------
// Defina um array de tarefas com 3 objetos: { id, titulo, concluida(boolean) }.
// a) Marque a tarefa de id 2 como concluída por atribuição direta.
// b) Crie um novo array contendo apenas as tarefas que não estão concluídas
// c) Exiba o título de todas as tarefas do objeto.
// d) Exiba o título de todas as tarefas do array.

// → Seu código aqui:

let tarefas = [
  {
    id: 1,
    titulo: "Historia",
    concluida: false,
  },
  {
    id: 2,
    titulo: "Matematica",
    concluida: false,
  },
  {
    id: 3,
    titulo: "Portugues",
    concluida: false,
  }
];

tarefas[1].concluida = true;

let naoConcluida = [tarefas[0], tarefas[2]];

console.log(tarefas[0].titulo, tarefas[1].titulo, tarefas[2].titulo);

console.log(naoConcluida[0].titulo, naoConcluida[1].titulo);

console.log("_______________________________");