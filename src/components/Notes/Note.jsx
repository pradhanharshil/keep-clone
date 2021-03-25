import { observer } from "mobx-react-lite";
import { useState, useRef } from "react";
import Panel from "./Panel";
import listOfTasks from "../../store/Task/TaskList";

function Note({ note }) {
    const inputRef = useRef();
    const textareaRef = useRef();
    const titleRef = useRef();
    const infoRef = useRef();
    const saveButtonRef = useRef();
    const [edit, setEdit] = useState(true);
    const editNote = () => {
        listOfTasks.editTask(note.id, inputRef.current.value, textareaRef.current.value);
        titleRef.current.style.display = "block";
        infoRef.current.style.display = "block";
        inputRef.current.style.display = "none";
        textareaRef.current.style.display = "none";
        saveButtonRef.current.style.display = "none";
        setEdit(state => !state);
    }
    const editClickHandler = () => {
        if (edit) {
            titleRef.current.style.display = "none";
            infoRef.current.style.display = "none";
            inputRef.current.value = note.title;
            textareaRef.current.value = note.info;
            inputRef.current.style.display = "block";
            inputRef.current.focus();
            textareaRef.current.style.display = "block";
            saveButtonRef.current.style.display = "block";
        } else {
            titleRef.current.style.display = "block";
            infoRef.current.style.display = "block";
            inputRef.current.style.display = "none";
            textareaRef.current.style.display = "none";
            saveButtonRef.current.style.display = "none";
        }
        setEdit(state => !state);
    }
    const style = {
        backgroundColor: note.color
    };
    return (
        <div className="flex flex-col border rounded-md pt-2 pl-3 m-1 h-max w-9/12 md:w-full" style={style}>
            <div className="text-xl">
                <h3 ref={titleRef}>{note.title}</h3>
                <input
                    className="w-full rounded-md hidden outline-none"
                    ref={inputRef} />
            </div>
            <div className="text-l">
                <p ref={infoRef}>{note.info}</p>
                <textarea
                    ref={textareaRef}
                    className="resize-none outline-none w-full rounded-md hidden" />
                <button
                    ref={saveButtonRef}
                    onClick={editNote}
                    children="Save"
                    className="bg-yellow-400 p-1 rounded-full hidden text-xs md:text-sm" />
            </div>
            <div className="note-card-options">
                <Panel
                    isPinned={note.pinned}
                    setColor={(color) => note.changeColor(color)}
                    pinNote={() => note.togglePinned()}
                    deleteNote={() => listOfTasks.deleteTask(note.id)}
                    editNote={editClickHandler} />
            </div>
        </div>
    )
}

export default observer(Note);