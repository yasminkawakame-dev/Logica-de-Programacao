// ============================================================
// ATIVIDADE AVALIATIVA N4
// Módulos: Variáveis, Tipos (primitivos e compostos), Arrays e Objetos, Input e Output de Dados
// ============================================================
//
// Instruções Gerais:
// • Copie todo este exercício para um novo arquivo em sua pasta de atividades
// • Nomeie o seu novo arquivo como "atividade-avaliativa-n4.js"
// • Resolva cada exercício no espaço indicado.
// • Utilize template literals sempre que precisar montar frases.
// • NÃO apague os separadores (console.log("_________")).
// • Leia com atenção cada enunciado antes de começar.
// • Cada letra representa um passo. Resolva na ordem.
//
// ============================================================


// ------------------------------------------------------------
// QUESTÃO 1 (peso: 0.5) – Construindo um cartão de visita no console
// ------------------------------------------------------------
// a) Crie variáveis para armazenar as seguintes informações REAIS ou FICTÍCIAS:
// • nome (string)
// • profissao (string)
// • cidade (string)
// • email (string)
// • telefone (string)
// • anoExperiencia (number)
// • disponivelParaFreelance (boolean)
// b) Peça ao usuário para preencher as informações do cartão de visitas.
// c) Usando console.log() e template literals, exiba no console
// um cartão de visitas formatado, parecido com o modelo abaixo:
//
// ============================================
// | CARTÃO DE VISITAS |
// ============================================
// | Nome : <nome> |
// | Profissão : <profissao> |
// | Cidade : <cidade> |
// | E-mail : <email> |
// | Telefone : <telefone> |
// | Experiência : <anosExperiencia> anos |
// | Freelance : <disponivelParaFreelance> |
// ============================================

// → Seu código aqui:
let lerTeclado = require('readline-sync');


const nome = ("Yasmin");
let profissao = ("Financeiro");
let cidade = ("Jaraguá do sul");
let email = ("yasmin.kawakame@gmail.com");
let telefone = ("33323322");
let anoExperiencia = 1;
let disponivelParaFreelance = true;

let cartaoDeVisitas = {
    nome: lerTeclado.question("Qual o seu nome?\n"),
    profissao: lerTeclado.question("Qual sua profissao?\n"),
    cidade: lerTeclado.question("Qual cidade voce mora?\n"),
    email: lerTeclado.question("Qual o seu email?\n"),
    telefone: lerTeclado.questionInt("Qual o seu telefone?\n"),
    experiencia: lerTeclado.questionInt("Quantos anos tem de experiencia?\n"),
    freelance: lerTeclado.keyInYN("Esta disponivel para Freelance?")
}

console.log(`
============================================
          | CARTÃO DE VISITAS |
============================================
    | Nome : ${cartaoDeVisitas.nome} |
    | Profissão : ${cartaoDeVisitas.profissao} |
    | Cidade : ${cartaoDeVisitas.cidade} |
    | E-mail : ${cartaoDeVisitas.email} |
    | Telefone : ${cartaoDeVisitas.telefone} |
    | Experiência : ${cartaoDeVisitas.experiencia} anos |
    | Freelance : ${cartaoDeVisitas.freelance} |
============================================
`);


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 2 (peso: 0.5) – Criando e acessando arrays
// ------------------------------------------------------------
// a) Crie um array chamado "materias" com pelo menos 5 disciplinas escolares.
// b) Exiba a primeira e a última matéria usando seus índices.
// c) Exiba a quantidade total de matérias usando .length.
// d) Usando template literal, exiba a frase:
// "A 3ª matéria da lista é <...> e a lista tem <...> matérias no total."

// → Seu código aqui:

let materias = ["Historia", "Ingles", "Matematica", "Geografia", "Artes"];

console.log(materias[0], materias[4]);

console.log(`Essa é a quantidade de materias:`, materias.length);

console.log(`A 3ª materia é,`, materias[2],`e a lista tem,`, materias.length, `materias no total`);

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 3 (peso: 0.5) – Manipulação direta de posições
// ------------------------------------------------------------
const notas = [6.5, 8.0, 4.5, 9.0, 7.5];

// a) Substitua a nota do índice 2 (4.5) pelo valor 6.0 usando atribuição direta.
// b) Substitua a nota do índice 3 (9.0) pelo valor 8.5 usando atribuição direta.
// c) Exiba o array atualizado.

