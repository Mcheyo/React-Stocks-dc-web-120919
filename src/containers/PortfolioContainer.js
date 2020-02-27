import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.props.portStocks.map((stock, index) => <Stock key={index} stockObj={stock} grabPortStock={this.props.removePortStock}/>)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
