import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Headerr";
import Boxvalue from "./components/Boxvalue/Boxvalue.jsx";
import Swapcambial from "./components/Swapcambial/Swapcambial";


export default function App() {
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  return (
    <>
      <div>
        <Header />
        <Boxvalue selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency} amount={amount} setAmount={setAmount} />
        <Swapcambial selectedCurrency={selectedCurrency} amount={amount}/>
      </div>
      
    </>
  );
}




