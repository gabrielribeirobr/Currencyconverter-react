import styles from "./boxvalue.module.css";
import { useState, useEffect, useRef } from "react";
import { currencyToCountry, FlagComponent } from "../../utils/flags.jsx";

export function useKeyCurrency() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const responseNames = await fetch("/api/currencies");
        const dataNames = await responseNames.json();

        const responseRates = await fetch("/api/latest");
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

function CurrencySelect({ currencies, selectedCurrency, onCurrencyChange }) {
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
        <span className={styles.currencyName}>{selectedCurrencyData?.name}</span>
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
                <span className={styles.itemName}>{currency.name}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Boxvalue({
  selectedCurrency,
  onCurrencyChange,
  amount,
  onAmountChange,
}) {
  const currencies = useKeyCurrency();

  return (
    <div className={styles.box}>
      <label>Amount</label>

      <div className={styles.inputGroup}>
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
        />

        <CurrencySelect
          currencies={currencies}
          selectedCurrency={selectedCurrency}
          onCurrencyChange={onCurrencyChange}
        />
      </div>
    </div>
  );
}
