const txtToDo = document.querySelector("#txtToDo");
const listToDo = document.querySelector("#toDoList");
const listFinishToDo = document.querySelector("#toDoFinish");

const createToDo = new ListToDo(listToDo);

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

    createToDo.AddActividadDom(listToDo, "get", txtToDo.value);
    document.querySelectorAll("span")[indexSpan].addEventListener("click", removeActividad);
    indexSpan++;
}


function removeActividad (event) {
    console.log(event);
    if(event.target.nodeName != "SPAN") return;
    let liDeleted = event.target.parentElement.parentElement;

    createToDo.AddActividadDom(listFinishToDo, "deleted" , liDeleted.textContent.substring(0, liDeleted.textContent.length -1));

    listToDo.removeChild(liDeleted);
    indexSpan--;
}

