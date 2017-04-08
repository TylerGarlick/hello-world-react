import React, { Component } from 'react';
import './App.css';
import MyBanner from './MyBanner';

class App extends Component {

  render() {

    const myAddress = {
      street: 'Somewhere',
      city: 'SLC',
      state: 'UT',
      zip: '12334'
    };

    return (
      <div>
        <MyBanner
          name="Tyler"
          address={myAddress}
        />
      </div>
    );
  }
}

export default App;
