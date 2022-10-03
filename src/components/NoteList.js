import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          createdAt={note.createdAt}
          body={note.body}
          onDelete={onDelete}
          onArchive={onArchive}
          isArchived={note.archived}
        />
      ))}
    </div>
  );
}

export default NoteList;
