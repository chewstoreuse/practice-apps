import React from 'react';

const HomePage = (props) => (
  <div className='home-page'>
    <button onClick={() => props.onClickNext('HomePage')}>Checkout</button>
  </div>
);

export default HomePage;