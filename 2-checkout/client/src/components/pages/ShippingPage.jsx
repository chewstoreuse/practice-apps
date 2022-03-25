import React from 'react';
import axios from 'axios';

class ShippingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      line1: '',
      line2: '',
      state: '',
      zip: '',
      phone: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  onFormSubmit() {
    axios.post('/shippingInfo', {
      line1: this.state.line1,
      line2: this.state.line2,
      state: this.state.state,
      zip: this.state.zip,
      phone: this.state.phone
    })
      .catch(err => {
        console.log(err)
      });
  }

  handleInputChange(event) {
    let target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    return (
      <form onSubmit={() => {
        this.onFormSubmit();
        this.props.onClickNext('ShippingPage');
      }}>
        <h1>Shipping Address</h1>
        <input onChange={(e) => this.handleInputChange(e)} placeholder='Line 1' name='line1' required="required" />
        <input onChange={(e) => this.handleInputChange(e)} placeholder='Line 2' name='line2' />
        <input onChange={(e) => this.handleInputChange(e)} placeholder='State' name='state' required="required" />
        <input onChange={(e) => this.handleInputChange(e)} placeholder='Zip Code' name='zip' required="required" />
        <input onChange={(e) => this.handleInputChange(e)} placeholder='Phone Number' name='phone' required="required" />
        <button>Next</button>
      </form>
    );
  }
}

export default ShippingPage;