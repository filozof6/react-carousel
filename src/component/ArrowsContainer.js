import React from "react";
import Arrow from "./Arrow";

class ArrowsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    return (
      <div className="component-arrows">
        <Arrow anchorText="<<<" />
        <Arrow anchorText=">>>" />
      </div>
    );
  }
}
export default ArrowsContainer;
