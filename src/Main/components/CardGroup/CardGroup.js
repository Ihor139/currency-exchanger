import React from "react";
import "./CardGroup.css";
import Card from "../Card/Card";

class CardGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row card-group mt-3">
        {Object.keys(this.props.favoritesRate).map((curName, i) => (
          <Card
            curName={curName}
            curValue={this.props.favoritesRate[curName].toFixed(2)}
            date={this.props.date}
            key={i}
          />
        ))}
      </div>
    );
  }
}

export default CardGroup;
