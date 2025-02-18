import '../TextField/TextField.css'
import React, { useState } from "react";

export function TextField(userName) {

    
const submitMessage = (event) => {
    if (event.key == 'Enter') {
        if (event.target.value == 'admin') {
            alert("You unlocked a secret feature!")
        }
        else {
            const xhr = new XMLHttpRequest();
            xhr.open('POST','https://libertyapi.onrender.com/liberty/post')
            xhr.setRequestHeader('Content-type', 'application/json')
            const sendData = JSON.stringify({
                'message':event.target.value,
                'name': userName
            })
            xhr.send(sendData);
            xhr.onloadend = function() {
                event.target.value = ''
                postMessage('Su mensaje se ha enviado correctamente.')
            }
        }
        
        
        
          
    }
}


    return (
        <input className="textfield" maxLength={140} type="text" onKeyDown={submitMessage}/>
    )
}




