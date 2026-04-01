// ============================================================
//   DESAFIOS (para quem já terminou a atividade 08) – Switch / Case
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================
let lerTeclado = require('readline-sync');

// ------------------------------------------------------------
// DESAFIO 1 – Simulador de caixa de restaurante
// ------------------------------------------------------------
// Crie uma lista de objetos para o Cardápio:
//   1 – Frango Grelhado  R$ 32,00
//   2 – Filé ao Molho    R$ 45,00
//   3 – Massa Italiana   R$ 28,00
//   4 – Salada Caesar    R$ 22,00
//   5 – Sopa do Dia      R$ 18,00
//
// Crie uma lista de objetos para as Bebidas:
//   1 – Suco Natural     R$ 9,00
//   2 – Refrigerante     R$ 7,00
//   3 – Água             R$ 4,00
//   4 – Sem bebida       R$ 0,00
//
// a) Pergunte ao usuário:
//    - Nome pessoal.
//    - Número do prato desejado.
//    - Número da bebida desejada.
// b) Com switch/case, determine o prato e o preço do prato,
//    e outro switch para a bebida e seu preço.
//    Para opções inválidas, exiba "Item inválido." e use preço 0.
// c) Armazene os dados em um objeto "pedido":
//    nomeCliente, nomePrato, precoPrato, nomeBebida, precoBebida, total.
// d) Pergunte se vai pagar no pix (keyInYN()).
//    Se sim, aplique 10% de desconto no total.
//    Atualize o total no objeto.
// e) Exiba o objeto com console.table().
// f) Exiba o recibo final com template literal.

// → Seu código aqui:

// const listaCardapio = [
//     { id: 1, nome: "Frango Grelhado", preco: 32.00 },
//     { id: 2, nome: "Filé ao Molho", preco: 45.00 },
//     { id: 3, nome: "Massa Italiana", preco: 28.00 },
//     { id: 4, nome: "Salada Caesar", preco: 22.00 },
//     { id: 5, nome: "Sopa do Dia", preco: 18.00 }
//   ];

//   const listaBebida = [
//     { id: 1, nome: "Suco Natural", preco: 9.00 },
//     { id: 2, nome: "Refrigerante", preco: 7.00 },
//     { id: 3, nome: "Água", preco: 4.00 },
//     { id: 4, nome: "Sem bebida", preco: 0.00 }
//   ];

// console.table(listaCardapio);
// console.table(listaBebida);

// let perguntas = {
//     nome: lerTeclado.question("Qual o seu nome? \n"),
//     pratoDesejado: lerTeclado.questionInt("Digite o numero do prato escolhido? \n"),
//     bebidaDesejada: lerTeclado.questionInt("Digite o numero da bebida escolhida? \n"),
// };

// let precoPrato ;
// let prato ;
// let bebida ;
// let precoBebida ;

// switch (perguntas.pratoDesejado){
//     case 1:
//         prato = "Frango Grelhado";
//         precoPrato = 32.00;
//         break;
//     case 2:
//         prato ="Filé ao Molho";
//         precoPrato = 45.00;
//         break;
//     case 3:
//         prato = "Massa Italiana";
//         precoPrato = 28.00;
//         break;
//     case 4:
//         prato = "Salada Caesar";
//         precoPrato = 22.00;
//         break;
//     case 5:
//         prato = "Sopa do Dia";
//         precoPrato = 18.00;
//         break;
//     default:
//         console.log("Item invalido");
//         prato = "Item invalido";
//         precoPrato = 0.00;    
// };

// switch (perguntas.bebidaDesejada){
//     case 1:
//         bebida = "Suco Natural";
//         precoBebida = 9.00;
//         break;
//     case 2:
//         bebida = "Refrigerante";
//         precoBebida = 7.00;
//         break;
//     case 3:
//         bebida = "Água";
//         precoBebida = 4.00;
//         break;
//     case 4:
//         bebida = "Sem bebida";
//         precoBebida = 0.00;
//         break;
//     default:
//         console.log("Item invalido");
//         bebida = "Item invalido";
//         precoBebida = 0.00;
// };

// let pedido = {
//     nomeCliente: perguntas.nome,
//     nomePrato: prato,
//     precoPrato: precoPrato,
//     nomeBebida: bebida,
//     precoBebida: precoBebida,
//     total: precoPrato + precoBebida,
// };

// console.log(pedido);

// let pix = lerTeclado.keyInYN("Vai pagar no pix?");

// if (pix) {
//     let desconto = pedido.total * 0.10;
//     pedido.total = pedido.total - desconto;
// };

// console.table(pedido);

// console.log(`
// ----------- RECIBO -----------
// Cliente: ${pedido.nomeCliente}
// Prato: ${pedido.nomePrato} - R$ ${pedido.precoPrato.toFixed(2)}
// Bebida: ${pedido.nomeBebida} - R$ ${pedido.precoBebida.toFixed(2)}
// Total: ${pedido.total.toFixed(2)}
// -------------------------------`);

