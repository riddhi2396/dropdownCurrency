import React, { Component } from "react";
import './App.scss';

class App extends Component {

  state = {
    result: null
  }

  getValue = (e) => {
    let value = e.target.value;
    if(value === 'rupee') {
      this.setState({result: '75.49 ruppes'})
    } else if(value === 'euro') {
      this.setState({result: '0.89 euro'})
    } else if(value === 'franc') {
      this.setState({result: '0.95 franc'})
    }
  }

  render() {
  return (
    <div className="App">
      <div className='container'>
        <div>
        <label htmlFor="curency">Choose a currency:</label>
          <select name="currency" className='drop-down'  onChange={(e)=>this.getValue(e)}>
            <option value="rupee">Rupees</option>
            <option value="euro">Euro</option>
            <option value="franc">Franc</option>
          </select>
        </div>
        {
          this.state.result != null ? (<div className='result'>
          <p>{this.state.result}</p>
          </div>) : null
        }
        
      </div>
    </div>
  )};
}

export default App;