// → Seu código aqui:

notas[2] = 6.0;
notas[3] = 8.5;

console.log(notas);

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 4 (peso: 0.5) – Métodos de array: push, pop, unshift, shift
// ------------------------------------------------------------
// Usando o array "materias" da questão anterior e as funções de array listadas acima:
// a) Adicione "Educação Física" ao FINAL da lista e exiba a lista.
// b) Remova o ÚLTIMO elemento da lista e exiba a lista.
// c) Adicione "Filosofia" ao INÍCIO da lista e exiba a lista.
// d) Remova o PRIMEIRO elemento da lista e exiba a lista.
// e) Após todas as operações, exiba quantos itens restaram.

// → Seu código aqui:

materias.push("Educaçao Fisica");
console.log(materias);

materias.pop();
console.log(materias);

materias.unshift("Filosofia");
console.log(materias);

materias.shift();
console.log(materias);

console.log(materias.length);


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 5 (peso: 0.5) – indexOf, includes, slice e concat
// ------------------------------------------------------------
const cidadesBrasil = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Manaus", "Fortaleza"];
const cidadesPortugal = ["Lisboa", "Porto", "Braga"];

// Utilizando as listas e as funções de array listadas acima:
// a) Verifique em qual índice está "Curitiba" e exiba o resultado.
// b) Verifique em qual índice está "Recife" (que NÃO existe na lista) e exiba.
// O que significa esse retorno? Escreva a explicação em um comentário.
// c) Use includes() para verificar se "Salvador" está na lista. Exiba o resultado.
// d) Use includes() para verificar se "Belém" está na lista. Exiba o resultado.
// e) Use concat() para unir "cidadesBrasil" e "cidadesPortugal" em um novo array "todasAsCidades".
// Exiba o novo array.
// f) Use slice() para criar um novo array "cidadesDoMeio" com apenas os elementos
// do índice 3 ao 7 de "todasAsCidades". Exiba o resultado.

// → Seu código aqui:

console.log(cidadesBrasil.indexOf("Curitiba"));

console.log(cidadesBrasil.indexOf("Recife")); // O retorno com o simbolo "-" significa que o item não existe na lista

console.log(cidadesBrasil.includes("Salvador"));
console.log(cidadesBrasil.includes("Belém"));

let todasAsCidades = cidadesBrasil.concat(cidadesPortugal);

console.log(todasAsCidades);

let cidadesDoMeio = [todasAsCidades.slice(3, 7)];

console.log(cidadesDoMeio);


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 6 (peso: 0.5) – Arrays mistos e flat
// ------------------------------------------------------------
// a) Crie um array aninhado (arrays dentro de outro array) chamado "grupos", conforme exemplo abaixo:
// [
// ["Ana", "Bruno", "Carlos"],
// ["Diana", "Eduardo"],
// ["Fernanda", "Gabriel", "Helena", "Igor"]
// ]
// b) Exiba "grupos".
// c) Exiba o nome do 2º aluno do 3ª grupo (antes de usar flat, usando índices).
// d) Use flat() para transformar "grupos" em um único array chamado "todosOsAlunos" e exiba o resultado.
// e) Exiba o tamanho total do array "grupos" e do array "todosOsAlunos". Explique porque desses valores serem diferentes, se os dados são os mesmos

// → Seu código aqui:

let grupos = [
        ["Ana", "Bruno", "Carlos"],
        ["Diana", "Eduardo"],
        ["Fernanda", "Gabriel", "Helena", "Igor"]
        ];


console.log(grupos);

console.log(grupos[2][1]);

let todosOsAlunos = grupos.flat();

console.log(todosOsAlunos);

console.log(grupos.length, todosOsAlunos.length); // os valores são diferentes porque o primeiro resultado vai mostrar a quantidade de lista, pois são listas dentro de listas, e o segundo vai aparecer a quantidade de itens que tem dentro da lista porque é só 1 lista.

console.log("_______________________________");



