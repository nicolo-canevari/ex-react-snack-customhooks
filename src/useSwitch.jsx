import { useState, useCallback } from "react";

// Definisce il custom hook useSwitch
function useSwitch(initialValue = false) {
    // Inizializza lo stato con useState
    // 'value' rappresenta il valore booleano attuale
    // 'setValue' è la funzione per aggiornarlo
    const [value, setValue] = useState(initialValue);

    // Definisce la funzione 'toggle' che inverte il valore attuale
    const toggle = useCallback(() => {
        setValue(prev => !prev);  // Cambia da true → false e viceversa
    }, []);

    // Ritorna sia il valore attuale che la funzione toggle
    return [value, toggle];
}

export default useSwitch;
