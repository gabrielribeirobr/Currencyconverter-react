import styles from "./Result.module.css";

export default function Showresult({
  result,
  amount,
  selectedCurrency,
  destinationCurrency,
  onConvert,
}) {
  return (
    <>
      <div className="convertBtn">
        <button onClick={onConvert}>Convert</button>
      </div>

      {result !== null && (
        <div className={styles.resultBox}>
          <p className={styles.label}>
            {amount} {selectedCurrency} ={" "}
            {result.toFixed(2)} {destinationCurrency}
          </p>
        </div>
      )}
    </>
  );
}
