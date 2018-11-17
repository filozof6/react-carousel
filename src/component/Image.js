import React from "react";
import {TweenMax} from "gsap/TweenMax";
import { APP_CONFIG } from '../config.js';

class ImagesContainer extends React.Component {

  constructor(props) {
     super(props);
     this.container = {};
   }

  componentWillEnter (callback) {
      const el =  this.container;
      if (this.props.direction === "+") {
        TweenMax.fromTo(el, APP_CONFIG.animationDelay / 1000,
          { x:100},
          { x:0, onComplete: callback});
      } else {
        TweenMax.fromTo(el, APP_CONFIG.animationDelay / 1000,
          { x:-100},
          { x:0, onComplete: callback});
      }
    }

  render() {
    return (
      <img src={this.props.value} id={this.props.key} className={this.props.className} ref={el => this.container = el} />
    );
  }
}
export default ImagesContainer;
