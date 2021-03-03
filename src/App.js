import './App.css';
import Form from './components/Form';
import Navbar from "./components/Navbar";
import NotesList from './components/Notes/NotesList';

function App() {
  const submitHandler = e => {
    e.preventDefault();
    taskStore.addTask(e.target[0].value, e.target[1].value);
  }
  return (
    <>
      <Navbar />
      <Form onSubmit={submitHandler} />
      <NotesList  />
    </>
  );
}

export default App;