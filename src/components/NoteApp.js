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
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Your data has been deleted",
      showConfirmButton: false,
      timer: 1500,
    });
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
    return (
      <div className="note-app">
        <h1>Aplikasi Note</h1>
        <br></br>
        <h2>Tambah Note</h2>
        <NoteInput addNote={this.onAddNoteHandler} />
        <h2>Daftar Note</h2>
        <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default NoteApp;
