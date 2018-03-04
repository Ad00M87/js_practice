import React, { Component } from 'react';
import MenuController from './MenuController';
import RecipeList from './RecipeList';
import Recipes from './Recipes';

import './App.css';

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        <div style={styles.leftColumn}>
          <MenuController />
          <RecipeList />
        </div>
        <div style={styles.rightColumn}>
          <Recipes />
        </div>
      </div>
    );
  }
}

const styles = {
  app: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#379BFF'
  },
  leftColumn: {
    width: '20vw',
    height: '100vh',
    backgroundColor: '#9388F2',
    borderRight: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  rightColumn: {
    width: '80vw',

  },
}

export default App;
