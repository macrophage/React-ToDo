import "./App.css";
import Header from "./components/Header";
import Create from "./components/Create";
import { useState } from "react";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((singleNote, index) => {
        return index != id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <Create onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
