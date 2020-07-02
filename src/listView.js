import React, { Component } from "react";
import "./styles.css";
import { arr } from "./constant";

class ListView extends Component {
  componentDidMount() {
    //console.log("here", this.props.currency);
  }
  render() {
    const { currency } = this.props;
    console.log(currency);

    return (
      <div>
        <div>
          {arr.map((item) => {
            return (
              <div className="detail-container">
                <div>code : {item.code}</div>
                <div>name : {item.name}</div>
                <div>price: {item.priceInDollar * currency}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListView;
