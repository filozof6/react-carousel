import React from "react";
import Arrow from "./Arrow";

class ArrowsContainer extends React.Component {

  render() {
    return (
      <div className="component-arrows">
        <Arrow anchorText="<<<" switchElement={this.props.switchElement} direction="left" images={this.props.images}/>
        <Arrow anchorText=">>>" switchElement={this.props.switchElement} direction="right" images={this.props.images} />
      </div>
    );
  }
}
export default ArrowsContainer;
