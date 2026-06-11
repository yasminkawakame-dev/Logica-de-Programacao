// JOGO DA FORCA //

const lerTeclado = require('readline-sync');

function jogarForca() {
    let palavras = [
        "FLORESTA",
        "CADEIRA",
        "COMPUTADOR",
        "AMIZADE",
        "BORBOLETA",
        "AVENTURA",
        "BIBLIOTECA",
        "MONTANHA",
        "CHOCOLATE",
        "TELEFONE",
        "UNIVERSO",
        "PIANISTA",
        "TEMPESTADE",
        "PARALELEPIPEDO",
        "CONSCIENTIZACAO",
        "EXTRAORDINARIO",
        "DESENVOLVIMENTO",
    ];

    let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];

    let palavraOculta = [];

    for (let i = 0; i < palavraSecreta.length; i++) {
        palavraOculta.push("_");
    }

    let tentativas = 6;
    let letrasJaEscolhidas = [];

    console.log("---------- JOGO DA FORCA -----------");

    while (tentativas > 0 && palavraOculta.includes("_")) {
        console.log(palavraOculta.join(" "));
        console.log(`Tentativas restantes: ${tentativas}`);
        console.log(`Letras já tentadas: [${letrasJaEscolhidas.join(", ")}]`);

        let letra = lerTeclado.question("Escolha apenas UMA letra:\n").toUpperCase();

        if (!letra || letra.length !== 1 || !/[A-Z]/.test(letra)) {
            console.log("Erro! Digite apenas uma letra.");
            continue;
        }

        if (letrasJaEscolhidas.includes(letra)) {
            console.log(`Você já usou a letra ${letra}. Tente outra.`);
            continue;
        }

        letrasJaEscolhidas.push(letra);

        if (palavraSecreta.includes(letra)) {
            console.log("Você acertou!");

            for (let i = 0; i < palavraOculta.length; i++) {
                if (palavraSecreta[i] === letra) {
                    palavraOculta[i] = letra;
                }
            }
        } else {
            console.log("Você errou.");
            tentativas--
        }
    }

    function exibirResultadoFinal(palavraOculta, palavraSecreta) {
        console.log("------------------------");
    
        if (!palavraOculta.includes("_")) {
            console.log(`PARABÉNS! Você venceu! A palavra era: ${palavraSecreta}`);
        } else {
            console.log(`FIM DE JOGO! Você perdeu. A palavra era: ${palavraSecreta}`);
        }
    
        console.log("--------------------------");
    }

    exibirResultadoFinal(palavraOculta, palavraSecreta)

}


jogarForca()