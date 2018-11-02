import React from "react";

class Arrow extends React.Component {
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
      <a className="component-arrow">
        {this.props.anchorText}
      </a>
    );
  }
}
export default Arrow;
