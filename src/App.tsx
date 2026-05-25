import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Home from './Home';
import './App.css';
import Profile from './Profile';
import Settings from './Settings';
import Logout from './Logout';

function App() {
  
  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<CreateAccount />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
