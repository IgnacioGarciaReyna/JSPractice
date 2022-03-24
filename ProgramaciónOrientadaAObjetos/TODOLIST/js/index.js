const txtToDo = document.querySelector("#txtToDo");
const listToDo = document.querySelector("#toDoList");
const listFinishToDo = document.querySelector("#toDoFinish");

const createToDo = new ListToDo(listToDo);
initEvenListenerSpans();
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
    let spanList = document.querySelectorAll(`span[pendiente="true"]`);
    spanList[spanList.length - 1].addEventListener("click", removeActividad);
}



function initEvenListenerSpans () {
    let spanList = document.querySelectorAll("span");
    for (let index = 0; index < spanList.length; index++) {
        spanList[index].addEventListener("click", removeActividad);
    }
}

function removeActividad (event) {
    console.log(event);
    if(event.target.nodeName != "SPAN") return;
    let liDeleted = event.target.parentElement.parentElement;

    createToDo.AddActividadDom(listFinishToDo, "deleted" , liDeleted.textContent.substring(0, liDeleted.textContent.length -1));

    listToDo.removeChild(liDeleted);
}

