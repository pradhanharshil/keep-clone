import { observer } from "mobx-react-lite";
import Panel from "./Panel";
import taskStore from "../../store/Task/TaskList";

function Note({ note }) {
    const style = {
        backgroundColor: note.color
    };
    return (
        <div className="flex flex-col border rounded-md pt-2 pl-3 w-68 m-1" style={style}>
            <div className="text-xl">
                <h3>{note.title}</h3>
            </div>
            <div className="text-l">
                <p>{note.info}</p>
            </div>
            <div className="note-card-options">
                <Panel 
                    setColor={(color) => note.changeColor(color)}
                    pinNote={() => note.togglePinned()}
                    deleteNote={() => taskStore.deleteTask(note.id)} />
            </div>
        </div>
    )
}

export default observer(Note);