import styles from "./Swapcambial.module.css";
import { useKeyCurrency } from "../Boxvalue/Boxvalue";
import { useState } from "react";

export default function Swapcambial({ selectedCurrency, amount }) {
  const currencies = useKeyCurrency();
  const [destinationCurrency, setDestinationCurrency] = useState("");

  return (
    <div className={styles.swapBox}>
      <div className={styles.currencySwap}>
        {selectedCurrency}
      </div>

      <button>swap</button>

      <div className={styles.currencySwap}>
        <select
          className={styles.countryCurrency}
          value={destinationCurrency}
          onChange={(e) => setDestinationCurrency(e.target.value)}
        >
          {currencies.map(currency => (
            <option key={currency.code} value={currency.rate}>
              {currency.code}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

