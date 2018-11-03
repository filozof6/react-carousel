import React from "react";

class ImagesContainer extends React.Component {

  render() {
    return (
      <img src={this.props.value} id={this.props.key} className={this.props.className} />
    );
  }
}
export default ImagesContainer;
