import styles from "./boxvalue.module.css";
import { useState, useEffect } from "react";

export function useKeyCurrency() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        
        const responseNames = await fetch("https://api.frankfurter.app/currencies");
        const dataNames = await responseNames.json();

        
        const responseRates = await fetch("https://api.frankfurter.app/latest");
        const dataRates = await responseRates.json();

        
        const currencyArray = Object.entries(dataNames).map(([code, name]) => ({
          code,
          name,
          rate: dataRates.rates[code] || 1, 
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

export default function Boxvalue({ selectedCurrency, setSelectedCurrency, amount, setAmount }) {
  const currencies = useKeyCurrency();

  return (
    <div className={styles.inputValue}>
      <span>Valor:</span>
      <input
        className={styles.inputAmount}
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)} 
      />

      <select
        className={styles.countryCurrency}
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)} 
      >
        {currencies.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.code} - {currency.name}
          </option>
        ))}
      </select>
    </div>
  );
}



