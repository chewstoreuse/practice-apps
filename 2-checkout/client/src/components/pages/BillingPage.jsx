import React from 'react';

class BillingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={() => {
        this.props.onFormSubmit('/billingInfo');
        this.props.onClickNext('BillingPage');
      }}>
        <h1>Billing Information</h1>
        <input placeholder='CC #' name='credit' />
        <input placeholder='Expiration Date' name='expire' />
        <input placeholder='CVV' name='cvv' />
        <input placeholder='Billing Zip Code' name='billingZip' />
        <button>Next</button>
      </form >
    )
  }
}

export default BillingPage;