import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Home from './Home';
import './App.css';

function App() {
  
  return (
    <div className="App">

      <h1 className='heading-1'>Let's Connect!</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<CreateAccount />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
