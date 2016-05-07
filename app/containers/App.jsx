import React from 'react';
import MainView from '../components/MainView.jsx';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import request from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {

  }

  componentDidMount() {
    // this.props.dispatch(Actions.getDraftKings())
    this.props.dispatch(Actions.getPlayers())
  }

  render() {
    return (
      <MainView>
        Hello

      </MainView>
    );
  }
}

function mapStateToProps(store) {
  return {

  }
}

export default connect(mapStateToProps)(App)
