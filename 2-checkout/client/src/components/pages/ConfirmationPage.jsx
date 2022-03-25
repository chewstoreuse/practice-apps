import React from 'react';
import axios from 'axios';

class ConfirmationPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      accountSummary: [],
      shippingSummary: [],
      billingSummary: []
    }
  }

  componentDidMount() {
    axios.get('/getSummary')
    // .then()
  }

  render() {
    return (
      <form onSubmit={() => { this.props.onClickNext('ConfirmationPage') }}>
        <h1>Order Summary</h1>
        <p>insert order info here...</p>
        <button>Purchase</button>
      </form>
    );
  }
}

export default ConfirmationPage;