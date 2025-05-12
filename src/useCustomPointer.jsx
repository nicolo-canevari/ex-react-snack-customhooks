import { useEffect, useState } from "react";

export default function useCustomPointer(content) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Aggiunge uno stile globale per nascondere il cursore
        const style = document.createElement("style");
        style.innerHTML = `* { cursor: none !important; }`;
        document.head.appendChild(style);

        // Aggiorna la posizione del mouse
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            // Rimuove lo stile al cleanup
            document.head.removeChild(style);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const style = {
        position: "fixed",
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
        fontSize: "1.5rem",
    };

    return <div style={style}>{content}</div>;
}
