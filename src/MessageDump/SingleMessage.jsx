import '../MessageDump/SingleMessage.css'

export function SingleMessage({message, time, darkMode, userName}) {
    let date = new Date(time)
    let dateString = `${date.getUTCDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()}  ${date.getUTCHours()}:${date.getUTCMinutes()>=10 ? date.getUTCMinutes() : '0'+date.getUTCMinutes()}`
    return (
        <div className={darkMode ? "singleMessage-dark" : "singleMessage"}>
            {
                message
            }
            <hr />
            {
                dateString + ' | ' + '@'+userName
            }
        </div>
    )
}