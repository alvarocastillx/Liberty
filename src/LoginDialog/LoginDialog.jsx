import { useState } from 'react';
import '../LoginDialog/LoginDialog.css'



export function LoginDialog(dialogOpened, darkMode, setDialogOpened, setUserName) {

    let [userInput, setUserInput] = useState('')

    let [passwordInput, setPasswordInput] = useState('')

    const userInputChange = (e) => {
        setUserInput(e)
    }
    
    const passInputChange = (e) => {
        setPasswordInput(e)
    }

    const signIn = async function() {
        const xhr = new XMLHttpRequest();

        const username = encodeURIComponent(userInput);
        const url = `http://localhost:5000/liberty/getuser?username=${username}`;

        xhr.open('GET', url)
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.send()

        xhr.onloadend = function () {
            let parsed = JSON.parse(xhr.response)
            if (parsed.status == 200) {
                const receivedPassword = parsed.list[0].password
                if (receivedPassword == passwordInput) {
                    setUserName(username)
                    setDialogOpened(false)
                }
            }
            else {
                console.log(parsed)
            }
        }
    }
    if (dialogOpened) {
        return (
            <section className={`${darkMode ? 'logindialog-dark' : 'logindialog'}`} >
                    <h4 className={`${darkMode ? 'dialogtitle-dark' : 'dialogtitle'}`}>Inicie sesión</h4>
                    <input type="text" className={`${darkMode ? 'logininput-dark' : 'logininput'}`} onChange={(e) => userInputChange(e.target.value)}/>
                    <input type="password" className={`${darkMode ? 'logininput-dark' : 'logininput'}`} onChange={(e) => passInputChange(e.target.value)}/>
                    <button className='logindialogbutton' onClick={signIn}>Iniciar sesión</button>
            </section>
        )
    }
    else {
        return 
    }
    
}