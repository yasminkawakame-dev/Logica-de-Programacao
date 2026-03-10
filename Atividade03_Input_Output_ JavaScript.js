// ============================================================
//   ATIVIDADE 03 – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Explorando os métodos do console
// ------------------------------------------------------------
// a) Use console.log() para exibir a mensagem: "Iniciando o programa..."
// b) Use console.info() para exibir uma mensagem informando sobre o que é a atividade atual.
// c) Use console.warn() para exibir um aviso de que o usuário sempre precisa iniciar o programa com node e o nome do arquivo.
// d) Use console.error() para exibir uma mensagem de erro aleatória de sua escolha.

// → Seu código aqui:

let lerTeclado = require('readline-sync');

console.log("Iniciando programa...");
console.info("Atividade sobre Input e Output em JavaScript");
console.warn("Sempre antes de inicar o programa o usuário deve executar node <nomeDoArquivo>.js ");
console.error("Algo de errado não está certo");


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Saudação personalizada
// ------------------------------------------------------------
// a) Peça ao usuário que digite seu nome usando question().
// b) Peça ao usuário que digite sua idade usando questionInt().
// c) Exiba no console uma saudação usando template literal, no formato:
//    "Olá, <nome>! Você tem <idade> anos."

// → Seu código aqui:
const nomeUsuario = lerTeclado.question("Digite seu nome...")
let idadeUsuario = lerTeclado.questionInt("Digite sua idade...")

