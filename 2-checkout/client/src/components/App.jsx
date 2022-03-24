import React from 'react';
import axios from 'axios';
import HomePage from './pages/HomePage.jsx';
import CreateAccount from './pages/CreateAccount.jsx';
import ShippingPage from './pages/ShippingPage.jsx';
import BillingPage from './pages/BillingPage.jsx';
import ConfirmationPage from './pages/ConfirmationPage.jsx';

var pages = ['HomePage', 'CreateAccount', 'ShippingPage', 'BillingPage', 'ConfirmationPage'];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: pages[0]
    }

    this.onClickNext = this.onClickNext.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onClickNext(currPage) {
    var index = pages.indexOf(currPage);
    this.setState({
      currentPage: pages[index + 1] !== undefined ? pages[index + 1] : pages[0]
    });

    //not sure why this allows the form to connect
    event.preventDefault();
  }

  onFormSubmit(route) {
    console.log(route);
  }

  render() {
    if (this.state.currentPage === 'HomePage') {
      return (<HomePage onClickNext={this.onClickNext} />);
    } else if (this.state.currentPage === 'CreateAccount') {
      return (<CreateAccount onClickNext={this.onClickNext} onFormSubmit={this.onFormSubmit} />);
    } else if (this.state.currentPage === 'ShippingPage') {
      return (<ShippingPage onClickNext={this.onClickNext} onFormSubmit={this.onFormSubmit} />);
    } else if (this.state.currentPage === 'BillingPage') {
      return (<BillingPage onClickNext={this.onClickNext} onFormSubmit={this.onFormSubmit} />);
    } else {
      return (<ConfirmationPage onClickNext={this.onClickNext} onFormSubmit={this.onFormSubmit} />);
    }
  }
}

export default App;