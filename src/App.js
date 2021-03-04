import { observer } from 'mobx-react-lite';
import './App.css';
import Form from './components/Form';
import Navbar from "./components/Navbar";
import NotesList from './components/Notes/NotesList';
import listOfTasks from "./store/Task/TaskList";

function App() {
  const submitHandler = e => {
    e.preventDefault();
    listOfTasks.addTask(e.target[0].value, e.target[1].value);
  }
  return (
    <>
      <Navbar />
      <Form onSubmit={submitHandler} />
      <NotesList 
        name="Pinned Notes"
        notes={listOfTasks.getPinnedTasks} />
      <NotesList 
        name="Unpinned Notes"
        notes={listOfTasks.getUnpinnedTasks} />
    </>
  );
}

export default observer(App);