import { useState } from "react"




export function ThemeToggle(darkMode, toggleTheme){
    
    return (
        <div className="togglediv">
            <button onClick={toggleTheme}>        
            {
                darkMode ? (
                    
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={36}
                    height={36}
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="icon icon-tabler icons-tabler-outline icon-tabler-bulb-off"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7-.7.7M11.089 7.083a5 5 0 0 1 5.826 5.84m-1.378 2.611A5.012 5.012 0 0 1 15 16a3.5 3.5 0 0 0-1 3 2 2 0 1 1-4 0 3.5 3.5 0 0 0-1-3 5 5 0 0 1-.528-7.544M9.7 17h4.6M3 3l18 18" />
                  </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="icon icon-tabler icons-tabler-outline icon-tabler-bulb">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7-.7.7M9 16a5 5 0 1 1 6 0 3.5 3.5 0 0 0-1 3 2 2 0 0 1-4 0 3.5 3.5 0 0 0-1-3M9.7 17h4.6" />
                     </svg>
                )   
            }
            </button>
        </div>
       
    )
}

