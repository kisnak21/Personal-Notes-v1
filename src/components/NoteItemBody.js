import React from "react";

function NoteItemBody({ title, body, createdAt }) {
  return (
    <div className="note-item__body">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__createdAt text-muted">
        Tanggal dibuat: {createdAt}
      </p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

export default NoteItemBody;
