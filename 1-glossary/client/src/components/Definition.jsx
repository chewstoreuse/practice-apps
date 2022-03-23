import React from 'react';

var newDefinition = '';
class Definition extends React.Component {
  constructor(props) {
    super(props);
  }

  handleEditPrompt(word) {
    newDefinition = prompt(`What is your new definition for ${word}?`);
  }

  render() {
    return (
      <div className='definition'>
        <strong>{this.props.definition.word}</strong>: {this.props.definition.definition}
        <span className='definition-options'>
          <button onClick={() => {
            this.handleEditPrompt(this.props.definition.word);
            this.props.handleEdit(this.props.definition.word, newDefinition);
            newDefinition = '';
          }}>Edit</button>

          <button onClick={() => this.props.handleDelete(this.props.definition.word)}>Delete</button>
        </span>
      </div>
    )
  }
}

export default Definition;