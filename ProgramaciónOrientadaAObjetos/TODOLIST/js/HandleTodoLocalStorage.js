class HandleTodoLocalStorage {
    SavePendingTodoLocalStorage (todo) {
        let tareasGuardadas = this.validateDataInLS("todoPendings");
        tareasGuardadas.push(todo);
        localStorage.setItem("todoPendings", JSON.stringify(tareasGuardadas));
    }

    validateDataInLS(keyLS) {
        let tareas = localStorage.getItem(keyLS);
        if (tareas == null) {
            return [];
        } else {
            return JSON.parse(tareas);
        }
    }

    DeletedPendingTodoLocalStorage (todo) {
        let tareasGuardadas = this.validateDataInLS("todoPendings");
        if(tareasGuardadas.length === 0) {
            return;
        }

        for (let index = 0; index < tareasGuardadas.length; index++) {
            if (todo == tareasGuardadas[index]) {
                tareasGuardadas.splice(index, 1);
            }
        }
        localStorage.setItem("todoPendings", JSON.stringify(tareasGuardadas));
    }
}