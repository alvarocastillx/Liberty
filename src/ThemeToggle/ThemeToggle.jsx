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
                     fill="currentColor"
                     className="icon icon-tabler icons-tabler-filled icon-tabler-bulb"
                 >
                     <path fill="none" d="M0 0h24v24H0z" />
                     <path d="M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11h1zM12 2a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1zM21 11a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11h1zM4.893 4.893a1 1 0 0 1 1.32-.083l.094.083.7.7a1 1 0 0 1-1.32 1.497l-.094-.083-.7-.7a1 1 0 0 1 0-1.414zM17.693 4.893a1 1 0 0 1 1.497 1.32l-.083.094-.7.7a1 1 0 0 1-1.497-1.32l.083-.094.7-.7zM14 18a1 1 0 0 1 1 1 3 3 0 0 1-6 0 1 1 0 0 1 .883-.993L10 18h4zM12 6a6 6 0 0 1 3.6 10.8 1 1 0 0 1-.471.192L15 17H9a1 1 0 0 1-.6-.2A6 6 0 0 1 12 6z" />
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

