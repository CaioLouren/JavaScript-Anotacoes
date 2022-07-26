/* */
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});//keypress(quando uma tecla for presionada), keyup(precionada e solta), keydown(quando presiona e ela ainda esta precionada)

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add('apagar'); mas tem outro jeito tbm.
    botaoApagar.setAttribute('class', 'apagar');// esse é bom pq posso usar qualquer atributo
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefa();
}

btnTarefa.addEventListener('click', function (e) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefa();//pra salvar quando apagar tbm
    }
});

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();//pra remover o espaço
        console.log(tarefaTexto);
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJson = JSON.stringify(listaDeTarefas);//(converteu com o JSON para string)agora eu posso salvar ele em algum lugar e depois puxar e manipular do jeito q eu quiser, e depois converter devolta para um array.
    localStorage.setItem('tarefas', tarefasJson); //(so recebe string por isso converti com o JSON para string)como se fosse uma mini base de dados.
}

function adcTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);//quando falo parse, estou convertendo de volta para um OBJ de JavaScript, nesse caso um array

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adcTarefasSalvas();