import React from "react";
import "./RateContainer.css";
import ExchangeCalculator from "../ExchangeCalculator/ExchangeCalculator";
import CardGroup from "../CardGroup/CardGroup";
import HistoryList from "../HistoryList/HistoryList";

class RateContainer extends React.Component {
  constructor(props) {
    super(props);
    this.endpoint = "latest";
    this.access_key = "69ce8c8935ba8614451ddc1d6a23c2d6";
    this.baseCur = "EUR"
    // this.options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
    //     'X-RapidAPI-Key': 'f79aa61510msha16ec698060ea67p10f352jsn99b827532fe5'
    //   }
    // };
    this.favorites = ["USD", "AUD", "CAD", "PLN", "UAH", "PHP"];
    this.state = {
      date: "",
      favoritesRate: {},
      rates: null,
      historyList: []
    }
  }

  componentDidMount() {
    // fetch('https://currency-exchange.p.rapidapi.com/listquotes', this.options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));
    fetch(
      `http://api.exchangeratesapi.io/v1/${this.endpoint}?access_key=${this.access_key}&base=${this.baseCur}` // 1000
    )
      .then((data) => data.json())
      .then((data) => {
        let result = {};
        for (let i = 0; i < this.favorites.length; i++) {
          result[this.favorites[i]] = data.rates[this.favorites[i]];
        }
        this.setState({
          favoritesRate: result,
          date: data.date,
          rates: data.rates,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  saveDataToLocalStorage = data => {
    let historyItem = {
      typeCurrency: data.typeCurrency,
      amountCurrency: data.amountCurrency,
      resultCount: data.resultCount
    }
    this.setState({
      historyList: [...this.state.historyList, historyItem]
    })
  }

  render() {
    return (
      <div>
        <h2 className="container-fluid mt-4">Rate</h2>
        <div className="container-fluid">
          <CardGroup
            favoritesRate={this.state.favoritesRate}
            date={this.state.date}
          />
        </div>

        <div className="container-fluid mt-lg-5 mt-sm-3">
          <div className="row">
            <ExchangeCalculator rates={this.state.rates} pullData={this.saveDataToLocalStorage}/>
            <HistoryList historyList={this.state.historyList}/>
          </div>
        </div>
      </div>
    );
  }
}

export default RateContainer;