console.log(`Olá, ${nomeUsuario}! Você tem ${idadeUsuario} anos`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Ficha pessoal
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados: nome, idade e cidade.
// b) Crie um objeto chamado "ficha" com as propriedades: nome, idade e cidade.
// c) Exiba o objeto com console.table().

// → Seu código aqui:

let cidadeUsuario = lerTeclado.question("Digite a cidade de moradia...");

let ficha = {nome: nomeUsuario, idade: idadeUsuario, cidade: cidadeUsuario}

console.table(ficha);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Perguntas de sim ou não
// ------------------------------------------------------------
// a) Faça duas perguntas de sim/não ao usuário usando keyInYN().
// b) Armazene as respostas em variáveis.
// c) Exiba as respostas no console usando template literal.

// → Seu código aqui:
let temCNH = lerTeclado.keyInYN("Possui CNH?");

console.log(`${temCNH ? "Sim" : "Não"} tenho`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Lista de favoritos
// ------------------------------------------------------------
// a) Peça ao usuário que informe 3 comidas favoritas, uma por vez.
// b) Armazene as 3 respostas em uma array chamada "comidasFavoritas".
// c) Exiba a array com console.table().

// → Seu código aqui:

let comidasFavorita1 = lerTeclado.question("Digite a sua comida favorita...");
let comidasFavorita2 = lerTeclado.question("Digite a sua segunda comida favorita...");
let comidasFavorita3 = lerTeclado.question("Digite a sua terceira comida favorita...");

let comidasFavoritas = [comidasFavorita1, comidasFavorita2, comidasFavorita3];

console.table(comidasFavoritas);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Apresentação completa
// ------------------------------------------------------------
// a) Peça ao usuário: nome, profissão e cidade.
// b) Armazene estes dados em um objeto 'cadastroPessoal'
// c) Exiba no console uma frase completa com os dados, usando template literal:
//    "Me chamo <nome>. Profissão: <profissão> e moro na cidade de: <cidade>."
// d) Exiba a mesma informação com console.table().

// → Seu código aqui:

const seuNome = lerTeclado.question("Qual o seu nome?");
let profissao1 = lerTeclado.question("Qual a sua profissao?");
let cidade1 = lerTeclado.question("Qual a cidade onde mora?");

let cadastroPessoal = {
    nome: seuNome,
    profissao: profissao1,
    ondeMora: cidade1,
}

console.log(`Me chamo ${seuNome}. Profissão: ${profissao1} e moro na cidade de: ${cidade1}`);

console.table(cadastroPessoal);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Lista de objetos
// ------------------------------------------------------------
// a) Através do terminal, capture o dado de 3 usuários fictícios, cada um com as seguintes propriedades:
//    nome(string), idade(number) e endereço(objeto).
//    objeto endereço deve conter as propriedades: cidade(string), rua(string) e numero(number)
// b) Armazene cada usuário em um objeto.
// c) Armazene os objetos em um array 'listaDeUsuarios'
// d) Exiba o array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:

let pessoa1 = {
    nome: lerTeclado.question("1 - Digite seu nome..."),
    idade: lerTeclado.questionInt("2 - Qual a sua idade?"),
    endereco:{
        cidade: lerTeclado.question("3 - Qual cidade onde mora?"),
        rua: lerTeclado.question("4 - Qual o nome da rua?"),
        numero: lerTeclado.questionInt("5 - Qual o numero?")
    }
}
console.log("_______________________________");
let pessoa2 = {
    nome: lerTeclado.question("1 - Digite seu nome..."),
    idade: lerTeclado.questionInt("2 - Qual a sua idade?"),
    endereco: {
        cidade: lerTeclado.question("3 - Qual cidade onde mora?"),
        rua: lerTeclado.question("4 - Qual o nome da rua?"),
        numero: lerTeclado.questionInt("5 - Qual o numero?")
    }
}
console.log("_______________________________");
let pessoa3 = {
    nome: lerTeclado.question("1 - Digite seu nome..."),
    idade: lerTeclado.questionInt("2 - Qual a sua idade?"),
    endereco: {
        cidade: lerTeclado.question("3 - Qual cidade onde mora?"),
        rua: lerTeclado.question("4 - Qual o nome da rua?"),
        numero: lerTeclado.questionInt("5 - Qual o numero?")
    }
}

let listaDeUsuarios = [pessoa1, pessoa2, pessoa3];

console.table(listaDeUsuarios);

console.log(pessoa2.nome, pessoa2.idade)

console.log(pessoa3.endereco);

console.log(pessoa1.nome, pessoa1.endereco.rua);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Exiba o array 'turma' com console.table().
// e) Exiba o nome e a 1ª nota do 2º aluno.
// f) Exiba o nome e a 2ª nota do 3º aluno.
// g) Exiba o nome e a 3ª nota do 1º aluno.

// → Seu código aqui:

let aluno1 = {
    nome: lerTeclado.question("Qual seu nome?"),
    nota1: lerTeclado.questionInt("Primeira nota?"),
    nota2: lerTeclado.questionInt("Segunda nota?"),
    nota3: lerTeclado.questionInt("Terceira nota?"),
}

let aluno2 = {
    nome: lerTeclado.question("\nQual seu nome?"),
    nota1: lerTeclado.questionInt("Primeira nota?"),
    nota2: lerTeclado.questionInt("Segunda nota?"),
    nota3: lerTeclado.questionInt("Terceira nota?"),
}

let aluno3 = {
    nome: lerTeclado.question("\nQual seu nome?"),
    nota1: lerTeclado.questionInt("Primeira nota?"),
    nota2: lerTeclado.questionInt("Segunda nota?"),
    nota3: lerTeclado.questionInt("Terceira nota?"),
}

let turma = [aluno1, aluno2, aluno3];

console.table(turma);

console.log(turma[1].nome, turma[1].nota1);
console.log(turma[2].nome, turma[2].nota2);
console.log(turma[0].nome, turma[0].nota3);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Cadastro de produto
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de um produto:
//    - nome (string)
//    - categoria (string)
//    - preço (float)
//    - quantidade em estoque (inteiro)
//    - está disponível para venda? (sim/não, usando keyInYN())
// b) Crie um objeto 'produto' com todas essas propriedades.
//    A propriedade de disponibilidade deve se chamar 'disponivel' e ser boolean (true/false).
// c) Exiba o objeto completo com console.table().
// d) Exiba no console uma frase resumo usando template literal:
//    "Produto: <nome> | Categoria: <categoria> | Estoque: <quantidade> un".

// → Seu código aqui:

let produto = {
    nome: lerTeclado.question("Nome do produto?"),
    categoria: lerTeclado.question("Categoria do produto?"),
    preco: lerTeclado.questionFloat("Qual o preco?"),
    estoque: lerTeclado.questionInt("Quantidade em estoque:"),
    disponibilidade: lerTeclado.keyInYN("Esta disponivel para venda?")
}

let disponivel = (`${produto.disponibilidade ? "Sim" : "Não"}`);

console.table(produto);

console.log(`Produto: ${produto.nome} | Categoria: ${produto.categoria} | Estoque: ${produto.estoque} `);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Farmacia
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de dois medicamentos com as seguintes propriedades:
//    - nome (string)
//    - preco (float)
//    - emEstoque (boolean) - (sim/não, usando keyInYN())
// b) Crie uma lista "estoqueFarmacia" e insira os objetos criados com push().
// c) Exiba a lista com console.table().
// d) Exiba somente o nome e preço do 2 medicamento.
// e) Exiba somente o nome e se está em estoque o 1 medicamento.

let med1 = {
    nome: lerTeclado.question("\nNome do medicamento: \n"),
    preco: lerTeclado.questionFloat("\nQual o preço? \n"),
    emEstoque: lerTeclado.keyInYN("\nTem em estoque? \n")
}

let med2 = {
    nome: lerTeclado.question("\nNome do medicamento: \n"),
    preco: lerTeclado.questionFloat("\nQual o preço? \n"),
    emEstoque: lerTeclado.keyInYN("\nTem em estoque? \n")
}

let estoqueFarmacia = [];

estoqueFarmacia.push(med1, med2);

console.table(estoqueFarmacia);

console.log(estoqueFarmacia[1].nome, estoqueFarmacia[1].preco);

console.log(estoqueFarmacia[0].nome, estoqueFarmacia[0].emEstoque);



