import '../HeaderBar/HeaderBar.css'
import { GithubButton } from '../Buttons/GithubButton'
import { LoginButton } from '../Buttons/LoginButton'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'


export function HeaderBar(darkMode, toggleTheme, dialogOpened, changeDialogState) {
    return (
        <section className={`${darkMode ? 'headerbar-dark' : 'headerbar'} ${dialogOpened ? 'opacity-55' : ''}`}>
            {LoginButton(darkMode, changeDialogState)}
            <hr className={darkMode ? 'verticalline-dark' : 'verticalline'} />
            {GithubButton(darkMode)}
            <hr className={darkMode ? 'verticalline-dark' : 'verticalline'} />
            {ThemeToggle(darkMode, toggleTheme)}
        </section>
    )
}