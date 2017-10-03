import React, { Component } from "react";

import Header from './Header';
import SideBarDrawer from './Side-Bar-Drawer';

class CoreNav extends Component {
  render() {
    return (
      <div>
        <Header />
        <SideBarDrawer />
      </div>
    );
  }
}

export default CoreNav;
