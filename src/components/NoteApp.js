import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utils/data";
import NoteInput from "./NoteInput";
import SearchNote from "./SearchNote";
import Swal from "sweetalert2";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    //init data
    this.state = {
      notes: getInitialData(),
      keywordNote: "",
    };

    //binding
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
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

  onArchiveHandler = (id) => {
    this.setState({
      notes: this.state.notes.map((note) => {
        if (note.id === id) {
          note.archived = !note.archived;
        }
        return note;
      }),
    });
  };

  onSearch = (e) => {
    this.setState({
      keywordNote: e,
    });
  };

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
    const resultNote = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keywordNote.toLowerCase());
    });
    const activeNote = resultNote.filter((note) => {
      return !note.archived;
    });
    const archivedNote = resultNote.filter((note) => {
      return note.archived;
    });
    return (
      <div className="note-app">
        <h1>Personal Note</h1>
        <SearchNote isSearched={this.onSearch} />
        <h3>Tambah Note</h3>
        <NoteInput addNote={this.onAddNoteHandler} />
        <h3>Note</h3>
        {activeNote.length !== 0 ? (
          <NoteList
            notes={activeNote}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        ) : (
          <div className="notes-list__empty-message">Tidak Ada Catatan.</div>
        )}

        <h3>Arsip</h3>
        {archivedNote.length !== 0 ? (
          <NoteList
            notes={archivedNote}
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
