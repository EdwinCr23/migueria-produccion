import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../components/firebase'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

const UserAdmin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/admin")
        } catch (err) {
            console.error(err)
            setError("Credenciales incorrectas o usuario no registrado")
        }
    };

    return (
        <div>
            <Header />
            <form
                onSubmit={handleLogin}
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '21px' }}
            >
                <h2>Iniciar Sesión</h2>
                {error && <p>{error}</p>}
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ margin: '12px', fontFamily: 'Archer-Book-pro', border: '1px solid #54351a', borderRadius: 3, width: '200px', height: '21px' }}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ margin: '12px', fontFamily: 'Archer-Book-pro', color: '#54351a', border: '1px solid #54351a', borderRadius: 3, width: '200px', height: '21px' }}
                />
                <button
                    type="submit"
                    style={{ background: '#54351a', color: '#eae3d7', fontFamily: 'Hagins-Caps', margin: '12px', width: '10%', height: 'auto', border: '1px solid #eae3d7', borderRadius: 3 }}
                >
                    Entrar
                </button>
            </form>
        </div>
    )
}

export default UserAdmin
