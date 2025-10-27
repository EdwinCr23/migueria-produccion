import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import School from './pages/School.jsx'
import Birtday from './pages/Birtday.jsx'
import CursosAmbiental from './pages/cursos/CursosAmbiental.jsx'
import CalidadCursos from './pages/cursos/CalidadCursos.jsx'
import DesarrolloCursos from './pages/cursos/DesarrolloCursos.jsx'
import InduccionCursos from './pages/cursos/InduccionCursos.jsx'
import ServicioCursos from './pages/cursos/ServicioCursos.jsx'
import SStCursos from './pages/cursos/SSTCursos.jsx'
import TalentoHumanoCursos from './pages/cursos/TalentoHumanoCursos.jsx'
import AdminForm from './components/AdminForm.jsx'
import UserAdmin from './components/UserAdmin.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Migueria from './pages/Migueria.jsx'
import Rooms from './pages/Rooms.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/escuela' element={<School />} />
      <Route path='/cumpleanios' element={<Birtday />} />
      <Route path='/admin' element={<AdminForm />} />
      <Route path='/login' element={<UserAdmin />} />
      <Route path='/ambiental-cursos' element={<CursosAmbiental />} />
      <Route path='/calidad-cursos' element={<CalidadCursos />} />
      <Route path='/desarrollo-cursos' element={<DesarrolloCursos />} />
      <Route path='/induccion-cursos' element={<InduccionCursos />} />
      <Route path='/servicios-cursos' element={<ServicioCursos />} />
      <Route path='/sst-cursos' element={<SStCursos />} />
      <Route path='/rh-cursos' element={<TalentoHumanoCursos />} />
      <Route path='/migueria' element={<Migueria />} />
      <Route path='/salas' element={<Rooms />} />
    </Routes>
  </BrowserRouter>,
)
