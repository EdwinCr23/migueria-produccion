import { Link } from 'react-router-dom'
import '../style/Header.css'
const Header = () => {
    return (
        <header>
            <img src="#" alt="logo-migueria" />
            <nav>
                <Link className='nav' to='/'>Inicio</Link>
                <Link className='nav' to='/escuela'>Escuela</Link>
                <Link className='nav' to='/cumpleanios'>Cumpleaños</Link>
            </nav>
        </header>
    )
}

export default Header