// ------------------------------------------------------------
// QUESTÃO 7 (peso: 0.5) – Criando e acessando objetos
// ------------------------------------------------------------
// a) Crie um objeto chamado "produto" com as propriedades:
// nome (string), preco (number), disponivel (boolean), categoria (string).
// b) Exiba cada propriedade separadamente usando um console.log() para cada.
// c) Usando template literal, exiba:
// "O produto '<nome>' custa R$ <preco> e está disponível: <disponivel>."
// d) Exiba o objeto utilizando console.table().

// → Seu código aqui:

let produto = {
    nome: "batata",
    preco: 5,
    disponivel: true,
    categoria: "comida"
}

console.log(produto.nome);
console.log(produto.preco);
console.log(produto.disponivel);
console.log(produto.categoria);

console.log(`O produto ${produto.nome} custa R$ ${produto.preco} e está disponível: ${produto.disponivel}.`);

console.table(produto);

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 8 (peso: 0.5) – Alterando e adicionando propriedades
// ------------------------------------------------------------
// Usando o objeto "produto" da questão anterior:
// a) Altere o preço para um valor diferente.
// b) Altere "disponivel" para o valor oposto ao atribuido anteriormente.
// c) Adicione uma nova propriedade "estoque" com o valor 20.
// d) Exiba o objeto completo.

// → Seu código aqui:

produto.preco = 9;

produto.disponivel = false;

produto.estoque = 20;

console.log(produto);

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 9 (peso: 1) – Array de objetos
// ------------------------------------------------------------
// a) Crie um array chamado "listaFuncionarios" com 3 objetos.
// Cada objeto deve ter: nome (string), cargo (string), salario (number), ativo (boolean).
// b) Exiba o nome do primeiro funcionário.
// c) Exiba o cargo do terceiro funcionário.
// d) Exiba o salário do segundo funcionário.
// e) Altere o cargo do primeiro funcionário para um cargo diferente.
// f) Crie um novo objeto e armazene-o em uma variável.
// g) Adicione esse 4º funcionário no array "listaFuncionarios" com push().
// h) Exiba o array completo após todas as alterações.

// → Seu código aqui:

let listaFuncionarios = [
    {
    nome: "Alice",
    cargo: "Desenvolvedora",
    salario: 6000,
    ativo: true,
    },
    {
    nome: "Paulo",
    cargo: "Headlider",
    salario: 9000,
    ativo: true,
    },
    {
    nome: "Laura",
    cargo: "Estagiaria",
    salario: 1000,
    ativo: false,
    }
];

console.log(listaFuncionarios[1].nome);
console.log(listaFuncionarios[2].cargo);
console.log(listaFuncionarios[1].salario);

listaFuncionarios[0].cargo = "Compradora";

let funcionario4 = {
    nome: "Heitor",
    cargo: "Contador",
    salario: 7000,
    ativo: true,
};

listaFuncionarios.push(funcionario4);

console.log(listaFuncionarios);

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 10 (peso: 1.5) – Objetos com arrays e objetos aninhados
// ------------------------------------------------------------
// a) Crie um objeto "loja" com as propriedades:
// • nomeLoja (string)
// • cnpj (string)
// • endereco → objeto contendo: rua, numero, cidade, estado
// • categoriasProdutos → array com pelo menos 3 categorias
// • aberta (boolean)
// b) Exiba o nome da loja.
// c) Exiba a cidade onde a loja está localizada.
// d) Exiba a primeira categoria de produto.
// e) Exiba, usando template literal, a frase:
// "A loja '<nomeLoja>' fica em <cidade> - <estado> e está aberta: <aberta>."
// f) Adicione uma nova categoria ao final do array "categoriasProdutos".
// g) Exiba, usando template literal, a frase:
// "Algumas categorias da loja '<nomeLoja>' são: <primeira categoria> e <última categoria> ."
// h) Exiba o objeto "loja" completo.

// → Seu código aqui:

let loja = {
    nomeLoja: "Kame",
    cnpj: 12253897/0001-96,
    endereco: {
        rua: "Avenida São José",
        numero: 1369,
        cidade: "Araraquara",
        estado: "SP",
    },
    categoriasProdutos: ["Comida", "Bebida", "Artigos de Festa"],
    aberta: true,
};

console.log(loja.nomeLoja);
console.log(loja.categoriasProdutos[0]);


console.log(`A loja ${loja.nomeLoja} fica em ${loja.endereco.cidade} - ${loja.endereco.estado} e está aberta: ${loja.aberta}.`);

