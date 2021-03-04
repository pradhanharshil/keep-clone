import { observable, computed, action, makeObservable, autorun } from "mobx";
import Task from "./Task";

export class TaskList {
    tasks = [];

    constructor() {
        makeObservable(this, {
            tasks: observable,
            addTask: action,
            deleteTask: action,
            getTotalCount: computed,
            getUnpinnedTasks: computed,
            getPinnedTasks: computed
        });
        autorun(() => console.log(this.color));
    }

    get getTotalCount() {
        return this.tasks.length;
    }

    get getUnpinnedTasks() {
        return this.tasks.filter(task => !task.pinned);
    }

    get getPinnedTasks() {
        return this.tasks.filter(task => task.pinned);
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

const listOfTasks = new TaskList();
export default listOfTasks;