import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import School from './pages/School.jsx'
import Birtday from './pages/Birtday.jsx'
import Admin from './pages/Admin.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/miproyecto'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/escuela' element={<School />} />
      <Route path='/cumpleanios' element={<Birtday />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  </BrowserRouter>,
)
