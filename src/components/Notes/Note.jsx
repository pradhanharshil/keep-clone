import { observer } from "mobx-react-lite";
import Panel from "./Panel";

function Note({ note }) {
    const style = {
        backgroundColor: note.color
    };
    console.log(style);
    return (
        <div className="flex flex-col border rounded-md pt-2 pl-3 w-68 m-1" style={style}>
            <div className="text-xl">
                <h3>{note.title}</h3>
            </div>
            <div className="text-l">
                <p>{note.info}</p>
            </div>
            <div className="note-card-options">
                <Panel setColor={(color) => note.changeColor(color)} />
            </div>
        </div>
    )
}

export default observer(Note);