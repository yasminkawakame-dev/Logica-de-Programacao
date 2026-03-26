// ============================================================
//   DESAFIOS (para quem já terminou a atividade 04) – Operadores Aritméticos
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
// DESAFIO 1 – Carrinho de compras
// ------------------------------------------------------------
// a) Peça ao usuário o nome e preço de 3 produtos.
// b) Crie um objeto "carrinho" contendo:
//    - produtos (array com os 3 produtos)
// c) Cada produto deve ser um objeto com:
//    nome
//    preco
//
// d) Calcule:
//    - valorTotal
//    - valorMedio dos produtos
//
// e) Exiba o carrinho com console.table().
// f) Exiba também:
//
// "O carrinho possui < X > produtos.
// Valor total: X
// Valor médio dos produtos: X"

let lerTeclado = require('readline-sync');
/*
// → Seu código aqui:
let produto1 = {
        nome: lerTeclado.question("Nome do produto 1: \n"),
        preco: lerTeclado.questionFloat("Preco do produto 1: \n"),
    };

let produto2 = {
        nome: lerTeclado.question("Nome do produto 2: \n"),
        preco: lerTeclado.questionFloat("Preco do produto 2: \n"),
    };

let produto3 = {
        nome: lerTeclado.question("Nome do produto 3: \n"),
        preco: lerTeclado.questionFloat("Preco do produto 3: \n"),
    };


let carrinho = [produto1, produto2, produto3];

let valorTotal = produto1.preco + produto2.preco + produto3.preco;

let valorMedio = (produto1.preco + produto2.preco + produto3.preco) / carrinho.length;

console.table(carrinho);

console.log(`
______________________________________________________
    O Carrinho possui ${carrinho.length} produtos
    Valor total: R$ ${valorTotal.toFixed(2)}
    Valor medio dos produtos: R$ ${valorMedio.toFixed(2)}
_______________________________________________________`);

*/
// ------------------------------------------------------------
// DESAFIO 2 – Controle de despesas
// ------------------------------------------------------------
// a) Peça ao usuário os valores de 4 despesas:
//    aluguel
//    internet
//    energia
//    alimentação
//
// b) Crie um objeto "despesas" com essas propriedades.
//
// c) Crie um array chamado "listaDespesas" contendo
//    todos os valores.
//
// d) Calcule:
//    - total de despesas
//    - média das despesas
//    - quanto sobra se o salário for 5000.
//
// e) Exiba:
//
// "Total de despesas: X"
// "Média de despesas: X"
// "Dinheiro restante: X"

// → Seu código aqui:

// let despesas = {
//     aluguel:  lerTeclado.questionFloat("Qual o valor da despesa de aluguel? \n"),
//     internet:  lerTeclado.questionFloat("Qual o valor da despesa de internet? \n"),
//     energia:  lerTeclado.questionFloat("Qual o valor da despesa de energia? \n"),
//     alimentacao:  lerTeclado.questionFloat("Qual o valor da despesa de alimentacao? \n"),
// }

// let listaDespesas = [despesas.aluguel, despesas.internet,  despesas.energia, despesas.alimentacao];
// let totalDespesas = despesas.aluguel + despesas.internet + despesas.energia + despesas.alimentacao;
// let mediaDespesas = totalDespesas / listaDespesas.length;

// let sobra = 5000 - totalDespesas;

// console.log(`
// Total de despesas: ${totalDespesas}
// Média de despesas: ${mediaDespesas}
// Dinheiro restante: ${sobra}`);


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Estatísticas de jogador
// ------------------------------------------------------------
// a) Peça ao usuário:
//    nome do jogador
//    partidas jogadas
//    gols
//    assistências
//
// b) Crie um objeto "jogador".
//
// c) Crie um array "estatisticas" contendo:
//    [gols, assistencias]
//
// d) Calcule:
//    - participacoesEmGol = gols + assistencias
//    - mediaPorPartida = participacoesEmGol / partidas
//
// e) Exiba:
//
// "Jogador: X"
// "Participações em gol: X"
// "Média por partida: X"

// → Seu código aqui:

// let jogador = {
//     nomeJogador: lerTeclado.question("Qual o nome do jogador? \n"),
//     partidasJogadas: lerTeclado.questionInt("Quantas partidas jogadas? \n"),
//     gols: lerTeclado.questionInt("Quantos gols? \n"),
//     assistencias: lerTeclado.questionInt("Quantas assistencias? \n"),
// };

// let estatisticas = [jogador.gols, jogador.assistencias]

// let participacoesEmGol = estatisticas[0] + estatisticas[1];

// let mediaPorPartida = participacoesEmGol / jogador.partidasJogadas;

