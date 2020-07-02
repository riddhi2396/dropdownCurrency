import React, { Component } from "react";
import "./App.scss";
import { obj } from "./constant";
import ListView from "./listView";

class App extends Component {
  state = {
    result: null,
  };
  key;
  value;

  getValue = (e) => {
    let value = e.target.value;
    this.setState({ result: value });
    console.log(value);
  };
  componentWillMount() {
    console.log(obj);
    this.key = Object.keys(obj.currencyConvertion);

    this.value = Object.values(obj.currencyConvertion);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div>
            <label htmlFor="curency">Choose a currency:</label>
            <select
              name="currency"
              className="drop-down"
              onChange={(e) => this.getValue(e)}
            >
              {this.key &&
                this.key.map((key, index) => {
                  return (
                    <option
                      value={this.value[index]}
                    >{`${key} (${this.value[index]})`}</option>
                  );
                })}
            </select>
          </div>
          {this.state.result != null ? (
            <div className="result">
              <p>{this.state.result}</p>
            </div>
          ) : null}

          <ListView currency={this.state.result} />
        </div>
      </div>
    );
  }
}

export default App;
