import { observer } from "mobx-react-lite";
import Note from "../Notes/Note";

function NotesList({ name, notes }) {
    if (notes.length === 0) {
        return null;
    }
    return (
        <> 
            <p className="text-3xl">{name}</p>
            <div className="grid grid-cols-5 gap-4 m-14 md:flex sm:flex-col">
                {notes.map(note => <Note key={note.id} note={note} />)}
            </div>
        </>
    );
}

export default observer(NotesList);