import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import AddForm from './AddForm.jsx';
import DefinitionList from './DefinitionList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      definitions: []
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSearch(word) {
    // console.log('clicked!', word)
    axios.get(`/search?term=${word}`)
      .then(doc => {
        console.log('search res', doc.data)
        if (doc.data.length) {
          this.setState({
            definitions: doc.data
          });
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleChange(word, definition) {
    axios.post('/changeList', {
      word: word,
      definition: definition
    })
      .then(words => {
        this.setState({
          definitions: words.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleEdit(word, newDefinition) {
    axios.post('/changeList', {
      word: word,
      definition: newDefinition
    })
      .then(words => {
        this.setState({
          definitions: words.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleDelete(word) {
    axios.post('/delete', {
      deleteWord: word
    })
      .then(response => {
        return axios.get('/api')
      })
      .then(words => {
        this.setState({
          definitions: words.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    // console.log('component mounted')
    axios.get('/api')
      .then(words => {
        // console.log('words from get req', words);
        this.setState({
          definitions: words.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Dictionary, the app</h1>
        <Search handleSearch={this.handleSearch} />
        <AddForm handleAdd={this.handleChange} />
        <DefinitionList definitions={this.state.definitions} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;