import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Headerr";
import Boxvalue from "./components/Boxvalue/Boxvalue.jsx";
import Swapcambial from "./components/Swapcambial/Swapcambial";
import Showresult from "./components/Result/Result.jsx"
import { useKeyCurrency } from "./components/Boxvalue/Boxvalue.jsx";

export default function App() {
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [destinationCurrency, setDestinationCurrency] = useState("BRL");

  const handleChange = (e) => {
    setDestinationCurrency(e.target.value);
  };

  const currencies = useKeyCurrency();
  const selectedCurrencyData = currencies.find(
    (currency) => currency.code === selectedCurrency
  );

  const destinationCurrencyData = currencies.find(
    (currency) => currency.code === destinationCurrency
  );

  function handleSwap() {
    const oldSelected = selectedCurrency;
    const oldDestination = destinationCurrency;

    setSelectedCurrency(oldDestination);
    setDestinationCurrency(oldSelected);
  }
  
  const convertedValue = (amount / selectedCurrencyData?.rate) * destinationCurrencyData?.rate;
  console.log(convertedValue);
  
  return (
    <div>
      <Header />
      <div className="card">
      <Boxvalue
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
        amount={amount}
        setAmount={setAmount}
      />
      <Swapcambial
        selectedCurrency={selectedCurrency}
        amount={amount}
        handleChange={handleChange}
        destinationCurrency={destinationCurrency}
        selectedCurrencyData={selectedCurrencyData}
        handleSwap={handleSwap}
      />
      <Showresult result={convertedValue} amount={amount} selectedCurrency={selectedCurrency} destinationCurrency={destinationCurrency} />
      </div> 
    </div>
  );
}
