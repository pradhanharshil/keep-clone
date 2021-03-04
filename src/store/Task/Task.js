import { action, makeObservable, observable } from "mobx";
import colors from "../../constants/colors";

class Task {
    title = "";
    info = "";
    id = Math.random() * 10000;
    pinned = false;
    color = "";

    constructor(title, info) {
        makeObservable(this, {
            title: observable,
            info: observable,
            color: observable,
            togglePinned: action,
            changeColor: action,
            editTask: action
        });
        this.title = title;
        this.info = info;
        this.color = colors.default;
    }

    editTask(title, info) {
        this.title = title;
        this.info = info;
    }

    changeColor(color) {
        this.color = color;
    }

    togglePinned() {
        this.pinned = !this.pinned;
    }
}

export default Task;