import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushiList: [],
    indexStart: 0,
    moneyAmount: 100,
    dishEaten: []
  }
  
  componentDidMount() {
    fetch(`${API}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ sushiList: data })
      });
  }

  handleButtonClick = e => {
    this.setState({indexStart: this.state.indexStart + 4});
  }

  handleSelectedSushi = sushiInfo => {
    if (sushiInfo.price < this.state.moneyAmount && !sushiInfo.isEaten) {
      this.setState(prevState => ({
        sushiList: prevState.sushiList.map(sushi => sushi.id === sushiInfo.id ? {...sushi, isEaten: true} : sushi),
        moneyAmount: prevState.moneyAmount - sushiInfo.price,
        dishEaten: [...prevState.dishEaten, 'whatever']
      })); 
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          handleSelectedSushi={this.handleSelectedSushi}
          onButtonClick={this.handleButtonClick}
          list={this.state.sushiList.slice(this.state.indexStart, this.state.indexStart + 4)} />
        <Table remaindingMoney={this.state.moneyAmount} dishEaten={this.state.dishEaten}/>
      </div>
    );
  }
}

export default App;