// console.log(
// `Jogador: ${jogador.nomeJogador}
// Participações em gol: ${participacoesEmGol}
// Média por partida: ${mediaPorPartida}`
// );

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Pedido de mercado
// ------------------------------------------------------------
// a) Peça ao usuário os dados de 4 produtos:
//    nome e preço.
//
// b) Crie um objeto "mercado" contendo:
//    - produtos (array)
//
// c) Calcule:
//    - valor total da compra
//    - valor com desconto de 10%
//
// Fórmula:
// desconto = total * 0.10
// valorFinal = total - desconto
//
// d) Exiba:
//
// "Total da compra: X"
// "Desconto: X"
// "Valor final: X"

// // → Seu código aqui:

// let produto1 = {
//     nome: lerTeclado.question("Nome produto? \n"),
//     preco: lerTeclado.questionFloat("Qual o preço? \n")
// };
// let produto2 = {
//     nome: lerTeclado.question("Nome produto? \n"),
//     preco: lerTeclado.questionFloat("Qual o preço? \n")
// }; 
// let produto3 = {
//     nome: lerTeclado.question("Nome produto? \n"),
//     preco: lerTeclado.questionFloat("Qual o preço? \n")
// };
// let produto4 = {
//     nome: lerTeclado.question("Nome produto? \n"),
//     preco: lerTeclado.questionFloat("Qual o preço? \n")
// };

// let mercado = {produto1, produto2, produto3, produto4};

// let valorTotalCompra = produto1.preco + produto2.preco + produto3.preco + produto4.preco;

// let desconto = valorTotalCompra * 0.10;

// let valorFinal = valorTotalCompra - desconto;

// console.log(
// `Total da compra: ${valorTotalCompra}
// Desconto: ${desconto}
// Valor final: ${valorFinal}`);

// console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Boletim escolar
// ------------------------------------------------------------
// a) Peça ao usuário 4 notas.
//
// b) Crie um objeto "boletim" contendo:
//    notas (array com as 4 notas)
//
// c) Calcule:
//    média das notas
//
// d) Calcule também:
//    pontosFaltantesPara10
//
// Fórmula:
// pontosFaltantes = 10 - media
//
// e) Exiba:
//
// "Notas: X"
// "Média: X"
// "Faltam X pontos para média 10."

// → Seu código aqui:

// let boletim = [
//     nota1 = lerTeclado.questionFloat("Primeira nota: \n"),
//     nota2 = lerTeclado.questionFloat("Segunda nota: \n"),
//     nota3 = lerTeclado.questionFloat("Terceira nota: \n"),
//     nota4 = lerTeclado.questionFloat("Quarta nota: \n"),
// ];

// let mediaNotas = ((boletim[0] + boletim[1] + boletim[2] + boletim[3]) / boletim.length);

// let pontosFaltantes = 10 - mediaNotas;

// console.log(`
// Notas: ${boletim}
// Media: ${mediaNotas}
// Faltam quantos pontos para media 10: ${pontosFaltantes}`);

// console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 6 – Restaurante (cálculo de conta)
// ------------------------------------------------------------
// a) Peça ao usuário o preço de:
//    entrada
//    prato principal
//    sobremesa
//    bebida
//
// b) Crie um objeto "pedido".
//
// c) Crie um array "itens".
//
// d) Calcule:
//    subtotal
//
// e) Calcule taxa de serviço de 10%
//
// f) Calcule valor total.
//
// g) Exiba:
//
// "Subtotal: X"
// "Taxa de serviço: X"
// "Total a pagar: X"

// → Seu código aqui:

// let entrada = lerTeclado.questionFloat("Valor Entrada: R$");
// let pratoPrincipal = lerTeclado.questionFloat("Valor Prato Principal: R$");
// let sobremesa = lerTeclado.questionFloat("Valor Sobremesa: R$");
// let bebida = lerTeclado.questionFloat("Valor Bebida: R$");

// let pedido = {entrada, pratoPrincipal, sobremesa, bebida};
// let itens = [entrada, pratoPrincipal, sobremesa, bebida];

// let subtotal = entrada + pratoPrincipal + sobremesa + bebida;

// let taxaServico = subtotal * 0.10;

// let valorTotalPedido = subtotal + taxaServico;

// console.log(`
// Subtotal: ${subtotal}
// Taxa de serviço: ${taxaServico}
// Total a pagar: ${valorTotalPedido}`);

// console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 7 – Análise de números
// ------------------------------------------------------------
// a) Peça 5 números ao usuário.
//
// b) Crie um objeto "analise".
//
// c) Crie um array "numeros".
//
// d) Calcule:
//    soma de todos
//    média
//    produto (multiplicação de todos)
//
// e) Exiba:
//
// "Soma: X"
// "Média: X"
// "Produto: X"

