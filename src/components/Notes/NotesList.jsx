import { observer } from "mobx-react-lite";
import Note from "../Notes/Note";

function NotesList({ notes }) {
    if (notes.length === 0) {
        return null;
    }
    return (
        <> 
            <div className="grid grid-cols-5 gap-4 m-14">
                {notes.map(note => <Note key={note.id} note={note} />)}
            </div>
        </>
    );
}

export default observer(NotesList);