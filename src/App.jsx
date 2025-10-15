import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Headerr";
import Boxvalue from "./components/Boxvalue/Boxvalue.jsx";
import Swapcambial from "./components/Swapcambial/Swapcambial";

export default function App() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  return (
    <>
      <div>
        <Header />
        <Boxvalue selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency} />
      </div>
      <Swapcambial selectedCurrency={selectedCurrency} />
    </>
  );
}




