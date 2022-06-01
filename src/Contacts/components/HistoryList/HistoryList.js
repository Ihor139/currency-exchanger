import React from "react";
import {ListGroup} from "react-bootstrap";
import "./HistoryList.css";
import {forEach} from "react-bootstrap/ElementChildren";

class HistoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-lg-6 col-sm-6">
        <h2>History</h2>

        <ListGroup className="list-group">
          {
            this.props.historyList.map((el, key) => (
              <ListGroup.Item key={key} className="list-group-item d-flex justify-content-between align-items-center">
                <span className="badge bg-primary rounded-pill">{el.typeCurrency}</span>
                <div className="ms-3 me-auto">
                  <div className="fw-bold">{el.amountCurrency} / {el.resultCount} </div>
                </div>
              </ListGroup.Item>
            ))
          }
        </ListGroup>
      </div>
    );
  }
}

export default HistoryList;
