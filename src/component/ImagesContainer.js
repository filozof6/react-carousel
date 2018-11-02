import React from "react";
import Image from "./Image";
import ReactCSSTransitionGroup from 'react-transition-group';

class ImagesContainer extends React.Component {

  render() {
    var listItems = this.props.images.map((image) =>
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
