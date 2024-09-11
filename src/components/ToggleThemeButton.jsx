import { click } from "@testing-library/user-event/dist/click";
import { useEffect, useState } from "react";


export default function ToggleThemeButton({setLightMode}) {
    const [warning, setWarning] = useState(false);

    function clickHandler() {
        if(Window.innerWidth <= 576) {
            setWarning(true);
            setLightMode(true);
        } else {
            setLightMode((prev) => !prev);
        }
    }
    
    useEffect(() => {
        const unSubscribe = setTimeout(() => {
            setWarning(false)
        }, 3000);

        return () => {
            clearTimeout(unSubscribe)
        };
    }, [warning]);

    return (
        <div className="btn-div">
            <button onClick={clickHandler} className="toggle-btn">
                Toggle theme
            </button>
            <span 
            style={{
                visibility: `${warning ? "visible" : "hidden"}`,
                color: "#dc143c"
            }}
            >
                Dark theme is not allowed for mobile
            </span>
        </div>
    );
}

