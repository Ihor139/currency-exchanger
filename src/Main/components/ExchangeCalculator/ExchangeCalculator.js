import React from "react";
import "./ExchangeCalculator.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rates: {},
      item: {
        typeCurrency: null,
        amountCurrency: null,
        resultCount: "0.00",
      }
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // ------------??????????------------
    if (prevProps.rates !== this.props.rates) {
      this.setState({rates: this.props.rates});
    }
    // ------------??????????------------
  }

  // handleChange = (evt) => {
  //   const name = evt.target.name;
  //   const value =
  //     evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  //   console.log(this.state.typeCurrency);
  // };

  calcRate = (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    let typeCurrency = elements["typeCurrency"].value;
    let amountCurrency = elements["amountCurrency"].value;
    this.setState({
      item: {
        typeCurrency: elements["typeCurrency"].value,
        amountCurrency: elements["amountCurrency"].value,
        resultCount: (amountCurrency / this.state.rates[typeCurrency]).toFixed(2),
      }
    }, () => {
      this.props.pullData(this.state.item)
    });
  };

  render() {
    return (
      <div className="col-lg-6 col-sm-6">
        <h2>Calculator</h2>
        <form onSubmit={(e) => this.calcRate(e)}>
          <div className="mb-2">
            <input
              name="typeCurrency"
              className="form-control"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Type to search..."
              // onChange={(event) => this.handleChange(event)}
              defaultValue=""
            />
            <datalist id="datalistOptions">
              {Object.keys(this.state.rates).map((rate, i) => (
                <option value={rate} key={i}/>
              ))}
            </datalist>
          </div>
          <div className="">
            <div className="input-group mb-3">
              <input
                name="amountCurrency"
                type="text"
                className="form-control"
                aria-label="Dollar amount (with dot and two decimal places)"
                // onChange={(event) => this.handleChange(event)}
              />
              <span className="input-group-text">{this.state.item.resultCount}</span>
            </div>
          </div>
          <div className="col-1">
            <div className="input-group mb-3">
              <input type="submit" className="btn btn-dark"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Calculator;
