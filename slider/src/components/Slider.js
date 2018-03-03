import React from 'react';
import Thumbnail from './Thumbnail';
import p1 from '../images/one.jpg';
import p2 from '../images/two.jpg';
import p3 from '../images/three.jpg';
import p4 from '../images/four.jpg';
import p5 from '../images/five.jpg';
import p6 from '../images/six.jpg';

const images = [
  {pic: p1, id: 0},
  {pic: p2, id: 1},
  {pic: p3, id: 2},
  {pic: p4, id: 3},
  {pic: p5, id: 4},
  {pic: p6, id: 5},
]

class Slider extends React.Component {
  state = {
    picture: 0,
  }

  incrementImages = (direction) => {
    let { picture } = this.state;
    if (direction == 'left') {
      if (picture == 0) {
        this.setState({ picture: 5 })
      } else {
        this.setState({ picture: picture - 1 })
      }
    } else {
      if (picture == 5) {
        this.setState({ picture: 0})
      } else {
        this.setState({ picture: picture + 1 })
      }
    }
  }

  imagePicker = (imageValue) => {
    this.setState({ picture: imageValue })
  }

  render() {
    const leftButton = '<'
    const rightButton = '>'
    return(
      <div style={styles.container}>
        <div style={styles.mainRow}>
          <button
            onClick={() => this.incrementImages('left')}
            style={styles.buttonFont}
          >{leftButton}</button>
          <img style={styles.mainImage} src={images[this.state.picture].pic} />
          <button
            onClick={() => this.incrementImages('right')}
            style={styles.buttonFont}
          >{rightButton}</button>
        </div>
        <div style={styles.thumbRow}>
          <Thumbnail images={images} chosenImage={this.imagePicker} />
        </div>
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
  mainRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonFont: {
    fontSize: 30,
  },
  thumbRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default Slider;
