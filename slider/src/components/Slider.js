import React from 'react';

function importAll(r) {
  let images = [];
  r.map((item, index) => { images[index] = item; });
  return images;
}

const images = importAll(require.context('../images', false, '/.jpg/'));

class Slider extends React.Component {
  state = {
    picture: 0,
  }
  render() {
    return(
      <div style={styles.container}>
        <img style={styles.mainImage} src={images[this.state.picture]} />
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: '5px 50px 5px 50px',
  },
  mainImage: {
    height: '600px',
    width: '1200px',
  },
}

export default Slider;
