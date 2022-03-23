import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import DefinitionList from './DefinitionList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      definitions: []
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(word) {
    // console.log('clicked!', word)
    axios.get(`/search?term=${word}`)
      .then(doc => {
        console.log('search res', doc)
        if (doc.length) {
          this.setState({
            definitions: doc
          });
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <DefinitionList />
      </div>
    );
  }
}

export default App;