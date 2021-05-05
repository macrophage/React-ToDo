import React, { useState } from "react";
import "./Create.css";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import IconButton from "@material-ui/core/IconButton";

function Create({ onAdd }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { value, name } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    if (!note.title && !note.content) return;
    onAdd(note);
    setNote({
      content: "",
      title: "",
    });

    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <IconButton onClick={submitNote}>
          <AddCircleTwoToneIcon fontSize="large" color="secondary" />
        </IconButton>
      </form>
    </div>
  );
}

export default Create;
