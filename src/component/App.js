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
        {value:"img/3.jpg", key:3}
      ]
    };
  }

  switchElement(array, direction) {
    if (direction === "right") {
      var element = array.shift();
      array.push(element);
    } else {
      var element = array.pop();
      array.unshift(element);
    }

    this.setState({images: array})
  }

  render() {
    return (
      <div className="component-app">
        <ImagesContainer images={this.state.images}/>
        <ArrowsContainer switchElement={this.switchElement.bind(this)} images={this.state.images}/>
      </div>
    );
  }
}
export default App;
