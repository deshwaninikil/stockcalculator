import { useState } from "react";
import "./App.css";

function App() {
  var profit = 0,
    profitPerc,
    loss,
    lossPerc,
    oldPrice,
    currentPrice,
    quant;

  const [stockOldPrice, setStockOldPrice] = useState(0);
  const [stockCurrentPrice, setStockCurrentPrice] = useState(0);
  const [quantity, setStocksQuantity] = useState(0);
  const [message, setMessage] = useState("");
  var imgUrl = "assets/sad.gif";
  var bgImage = {
    backgroundImage: "url(" + imgUrl + ")",
    width: "300px",
  };

  function checkReturns() {
    // oldPrice=parseInt(stockOldPrice)
    oldPrice = Number(stockOldPrice);
    currentPrice = Number(stockCurrentPrice);
    quant = Number(quantity);

    if (oldPrice > 0 && currentPrice > 0 && quant > 0) {
      if (currentPrice > oldPrice) {
        profit = (currentPrice - oldPrice) * quantity;
        profitPerc = ((currentPrice - oldPrice) / oldPrice) * 100;
        setMessage(
          `You have gained profit of ${profitPerc.toFixed(
            2
          )}%. Total Profit is Rs.${profit.toFixed(2)}`
        );
      } else if (oldPrice > currentPrice) {
        loss = (oldPrice - currentPrice) * quantity;
        lossPerc = ((oldPrice - currentPrice) / oldPrice) * 100;
        setMessage(
          `You have lost ${lossPerc.toFixed(
            2
          )}%. Total loss is Rs.${loss.toFixed(2)}`
        );
        if (lossPerc > 50) {
          var app = document.querySelector(".App");
          app.style = { bgImage };
        }
      } else {
        setMessage("There is no loss or profit! Price is same.");
      }
    } else {
      setMessage("Please enter valid price and quantity.");
    }
  }

  return (
    <div className="App">
      <section className="stock-section">
        <h1>Check your stock returns by Entering below details-</h1>
        <div className="main-section">
          <div>
            <label>Enter Stock Price:</label>
            <input
              type="number"
              onChange={(e) => setStockOldPrice(e.target.value)}
            />
          </div>

          <br></br>
          <div>
            <label>Enter quantity of stock purchased:</label>
            <input
              type="number"
              onChange={(e) => setStocksQuantity(e.target.value)}
            />
          </div>

          <br></br>
          <div>
            <label>Enter current stock Price:</label>
            <input
              type="number"
              onChange={(e) => setStockCurrentPrice(e.target.value)}
            />
          </div>
          <button onClick={checkReturns} id="check-btn">
            Check
          </button>
          <div>{message}</div>
        </div>
      </section>
    </div>
  );
}

export default App;
