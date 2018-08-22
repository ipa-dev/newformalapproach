import React, { Component } from 'react';
import NavBarContainer from './header/NavBarContainer';
import HeaderMessage from './header/HeaderMessage';

class HeaderContainer extends Component {
  render() {
    return (
      <div className="header">
        <HeaderMessage/>
        <NavBarContainer/>
      </div>
    )
  }
}

export default HeaderContainer;
