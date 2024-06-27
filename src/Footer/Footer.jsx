import '../Footer/Footer.css'
import '../assets/DEV LOGO.png'


export function Footer(darkMode) {
    return (
        <div className='footer'>
            <hr className={darkMode ? 'hr-footer-dark' : 'hr-footer'}/>
            <h4 className={darkMode ? 'h4-footer-dark' : 'h4-footer'}>Developed by Álvaro Castilla. All rights reserved. © </h4>
            <img src={darkMode ? "https://github.com/alvarocastillx/Liberty/blob/e33b0434cb2836b89a99306ce0773151d3b97fc1/src/assets/DEV%20LOGO%20WHITE.png" : "/src/assets/DEV LOGO.png"} alt="ACLLogo" width={60} />
        </div>
    )
}