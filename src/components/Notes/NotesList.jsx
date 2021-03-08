import { observer } from "mobx-react-lite";
import Note from "../Notes/Note";

function NotesList({ notes, query }) {
    const list = notes.filterTasks(query);
    console.log(list);
    if (notes.getTotalCount === 0) {
        return (
            <div className="block w-96 m-auto mt-40">
                <p className="text-3xl">Notes you add appear here</p>
            </div>
        );
    }
    return (
        <> 
            <div className="grid grid-cols-5 gap-4 m-14">
                {list.pinned.map(note => <Note key={note.id} note={note} />)}
                {list.unpinned.map(note => <Note key={note.id} note={note} />)}
            </div>
        </>
    );
}

export default observer(NotesList);