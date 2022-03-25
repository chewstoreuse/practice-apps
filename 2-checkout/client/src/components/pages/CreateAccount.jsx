import React from 'react';
import axios from 'axios';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: '',
      email: '',
      password: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  onFormSubmit() {
    axios.post('/createAccount', {
      name: this.state.customer,
      email: this.state.email,
      password: this.state.password
    })
      .catch(err => {
        console.log(err);
      })
  }

  handleInputChange(event) {
    let target = event.target;
    console.log(target.name, target.value);
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    return (
      <form onSubmit={() => {
        this.onFormSubmit();

        this.props.onClickNext('CreateAccount');
      }} className='create-account-form'>
        <h1>Create an account</h1>
        <input onChange={(e) => this.handleInputChange(e)} placeholder='Name' name='customer' required="required" />
        <input onChange={(e) => this.handleInputChange(e)} placeholder='Email' name='email' required="required" />
        <input onChange={(e) => this.handleInputChange(e)} placeholder='Password' name='password' required="required" />
        <button>Next</button>
      </form>
    );
  }
}

export default CreateAccount;