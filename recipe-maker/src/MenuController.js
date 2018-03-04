import React from 'react';

class MenuController extends React.Component {
  render() {
    return(
      <div style={styles.controller}>
        <div>
          <div>

          </div>
          <div style={styles.title}>
            <p style={styles.titleFont}>ADAM'S</p>
            <p style={styles.titleFont}>RECIPE BOX</p>
          </div>
        </div>
        <div style={styles.optionButton}>
            <p style={styles.titleFont}>Add a New Recipe</p>
        </div>
        <div style={styles.optionButton}>
            <p style={styles.titleFont}>Show All Recipes</p>
        </div>
        <div style={styles.deleteButton}>
            <p style={styles.titleFont}>Remove All Recipes</p>
        </div>
      </div>
    )
  }
}

const styles = {
  controller: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '20px 0 20px 0',
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleFont: {
    fontSize: 30,
    margin: 0,
  },
  optionButton: {
    height: '26px',
    width: '17vw',
    padding: '10px',
    border: '1px black solid',
    margin: '5px',
    backgroundColor: '#10D091',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    height: '26px',
    width: '17vw',
    padding: '10px',
    border: '1px black solid',
    margin: '5px',
    backgroundColor: '#FF6464',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default MenuController;
