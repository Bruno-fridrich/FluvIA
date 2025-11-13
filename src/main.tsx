import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Plantas from './pages/Plants';
import Ia from './pages/Ia';
import User from './pages/User';
import Detalhes from './pages/Detalhes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plantas" element={<Plantas />} />
        <Route path="/ia" element={<Ia />} />
        <Route path="/user" element={<User />} />
        <Route path="/plantas/:id" element={<Detalhes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)