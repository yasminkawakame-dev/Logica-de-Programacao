const lerTeclado = require('readline-sync');

let listaDeTarefas = [];

function menuInicial() {
    console.log("\n--------------------------");
    console.log("      MENU TO-DO-LIST     ");
    console.log("--------------------------");
    console.log("1 - ADICIONAR TAREFA      ");
    console.log("2 - VISUALIZAR TAREFAS    ");
    console.log("3 - VISUALIZAR ITEM       ");
    console.log("4 - EDITAR                ");
    console.log("5 - EXCLUIR               ");
    console.log("6 - FILTRAR               "); 
    console.log("0 - ENCERRAR              ");
    console.log("--------------------------");
}

function adicionarTarefa() {
    let adicionar = true;
    while (adicionar) {
        let tituloTarefa = lerTeclado.question("Qual o titulo da tarefa que deseja adicionar a sua TO-DO-LIST?\n");
        let descricaoTarefa = lerTeclado.question("Descreva a tarefa:\n");
        listaDeTarefas.push({ tituloTarefa, descricaoTarefa });
        adicionar = lerTeclado.keyInYN("Deseja adicionar mais tarefas?");
    }
}

function visualizarTarefas() {
    console.table(listaDeTarefas)
}

function visualizarItem() {
    visualizarTarefas();
    let visualizarTarefa = lerTeclado.questionInt("Qual tarefa deseja visualizar?\n");
    console.log(listaDeTarefas[visualizarTarefa].tituloTarefa);
}

function editar() {
}

function excluir() {
    visualizarTarefas()
    let exluirTarefa = lerTeclado.questionInt("Qual tarefa deseja excluir?\n");
    listaDeTarefas.splice(exluirTarefa, 1)
}

function filtrar() {
    let filtro = lerTeclado.question("Qual termo que deseja buscar?\n").toUpperCase().trim();
    let encontrou = false;
    for (let i = 0; i < listaDeTarefas.length; i++) {
        // Acessa o título da tarefa atual e transforma em maiúsculo para ignorar o case-sensitive
        let tituloTarefa = listaDeTarefas[i].tituloTarefa.toUpperCase();
        if (tituloTarefa.includes(filtro)) {
            console.log(`[ID: ${listaDeTarefas[i].id}] - ${listaDeTarefas[i].tituloTarefa}`);
            encontrou = true;
        }
    }
    if (!encontrou) {
        console.log("Nenhuma tarefa encontrada com esse termo.");
    }
}


menuInicial()
adicionarTarefa();
visualizarTarefas();
visualizarItem();
excluir();
filtrar();
