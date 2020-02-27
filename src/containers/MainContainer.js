import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
state= { 
  stocks: [], 
  portfolio:[]
}

componentDidMount(){ 
  fetch('http://localhost:3000/stocks')
  .then(res => res.json())
  .then(stocks => this.setState({stocks: stocks}))
}

grabPortStock = (stock) => { 
  let portId = this.state.portfolio.length
  
 let newArray = [...this.state.portfolio, {...stock, key:portId}]
 this.setState({portfolio: newArray})
 

}
removePortStock = (stock) => { 
  let findStock = this.state.portfolio.find(stk => stk.key === stock.key)
  let index = this.state.portfolio.indexOf(findStock)
  let copyPort = [...this.state.portfolio]
  copyPort.splice(index, 1)
  
  
  this.setState({portfolio: copyPort})


}
  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} grabPortStock={this.grabPortStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portStocks={this.state.portfolio} removePortStock={this.removePortStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
