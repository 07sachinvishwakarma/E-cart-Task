import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Services from './components/Services';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='about' element={<About />} />
          <Route path='service' element={<Services />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
