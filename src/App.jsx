import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  return (
    <>
      <div>
        <Header />
      </div>
    </>
  );
}

function Header() {
  return (
    <div className="boxHeader">
      <h1>Conversor de Moedas</h1>
      
    </div>
  )
}
