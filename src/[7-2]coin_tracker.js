import { useState, useEffect } from "react";
// 7-2 Coin Tracker
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(1);
  const [cost, setCost] = useState(0);
  const onChange = (event) => {
    setDollar(event.target.value);
  }
  const onChange2 = (event) => {
    setCost(event.target.value);
  }
  console.log(dollar, cost);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []);
  return(
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>loading...</strong> : (
        <div>
          <select onChange={onChange2}>
            {coins.map((coin) =>
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}) : ${dollar / coin.quotes.USD.price} (USD)
              </option>
            )}
          </select>
          <hr />
          $<input
            value={dollar}
            onChange={onChange}
            type="number" placeholder="가지고 있는 달러 입력" />
        </div>
      )}
    </div>
  );
}

export default App;