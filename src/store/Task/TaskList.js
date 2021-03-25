import {
    makeObservable,
    observable, 
    computed, 
    action 
} from "mobx";
import Task from "./Task";

export class TaskList {
    tasks = [];
    constructor() {
        makeObservable(this, {
            tasks: observable,
            addTask: action,
            deleteTask: action,
            editTask: action,
            getTotalCount: computed,
            getUnpinnedTasks: computed,
            getPinnedTasks: computed,
            filterTasks: action
        });
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
        if (title === "" || info === "") {
            alert("Required field missing");
        } else {
        this.tasks.push(new Task(title, info));
        }
    }
    editTask(id , title, info) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index > -1) {
            this.tasks[index].title = title;
            this.tasks[index].info = info;
        }
    }
    deleteTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }
    filterTasks(query) {
        const regex = new RegExp(query, "i");
        const result = this.tasks.filter(task => regex.test(task.title));
        const pinned = result.filter(task => task.pinned);
        const unpinned = result.filter(task => !task.pinned);
        return {pinned, unpinned};
    }
}

const listOfTasks = new TaskList();
export default listOfTasks;