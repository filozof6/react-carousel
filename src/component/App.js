import React from "react";
import ArrowsContainer from "./ArrowsContainer";
import ImagesContainer from "./ImagesContainer";
import { APP_CONFIG } from '../config.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: APP_CONFIG.images,
      display: [],
      direction: APP_CONFIG.directionFlags.right
    };
    this.fillDisplay(true);
  }

  switchElement(array, direction) {
    var element;
    if (direction === APP_CONFIG.directionFlags.right) {
      element = array.shift();
    } else {
      element = array.pop();
    }

    this.fillDisplay(false, direction);
    this.setState({
      direction: direction
    });
  }

  getNeighborArrayItem(array, item, direction) {
    var returnItem;
    var index = array.indexOf(item);
    var ifnotExistsIndex;
    var newIndex;

    if (direction == APP_CONFIG.directionFlags.right) {
      ifnotExistsIndex = 0;
    } else if (direction == APP_CONFIG.directionFlags.left) {
      ifnotExistsIndex = this.state.images.length-1;
    } else {
      console.error(APP_CONFIG.directionFlags.errorMessage);
    }

    if (index === -1 ||
      (direction === APP_CONFIG.directionFlags.right && index === this.state.images.length-1 ) ||
      (direction === APP_CONFIG.directionFlags.left && index === 0) ) {
      returnItem = array[ifnotExistsIndex];
    } else {
      newIndex = eval("index "+direction+" 1");
      returnItem = array[newIndex];
    }

    return returnItem;
  }

  fillDisplay(init, direction) {
    var direction = direction || APP_CONFIG.directionFlags.right;
    var display = this.state.display || [];

    if (display.length === 0) {
      display = this.state.images.slice(0,APP_CONFIG.displayNumber);
    } else if (display.length < APP_CONFIG.displayNumber) {
      while(display.length < APP_CONFIG.displayNumber) {
        if (direction === APP_CONFIG.directionFlags.right) {
          var lastElement = display[display.length-1];
          display.push(this.getNeighborArrayItem(this.state.images, lastElement, direction));
        } else {
          var firstElement = display[0];
          display.unshift(this.getNeighborArrayItem(this.state.images, firstElement, direction));
        }
      }
    }

    if (init) {
      this.state.display = display;
    } else {
      this.setState({
        display: display
      });
    }
  }

  render() {
    return (
      <div className="component-app">
        <ImagesContainer images={this.state.display} direction={this.state.direction}/>
        <ArrowsContainer switchElement={this.switchElement.bind(this)} images={this.state.display}/>
      </div>
    );
  }
}
export default App;
