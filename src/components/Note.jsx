import React from "react";
import "./Note.css";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <IconButton
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default Note;
