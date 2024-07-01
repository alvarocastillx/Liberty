import { useEffect, useState } from 'react'
import '../MessageDump/MessageDump.css'
import { SingleMessage } from './SingleMessage'

export function MessageDump(darkMode, userName) {
    
    let [data, setData] = useState([])
    let [loading, setLoading] = useState(true)


    
        
   

    useEffect(() => {
        loadMessages();  // Cargar los mensajes inicialmente
        setInterval(loadMessages, 5000); // Configurar el intervalo para que se ejecute cada 5 segundos
    }, [])
    
    const loadMessages = async function () {
        try {
            
            const xhr = new XMLHttpRequest();
            xhr.open('GET','https://libertyapi.onrender.com/liberty/get')
            xhr.onloadend = function () {
                let parsed = JSON.parse(xhr.response)
                setLoading(false)
                setData(parsed)  
                console.log(parsed)
            }
            xhr.send()
        }
        catch {
            setLoading(false)
        }
        
          
    }
    

   

    
    return (
        <div className="messageDump">
            <h1 className={darkMode ? "h1-dark" : "h1"}>Latest messages</h1>
            <div className='messageList'>
            {
            loading ? (
                console.log()
                ) : (
                    data.list.map((messageObj, index) => (
                        <SingleMessage key={messageObj._id.$oid} message={messageObj.message}  time={messageObj.created_at.$date} darkMode={darkMode} userName={messageObj.name}/>
                    ))
                )
            }
             </div>
        </div>
    )
}


