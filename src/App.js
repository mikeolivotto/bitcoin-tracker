import React, { useState } from 'react'
import { CurrencySelector } from './components/CurrencySelector';
import { DataDisplay } from './components/DataDisplay';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
 

const App = () => {
  
  const [currency, setCurrency] = useState("AUD");

  function handleCurrencyChange(newCurrency) {
    console.log("Got new currency: ", newCurrency);
    setCurrency(newCurrency);
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <div style={{ margin: "1rem", maxWidth: "1000px" }}>
                <h1 className="display-1">Bitcoin Price Tracker</h1>
                <span>Powered by <a href='https://www.coindesk.com/price/bitcoin' target="_blank" rel="noreferrer">CoinDesk</a></span>
                <CurrencySelector currency={currency} handleCurrencyChange={handleCurrencyChange} />
                <DataDisplay currency={currency} />
        </div>
      </Row>
    </Container>
  )
}

export default App
