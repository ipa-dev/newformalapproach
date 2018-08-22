import React, { Component } from 'react';
import Home from './page/Home';
import HeaderContainer from './page/HeaderContainer';
import FooterContainer from './page/FooterContainer';

class PageContainer extends Component {
  getPageComponent (propPage) {
    switch (propPage) {
      case 'Home':
        return <Home/>
      break;
      default:
        return <Home/>
    }
  }
  render() {
    return (
      <div className="container">
        <HeaderContainer/>
        {this.getPageComponent(this.props.page)}
        <FooterContainer/>
      </div>
    )
  }
}

export default PageContainer;
