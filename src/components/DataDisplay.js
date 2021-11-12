import React, { useEffect, useState } from "react";
import { Line, Chart } from "react-chartjs-2";
import Row from 'react-bootstrap/Row'

export const DataDisplay = (props) => {
  const { currency } = props;
  const [bitcoinData, setBitcoinData] = useState({});
  // fetching data is a side effect of our app's state changing/being set
  async function getCurrency(curr) {
    const response = await fetch(
      `https://api.coindesk.com/v1/bpi/historical/close.json?currency=${curr}`
    );
    const data = await response.json();
    //set the state
    setBitcoinData(data.bpi);
  }
  useEffect(() => {
    getCurrency(currency);
    // fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}`)
    //     .then(response => response.json())
    //     .then(data => setBitcoinData(data.bpi))
    //     .catch(error => console.log(error))
  }, [currency]);

  Chart.defaults.defaultFontColor = "#000";
  Chart.defaults.defaultFontSize = 16;

  function formatChartData() {
    // sets up large config object for Line Chart
    return {
      // Takes the keys from the 'bitcoinData' object in state
      labels: Object.keys(bitcoinData), // eg ["2021-10-10", "2021-10-11"]
      datasets: [
        {
          label: "Bitcoin",
          fill: true,
          lineTension: 0.4,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          // Takes the keys from the 'bitcoinData' object in state
          data: Object.values(bitcoinData), // eg [500242, 450252, 3252023]
        },
      ],
    };
  }

  function chartLabels() {
    return {
      plugins: {
        title: {
          display: false, 
          text: `Bitcoin in ${currency}`
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Date"
          }
        },
        y: {
          title: {
            display: true,
            text: currency
          }
        }
      }
    }
  }

  return (
    <>
      <h3>Bitcoin in {currency}</h3>
      <Row className="justify-content-md-center">
        <div style={{ margin: "1rem", maxWidth: "1000px" }}>
          <Line height={150} data={formatChartData()} options={chartLabels()} />
        </div>
      </Row>
    </>
  );
};
