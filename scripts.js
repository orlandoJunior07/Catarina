const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listacompleta = document.querySelector('.list-task')
document.addEventListener("keypress", function(e) {

    if(e.key === "Enter") {
        const btn = document.querySelector('.button-add-task')
        btn.click()
    }
})
let minhaListadeitens = []

function adicionarNovaTarefa() {
    minhaListadeitens.push({
      tarefa: input.value,
      concluida: false
      })
    input.value = ''

    mostrarTarefas()
}
function mostrarTarefas() {
 let novaLI = ''


    minhaListadeitens.forEach((item, index) => {
    novaLI = novaLI + `
    
            <li class="task ${item.concluida && "done"}">
               <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
               <p>${item.tarefa}</p>
               <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletaritem(${index})">
           </li>

            `

})

listacompleta.innerHTML = novaLI


localStorage.setItem('lista',JSON.stringify(minhaListadeitens))

}

function concluirTarefa(index){
    minhaListadeitens[index].concluida = !minhaListadeitens[index].concluida

    mostrarTarefas()
}
function deletaritem(index){
    minhaListadeitens.splice(index, 1)
    
    mostrarTarefas()
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if(tarefasDoLocalStorage){
    minhaListadeitens = JSON.parse(tarefasDoLocalStorage)
    }
    mostrarTarefas()
}
recarregarTarefas()

button.addEventListener('click', adicionarNovaTarefa)