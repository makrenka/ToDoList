import { Database } from "../database/Database"

class TodoList {
    constructor() {
        this.database = Database.getInstance();
    }

    createTask(body) {        
        return this.database.create("tasks", body);
    }
}

export const todoList = new TodoList();