import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import School from './pages/School.jsx'
import Birtday from './pages/Birtday.jsx'
import Admin from './pages/Admin.jsx'
import CursosAmbiental from './pages/cursos/CursosAmbiental.jsx'
import CalidadCursos from './pages/cursos/CalidadCursos.jsx'
import DesarrolloCursos from './pages/cursos/DesarrolloCursos.jsx'
import InduccionCursos from './pages/cursos/InduccionCursos.jsx'
import ServicioCursos from './pages/cursos/ServicioCursos.jsx'
import SStCursos from './pages/cursos/SSTCursos.jsx'
import TalentoHumanoCursos from './pages/cursos/TalentoHumanoCursos.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/miproyecto'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/escuela' element={<School />} />
      <Route path='/cumpleanios' element={<Birtday />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/ambiental-cursos' element={<CursosAmbiental />} />
      <Route path='/calidad-cursos' element={<CalidadCursos />} />
      <Route path='/desarrollo-cursos' element={<DesarrolloCursos />} />
      <Route path='/induccion-cursos' element={<InduccionCursos />} />
      <Route path='/servicios-cursos' element={<ServicioCursos />} />
      <Route path='/sst-cursos' element={<SStCursos />} />
      <Route path='/rh-cursos' element={<TalentoHumanoCursos />} />
    </Routes>
  </BrowserRouter>,
)
