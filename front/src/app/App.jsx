import React, { Component } from 'react';
import { hot } from 'react-hot-loader'

import { checkMetaMask } from '../helpers/eth';
import Metamask from './metamask/Metamask';
import Register from './register/Register';
import Main from './main/Main';
import Admin from './admin/Admin';
import Mining from './mining/Mining';

import './App.less';

class App extends Component {
  render() {
    const { screen } = this.props;

    const status = checkMetaMask();

    let content;

    if (status !== 'okMetamask') {
      content = <Metamask status={status} />
    } else {
      switch (screen) {
        case 'main-screen':
          content = <Main />
          break;
        case 'register-screen':
          content = <Register />
          break;
        case 'admin-screen':
          content = <Admin />
          break;
        case 'mining-screen':
          content = <Mining />
          break;

        default:
          break;
      }
    }

    return (
      <div className="app screen flex">
        {content}
      </div>
    );
  }
};


export default  hot(module) (App);