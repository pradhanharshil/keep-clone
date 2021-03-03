import { observable, computed, action, makeObservable } from "mobx";
import Task from "./Task";

class TaskList {
    tasks = [];

    constructor() {
        makeObservable(this, {
            tasks: observable,
            addTask: action,
            deleteTask: action,
            getCount: computed
        });
    }

    get getCount() {
        return this.tasks.length;
    }

    addTask(title, info) {
        this.tasks.push(new Task(title, info));
    }

    deleteTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }
}

const taskStore = new TaskList();
export default taskStore;