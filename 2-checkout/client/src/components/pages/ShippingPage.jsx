import React from 'react';

class ShippingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={() => {
        this.props.onFormSubmit('/shippingInfo');
        this.props.onClickNext('ShippingPage');
      }}>
        <h1>Shipping Address</h1>
        <input placeholder='Line 1' name='line1' />
        <input placeholder='Line 2' name='line2' />
        <input placeholder='State' name='state' />
        <input placeholder='Zip Code' name='zip' />
        <input placeholder='Phone Number' name='phone' />
        <button>Next</button>
      </form>
    );
  }
}

export default ShippingPage;