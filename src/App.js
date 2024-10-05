import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Particle from './Components/Particle';
import Projects from './Components/Projects';
import Reminder from './Components/Reminder';
import Stack from './Components/Stack';
import Hacks from './Components/Hacks';
import About from './Components/About';

function App() {
  return (
    <div className="App relative">
      <Particle />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/reminder' element={<Reminder />}/>
        <Route path='/stack' element={<Stack />}/>
        <Route path='/hacks' element={<Hacks />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
