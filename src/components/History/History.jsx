export default function History({ history }) {
  return (
    <div className="boxHistory">
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
