import './Header.css'
import logo from './Logo.png'

export default function Header () {
    return (
    <div>
    <header>
        <img src={logo} alt="Logo" />
        <h1 className='headerText'>Blog Alan Silcher</h1>
    </header>
    </div>
    )}