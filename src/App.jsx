import React, { useState } from 'react';
import './App.css';
function App() {
  const [isActive, setActive] = useState(true);
  const [isDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const backgroundColor = !isDarkMode ? "white" : "black";
  const color = !isDarkMode ? "green" : "red";
  return (
    <div className="border" style={{backgroundColor, color}}>
      App
      <BoxComponent isActive={isActive}></BoxComponent>
      <ButtonComponent isActive={isActive} setActive={setActive}></ButtonComponent>
      App szintű state: { isActive ? "Aktív" : "Inaktív" }
      <h2 style={{color}}>{isDarkMode ? 'Dark mód' : 'Light mód' }</h2>
    </div>
  );
}
function ButtonComponent({ isActive, setActive}) {
  return (
    <div style={{ width: "200px", height: "200px"}} className="p-2 m-5 border rounded">
      <button
      className="btn btn-success m-2"
      disabled={isActive}
      onClick={() => {
        setActive(true);
      }}>Aktiválás</button>
      <button
      className="btn btn-danger m-2"
      disabled={!isActive}
      onClick={() => {
        setActive(false);
      }}>Deaktiválás</button>
    </div>
  );
}
function BoxComponent(props) {
  return (
    <div
    className="p-2 m-5 rounded text-light"
    style={{ width: "200px", height: "200px", backgroundColor: props.isActive ? "green" : "firebrick"
    }} 
    >
      {props.isActive ? "Aktív" : "Inaktív"}
    </div>
  );
}

export default App;
