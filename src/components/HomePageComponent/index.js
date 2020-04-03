import React, { Component } from 'react';
import Slider from '../Common/Slider/slider';

class HomePageComponent extends Component {
  constructor(props) {
    super(props);   
  }

componentWillMount() {
  
}

  render() {
    return (
      <div>
        <Slider />
      </div>
    );
  }
}

export default HomePageComponent;
