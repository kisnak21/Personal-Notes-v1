import React from "react";
//import { Card } from "react-bootstrap";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
      ))}
    </div>
  );
}

export default NoteList;
