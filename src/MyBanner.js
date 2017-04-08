import React, { Component } from 'react';

export default class MyBanner extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { name, address = {} } = this.props;

    console.log(this.props);

    return (
      <marquee>
        <h1>{name}</h1>
        <address>
          {address.street} <br />
          {address.city}, {address.state} {address.zip}
        </address>
      </marquee>
    );
  }
}


