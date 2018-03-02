import React from 'react';
import pic1 from '../images/one.jpg';
import pic2 from '../images/two.jpg';
import pic3 from '../images/three.jpg';
import pic4 from '../images/four.jpg';
import pic5 from '../images/five.jpg';
import pic6 from '../images/six.jpg';

class Slider extends React.Component {
  state = {
    picture: 1,
  }

  render() {
    return(
      <div style={styles.container}>
        <img style={styles.mainImage} src={pic2} />
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
