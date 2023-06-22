import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import App from './App.tsx'
import Login from './Login.tsx'
import Register from './Register.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
