import React from "react";
import { APP_CONFIG } from '../config.js';

class Arrow extends React.Component {

  constructor (props) {
      super(props);
      this.onLaunchClicked = this.onLaunchClicked.bind(this);
      this.state = {
          isButtonDisabled: false
      }
  }

  onLaunchClicked (event) {
      event.preventDefault();
      this.setState({
          isButtonDisabled: true
      });

      setTimeout(() => this.setState({ isButtonDisabled: false }), APP_CONFIG.animationDelay);

  }

  render() {
    return (
      <button className="component-arrow"
        onClick={(e) =>{this.props.switchElement(this.props.images, this.props.direction); this.onLaunchClicked(e);} }
        disabled={this.state.isButtonDisabled} className="btn"
        >
        {this.props.anchorText}
      </button>
    );
  }
}

export default Arrow;
