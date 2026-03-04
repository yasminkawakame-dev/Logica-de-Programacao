
// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui:
const nome = "Yasmin";
let idade = 24;
let hobbyFavorito = "ler";

const apresentacao = `Eu sou a ${nome}, tenho ${idade} anos e gosto de ${hobbyFavorito}.`;

console.log(apresentacao);
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:
let cidade = "Jaraguá do Sul";
let temperaturaAtual = 24;

let temperatura = `Hoje em ${cidade} está fazendo ${temperaturaAtual}°C, perfeito para estudar programação.`;

console.log(temperatura);
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.

// → Seu código aqui:
let saudacao = "Olá, prazer em conhece-lo";
let minhaAltura = 1.57;
let estaChovendo = false;
let nenhumValor;
let algumValor = null;

let frase1 = `valor: ${saudacao}, tipo: ${typeof saudacao}`;
let frase2 = `valor: ${minhaAltura}, tipo ${typeof minhaAltura}`;
let frase3 = `valor: ${estaChovendo}, tipo ${typeof estaChovendo}`;
let frase4 = `valor: ${nenhumValor}, tipo ${typeof nenhumValor}`;
let frase5 = `valor: ${algumValor}, tipo ${typeof algumValor}`;

console.log(frase1);
console.log(frase2);
console.log(frase3);
console.log(frase4);
console.log(frase5);

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:
const personagem = "Julia";
let idade1 = 10;
let cidade1 = "Vila Aurora";
let missão = 'encontrar novos amigos';

let fraseHistoria = `A pequena ${personagem} de apenas ${idade1} anos de idade, se mudou com sua família para a ${cidade1} e a sua missão é ${missão}.`
console.log(fraseHistoria);
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Desafio: Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:
let meuNome = "Yasmin";
let objetivo = "comprar um carro";

let motivacional = `${meuNome}, se esse ano você economizar poderá ${objetivo}.`;

console.log(motivacional);
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade
// → Seu código aqui:

console.log(`
==================================
         SISTEMA DO USUÁRIO
==================================
1 - Ver perfil
2 - Editar Perfil
3 - Configuração
4 - Notificação
5 - Relatórios
6 - Ajuda
7 - Sobre o Sistema
0 - Sair
==================================
Digite o número da opção desejada
==================================`);