// → Seu código aqui:

// let analise = {
//     numero1: lerTeclado.questionInt("Digite o primeiro numero:"),
//     numero2: lerTeclado.questionInt("Digite o segundo numero:"),
//     numero3: lerTeclado.questionInt("Digite o terceiro numero:"),
//     numero4: lerTeclado.questionInt("Digite o quarto numero:"),
//     numero5: lerTeclado.questionInt("Digite o quinto numero:"),
// };

// let numeros = [analise.numero1, analise.numero2, analise.numero3, analise.numero4, analise.numero5];

// let somaTodos = (analise.numero1 + analise.numero2 + analise.numero3 + analise.numero4 + analise.numero5);
// let mediaTodos = somaTodos / numeros.length;
// let produtos = (analise.numero1 * analise.numero2 * analise.numero3 * analise.numero4 * analise.numero5);

// console.log(`
// Soma: ${somaTodos}
// Media: ${mediaTodos}
// Produto: ${produtos}`);

// console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 8 – Perfil financeiro
// ------------------------------------------------------------
// a) Peça ao usuário:
//    salário
//    renda extra
//    gastos fixos
//    gastos variáveis
//
// b) Crie um objeto "financeiro".
//
// c) Crie arrays:
//    receitas
//    despesas
//
// d) Calcule:
//    rendaTotal
//    gastoTotal
//    saldoFinal
//
// Fórmulas:
// rendaTotal = salario + rendaExtra
// gastoTotal = gastosFixos + gastosVariaveis
// saldoFinal = rendaTotal - gastoTotal
//
// e) Exiba:
//
// "Renda total: X"
// "Gastos totais: X"
// "Saldo final: X"

// // → Seu código aqui:

// let salario = lerTeclado.questionFloat("Valor salario: R$");
// let rendaExtra = lerTeclado.questionFloat("Valor renda extra: R$");
// let gastosFixos = lerTeclado.questionFloat("Valor gasto fixos: R$");
// let gastosVariaveis = lerTeclado.questionFloat("Valor gastos variaveis: R$");

// let financeiro = {salario, rendaExtra, gastosFixos, gastosVariaveis};

// let receitas = [salario, rendaExtra];
// let despesas = [gastosFixos, gastosVariaveis];

// let rendaTotal = salario + rendaExtra;
// let gastoTotal = gastosFixos + gastosVariaveis;
// let saldoFinal = rendaTotal - gastoTotal;

// console.log(`
// Renda total: ${rendaTotal}
// Gastos totais: ${gastoTotal}
// Saldo final: ${saldoFinal}`);

// console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 9 – Compra no mercado
// ------------------------------------------------------------
// a) Peça ao usuário o nome, preço e quantidade de 3 produtos, armazenando-os em três objetos (cada produto um objeto).
//    Use question() para o nome, questionInt() para a quantidade e questionFloat() para o preço.
// b) Crie um array "carrinho" com os 3 objetos.
// c) Calcule o total da compra.
// d) Peça ao usuário o percentual de desconto.
// e) Calcule o valor do desconto e o total com desconto.
// f) Exiba o carrinho com console.table().
// g) Exiba no console:
//    "Total sem desconto: R$ <total>"
//    "Desconto:  R$ <desconto>"
//    "Total com desconto: R$ <totalComDesconto>"
//    Use toFixed(2) em todos os valores.

// → Seu código aqui:

// let prod1 = {
//     nome: lerTeclado.question("Nome do produto:"),
//     quantidade: lerTeclado.questionInt("Quantidade:"),
//     preco: lerTeclado.questionFloat("Preco do produto: R$"),
// };
// let prod2 = {
//     nome: lerTeclado.question("Nome do produto:"),
//     quantidade: lerTeclado.questionInt("Quantidade:"),
//     preco: lerTeclado.questionFloat("Preco do produto: R$"),
// };
// let prod3 = {
//     nome: lerTeclado.question("Nome do produto:"),
//     quantidade: lerTeclado.questionInt("Quantidade:"),
//     preco: lerTeclado.questionFloat("Preco do produto: R$"),
// };

// let carrinho = [prod1, prod2, prod3];

// let totalCarrinho = prod1.preco + prod2.preco + prod3.preco;

// let percentual = lerTeclado.questionInt("Qual o percentual de desconto?") / 100;

// let totalDescoto = totalCarrinho - percentual;

// console.table(carrinho);

