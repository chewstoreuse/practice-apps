import React from 'react';
import axios from 'axios';

class ConfirmationPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      accountSummary: {},
      shippingSummary: {}
    }
  }

  componentDidMount() {
    axios.get('/getSummary')
      .then(results => {
        var summary = results.data[0];
        this.setState({
          accountSummary: {
            user: summary.userName,
            email: summary.email,
            phone: summary.phoneNumber
          },
          shippingSummary: {
            line1: summary.line1,
            state: summary.userState,
            zip: summary.zip
          }
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <form className='confirmation-page' onSubmit={() => { this.props.onClickNext('ConfirmationPage') }}>
        <h1>Order Summary</h1>
        <h1>Hi, {this.state.accountSummary.user}</h1>
        <h4>Thank you for shopping with us, please confirm the information below before proceeding to purchase</h4>
        <p><strong>Contact:</strong></p>
        <p>{this.state.accountSummary.email}</p>
        <p>{this.state.accountSummary.phone}</p>
        <hr />
        <p><strong>Shipping information:</strong></p>
        <p>{this.state.shippingSummary.line1}</p>
        <p>{this.state.shippingSummary.state}, {this.state.shippingSummary.zip}</p>
        <button>Purchase</button>
      </form>
    );
  }
}

export default ConfirmationPage;