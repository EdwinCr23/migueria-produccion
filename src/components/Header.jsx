import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import '../style/Header.css'
const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <header className='header'>
            <img src="https://www.elmiguerito.com/Recursos/LOGO.png" className='logo' alt="logo-migueria" />
            <button className='menu-toggle' onClick={() => setOpen(!open)} aria-label='menu'>{open ? <X size={28} /> : <Menu size={28} />}</button>
            <nav className={open ? 'open' : ''}>
                <Link className='nav' to='/' onClick={() => setOpen(false)}>Inicio</Link>
                <Link className='nav' to='/escuela' onClick={() => setOpen(false)}>Escuela</Link>
                <Link className='nav' to='/cumpleanios' onClick={() => setOpen(false)}>Cumpleaños</Link>
                <Link className='nav' to='/admin' onClick={() => setOpen(false)}>Admin</Link>
            </nav>
        </header>
    )
}

export default Header
