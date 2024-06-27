import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource-variable/lexend-zetta'
import './index.css'
import { LibertyHeader } from './Header/Header';
import { Wallpaper } from './Wallpaper/Wallpaper';
import { TextField } from './TextField/Textfield';
import { MessageDump } from './MessageDump/MessageDump';
import '@fontsource-variable/big-shoulders-display';
import { GoToHeaderButton } from './GoToHeaderButton/GoToHeaderButton';
import { ThemeToggle } from './ThemeToggle/ThemeToggle';
import { useState } from 'react';
import { Footer } from './Footer/Footer';



    function App() {

      let [darkMode, setDarkMode] = useState(true)

      const toggleTheme = () => {
        setDarkMode(!darkMode)
      }
      return (
        <body>
        {Wallpaper(darkMode)}
        {ThemeToggle(darkMode, toggleTheme)}
        {LibertyHeader(darkMode)}
        <TextField/>
        {MessageDump(darkMode)}
        <GoToHeaderButton/>
        {Footer(darkMode)}
        </body>
      )
    }



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <App/>

  </React.StrictMode>
)



