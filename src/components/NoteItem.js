import React from "react";
import NoteItemBody from "./NoteItemBody";

function NoteItem({ title, body, id, onDelete }) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} body={body} />
      <onDelete id={id} onDelete={onDelete} />
    </div>
  );
}

export default NoteItem;
