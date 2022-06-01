import React from "react";
import "./Main.css";
import RateContainer from "./components/RateContainer/RateContainer";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <RateContainer />
      </div>
    );
  }
}

export default Main;
