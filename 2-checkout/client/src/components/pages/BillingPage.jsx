import React from 'react';
import axios from 'axios';

class BillingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      credit: '',
      expire: '',
      cvv: '',
      billingZip: ''
    }
  }

  onFormSubmit() {
    axios.post('/billingInfo', {
      credit: this.state.credit,
      expire: this.state.expire,
      cvv: this.state.cvv,
      billingZip: this.state.billingZip
    })
      .catch(err => {
        console.log(err);
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
        this.props.onClickNext('BillingPage');
      }}>
        <h1>Billing Information</h1>
        <input onChange={(e) => this.handleInputChange(e)} placeholder='CC #' name='credit' required="required" />
        <input onChange={(e) => this.handleInputChange(e)} placeholder='Expiration Date' name='expire' required="required" />
        <input onChange={(e) => this.handleInputChange(e)} placeholder='CVV' name='cvv' required="required" />
        <input onChange={(e) => this.handleInputChange(e)} placeholder='Billing Zip Code' name='billingZip' required="required" />
        <button>Next</button>
      </form >
    )
  }
}

export default BillingPage;