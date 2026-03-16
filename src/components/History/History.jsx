export default function History({ history }) {
  return (
    <div className="boxHistory">
      <h3>
        <ul>
          {history.map((item) => (
            <li key={item.id}>
              {item.amount} {item.from} = {item.result.toFixed(2)} {item.to}
              <br />
              <small>{item.date}</small>
            </li>
          ))}
        </ul>
      </h3>
    </div>
  );
}
