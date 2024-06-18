import React, { Component } from 'react';
import './App.css';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirstImage: true,
    };
  }

  toggleImage = () => {
    this.setState((prevState) => ({
      isFirstImage: !prevState.isFirstImage,
    }));
  };

  render() {
    const { isFirstImage } = this.state;
    const imageUrl = isFirstImage ? 'https://via.placeholder.com/150/0000FF/808080?text=First+Image' : 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Second+Image';
    const imageName = isFirstImage ? 'First Image' : 'Second Image';

    return (
      <div className="Toggle">
        <button onClick={this.toggleImage}>Toggle Image</button>
        <div className="image-name">{imageName}</div>
        <img src={imageUrl} alt={imageName} />
      </div>
    );
  }
}

export default Toggle;