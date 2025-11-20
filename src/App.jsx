import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Headerr";
import Boxvalue from "./components/Boxvalue/Boxvalue.jsx";
import Swapcambial from "./components/Swapcambial/Swapcambial";


export default function App() {
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [destinationCurrency, setDestinationCurrency] = useState("");
  const handleChange = (e) => {
        setDestinationCurrency((e).target.value);                
      }

      console.log(destinationCurrency);
  return (
    <>
      <div>
        <Header />
        <Boxvalue selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency} amount={amount} setAmount={setAmount} />
        <Swapcambial selectedCurrency={selectedCurrency} amount={amount} handleChange={handleChange} destinationCurrency={destinationCurrency}/>
      </div>
      
    </>
  );
}




