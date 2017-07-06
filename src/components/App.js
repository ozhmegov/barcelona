import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from "./Header";
import Main from "./Main";

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Main />
        </div>
    );
  }
}

function mapStateToProps (state) {
    return {
        user: state.user,
        page: state.page
    }
}

export default withRouter(connect(mapStateToProps)(App))