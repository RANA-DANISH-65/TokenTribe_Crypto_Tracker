import { createContext, useEffect, useState } from "react";
export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const apiKey = process.env.REACT_APP_API_KEY;
  const fetchAllCoins = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json", 
      "x-cg-demo-api-key": 'CG-3okdHoPRuD36Mh7t2DSgaq8Q',
    },
    };

    fetch(
      `   https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((res) => res.json())
      .then((res) => setAllCoin(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAllCoins();
  }, [currency]);

  const contextValue = {
    allCoin,
    currency,
    setCurrency,
    
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
