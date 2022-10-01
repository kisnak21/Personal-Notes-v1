import React from "react";

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
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          placeholder="Nama"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <input
          type="text"
          placeholder="Body"
          value={this.state.Body}
          onChange={this.onBodyChangeEventHandler}
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default NoteInput;
