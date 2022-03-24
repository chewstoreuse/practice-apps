import React from 'react';

const ConfirmationPage = (props) => (
  <form onSubmit={() => {
    props.onFormSubmit('/confirmed');
    props.onClickNext('ConfirmationPage');
  }}>
    <h1>Order Summary</h1>
    <p>insert order info here...</p>
    <button>Purchase</button>
  </form>
);

export default ConfirmationPage;