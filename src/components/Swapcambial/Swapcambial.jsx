import styles from "./Swapcambial.module.css";
import { useState, useEffect, useRef } from "react";
import { useKeyCurrency } from "../Boxvalue/Boxvalue";
import { currencyToCountry, FlagComponent } from "../../utils/flags.jsx";

function DestinationSelect({
  currencies,
  selectedCurrency,
  onCurrencyChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedCurrencyData = currencies.find(
    (c) => c.code === selectedCurrency
  );
  const countryCode = currencyToCountry[selectedCurrency];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code) => {
    onCurrencyChange(code);
    setIsOpen(false);
  };

  return (
    <div className={styles.customSelect} ref={dropdownRef}>
      <button
        className={styles.selectButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {countryCode && (
          <span className={styles.flagIcon}>
            <FlagComponent code={countryCode} />
          </span>
        )}
        <span className={styles.currencyCode}>{selectedCurrency}</span>
        <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {currencies.map((currency) => {
            const countryCodeItem = currencyToCountry[currency.code];
            return (
              <button
                key={currency.code}
                className={`${styles.dropdownItem} ${
                  selectedCurrency === currency.code ? styles.selected : ""
                }`}
                onClick={() => handleSelect(currency.code)}
              >
                {countryCodeItem && (
                  <span className={styles.flagIconSmall}>
                    <FlagComponent code={countryCodeItem} />
                  </span>
                )}
                <span className={styles.itemCode}>{currency.code}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Swapcambial({
  selectedCurrency,
  destinationCurrency,
  handleSwap,
  onDestinationChange,
  selectedCurrencyData,
}) {
  const currencies = useKeyCurrency();

  return (
    <div className={styles.swapBox}>
      <div className={styles.currencyCard}>{selectedCurrency}</div>

      <button className={styles.swapButton} onClick={handleSwap}>
        <i className="fa-solid fa-arrow-right-arrow-left"></i>
      </button>

      <DestinationSelect
        currencies={currencies}
        selectedCurrency={destinationCurrency}
        onCurrencyChange={onDestinationChange}
      />
    </div>
  );
}


