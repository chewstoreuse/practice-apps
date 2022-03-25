import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: ''
    }
  }

  onChange(event) {
    console.log(event.target.value);
    this.setState({
      word: event.target.value
    });
  }

  render() {
    return (
      <div className='search'>
        <input onChange={(event) => this.onChange(event)} placeholder="Search..." />
        <button onClick={() => this.props.handleSearch(this.state.word)}>Search</button>
      </div>
    );
  }
}

export default Search;