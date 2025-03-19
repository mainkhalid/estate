import { useState } from 'react';

const Blockchain = () => {
  const [coins, setCoins] = useState(0);
  const [currency, setCurrency] = useState("usd");
  const [totalPrice, setTotalPrice] = useState(0);
//   const coinRateUSD = 0.23; // Assume each pie coin is worth $0.23
  
  const calculateTotal = () => {
    let rate;
    switch (currency) {
      case "usd":
        rate = 0.23;
        break;
      case "eur":
        rate = 0.9;
        break;
      case "gbp":
        rate = 0.75;
        break;
      case "jpy":
        rate = 110;
        break;
      case "cny":
        rate = 6.5;
        break;
        case "ksh":
        rate = 30;
        break;
      default:
        rate = 1;
    }
    setTotalPrice(coins * coinRateUSD * rate);
  };

  return (
    <div className="container w-1/2 border border-purple-400 text-center mb-8 p-6 rounded-lg shadow-md mx-auto">
      <h3 className="text-purple-600 text-xl font-semibold mb-4">Current Pie Coin Rate</h3>
      
      <div className="mb-6">
        <h4 className="text-purple-500 font-medium mb-2">Number of Pie Coins to Sell</h4>
        <input 
          className="w-1/2 p-2 border border-purple-300 rounded focus:border-purple-500 focus:outline-none"
          type="tel" 
          name="coins" 
          id="coins" 
          placeholder="$0.00" 
          value={coins}
          onChange={(e) => setCoins(e.target.value)}
        />
      </div>
      
      <div className="mb-6">
        <h4 className="text-purple-500 font-medium mb-2">Select Your Currency</h4>
        <select 
          className="w-1/2 p-2 border border-purple-300 rounded focus:border-purple-500 focus:outline-none"
          name="currency" 
          required
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
          <option value="jpy">JPY</option>
          <option value="cny">CNY</option>
          <option value="ksh">kenyan Shilling</option>
        </select>
      </div>
      
      <div className="mb-6">
        <p className="text-purple-500 font-medium mb-2">Choose How to Receive Money:</p>
        <select 
          className="w-1/2 p-2 border border-purple-300 rounded focus:border-purple-500 focus:outline-none"
          name="paymentMethod" 
          required
        >
          <option value="mpesa">Mpesa</option>
          <option value="bank">Bank</option>
          <option value="crypto">Crypto</option>
          <option value="wallet">Wallet</option>
          <option value="airtelMoney">Airtel Money</option>
        </select>
      </div>
      
      <div className="mt-6">
        <h3 className="text-purple-500 font-medium mb-2">Total Price: ${totalPrice.toFixed(2)}</h3>
        <button 
          onClick={calculateTotal}
          className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded"
        >
          Sell Pie Coin
        </button>
      </div>
    </div>
  );
};

export default Blockchain;
