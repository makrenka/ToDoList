import { Database } from "../database/Database"

class TodoList {
    constructor() {
        this.database = Database.getInstance();
    }

    createTask(body) {        
        return this.database.create("tasks", body);
    }

    getTasks() {
        return this.database.read("tasks");
    }
}

export const todoList = new TodoList();