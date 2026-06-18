const lerTeclado = require('readline-sync');

// Acesso, deposito, saque, transferência(PIX, TED, DOC), emprestimo, (FUNÇÕES)
// investimento (renda fixa, variavel), notificações (valores em atraso, novo limite). (FUNÇÕES)
// Limite, Extrato, Conta, Senha, Tipo de conta, Saldo. (VARIAVEIS)
// Dinheiro, Taxas. (VARIAVEIS)
// Sistema de segurança. (VALIDADORES)
// Sistema de ajuda. 
// Extrato() - Quanto, Data e hora


// let conta = {
//     usuario: null,
//     numConta: null,
//     saldo: null,
//     tipoConta: null,
//     limite: {
//         saque: null,
//         pix: null,
//         chequeEspecial: null,
//     } 
// }

function criarConta() {
    let usuario = lerTeclado.question("Digite seu nome completo:");
    let cpf = lerTeclado.questionInt("Digite seu CPF:");
    let senha = lerTeclado.questionInt("")
}

function taxas() {
    
}

function menuAcesso() {


}


function menu() {
    console.log(`
    ---------- BANCO TAL --------
    1 - SALDO
    2 - CONSULTAR TAXA
    3 - DEPOSITAR`);

}

function depositar() {
    let valorDeposito = lerTeclado.questionFloat("Qual valor deseja depositar?\n");
    saldo += valorDeposito;
    console.log("Depósito realizado com sucesso!");
    verSaldo();
}

function sacar() {
    let valorSaque = lerTeclado.question("Qual o valor que deseja sacar?\n")
    if (saldo >= valorSaque) {
        saldo -= valorSaque;
        console.log("Saque realizado com sucesso!");
        verSaldo();
    } else {
        console.log("Saldo insuficiente");
    }
}

function extrato() {
    const hoje = new Date();
    console.log("\n==============================");
    console.log(`EXTRATO - Data: ${hoje.toLocaleDateString('pt-BR')}`);
    console.log("==============================");
    verSaldo();
    console.log("==============================\n");
}

