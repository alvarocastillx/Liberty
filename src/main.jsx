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




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <body>
    <Wallpaper/>
    <LibertyHeader/>
    <TextField/>
    <MessageDump/>
    <GoToHeaderButton/>
    </body>


  </React.StrictMode>
)



