import { observer } from "mobx-react-lite";
import Note from "../Notes/Note";

function NotesList({ notes, query }) {
    const list = notes.filterTasks(query);
    if (notes.getTotalCount === 0) {
        return (
            <div className="m-auto mt-20 w-max">
                <p className="md:text-2xl lg:text-3xl xl:text-4xl text-xl">Notes you add appear here</p>
            </div>
        );
    }
    return (
        <> 
            <div className="flex flex-col justify-center items-center md:grid md:grid-cols-4 md:gap-4 md:m-14 lg:grid-cols-5">
                {list.pinned.map(note => <Note key={note.id} note={note} />)}
                {list.unpinned.map(note => <Note key={note.id} note={note} />)}
            </div>
        </>
    );
}

export default observer(NotesList);