import React from "react";
import currencyData from "../data/currency-data.json";

export const CurrencySelector = (props) => {
  const { handleCurrencyChange, currency } = props;
  return (
    <div style={{"margin": "20px 0 20px 0"}}>
      <p style={{"marginBottom": "0px"}}>Select Currency:</p>
      <select
        value={currency}
        onChange={(e) => {
          handleCurrencyChange(e.target.value);
        }}
      >
        {currencyData.map(({ currency, country }, index) => {
          return (
            <option key={`${index}-${currency}`} value={currency}>
              {country}
            </option>
          );
        })}
      </select>
    </div>
  );
};
