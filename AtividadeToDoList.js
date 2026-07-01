// Atividade TO-DO-LIST em JS

const lerTeclado = require('readline-sync');

let listaDeTarefas = [];

function menuInicial() {
    console.log("--------------------------");
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
    for (let i = 0; i < listaDeTarefas.length; i++) {
        console.log(`${i} - ${listaDeTarefas[i].tituloTarefa}`);
    }
}

function visualizarItem() {
    let visualizarTarefa = lerTeclado.questionInt("Qual tarefa deseja visualizar?\n");
    console.log(listaDeTarefas[visualizarTarefa].tituloTarefa);
}

// MELHORAR USO DE PARAMETROS
function editar() {
    let opcao = lerTeclado.questionInt(`Digite a opção desejada:
        1 - Titulo da tarefa
        2 - Descrição da tarefa\n`);
        visualizarTarefas()
    if (opcao === 1) {
        let tarefa = lerTeclado.questionInt("Qual titulo da lista deseja editar?\n")
        editarTituloTarefa(tarefa)
    } else if (opcao === 2) {
        let tarefa = lerTeclado.questionInt("Qual tarefa deseja editar a descrição?\n")
        editarDescricaoTarefa(tarefa)
    } else {
        console.log("Opção invalida");
    }
}

// REMOVER PERGUNTAS DE METODOS DE EDIÇÃO!
function editarTituloTarefa(tarefa) {
    let novoTitulo = lerTeclado.question("Escreva o novo titulo:\n")
    listaDeTarefas[tarefa].tituloTarefa = novoTitulo
}

function editarDescricaoTarefa(tarefa) {
    let novaDescricao = lerTeclado.question("Escreva a nova descrição:\n")
    listaDeTarefas[tarefa].descricaoTarefa = novaDescricao
}

function excluir() {
    visualizarTarefas()
    let exluirTarefa = lerTeclado.questionInt("Qual tarefa deseja excluir?\n");
    listaDeTarefas.splice(exluirTarefa, 1)
}

function filtrar() {
    let filtro = lerTeclado.question("Qual termo que deseja buscar?\n").toUpperCase().trim();
    let encontrou = false;
    let listaEncontrada = []
    for (let i = 0; i < listaDeTarefas.length; i++) {
        let tituloTarefa = listaDeTarefas[i].tituloTarefa.toUpperCase();
        if (tituloTarefa.includes(filtro)) {
            listaEncontrada.push(listaDeTarefas[i].tituloTarefa);
            encontrou = true;
        }
    }
    if (!encontrou) {
        console.log("Nenhuma tarefa encontrada com esse termo.");
    } else {
        //Passar uma função para exibir a lista encontrada como parametro para exibir somente o TITULO de cada tarefa encontrada
        console.log(listaEncontrada);
    }

}


//DEVE SER UMA FUNÇÃO!!!!!!!!!!
let opcao;

do {
    menuInicial();

    opcao = lerTeclado.questionInt("Escolha uma opção:\n");

    switch(opcao){
        case 1:
            adicionarTarefa();
            break;
        case 2:
            visualizarTarefas();
            break;
        case 3:
            visualizarItem();
            break;
        case 4:
            editar();
            break;
        case 5:
            excluir();
            break;
        case 6:
            filtrar();
            break;
        case 0:
            console.log("Programa encerrado.");
            break;
        default:
            console.log("Opção inválida.");
    }
} while(opcao != 0);
