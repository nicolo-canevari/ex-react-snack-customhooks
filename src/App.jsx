// SNACK 1

// import useSwitch from "./useSwitch";

// function App() {
//   // 'isOn' è il valore attuale (true o false), 'toggle' è la funzione per invertirlo
//   const [isOn, toggle] = useSwitch();

//   return (
//     <div>
//       {/* Mostra "ON" o "OFF" in base al valore di isOn */}
//       <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>

//       {/* Al click del bottone viene chiamata la funzione toggle, che inverte il valore */}
//       <button onClick={toggle}>Cambia Stato</button>
//     </div>
//   );
// }

// export default App;


// SNACK 2

// import useDate from "./useDate";

// function App() {
//   // Otteniamo la data corrente dal nostro custom hook
//   const currentDate = useDate();

//   return (
//     <div>
//       <h1>Data e ora attuali:</h1>

//       {/* Visualizziamo la data in formato leggibile */}
//       <p>{currentDate.toLocaleString()}</p>
//     </div>
//   );
// }

// export default App;


// SNACK 3

import useCustomPointer from "./useCustomPointer";

function App() {
  const customPointer = useCustomPointer("🔥");

  return (
    <div>
      <h1>Segui il fuoco col cursore!</h1>
      {customPointer}
    </div>
  );
}

export default App;