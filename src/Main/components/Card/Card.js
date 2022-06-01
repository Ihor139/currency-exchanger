import React from "react";
import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-sm-6 col-lg-2 mb-4 mb-sm-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.curName}</h5>
            <h2>{this.props.curValue}</h2>
            <p className="card-text">
              <small className="text-muted">Last updated {this.props.date}</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
