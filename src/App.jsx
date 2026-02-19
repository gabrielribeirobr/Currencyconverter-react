import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Headerr";
import Boxvalue from "./components/Boxvalue/Boxvalue.jsx";
import Swapcambial from "./components/Swapcambial/Swapcambial";
import Showresult from "./components/Result/Result.jsx";
import { useKeyCurrency } from "./components/Boxvalue/Boxvalue.jsx";

export default function App() {
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [destinationCurrency, setDestinationCurrency] = useState("BRL");
  const [convertedValue, setConvertedValue] = useState(null);

 

  const currencies = useKeyCurrency();
  const selectedCurrencyData = currencies.find(
    (currency) => currency.code === selectedCurrency,
  );

  const destinationCurrencyData = currencies.find(
    (currency) => currency.code === destinationCurrency,
  );

  function handleSwap() {
    const oldSelected = selectedCurrency;
    const oldDestination = destinationCurrency;

    setSelectedCurrency(oldDestination);
    setDestinationCurrency(oldSelected);
  }

  function handleConvert() {
    if (selectedCurrencyData && destinationCurrencyData) {
      const result =
        (amount / selectedCurrencyData.rate) * destinationCurrencyData.rate;

      setConvertedValue(result);
      
    }
  }

  const handleAmountChange = (value) => {
    setAmount(value);
    setConvertedValue(null);
  };

  const handleSelectedCurrencyChange = (value) => {
    setSelectedCurrency(value);
    setConvertedValue(null);
  };

  const handleDestinationChange = (e) => {
    setDestinationCurrency(e.target.value);
    setConvertedValue(null);
  };

  return (
    <div>
      <Header />
      <div className="card">
        <Boxvalue
          selectedCurrency={selectedCurrency}
  onCurrencyChange={handleSelectedCurrencyChange}
  amount={amount}
  onAmountChange={handleAmountChange}
        />
        <Swapcambial
        selectedCurrency={selectedCurrency}
          destinationCurrency={destinationCurrency}
  onDestinationChange={handleDestinationChange}
  handleSwap={handleSwap}
        />
        <Showresult
          result={convertedValue}
          amount={amount}
          selectedCurrency={selectedCurrency}
          destinationCurrency={destinationCurrency}
          onConvert={handleConvert}
        />
      </div>
    </div>
  );
}
