import React, { Component } from 'react';
import MenuController from './MenuController';
import RecipeList from './RecipeList';
import Recipes from './Recipes';

import './App.css';

class App extends Component {
  state = {
    recipes: [
      {
        name: 'Beef Wellington',
        ingredients: [
          '- 400g flat cap mushrooms, roughly chopped',
          '- sea salt and freshly ground black pepper',
          '- olive oil, for cooking',
          '- 750g piece of prime beef fillet',
          '- 1-2tbsp English mustard',
          '- 6-8 slices of Parma ham',
          '- 500g ready-made puff pastry',
          '- flour, to dust',
          '- 2 egg yolks, beaten',
        ]
      },
      {
        name: 'Kimchi Jjigae',
        ingredients: [
          '- 1 pound kimchi, cut into bite size pieces',
          '- ¼ cup kimchi brine',
          '- ½ pound pork shoulder (or pork belly)',
          '- ½ package of tofu (optional), sliced into ½ inch thick bite size pieces',
          '- 1 teaspoon salt',
          '- 2 teaspoons sugar',
          '- 2 teaspoons gochugaru (Korean hot pepper flakes)',
          '- 1 tablespoon gochujang (hot pepper paste)',
          '- 1 teaspoon sesame oil',
          '- 2 cups of anchovy stock (or chicken or beef broth)',
        ]
      },
    ]
  }

  render() {
    const { recipes } = this.state;
    return (
      <div style={styles.app}>
        <div style={styles.leftColumn}>
          <MenuController />
          <RecipeList recipes={recipes} />
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
