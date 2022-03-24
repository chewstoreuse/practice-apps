import React from 'react';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={() => {
        this.props.onFormSubmit('/createAccount');
        this.props.onClickNext('CreateAccount');
      }} className='create-account-form'>
        <h1>Create an account</h1>
        <input placeholder='Name' name='name' />
        <input placeholder='Email' name='email' />
        <input placeholder='Password' name='password' />
        <button>Next</button>
      </form>
    );
  }
}

export default CreateAccount;