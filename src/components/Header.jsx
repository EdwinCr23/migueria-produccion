import { Link } from 'react-router-dom'
import '../style/Header.css'
const Header = () => {
    return (
        <header>
            <img src="src\assets\images\LOGO.png" className='logo' alt="logo-migueria" />
            <nav>
                <Link className='nav' to='/'>Inicio</Link>
                <Link className='nav' to='/escuela'>Escuela</Link>
                <Link className='nav' to='/cumpleanios'>Cumpleaños</Link>
                <Link className='nav' to='/admin'>Admin</Link>
            </nav>
        </header>
    )
}

export default Header
