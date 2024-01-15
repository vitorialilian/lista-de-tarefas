const adicionarTarefaNoite = document.querySelector('#nova-tarefa-noite');
const botaoTarefaNoite = document.querySelector('.botao-tarefa-noite');
const listaTarefasNoite = document.querySelector('#lista-tarefas-noite');

function criarLi() {
    const li = document.createElement('li');
    return li;
}

adicionarTarefaNoite.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!adicionarTarefaNoite.value) return;
        criarTarefa(adicionarTarefaNoite.value);
    }
});

function limparTarefa() {
    adicionarTarefaNoite.value = ' ';
    adicionarTarefaNoite.focus();
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
    listaTarefasNoite.appendChild(li);
    limparTarefa();
    criarBotaoApagar(li);
    salvarTarefas();
}

botaoTarefaNoite.addEventListener("click", function () {
    if (!adicionarTarefaNoite.value) return;
    criarTarefa(adicionarTarefaNoite.value);
});

document.addEventListener("click", function (e) {
    const elemento = e.target

    if (elemento.classList.contains('apagar')) {
        elemento.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = listaTarefasNoite.querySelectorAll('li');
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
    const tarefas = localStorage.getItem('listaTarefasNoite');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criarTarefa(tarefa);
    }
}

adicionarTarefasSalvas(); 