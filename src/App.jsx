
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Home from './pages/Home'
import OurTeam from './pages/OurTeam'
import About from './pages/About'
import Contact from './pages/Contact'
import DonerReaquest from './pages/DonerReaquest'
function App() {

  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/'  element={<Home/>} />
      <Route path='/our_team'  element={<OurTeam/>} />
      <Route path='/about'  element={<About/>} />
      <Route path='/contact'  element={<Contact/>} />
      <Route path='/doner-request'  element={<DonerReaquest/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
