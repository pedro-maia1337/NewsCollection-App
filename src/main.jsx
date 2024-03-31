import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import News from './pages/News'
import Search from './pages/Search'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />}/>
          <Route path="news/:id" element={<News />}/>
          <Route path="search" element={<Search />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
