import styles from "./boxvalue.module.css";
import { useState, useEffect } from "react";

export function useKeyCurrency() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const response = await fetch("https://api.frankfurter.app/currencies");
        const data = await response.json();

        const currencyArray = Object.entries(data).map(([code, name]) => ({
          code,
          name,
        }));

        setCurrencies(currencyArray);
      } catch (erro) {
        console.error("Erro ao buscar moedas:", erro);
      }
    }

    fetchCurrencies(); 
  }, []);

  return currencies;
}

export default function Boxvalue() {
  const [value, setValue] = useState(1);
  const currencies = useKeyCurrency();
  return (
    
      <div className={styles.inputValue}>
        <span>Valor:</span>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select className={styles.countryCurrency}>
          {currencies.map((currency =>(
            <option key={currency} value={currency.code}>
              {currency.code} - {currency.name}
            </option>
          )))}
        </select>
      </div>
    
  );
}
