import React from "react";

class ImagesContainer extends React.Component {

  render() {
    return (
      <img src={this.props.value} className={this.props.className} />
    );
  }
}
export default ImagesContainer;
