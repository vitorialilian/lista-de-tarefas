function criarTarefasDia() {
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
            criarTarefaDia(adicionarTarefaDia.value);
        }
    });

    function limparTarefaDia() {
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

    function criarTarefaDia(adicionarTexto) {
        const li = criarLi();
        li.innerText = adicionarTexto;
        listaTarefasDia.appendChild(li);
        limparTarefaDia();
        criarBotaoApagar(li);
        salvarTarefasDia();
    }


    botaoTarefaDia.addEventListener("click", function () {
        if (!adicionarTarefaDia.value) return;
        criarTarefaDia(adicionarTarefaDia.value);
    });


    document.addEventListener("click", function (e) {
        const elemento = e.target

        if (elemento.classList.contains('apagar')) {
            elemento.parentElement.remove();
            salvarTarefasDia();
        }
    });


    function salvarTarefasDia() {
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

    function adicionarTarefasSalvasDia() {
        const tarefas = localStorage.getItem('listaTarefasDia');
        const listaDeTarefas = JSON.parse(tarefas);

        for (let tarefa of listaDeTarefas) {
            criarTarefaDia(tarefa);
        }
    }

    adicionarTarefasSalvasDia();
}

criarTarefasDia();

function criarTarefasNoite() {
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
            criarTarefaNoite(adicionarTarefaNoite.value);
        }
    });

    function limparTarefaNoite() {
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

    function criarTarefaNoite(adicionarTexto) {
        const li = criarLi();
        li.innerText = adicionarTexto;
        listaTarefasNoite.appendChild(li);
        limparTarefaNoite();
        criarBotaoApagar(li);
        salvarTarefasNoite();
    }

    botaoTarefaNoite.addEventListener("click", function () {
        if (!adicionarTarefaNoite.value) return;
        criarTarefaNoite(adicionarTarefaNoite.value);
    });

    document.addEventListener("click", function (e) {
        const elemento = e.target

        if (elemento.classList.contains('apagar')) {
            elemento.parentElement.remove();
            salvarTarefasNoite();
        }
    });

    function salvarTarefasNoite() {
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

    function adicionarTarefasSalvasNoite() {
        const tarefas = localStorage.getItem('listaTarefasNoite');
        const listaDeTarefas = JSON.parse(tarefas);

        for (let tarefa of listaDeTarefas) {
            criarTarefaNoite(tarefa);
        }
    }
    adicionarTarefasSalvasNoite();
}

criarTarefasNoite();