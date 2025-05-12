import useSwitch from "./useSwitch";

function App() {
  // 'isOn' è il valore attuale (true o false), 'toggle' è la funzione per invertirlo
  const [isOn, toggle] = useSwitch();

  return (
    <div>
      {/* Mostra "ON" o "OFF" in base al valore di isOn */}
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>

      {/* Al click del bottone viene chiamata la funzione toggle, che inverte il valore */}
      <button onClick={toggle}>Cambia Stato</button>
    </div>
  );
}

export default App;