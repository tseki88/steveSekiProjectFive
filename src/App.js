import React, { Component } from 'react';
import {Header} from 'semantic-ui-react';
// import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <Header as="h1" inverted>Board Game Toolkit</Header>
        </header>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
