import React from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    //init state
    this.state = {
      title: "",
      body: "",
      maxLimit: 20,
    };

    //binding
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      const limit = 20;
      const maxChara = event.target.value.length;
      const resultChara = 20 - maxChara;
      if (event.target.value.length === 21) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Judul melebihi batas",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      return {
        title: event.target.value.slice(0, limit),
        maxLimit: resultChara,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Data kamu berhasil disimpan",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  render() {
    return (
      <div className="note-input">
        <form onSubmit={this.onSubmitEventHandler}>
          <input
            className="note-input__title"
            type="text"
            placeholder="Judul"
            required
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <h5>sisa karakter: {this.state.maxLimit}</h5>
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Isi"
            required
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
          <Button variant="warning" type="submit">
            Tambah
          </Button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
