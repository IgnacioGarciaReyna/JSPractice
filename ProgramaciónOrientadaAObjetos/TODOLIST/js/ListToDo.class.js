class ListToDo {
    ToDoLS;

    constructor(listToDo) {
        if(typeof ListToDo.instance === "object") {
            return ListToDo.instance;
        }
        this.ToDoLS = new HandleTodoLocalStorage();
        let tareas = this.ToDoLS.validateDataInLS("todoPendings");
        this.iniciarTareas(listToDo, tareas);
        ListToDo.instance = this;
        return this;
    }

    iniciarTareas(listToDo, tareas) {
        for (let index = 0; index < tareas.length; index++) {
            this.AddActividadDom(listToDo, null, tareas[index]);
            
        }
    }

    AddActividadDom(ul, origen, contenido) {
        const li = document.createElement("li");
        li.classList = "list-group-item text-break";
        li.textContent = contenido;

        const btnRemove = document.createElement("button");
        btnRemove.classList = "close";
        
        const span = document.createElement("span");
        span.classList = "badge badge-pill text-danger";
        span.textContent = "X";
        ul.appendChild(li);
        li.appendChild(btnRemove);
        btnRemove.appendChild(span);

        if (origen == "get") {
            this.ToDoLS.SavePendingTodoLocalStorage(contenido);
        } else if (origen == "deleted") {
            this.ToDoLS.DeletedPendingTodoLocalStorage(contenido);
        }
        
    }
}