// console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 2 – Conversor de unidades
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - O valor a converter (questionFloat()).
//    - O tipo de conversão (questionInt()):
//      1 – Km para Milhas
//      2 – Milhas para Km
//      3 – Celsius para Fahrenheit
//      4 – Fahrenheit para Celsius
//      5 – Kg para Libras
//      6 – Libras para Kg
// b) Com switch/case, aplique a fórmula correta:
//    - Km → Milhas:         valor * 0.621371
//    - Milhas → Km:         valor * 1.60934
//    - Celsius → Fahrenheit: (valor * 9/5) + 32
//    - Fahrenheit → Celsius: (valor - 32) * 5/9
//    - Kg → Libras:         valor * 2.20462
//    - Libras → Kg:         valor / 2.20462
//    - default: "Tipo de conversão inválido."
// c) Armazene a conversão em um objeto:
//    tipo, valorOriginal, unidadeOriginal, resultado, unidadeResultado.
// d) Exiba o objeto com console.table().
// e) Exiba: "<valorOriginal> <unidadeOriginal> = <resultado> <unidadeResultado>"

// → Seu código aqui:

// let valorOriginal = lerTeclado.questionFloat("Qual o valor para converter?\n");
// let conversao = lerTeclado.questionInt(
//     `Quer converter o valor para? Digite o número da opção.
//         1 - Km para Milhas. 
//         2 - Milhas para Km. 
//         3 - Celsius para Fahrenheit. 
//         4 - Fahrenheit para Celsius. 
//         5 - Kg para Libras. 
//         6 - Libras para Kg.\n`
// );

// let unidadeOriginal ;
// let resultado ;
// let unidadeResultado ;
// let tipo ;

// switch (conversao){
//     case 1:
//         tipo = "Km para Milhas.";
//         unidadeOriginal = "Km";
//         resultado = valorOriginal * 0.621371;
//         unidadeResultado = "Milhas"
//         break;
//     case 2:
//         tipo = "Milhas para Km.";
//         unidadeOriginal = "Milhas";
//         resultado = valorOriginal * 1.60934;
//         unidadeResultado = "Km"
//         break;
//     case 3:
//         tipo = "Celsius para Fahrenheit.";
//         unidadeOriginal = "Celsius";
//         resultado = (valorOriginal * 9/5) + 32;
//         unidadeResultado = "Fahrenheit"
//         break;
//     case 4:
//         tipo = "Fahrenheit para Celsius."
//         unidadeOriginal = "Fahrenheit";
//         resultado = (valorOriginal - 32) * 5/9;
//         unidadeResultado = "Celsius"
//         break;
//     case 5:
//         tipo = "Kg para Libras."
//         unidadeOriginal = "Kg";
//         resultado = valorOriginal * 2.20462;
//         unidadeResultado = "Libras"
//         break;  
//     case 6:
//         tipo = "Libras para Kg."
//         unidadeOriginal = "Libras";
//         resultado = valorOriginal / 2.20462;
//         unidadeResultado = "Kg"
//         break;
//     default:
//         console.log("Tipo de conversão inválido.");    
// };

// let objetoConversao = {tipo, valorOriginal, unidadeOriginal, resultado, unidadeResultado};

// console.table(objetoConversao);

// console.log(`
// Conversão: ${tipo}
// Então ${valorOriginal} ${unidadeOriginal} = ${resultado} ${unidadeResultado}`);

// console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Jogo de pedra, papel e tesoura
// ------------------------------------------------------------
// a) Gere a jogada do computador aleatoriamente:
//    const jogada = ["pedra", "papel", "tesoura"];
//    const computador = jogada[Math.floor(Math.random() * 3)];
// b) Pergunte ao usuário sua jogada - questionInt():
//    1 – Pedra | 2 – Papel | 3 – Tesoura
//    Para opções inválidas, exiba "Jogada inválida." e encerre.
// c) Exiba as jogadas: "Você: <jogada> | Computador: <computador>"
// d) Determine o vencedor ou empate com switch/case aninhado ou combinando
//    switch com if/else
// e) Exiba o resultado final.

// → Seu código aqui:

// const jogada = ["pedra", "papel", "tesoura"];
// const computador = jogada[Math.floor(Math.random() * 3)];

// console.log(`1 – Pedra | 2 – Papel | 3 – Tesoura`);

// let suaVez = lerTeclado.questionInt("Digite qual sua jogada:\n");
// let opcaoEscolhida;



