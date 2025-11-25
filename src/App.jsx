import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Headerr";
import Boxvalue from "./components/Boxvalue/Boxvalue.jsx";
import Swapcambial from "./components/Swapcambial/Swapcambial";
import  { useKeyCurrency } from "./components/Boxvalue/Boxvalue.jsx";


export default function App() {
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [destinationCurrency, setDestinationCurrency] = useState("USD"); 

  const handleChange = (e) => {
    setDestinationCurrency(e.target.value); 
  };

  const currencies = useKeyCurrency();
  const selectedCurrencyData = currencies.find(
    (currency) => currency.code === selectedCurrency
  );


  const convertedValue = (amount / selectedCurrencyData.rate) * destinationCurrency;
  console.log(convertedValue);
  return (
    <div>
      <Header />
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
      />
    </div>
  );
}