loja.categoriasProdutos.push("Utensilios");

console.log(`Algumas categorias da loja ${loja.nomeLoja} são: ${loja.categoriasProdutos[0]} e ${loja.categoriasProdutos[3]}.`);

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 11 (peso: 1.5) – Objetos complexos com array de objetos aninhado
// ------------------------------------------------------------
// a) Crie um objeto "escola" com as seguintes propriedades:
// • nomeEscola (string)
// • cidade (string)
// • diretor → objeto com: nome (string), tempoDeServico (number)
// • turmas → array contendo 2 objetos, cada um com:
// - período (string) - ex: "Manhã", "Tarde"
// - alunos → array de strings com pelo menos 3 nomes
// b) Exiba o nome da escola.
// c) Exiba o nome do diretor.
// d) Exiba o período da segunda turma.
// e) Exiba o terceiro aluno da primeira turma.
// f) Adicione um novo aluno à segunda turma usando push().
// g) Altere o período da primeira turma para "Noite".
// h) Exiba o objeto "escola" completo no final.

// → Seu código aqui:

let escola = {
    nomeEscola: "Duque de Hastings",
    cidade: "Cascais",
    diretor: {
        nome: "Ronaldo",
        tempoDeServico: 15,
    },
    turmas: [{
        periodo: "Manhã",
        alunos: ["Jose", "Paulo", "Ricardo"],
    },
    {
            periodo: "Tarde",
            alunos: ["Gabi", "Marcia", "Julia"],
    }]
};

console.log(escola.nomeEscola);
console.log(escola.diretor.nome);
console.log(escola.turmas[1].periodo);
console.log(escola.turmas[0].alunos[2]);

escola.turmas[1].alunos.push("Isis");

escola.turmas[0].periodo = "Noite";

console.log(escola);


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 12 (peso: 2) – Sistema de Biblioteca
// ------------------------------------------------------------
//
// Você vai criar a estrutura de dados de uma biblioteca simples.
// Todos os dados dos passos A e B devem ser coletados via terminal (usando a lib readline-sync).
//
// PASSO A: Variáveis da biblioteca
// • Colete os dados para as seguintes variáveis/constantes:
// - "nomeBiblioteca" (string) → nome da biblioteca
// - "anoDeFundacao" (number) → ano de fundação
// - "capacidadeLivros" (number) → quantidade máxima de livros
// - "bibliotecaAberta" (boolean)→ true ou false
// • Exiba todas usando template literal em uma única frase descritiva.
//
// PASSO B: Acervo de livros (array de objetos)
// • Crie um array chamado "acervo" com 3 objetos de livros.
// Cada livro deve ter:
// - titulo (string)
// - autor (string)
// - ano (number)
// - paginas (number)
// - disponivel (boolean)
//
// PASSO C: Acessando o acervo
// • Exiba o título do 1º livro.
// • Exiba o autor do 2º livro.
// • Exiba o número de páginas do 3º livro.
// • Exiba a quantidade total de livros no acervo (.length).
//
// PASSO D: Alterando o acervo
// • Marque o 1º livro como indisponível (disponivel = false).
// • Altere o título do 3º livro para um título diferente.
// • Adicione um 4º livro ao array "acervo" usando push(),
// criando o objeto diretamente dentro do push (sem necessidade de coletar esse dado via terminal).
//
// PASSO E: Seções da biblioteca (array de strings)
// • Crie um array "secoes" com: "Ficção", "Ciências", "História", "Infantil".
// • Exiba a primeira e a última seção.
// • Adicione "Tecnologia" ao final de "secoes".
// • Remova a primeira seção de "secoes".
// • Exiba o array "secoes".
//
// PASSO F: Relatório final
// • Usando template literals, exiba um relatório/frase com:
// - Nome e ano de fundação da biblioteca
// - Quantidade de livros no acervo
// - Quantidade de seções disponíveis
// - Título e autor de CADA livro do acervo (um livro por linha)
//
// → Seu código aqui:

// Passo A: Variáveis da biblioteca
let dados = {
    nomeBiblioteca: lerTeclado.question("Nome da biblioteca? \n"),
    anoDeFundacao: lerTeclado.questionInt("Qual o ano de fundacao: \n"),
    capacidadeLivros: lerTeclado.questionInt("Quantidade maxima de livros: \n"),
    bibliotecaAberta: lerTeclado.keyInYN("Biblioteca esta aberta? \n"),
};

