import { useState } from "react";
import styles from "./boxvalue.module.css";

export default function Boxvalue() {

  const[value, setValue] = useState(1);

  return (
    <>
      <div className={styles.inputValue}>
      <input
      type="number"
      value={value}
      onChange={(e) => setValue(e.target.value)} />
      </div>
    </>
  );
}