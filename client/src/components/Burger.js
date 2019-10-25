import React, { useState } from 'react';
import { HamburgerSpin } from 'react-animated-burgers';

class HamburgerSpin extends Component {
  state = {
    isActive: false
  };

  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    return (
      <HamburgerSpin
        isActive={this.state.isActive}
        toggleButton={this.toggleButton}
        buttonColor='#718878'
        barColor='#cd6647'
      />
    );
  }
}

export default HamburgerSpin;
