import styles from "./History.module.css";

export default function History({ history }) {
  return (
    <div className={styles.boxHistory}>
      <p>Recent History</p>
        <ul>
          {history.map((item) => (
            <li key={item.id}>
              {item.amount} {item.from} = {item.result.toFixed(2)} {item.to}
              <br />
              <small>{item.date}</small>
            </li>
          ))}
        </ul>
      
    </div>
  );
}
