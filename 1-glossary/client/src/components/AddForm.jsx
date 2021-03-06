import React from 'react';

class AddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newWord: '',
      newDefinition: ''
    }
  }

  onChangeWord(event) {
    this.setState({
      newWord: event.target.value
    })
  }

  onChangeDefinition(event) {
    this.setState({
      newDefinition: event.target.value
    })
  }

  render() {
    return (
      <div className='form'>
        <h3>Add a new word to the dictionary!</h3>
        <input onChange={(e) => this.onChangeWord(e)} placeholder='New Word' />
        <input onChange={(e) => this.onChangeDefinition(e)} placeholder='Definition' />
        <button onClick={() => {
          if (this.state.newWord === '') {
            alert('Please enter your word!');
          } else if (this.state.newDefinition === '') {
            alert('Please enter your definition!');
          } else {
            this.props.handleAdd(this.state.newWord, this.state.newDefinition);
          }
        }}>Add</button>
      </div>
    );
  }
}

export default AddForm;