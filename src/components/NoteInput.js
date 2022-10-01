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
    };

    //binding
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
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
      title: "Your work has been saved",
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
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Isi"
            required
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
          <Button variant="primary" type="submit">
            Tambah
          </Button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
