import styles from "./Result.module.css"

export default function Showresult({result, amount, selectedCurrency, destinationCurrency}){

    return (
        <div className={styles.resultBox}>
            <p>{amount} {selectedCurrency} = {result.toFixed(2)} {destinationCurrency}</p>
    </div>
    );

}