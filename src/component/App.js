import React from "react";
import ArrowsContainer from "./ArrowsContainer";
import ImagesContainer from "./ImagesContainer";

class App extends React.Component {
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
      <div className="component-app">
        <ImagesContainer />
        <ArrowsContainer />
      </div>
    );
  }
}
export default App;