// console.log(`
// Total sem desconto: R$ ${totalCarrinho}
// Desconto:  R$ ${percentual}
// Total com desconto: R$ ${totalDescoto}
// `);

// console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 10 – Calculadora de IMC
// ------------------------------------------------------------
// IMC = peso (kg) / (altura (m) ** 2)
// a) Peça ao usuário seu nome, peso em kg e altura em metros.
// b) Calcule o IMC usando a fórmula acima.
// c) Crie um objeto "resultado" com as propriedades:
//    nome, peso, altura e imc (use toFixed(2) no imc).
// d) Exiba o objeto com console.table().
// e) Exiba no console:
//    "Olá, <nome>! Seu IMC é: <imc>"

// → Seu código aqui:

// let resultado = {
//     nome: lerTeclado.question("Qual o seu nome? \n"),
//     peso: lerTeclado.questionFloat("Qual o seu peso em kg? \n"),
//     altura: lerTeclado.question("Qual a sua altura em m? \n"),
// };

// resultado.imc = (resultado.peso / (resultado.altura ** 2)).toFixed(2);

// console.table(resultado);

// console.log(`Olá, ${resultado.nome}! Seu IMC é: ${resultado.imc}`);

// console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 11 – Custo de viagem
// ------------------------------------------------------------
// a) Peça ao usuário:
//    - A distância total da viagem em km.
//    - O consumo médio do carro em km/litro.
//    - O preço do combustível por litro.
//    - Quantas pessoas vão dividir o custo.
// b) Calcule a quantidade de litros necessários:
//    litros = distancia / consumo
// c) Calcule o custo total: custoTotal = litros * precoCombustivel
// d) Calcule o custo por pessoa: custoPorPessoa = custoTotal / numPessoas
// e) Exiba no console:
//    "Distância:          <distancia> km"
//    "Litros necessários: <litros> L"
//    "Custo total:        R$ <custoTotal>"
//    "Custo por pessoa:   R$ <custoPorPessoa>"

// → Seu código aqui:

// let viagem = {
//     distancia: lerTeclado.questionFloat("Qual a distância total da viagem em km? \n"),
//     consumo: lerTeclado.questionInt("Consumo médio do carro por litro? \n"),
//     precoCombustivel: lerTeclado.questionFloat("Qual o preço do combustível por litro? \n"),
//     numPessoas: lerTeclado.questionInt("Quantas pessoas vão dividir o custo? \n"),
// };

// let litros = (viagem.distancia / viagem.consumo).toFixed(2);
// let custoTotal = (litros * viagem.precoCombustivel).toFixed(2);
// let custoPorPessoa = (custoTotal / viagem.numPessoas).toFixed(2);

// console.log(`
// Distância: ${viagem.distancia} km
// Litros necessários: ${litros} L
// Custo total: R$ ${custoTotal}
// Custo por pessoa: R$ ${custoPorPessoa}`);

// console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 12 – Contracheque
// ------------------------------------------------------------
// a) Peça ao usuário:
//    - O nome do funcionário.
//    - O salário bruto.
//    - O percentual de desconto do INSS.
//    - O percentual de desconto do IR.
// b) Calcule:
//    - Desconto do INSS: salarioBruto * (inss / 100)
//    - Desconto do IR:   salarioBruto * (ir / 100)
//    - Salário líquido:  salarioBruto - descontoINSS - descontoIR
// c) Crie um objeto "contracheque" com todas as informações.
// d) Exiba o objeto com console.table().
// e) Exiba no console uma mensagem com template literal resumindo o contracheque.

// → Seu código aqui:

let contraCheque = {
    nomeFuncionario: lerTeclado.question("Nome do funcionario: \n"),
    salarioBruto: lerTeclado.questionFloat("Salario Bruto: \n"),
    INSS: lerTeclado.questionFloat("Percentual de desconto do INSS: \n"),
    IR: lerTeclado.questionFloat("Percentual de desconto do IR: \n"),
};

contraCheque.descontoINSS = (contraCheque.salarioBruto * (contraCheque.INSS / 100)).toFixed(3);
contraCheque.descontoIR = (contraCheque.salarioBruto * (contraCheque.IR / 100)).toFixed(3);
contraCheque.salarioLiquido = (contraCheque.salarioBruto - contraCheque.descontoINSS - contraCheque.descontoIR).toFixed(3);

console.table(contraCheque)

console.log(`
${contraCheque.nomeFuncionario}, seu salario bruto é R$ ${contraCheque.salarioBruto.toFixed(3)}
e com os descontos de INSS: ${contraCheque.INSS} % e IR: ${contraCheque.IR} %
seu salario liquido é R$ ${contraCheque.salarioLiquido}`);


console.log("_______________________________");