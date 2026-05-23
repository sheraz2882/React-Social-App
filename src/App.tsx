import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import './App.css';

function App() {
  
  return (
    <div className="App">

      <h1 className='heading-1'>Let's Connect!</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
