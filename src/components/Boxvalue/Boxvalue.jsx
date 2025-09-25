import styles from "./boxvalue.module.css";
import { useState, useEffect } from "react";

export function useKeyCurrency() {
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    async function getCurrencies() {
      try {
        const response = await fetch("https://v6.exchangerate-api.com/v6/1c7be34a277cb0073e935419/latest/USD");
        const data = await response.json();
        console.log(data);
        const currencyKeys = Object.keys(data.conversion_rates);
        setCurrencies(currencyKeys);
      } catch (erro) {
        console.error("Error ao buscar moerdas");
      }
    }
    getCurrencies();
  }, []);
  return currencies;
}

export default function Boxvalue() {
  const [value, setValue] = useState(1);
  const currencies = useKeyCurrency();
  return (
    <>
      <div className={styles.inputValue}>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select className={styles.countryCurrency}>
          {currencies.map((currency =>(
            <option key={currency} value={currency}>
              {currency}
            </option>
          )))}
        </select>
      </div>
    </>
  );
}
