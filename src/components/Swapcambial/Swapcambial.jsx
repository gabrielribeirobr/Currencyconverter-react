import styles from "./Swapcambial.module.css";
import { useKeyCurrency } from "../Boxvalue/Boxvalue";
import { useState } from "react";

export default function Swapcambial({ selectedCurrency, destinationCurrency, amount, handleChange }) {
  const currencies = useKeyCurrency();

  const selectedCurrencyData = currencies.find(
    (c) => c.code === selectedCurrency
  );

  return (
    <div className={styles.swapBox}>
      <div className={styles.currencySwap} value={selectedCurrencyData?.rate}>
        {selectedCurrency}
      </div>

      <button>swap</button>

      <div className={styles.currencySwap}>
        <select
          className={styles.countryCurrency}
          value={destinationCurrency}
          onChange={handleChange}
        >
          {currencies.map(currency => (
            <option key={currency.code} value={currency.code}> 
              {currency.code}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}


