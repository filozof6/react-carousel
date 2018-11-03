import React from "react";
import Image from "./Image";
import {CSSTransitionGroup} from 'react-transition-group';
import {TransitionGroup} from 'react-transition-group';
import rtg from 'react-transition-group';

class ImagesContainer extends React.Component {

  render() {
    var listItems = this.props.images.map((image, i) =>
        <Image value={image.value} key={image.key} className="img-normal" />
    );

    return (
      <div className="component-images">
        <span className="helper"></span>

          {listItems}
      </div>
    );
  }
}
export default ImagesContainer;
