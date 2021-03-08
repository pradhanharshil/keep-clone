import { observer } from 'mobx-react-lite';
import {useState} from "react";
import './App.css';
import Form from './components/Form';
import Navbar from "./components/Navbar";
import NotesList from './components/Notes/NotesList';
import listOfTasks from "./store/Task/TaskList";

function App() {
  const [input, setInput] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    listOfTasks.addTask(e.target[0].value, e.target[1].value);
  }
  return (
    <>
      <Navbar 
        onChange={(e) => setInput(e.target.value)}/>
      <Form 
        onSubmit={submitHandler} />
      <NotesList
        notes={listOfTasks}
        query={input} />
    </>
  );
}

export default observer(App);