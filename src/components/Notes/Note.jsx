import { observer } from "mobx-react-lite";
import ColorPanel from "./ColorPanel";

function Note({ note }) {
    const style = {
        backgroundColor: note.color
    };
    return (
        <div className="flex flex-col border rounded-md pt-2 pl-3 w-72 m-1" style={style}>
            <div className="text-xl">
                <h3>{note.title}</h3>
            </div>
            <div className="text-l">
                <p>{note.info}</p>
            </div>
            <div className="note-card-options">
                <div className="card-icon"></div>
                <div className="card-select-color">
                    <ColorPanel setColor={(color) => note.changeColor(color)}/>
                </div>
            </div>
        </div>
    )
}

export default observer(Note);