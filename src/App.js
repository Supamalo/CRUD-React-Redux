import React, { Component, Fragment } from 'react';
import Search from './components/Search'
import Table from './components/Table'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Search />
        <Table />
      </Fragment>
    );
  }
}

export default App;
