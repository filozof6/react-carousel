import React from "react";
import ArrowsContainer from "./ArrowsContainer";
import ImagesContainer from "./ImagesContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {value:"img/1.jpg", key:1},
        {value:"img/2.jpg", key:2},
        {value:"img/3.jpg", key:3},
        {value:"img/4.jpg", key:4},
        {value:"img/5.jpg", key:5},
        {value:"img/6.jpg", key:6}
      ],
      display: []
    };
    this.fillDisplay(true);
  }

  switchElement(array, direction) {
    var element;
    if (direction === "+") {
      element = array.shift();
    } else {
      element = array.pop();
    }

    this.fillDisplay(false, direction);
  }

  getNeighborArrayItem(array, item, direction) {
    var returnItem;
    var index = array.indexOf(item);
    var ifnotExistsIndex;
    var newIndex;

    if (direction == "+") {
      ifnotExistsIndex = 0;
    } else if (direction == "-") {
      ifnotExistsIndex = this.state.images.length-1;
    } else {
      console.error("Bad value for direction parameter");
    }

    if (index === -1 ||
      (direction === "+" && index === this.state.images.length-1 ) ||
      (direction === "-" && index === 0) ) {
      returnItem = array[ifnotExistsIndex];
    } else {
      newIndex = eval("index "+direction+" 1");
      returnItem = array[newIndex];
    }

    return returnItem;
  }

  fillDisplay(init, direction) {
    var direction = direction || "+";
    var display = this.state.display || [];

    if (display.length === 0) {
      display = this.state.images.slice(0,3);
    } else if (display.length < 3) {
      while(display.length < 3) {
        if (direction === "+") {
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
        <ImagesContainer images={this.state.display}/>
        <ArrowsContainer switchElement={this.switchElement.bind(this)} images={this.state.display}/>
      </div>
    );
  }
}
export default App;
