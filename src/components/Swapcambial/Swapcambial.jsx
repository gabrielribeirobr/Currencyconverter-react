import styles from "./Swapcambial.module.css";

export default function Swapcambial({ selectedCurrency }) {
  return (
    <div className={styles.swapBox}>
      <div className="selectedCurrency">{selectedCurrency}</div>
      <div className="desiredCurrency"> EUR</div>
    </div>
  );
}
