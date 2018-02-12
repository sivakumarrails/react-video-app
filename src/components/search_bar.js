import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
    this.OnInputChange = this.OnInputChange.bind(this);
  }

  render() {
    return (
      <div className = "search-bar col-md-8">
        <input onChange={this.OnInputChange} />
      </div>
    );
  }

  OnInputChange(event) {
    this.setState({ text: event.target.value });
    this.props.onSearch(event.target.value);
  }
}
export default SearchBar;