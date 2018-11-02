import React from "react";
import Image from "./Image";

class ImagesContainer extends React.Component {

  render() {
    return (
      <div className="component-arrows">
        <Image value="1" className="img-normal" />
        <Image value="2" className="img-center" />
        <Image value="3" className="img-normal" />
      </div>
    );
  }
}
export default ImagesContainer;
