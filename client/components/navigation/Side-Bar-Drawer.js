import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

class SideBarDrawer extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onClick={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <MenuItem onClick={this.handleToggle}>
            Close the drawer!
          </MenuItem>
          <Divider />
          <MenuItem>A</MenuItem>
          <MenuItem>B</MenuItem>
          <MenuItem>... Render A-Z List</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default SideBarDrawer;