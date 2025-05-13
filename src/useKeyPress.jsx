import { useEffect, useState } from "react";

// Hook per rilevare se un tasto specifico è premuto
export default function useKeyPress(targetKey) {
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        // Quando il tasto viene premuto
        const handleKeyDown = (event) => {
            if (event.key === targetKey) {
                setIsPressed(true);
            }
        };

        // Quando il tasto viene rilasciato
        const handleKeyUp = (event) => {
            if (event.key === targetKey) {
                setIsPressed(false);
            }
        };

        // Aggiungo i listener
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        // Rimuovo i listener alla fine
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [targetKey]);

    return isPressed;
}