// switch (suaVez) {
//     case 1:
//         opcaoEscolhida = "pedra";
//         console.log(`Voce: ${opcaoEscolhida} | Computador: ${computador}`);
//         if (opcaoEscolhida === computador) {
//             console.log("Empate");
//         } else if (computador === "tesoura") {
//             console.log("Ganhou")
//         } else {
//             console.log("Perdeu")
//         };
//         break;
//     case 2:
//         opcaoEscolhida = "papel";
//         console.log(`Voce: ${opcaoEscolhida} | Computador: ${computador}`);
//         if (opcaoEscolhida === computador) {
//             console.log("Empate");
//         } else if (computador === "pedra") {
//             console.log("Ganhou")
//         } else {
//             console.log("Perdeu")
//         };
//         break;
//     case 3:
//         opcaoEscolhida = "tesoura";
//         console.log(`Voce: ${opcaoEscolhida} | Computador: ${computador}`);
//         if (opcaoEscolhida === computador) {
//             console.log("Empate");
//         } else if (computador === "papel") {
//             console.log("Ganhou")
//         } else {
//             console.log("Perdeu")
//         };
//         break;
//     default:
//         console.log("Jogada inválida.");
// };

// console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Sistema de suporte técnico
// ------------------------------------------------------------
// Um sistema de atendimento automatizado funciona por menus.
//
// Menu principal (questionInt()):
//   1 – Internet | 2 – TV | 3 – Telefone | 4 – Falar com atendente | 0 – Encerrar
//
// Se o usuário escolher 1 (Internet), exiba um sub-menu (questionInt()):
//   1 – Sem conexão
//   2 – Conexão lenta
//   3 – Wi-Fi não aparece
//
// Se o usuário escolher 2 (TV), exiba um sub-menu (questionInt()):
//   1 – Sem sinal
//   2 – Imagem ruim
//   3 – Canais sumidos
//
// Para cada sub-opção, exiba uma mensagem de orientação específica.
// Para as opções 3 (Telefone) e 4 (Falar com atendente), exiba "Por favor, aguarde na linha.".
// Para a opção 0, exiba "Atendimento encerrado."
// No default, exiba "Opção inválida."
//
// a) Implemente o fluxo acima usando switch/case no menu principal
//    e switch/case nos sub-menus, com if/else se necessário.
// b) Exiba todas as mensagens com template literal.

// → Seu código aqui:

// console.log(`
// ------------------------------ Menu Principal -------------------------------
// 1 – Internet | 2 – TV | 3 – Telefone | 4 – Falar com atendente | 0 – Encerrar`);
// let opcao = lerTeclado.questionInt("Digite qual opcao deseja:\n");

// switch (opcao){
//     case 1:
//         console.log(`
//         ----- ASSUNTO ------
//         1 – Sem conexão
//         2 – Conexão lenta
//         3 – Wi-Fi não aparece
//         ---------------------`);
//         let subOpcao1 = lerTeclado.questionInt("Digite qual seria o assunto:\n");
//         if (subOpcao1 === 1){
//             console.log("Reinicie o aparelho.");           
//         } else if (subOpcao1 === 2){
//             console.log("Aproxime-se do roteador."); 
//         } else if (subOpcao1 === 3) {
//             console.log("Verifique se o Wi-fi está ligado."); 
//         } else {
//             console.log("Opção inválida.");
//         }
//         break;
//     case 2:
//         console.log(`
//         ----- ASSUNTO -----
//         1 – Sem sinal
//         2 – Imagem ruim
//         3 – Canais sumidos
//         -------------------`);
//         let subOpcao2 = lerTeclado.questionInt("Digite qual seria o assunto:\n");
//         if (subOpcao2 === 1){
//             console.log("Verifique os cabos.");           
//         } else if (subOpcao2 === 2){
//             console.log("Ajuste a antena."); 
//         } else if (subOpcao2 === 3){
//             console.log("Atualize os canais."); 
//         } else {
//             console.log("Opção inválida.");
//         }
//         break;
//     case 3:
//     case 4:
//         console.log("Por favor, aguarde na linha.");
//         break;
//     case 0:
//         console.log("Atendimento encerrado.");
//         break;
//     default:
//         console.log("Opção inválida.");       
// };

// console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 5 – TÁXI OU APP?
// ------------------------------------------------------------
// O usuário informa a distância em km e o horário (dia ou noite).
// O programa calcula o preço estimado no táxi e em um app de corridas
// e recomenda a opção mais barata.
//
// Tabela:
//   Táxi: R$5 bandeirada + R$3/km (noite: R$4/km)
//   App:  R$2 taxa fixa  + R$2/km (noite: R$2.50/km)

// → Seu código aqui:

let distancia = lerTeclado.questionFloat("Qual a distancia em km?\n");
let horario = lerTeclado.question("Qual o periodo dia ou noite?")




console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 6 – CRIE SEU PERSONAGEM DE RPG
// ------------------------------------------------------------
// O usuário responde 3 ou mais perguntas de multipla escolha (crie outras se quiser)
//  ex: prefere magia ou força?
//      prefere ataque ou defesa?
//      prefere floresta ou cidade?
//      prefere dia ou noite?
//      prefere furtividade ou agressividade?
//      prefere ataque a distância ou corpo a corpo?
// Com base nas respostas, o programa revela uma classe de personagem
// (guerreiro, mago, arqueiro, ladino, etc).
//
// Você pode criar um sistema de atribuição de pontos para cada resposta
// e determinar a classe final com base na pontuação total,
// ou simplesmente fazer verificações diretas. Use a criatividade para resolver este desafio.