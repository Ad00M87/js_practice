import React from 'react';

const RecipeList = ({ recipes }) => {
  return(
    <div style={styles.recipeList}>
      <p style={styles.titleFont}>RECIPE LIST:</p>
      {recipes.map( recipe => {
        return(
          <div style={styles.recipeButton}>
              <p style={styles.titleFont}>{recipe.name}</p>
          </div>
        )
      })}
    </div>
  )
}

const styles = {
  recipeButton: {
    height: '26px',
    width: '17vw',
    padding: '10px',
    border: '1px black solid',
    margin: '5px',
    backgroundColor: '#FFE37D',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleFont: {
    fontSize: 30,
    margin: 0,
  },
  recipeList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}

export default RecipeList;
