import React from 'react'

const Stock = (props) => {
  
  //  {name, ticker, type, price} = props.stockObj
   return(
   <div>

    <div className="card" onClick={() => props.grabPortStock(props.stockObj)}>
      <div className="card-body">
        <h5 className="card-title">{
            props.stockObj.name
          }</h5>
        <p className="card-text">{
            //ticker: stock price
            `${props.stockObj.ticker} : ${props.stockObj.price} `
          }</p>
      </div>
    </div>


  </div>
   )
  };

export default Stock
