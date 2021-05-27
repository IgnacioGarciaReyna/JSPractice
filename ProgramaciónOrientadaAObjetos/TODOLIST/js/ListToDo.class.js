class ListToDo {
    contenido = "";

    constructor(contenido) {
        this.contenido = contenido;
    }

    AddActividadDom(ul, origen) {
        const li = document.createElement("li");
        li.classList = "list-group-item text-break";
        li.textContent = this.contenido;

        const btnRemove = document.createElement("button");
        btnRemove.classList = "close";
        
        const span = document.createElement("span");
        span.classList = "badge badge-pill text-danger";
        span.textContent = "X";
        ul.appendChild(li);
        li.appendChild(btnRemove);
        btnRemove.appendChild(span);
    }
}