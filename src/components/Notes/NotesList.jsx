import { observer } from "mobx-react-lite";
import Note from "../Notes/Note";

function NotesList({ notes }) {
    if (notes.tasks.getCount === 0) {
        return (<h1>Add New Notes</h1>);
    }
    return (
        <div className="grid grid-cols-5 m-14">
            {notes.tasks.map(note => <Note key={note.id} note={note} />)}
        </div>
    );
}

export default observer(NotesList);