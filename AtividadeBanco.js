const lerTeclado = require('readline-sync');

// Acesso, deposito, saque, transferência(PIX, TED, DOC), emprestimo, (FUNÇÕES)
// investimento (renda fixa, variavel), notificações (valores em atraso, novo limite). (FUNÇÕES)
// Limite, Extrato, Conta, Senha, Tipo de conta, Saldo. (VARIAVEIS)
// Dinheiro, Taxas. (VARIAVEIS)
// Sistema de segurança. (VALIDADORES)
// Sistema de ajuda. 
// Extrato() - Quanto, Data e hora

function exibirMenu() {
    console.log(`
    ===========================
            BANCO SYSBANK 
    ===========================
      Selecione uma das opções:
      1 - Acessar conta
      2 - Criar conta pessoa 
      3 - Criar conta empresa
      0 - Sair
`)
    let opcao = lerTeclado.questionInt(`Digite a opção desejada:\n`)

    switch (opcao) {
        case 1:
            console.log("Em desenvolvimento!\n");
            exibirMenu()
            break;
        case 2:
            criarContaPF()
            break;
        case 3:
            console.log("Em desenvolvimento!\n");
            exibirMenu()
        case 0:
            console.log("Finalizando e Saindo... Obrigado por acessar!");
            break;
        default:
            console.log("Opção invalida");
            exibirMenu()
            break;
    };
}

let contasSalvas = [{
        usuario: "Yas",
        cpf: "999.999.999-99",
        email: "yas@gmail.com",
        dataNascimento: "01/08/2001",
        senha: 123456,
        numConta: 876543,
        saldo: 0,
        tipoConta: 'Pessoa Fisica',
    }];

function criarContaPF() {

    let conta = {
        usuario: "",
        cpf: "",
        email: "",
        dataNascimento: "",
        senha: 0,
        numConta: null,
        saldo: 0,
        tipoConta: null,
    }

    conta.tipoConta = 'Pessoa Fisica'

    while (conta.usuario.length <= 1) {
        conta.usuario = lerTeclado.question("Digite seu nome completo:\n")
            .toUpperCase()
            .trim();

        if (conta.usuario.length <= 1)
            console.log("Nome inválido.");
    }

    while (!(/^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/.test(conta.cpf))) {
        conta.cpf = lerTeclado.question("Digite seu CPF:\n")
            .trim()
            .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

        if (!/^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/.test(conta.cpf))
            console.log("CPF invalido");
    }

    while (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(conta.email)) {
        conta.email = lerTeclado.questionEMail("Digite seu email:\n")
            .trim()

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(conta.email))
            console.log("E-mail invalido");
    }

    let anoNascimento = 0, mesNascimento = 0, diaNascimento = 0

    while (anoNascimento < 1900 || anoNascimento > new Date().getFullYear() - 18) {
        anoNascimento = lerTeclado.questionInt("Digite o ano que nasceu:\n")
        if (anoNascimento < 1900 || anoNascimento > new Date().getFullYear() - 18)
            console.log("Ano de nascimento inválido.");
    }

    while (mesNascimento < 1 || mesNascimento > 12) {
        mesNascimento = lerTeclado.questionInt("Digite o mês que nasceu:\n");
        if (mesNascimento < 1 || mesNascimento > 12)
            console.log("Mês inválido.");
    }

    while (!validarDiaNascimento(mesNascimento, diaNascimento)) {
        diaNascimento = lerTeclado.questionInt("Digite o dia que nasceu:\n");
        if (!validarDiaNascimento(mesNascimento, diaNascimento))
            console.log("Dia inválido.");
    }

    conta.dataNascimento = new Date(anoNascimento, mesNascimento - 1, diaNascimento).toLocaleDateString('pt-BR');

    conta.senha = criarSenha()

    conta.numConta = numeroConta()

    console.table(conta);

    contasSalvas.push(conta)

    exibirMenu()
}

function criarSenha() {
    let senha = 0;
    while (senha.toString().length !== 6) {
        senha = lerTeclado.questionInt(`A senha deve conter 6 números e o primeiro digito não pode ser 0. Digite sua senha:\n`)

        if (senha.toString().length !== 6)
            console.log("A senha deve ter exatamente 6 caracteres.");
    }
    console.log("Senha criada com sucesso");
    return senha;
}

function validarDiaNascimento(mes, dia) {
    let meses31 = [1, 3, 5, 7, 8, 10, 12];
    let meses30 = [4, 6, 9, 11];

    if (mes === 2 && dia <= 28 && dia > 0) {
        return true
    } else if (meses30.includes(mes) && dia <= 30 && dia > 0) {
        return true
    } else if (meses31.includes(mes) && dia <= 31 && dia > 0) {
        return true
    }
    return false
}

function numeroConta() {
    let numConta = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    return numConta
}

exibirMenu()

function menuConta(conta) {
    console.log(`
    ===========================
            BANCO SYSBANK
    ===========================
        Olá ${conta.usuario}
      O que você quer fazer hoje:
      1 - Depositar
      2 - Sacar
      3 - Extrato
      0 - Sair
`)
}

function acessarConta() {
    let numeroConta = lerTeclado.questionInt("Digite o número da sua conta:\n");
    let senha = lerTeclado.questionInt("Digite sua senha: \n")

    if (!contasSalvas.includes({numConta}, numeroConta) && ) {
        console.log("Conta ou senha invalido");
    }
        

}

// function verSaldo() {
//     console.log(`R$ ${conta.saldo}`);
// }


// function depositar() {
//     let valorDeposito = lerTeclado.questionFloat("Qual valor deseja depositar?\n");
//     saldo += valorDeposito;
//     console.log("Depósito realizado com sucesso!");
//     verSaldo();
// }

// function sacar() {
//     let valorSaque = lerTeclado.questionFloat("Qual o valor que deseja sacar?\n")
//     if (saldo >= valorSaque) {
//         saldo -= valorSaque;
//         console.log("Saque realizado com sucesso!");
//         verSaldo();
//     } else {
//         console.log("Saldo insuficiente");
//     }
// }

// function extrato() {
//     const hoje = new Date();
//     console.log("\n==============================");
//     console.log(`EXTRATO - Data: ${hoje.toLocaleDateString('pt-BR')}`);
//     console.log("==============================");
//     verSaldo();
//     console.log("==============================\n");
// }

