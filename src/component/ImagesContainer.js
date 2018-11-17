import React from "react";
import Image from "./Image";
import {CSSTransitionGroup} from 'react-transition-group';
import {TransitionGroup} from 'react-transition-group';
import { CSSTransition, transit } from "react-css-transition";
import ReactDOM from "react-dom";

class ImagesContainer extends React.Component {

  render() {
    console.log(CSSTransition);
    var updatedRefs = [];

    var middleIndex = this.props.images.length / 2 - 0.5;
      console.log("this.props.images");
      console.log(middleIndex)
    var listItems = this.props.images.map((image, i) =>      
        <Image value={image.value} key={image.key} className={i===middleIndex ? "img-center" : "img-normal"}  direction={this.props.direction} />
    );

    return (
      <div className="component-images">
        <span className="helper"></span>
        <TransitionGroup
          delay={500}
        >
          {listItems}
        </TransitionGroup>
      </div>
    );
  }
}
export default ImagesContainer;
