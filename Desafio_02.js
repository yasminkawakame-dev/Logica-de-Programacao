// ============================================================
//   DESAFIOS (para quem já terminou a atividade 03) – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Cadastro completo
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados:
//    nome, idade, profissão, cidade, se gosta de JavaScript, lista de comida favoritos e lista de pessoa(s) com que mora (nome e idade).
//    pense em qual tipo de dado cada resposta representa para armazena-los corretamente.
// b) Crie um objeto "cadastro" com todas essas propriedades.
// c) Exiba o objeto com console.table().
// d) Exiba também uma mensagem usando template literal com todos os dados, ex:
//    "Nome: <nome>. Idade: <idade> anos. Profissão: <profissão> em <cidade>. Gosta de JS: <sim/não> ...."

// → Seu código aqui:

let lerTeclado = require('readline-sync');

let cadastro = 
    {
    nome: lerTeclado.question("Qual o seu nome: \n"),
    idade: lerTeclado.questionInt("Qual a sua idade? \n"),
    profissao: lerTeclado.question("Qual sua profissao? \n"),
    cidade: lerTeclado.question("Qual a cidade onde mora? \n"),
    gostaJava: lerTeclado.keyInYN("Gosta de JavaScript? \n"),
    listaComida: [lerTeclado.question("Primeira comida favorita? \n"),
                    lerTeclado.question("Segunda comida favorita? \n"),
                    lerTeclado.question("Terceira comida favorita? \n"),
                ],
    pessoaMora: [lerTeclado.question("Com quem mora? \n"), lerTeclado.questionInt("Idade: \n")
                ]
    }
    
console.table(cadastro);

console.log(`Nome: ${cadastro.nome}. Idade: ${cadastro.idade} anos. Profissão: ${cadastro.profissao} em ${cadastro.cidade}. Gosta de JS? ${cadastro.gostaJava}`);


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Dois amigos
// ------------------------------------------------------------
// a) Peça os dados de 2 pessoas diferentes (nome, idade e cidade de cada uma).
// b) Crie um objeto para cada pessoa com essas propriedades.
// c) Crie uma array chamada "amigos" contendo os dois objetos.
// d) Exiba a array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o nome e a cidade do 1º usuário.

// → Seu código aqui:

let pessoa1 = {
    nome: lerTeclado.question("Digite seu nome: \n"),
    idade: lerTeclado.questionInt("Digite sua idade: \n"),
    cidade: lerTeclado.question("Digite sua cidade de nascimento: \n")
}

let pessoa2 = {
    nome: lerTeclado.question("Digite seu nome: \n"),
    idade: lerTeclado.questionInt("Digite sua idade: \n"),
    cidade: lerTeclado.question("Digite sua cidade de nascimento: \n")
}

let amigos = [pessoa1, pessoa2];

console.table(amigos);

console.log(amigos[1].nome, amigos[1].idade);

console.log(amigos[0].nome, amigos[0].cidade);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Pedido de restaurante
// ------------------------------------------------------------
// a) Informe ao usuário (com console.info) que ele vai montar um pedido.
// b) Exiba um menu (quanto mais estilizado melhor!) com as opções de entrada, prato principal, sobremesa e bebidas.
// b) Peça ao usuário que escolha:
//    - Uma entrada
//    - Um prato principal
//    - Uma sobremesa
//    - Duas bebidas (uma de cada vez)
// c) Crie um objeto "pedido" com as propriedades: entrada, pratoPrincipal, sobremesa e listaBebidas.
// d) Exiba o pedido com console.table().
// e) Exiba também no console a mensagem:
//    "Seu pedido: Entrada: <entrada>, Prato Principal: <pratoPrincipal>, Sobremesa: <sobremesa>, Bebida 1: <bebida1>, Bebida 2: <bebida2>. Bom apetite!"

// → Seu código aqui:

console.info("Você vai montar seu pedido:....veja o menu");

let cardapio = {
    entrada1: ("Salada com molho de pimenta"),
    entrada2: ("Pão com manteiga"),
    comida1: ("Carbonara"),
    comida2: ("Lasanha quatro queijos"),
    sobremesa: ("Brownie com sorvete"),
    bebidas:["Coca Zero", "Sprit"]
    }

const menuCompleto = [cardapio]

console.table(menuCompleto);

let pedido = {
    entrada: lerTeclado.question("Qual a entrada que você quer?\n"),
    pratoPrincipal: lerTeclado.question("Qual o prato principal?\n"),
    sobremesa: lerTeclado.keyInYN("Vai querer sobremsa?\n"),
    bebida1: lerTeclado.question("Qual a primeira escolha de bebida?\n"),
    bebida2: lerTeclado.question("Qual a segunda bebida?\n"),
}

console.table(pedido);

console.log(`Seu pedido: Entrada: ${pedido.entrada}, Prato Principal: ${pedido.pratoPrincipal},
 Sobremesa: ${pedido.sobremesa}, Bebida 1: ${pedido.bebida1}, Bebida 2: ${pedido.bebida2}. 
 Bom apetite!`
);

console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 4 – Perfil de jogador
// ------------------------------------------------------------
// a) Peça ao usuário: apelido, jogo favorito e horas totais jogadas (aproximadas)
// b) Pergunte se ele joga em time (sim/não).
// c) Crie um objeto "perfil" com todas as propriedades:
//    apelido, jogoFavorito, horasTotaisJogadas, jogaEmTime.
// d) Exiba o perfil com console.table().
// e) Use console.warn() para exibir: "Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade."

// → Seu código aqui:

let perfil = {
    apelido: lerTeclado.question("Seu apelido:\n"),
    jogoFavorito: lerTeclado.question("Qual seu jogo favorito?\n"),
    quantidadeHoras: lerTeclado.questionInt("Quantas horas totais de jogo?\n"),
    jogaTime: lerTeclado.keyInYN("Joga em algum time?")
}

console.table(perfil);
console.warn("Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade.");

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Comparador de dados
// ------------------------------------------------------------
// a) Peça o nome e a cidade favorita de 3 pessoas diferentes.
// b) Crie um objeto para cada pessoa com as propriedades: nome e cidadeFavorita.
// c) Exiba um dos objetos com console.table().
// d) Crie uma array "viajantes" com os 3 objetos.
// e) Exiba a array com console.table().
// f) Exiba com console.info() quantos viajantes estão na lista (use .length).
// g) Exiba com console.log() a cidade favorita do 2º viajante.
// h) Exiba com console.log() o nome do 1º viajante.

// → Seu código aqui:

let infoPessoa1 = {
    nome: lerTeclado.question("Seu nome:\n"),
    cidadeFavorita: lerTeclado.question("Qual sua cidade favorita?\n"),
}
let infoPessoa2 = {
    nome: lerTeclado.question("Seu nome:\n"),
    cidadeFavorita: lerTeclado.question("Qual sua cidade favorita?\n"),
}
let infoPessoa3 = {
    nome: lerTeclado.question("Seu nome:\n"),
    cidadeFavorita: lerTeclado.question("Qual sua cidade favorita?\n"),
}

console.table(infoPessoa1);

let viajantes = [infoPessoa1, infoPessoa2, infoPessoa3];

console.table(viajantes);

console.info(`Essa é a quantidade de viajantes:`, viajantes.length)

console.log(viajantes[1].cidadeFavorita);
console.log(viajantes[0].nome);

console.log("_______________________________");