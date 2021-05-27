const txtToDo = document.querySelector("#txtToDo");
const listToDo = document.querySelector("#toDoList");
const toDoFinish = document.querySelector("#toDoFinish");

EventListener();

function EventListener () {
    document.getElementById("Lista").onsubmit = GetActividades;
}

function GetActividades (event) {
    event.preventDefault();
    if (txtToDo.value.trim() == "") {
        return;
    }

    const createToDo = new ListToDo(txtToDo.value);
    createToDo.AddActividadDom(listToDo, null);
}