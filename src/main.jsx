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
import { HeaderBar } from './HeaderBar/HeaderBar';
import { LoginDialog } from './LoginDialog/LoginDialog';



    function App() {

      let [darkMode, setDarkMode] = useState(true)

      let [dialogOpened, setDialogOpened] = useState(false)

      let [userName, setUserName] = useState('Anonymous')
      
      const changeDialogState = () => {
        setDialogOpened(!dialogOpened)
      }

      const toggleTheme = () => {
        setDarkMode(!darkMode)
      }


      return (
        <body>
          {Wallpaper(darkMode)}
          {LoginDialog(dialogOpened, darkMode, setDialogOpened, setUserName)}
          {HeaderBar(darkMode, toggleTheme, dialogOpened, changeDialogState)}
          {LibertyHeader(darkMode)}
          {TextField(userName)}
          {MessageDump(darkMode, userName)}
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



