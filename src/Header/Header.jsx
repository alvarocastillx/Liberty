import '../Header/HeaderStyle.css';


export function LibertyHeader (darkMode) {
    return (
    <div>
        <h1 className={darkMode ? "header-dark" : "header"} id='header'>Liberty.dev</h1>
    </div>
    )
}

