import { useState, useEffect } from "react";

function useDate() {
    // Stato che contiene la data e ora attuali
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        // Imposta un intervallo che aggiorna la data ogni secondo
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        // Pulizia dell'intervallo quando il componente viene smontato
        return () => clearInterval(intervalId);
    }, []);

    // Ritorna l'oggetto Date aggiornato
    return currentDate;
}

export default useDate;