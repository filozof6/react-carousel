import React from "react";
import Arrow from "./Arrow";
import { APP_CONFIG } from '../config.js';

class ArrowsContainer extends React.Component {

  render() {
    return (
      <div className="component-arrows">
        <Arrow anchorText="<<<" switchElement={this.props.switchElement} direction={APP_CONFIG.directionFlags.left} images={this.props.images}/>
        {' | '}
        <Arrow anchorText=">>>" switchElement={this.props.switchElement} direction={APP_CONFIG.directionFlags.right} images={this.props.images} />
      </div>
    );
  }
}
export default ArrowsContainer;