console.log(`A biblioteca ${dados.nomeBiblioteca}, foi fundada em ${dados.anoDeFundacao} e sua capacidade maxima de livros é de ${dados.capacidadeLivros},
e atualmente está aberta/${dados.bibliotecaAberta}`);

console.log("_______________________________");

// Passo B: Acervo de livros (array de objetos)
let acervo = [{
    titulo: lerTeclado.question("Qual o nome do livro? \n"),
    autor: lerTeclado.question("Nome do autor: \n"),
    ano: lerTeclado.questionInt("Qual o ano que foi publicado? \n"),
    paginas: lerTeclado.questionInt("Quantas paginas tem o livro? \n"),
    disponivel: lerTeclado.keyInYN("Livro esta disponivel? \n"),
},
{
    titulo: lerTeclado.question("Qual o nome do livro? \n"),
    autor: lerTeclado.question("Nome do autor: \n"),
    ano: lerTeclado.questionInt("Qual o ano que foi publicado? \n"),
    paginas: lerTeclado.questionInt("Quantas paginas tem o livro? \n"),
    disponivel: lerTeclado.keyInYN("Livro esta disponivel? \n"),
},
{
    titulo: lerTeclado.question("Qual o nome do livro? \n"),
    autor: lerTeclado.question("Nome do autor: \n"),
    ano: lerTeclado.questionInt("Qual o ano que foi publicado? \n"),
    paginas: lerTeclado.questionInt("Quantas paginas tem o livro? \n"),
    disponivel: lerTeclado.keyInYN("Livro esta disponivel? \n"),
}];

console.log("_______________________________");

// PASSO C: Acessando o acervo
console.log(acervo[0].titulo);
console.log(acervo[1].autor);
console.log(acervo[2].paginas);
console.log(acervo.length);

console.log("_______________________________");

// PASSO D: Alterando o acervo
acervo[0].disponivel = false;

acervo[2].titulo = "Eu sou numero 4";

let livro4 = {
    titulo: "Maldicao do Tigre",
    autor: "Collen Hoover",
    ano: 2010,
    paginas: 300,
    disponivel: true,
}

acervo.push(livro4);

console.log("_______________________________");

// PASSO E: Seções da biblioteca (array de strings)

let secoes = ["Ficção", "Ciências", "História", "Infantil"];

console.log(secoes[0], secoes[3]);

secoes.push("Tecnologia");

secoes.pop();

console.log(secoes);

console.log("_______________________________");

// PASSO F: Relatório final

console.log(`Nome da biblioteca é ${dados.nomeBiblioteca}, foi fundada em ${dados.anoDeFundacao},
tem um acervo de${acervo.length}, dividida em ${secoes.length} secoes,
e alguns dos seus livros são:
${acervo[0].titulo} do autor ${acervo[0].autor}
${acervo[1].titulo} do autor ${acervo[1].autor}
${acervo[2].titulo} do autor ${acervo[2].autor}
${acervo[3].titulo} do autor ${acervo[3].autor}`);


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 13 (questão bonus - peso: 1) – Cardápio de Restaurante
// ------------------------------------------------------------
//
// Monte a estrutura de dados de um restaurante.
// Todos os dados do passo A devem ser coletados via terminal (usando a lib readline-sync).
//
// PASSO A:
// • Crie um objeto "restaurante" com:
// - nome (string)
// - tipoCozinha (string) ex: "Italiana", "Japonesa"
// - nota (number) ex: 8.7
// - aberto (boolean)
// - endereco → objeto com: rua, numero, bairro, cidade
// - cardapio → array com pelo menos 4 objetos de pratos, cada um com:
// • nomePrato (string)
// • preco (number)
// • vegano (boolean)
//
// PASSO B: Acessos e exibições
// • Exiba o nome do restaurante e sua nota.
// • Exiba o endereço completo em uma única frase (rua, numero, bairro, cidade). ex. "O restaurante <nome> está localizado na <rua>, <numero>, <bairro>, <cidade>".
// • Exiba o nome e o preço do 1º prato do cardápio.
// • Exiba se o 3º prato é vegano ou não, usando template literal. ex. "O prato <nomePrato> é vegano: <vegano>".
//
// PASSO C: Alterações
// • Altere o preço do 2º prato para um valor diferente.
// • Adicione um novo prato ao cardápio usando push().
// • Altere "aberto" para false.
//
// PASSO D: Relatório do cardápio
// • Usando console.log() e template literals, exiba:
// - Nome do restaurante, tipo de cozinha e nota
// - Status: aberto ou fechado
// - Quantos pratos há no cardápio (.length)
// - Nome, preço e se é vegano de CADA prato (um prato por linha)
//
// → Seu código aqui:

