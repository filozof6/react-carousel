import React from "react";

class Arrow extends React.Component {

  render() {
    return (
      <button className="component-arrow" onClick={() =>this.props.switchElement(this.props.images, this.props.direction)}>
        {this.props.anchorText}
      </button>
    );
  }
}
export default Arrow;
