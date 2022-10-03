import React from "react";

class SearchNote extends React.Component {
  constructor(props) {
    super(props);

    //init data
    this.state = {
      searchTitle: "",
    };
  }

  onSearch = (e) => {
    this.setState({
      searchTitle: e.target.value,
    });
    this.props.isSearched(e.target.value);
  };
  render() {
    return (
      <input
        className="search-note"
        placeholder="Cari catatanmu..."
        onChange={this.onSearch}
        value={this.state.searchTitle}
      ></input>
    );
  }
}

export default SearchNote;
