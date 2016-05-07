import React from 'react';
import MainView from '../components/MainView.jsx';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {

  }


  render() {
    return (
      <MainView>
        

      </MainView>
    );
  }
}

function mapStateToProps(store) {
  return {

  }
}

export default connect(mapStateToProps)(App)
