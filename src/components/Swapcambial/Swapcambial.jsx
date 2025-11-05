import styles from "./Swapcambial.module.css";

export default function Swapcambial({ selectedCurrency }) {
  return (
    <div className={styles.swapBox}>
      <div className={styles.selectedCurrency}>{selectedCurrency}</div>
      <div className={styles.desiredCurrency}> EUR</div>
    </div>
  );
}
