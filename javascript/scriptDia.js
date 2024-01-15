const adicionarTarefaDia = document.querySelector('#nova-tarefa-dia');
const botaoTarefaDia = document.querySelector('.botao-tarefa-dia');
const listaTarefasDia = document.querySelector('#lista-tarefas-dia');

function criarLi() {
    const li = document.createElement('li');
    return li;
}

adicionarTarefaDia.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!adicionarTarefaDia.value) return;
        criarTarefa(adicionarTarefaDia.value);
    }
});

function limparTarefa() {
    adicionarTarefaDia.value = ' ';
    adicionarTarefaDia.focus();
}

function criarBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar tarefa';
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function criarTarefa(adicionarTexto) {
    const li = criarLi();
    li.innerText = adicionarTexto;
    listaTarefasDia.appendChild(li);
    limparTarefa();
    criarBotaoApagar(li);
    salvarTarefas();
}

botaoTarefaDia.addEventListener("click", function () {
    if (!adicionarTarefaDia.value) return;
    criarTarefa(adicionarTarefaDia.value);
});

document.addEventListener("click", function (e) {
    const elemento = e.target

    if (elemento.classList.contains('apagar')) {
        elemento.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = listaTarefasDia.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar tarefa', ' ').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('listaTarefasDia', tarefasJSON);
}

function adicionarTarefasSalvas() {
    const tarefas = localStorage.getItem('listaTarefasDia');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criarTarefa(tarefa);
    }
}

adicionarTarefasSalvas(); 