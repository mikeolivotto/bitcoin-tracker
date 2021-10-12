import React from 'react'
import currencyData from '../data/currency-data.json'



export const CurrencySelector  = (props) => {
    
    const {handleCurrencyChange, currency} = props
  return(
      <>
     <h2>Select Currency:</h2>
     <select value={currency} onChange={(e) => {handleCurrencyChange(e.target.value)}}>
         {currencyData.map(({currency, country}, index) => {
          return (<option 
            key={`${index}-${currency}`} 
            value={currency}>
            {country}</option>
            )
         })}
     </select>
     </>
   )

 }