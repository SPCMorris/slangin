import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionsIndex from '../actions/index';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../static/material_ui_raw_theme_file'

// Import index from components. We import all relevant components to index so we have one import here
import Index from '../components/index';

class App extends Component {
  render() {
    const { ActionsIndex, actions } = this.props;
    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <Index />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionsIndex, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
