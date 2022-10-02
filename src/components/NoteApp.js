import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utils/data";
import NoteInput from "./NoteInput";
import Swal from "sweetalert2";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    //init data
    this.state = {
      notes: getInitialData(),
    };

    //binding
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Data kamu berhasil dihapus",
      showConfirmButton: false,
      timer: 1000,
    });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    let activeNote = null;
    let archiveNote = null;

    if (this.state.length > 0) {
      activeNote = this.state.cariNotes.filter(
        (note) => note.archived === false
      );
      archiveNote = this.state.cariNotes.filter(
        (note) => note.archived === true
      );
    } else {
      activeNote = this.state.notes.filter((note) => note.archived === false);
      archiveNote = this.state.notes.filter((note) => note.archived === true);
    }
    return (
      <div className="note-app">
        <h1>Personal Note</h1>
        <br></br>
        <h3>Tambah Note</h3>
        <NoteInput addNote={this.onAddNoteHandler} />
        <h3>Note</h3>
        {activeNote.length !== 0 ? (
          <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
        ) : (
          <div className="notes-list__empty-message">Tidak Ada Catatan.</div>
        )}
        <h2>Arsip</h2>
        {archiveNote.length !== 0 ? (
          <NoteList
            notes={archiveNote}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        ) : (
          <div className="notes-list__empty-message">Tidak Ada Catatan.</div>
        )}
      </div>
    );
  }
}

export default NoteApp;