// PASSO A:
let restaurante = {
    nome: lerTeclado.question("Qual o nome do restaurante? \n"),
    tipoCozinha: lerTeclado.question("Qual é o tipo do restaurante? \n"),
    nota: lerTeclado.questionInt("Qual a sua nota? \n"),
    aberto: lerTeclado.keyInYN("Esta aberto? \n"),
    endereco: {
        rua: lerTeclado.question("Rua: \n"),
        numero: lerTeclado.questionInt("Numero: \n"),
        bairro: lerTeclado.question("Bairro: \n"),
        cidade: lerTeclado.question("Cidade: \n"),
    },
    cardapio: [{
        nomePrato: lerTeclado.question("Qual o nome do prato? \n"),
        preco: lerTeclado.questionInt("Qual o seu preco? \n"),
        vegano: lerTeclado.keyInYN("Vegano? \n"),
},
{
    nomePrato: lerTeclado.question("Qual o nome do prato? \n"),
        preco: lerTeclado.questionInt("Qual o seu preco? \n"),
        vegano: lerTeclado.keyInYN("Vegano? \n"),
},
{
    nomePrato: lerTeclado.question("Qual o nome do prato? \n"),
        preco: lerTeclado.questionInt("Qual o seu preco? \n"),
        vegano: lerTeclado.keyInYN("Vegano? \n"),
},
{
    nomePrato: lerTeclado.question("Qual o nome do prato? \n"),
        preco: lerTeclado.questionInt("Qual o seu preco? \n"),
        vegano: lerTeclado.keyInYN("Vegano? \n"),
}]};

console.log("_______________________________");
// PASSO B: Acessos e exibições

console.log(restaurante.nome, restaurante.nota);

console.log(`O restaurante ${restaurante.nome} está localizado na ${restaurante.endereco.rua}, ${restaurante.endereco.numero},${restaurante.endereco.bairro}, ${restaurante.endereco.cidade}`);

console.log(restaurante.cardapio[0].nomePrato, restaurante.cardapio[0].preco);

console.log(`O prato ${restaurante.cardapio[2].nomePrato} é vegano: ${restaurante.cardapio[2].vegano}`);

console.log("_______________________________");

// PASSO C: Alterações
// • Altere o preço do 2º prato para um valor diferente.
// • Adicione um novo prato ao cardápio usando push().
// • Altere "aberto" para false.

restaurante.cardapio[1].preco = 200;

let prato4 = {
    nomePrato: lerTeclado.question("Qual o nome do prato? \n"),
        preco: lerTeclado.questionInt("Qual o seu preco? \n"),
        vegano: lerTeclado.keyInYN("Vegano? \n")
};

restaurante.cardapio.push(prato4);

restaurante.aberto = false;

// PASSO D: Relatório do cardápio

console.log(`
    ${restaurante.nome}, o seu segmento ${restaurante.tipoCozinha} e sua nota é ${restaurante.nota}
    está fechado ${restaurante.aberto} e tem ${restaurante.cardapio.length} pratos e são eles:
    ${restaurante.cardapio[0].nomePrato} custa ${restaurante.cardapio[0].preco} e é vegano: ${restaurante.cardapio[0].vegano}
    ${restaurante.cardapio[1].nomePrato} custa ${restaurante.cardapio[1].preco} e é vegano: ${restaurante.cardapio[1].vegano}
    ${restaurante.cardapio[2].nomePrato} custa ${restaurante.cardapio[2].preco} e é vegano: ${restaurante.cardapio[2].vegano}
    ${restaurante.cardapio[3].nomePrato} custa ${restaurante.cardapio[3].preco} e é vegano: ${restaurante.cardapio[3].vegano}
`);

// FIM



