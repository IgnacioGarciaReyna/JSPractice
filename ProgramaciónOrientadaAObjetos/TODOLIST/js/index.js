const txtToDo = document.querySelector("#txtToDo");
const listToDo = document.querySelector("#toDoList");
const toDoFinish = document.querySelector("#toDoFinish");

const createToDo = new ListToDo();

let indexSpan = 0;
EventListener();

function EventListener () {
    document.getElementById("Lista").onsubmit = GetActividades;

}

function GetActividades (event) {
    event.preventDefault();
    if (txtToDo.value.trim() == "") {
        return;
    }

    createToDo.AddActividadDom(listToDo, null, txtToDo.value);
    document.querySelectorAll("span")[indexSpan].addEventListener("click", removeActividad);
    indexSpan++;
}


function removeActividad (event) {
    if(event.target.tagName != "span") return;
    const liDeleted = event.target;
    console.log(liDeleted);
}