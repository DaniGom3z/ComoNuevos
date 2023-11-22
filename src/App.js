
import './App.css';
import Inicio from './admincomponents/templates/iniciarSesion'
import Admin from './admincomponents/templates/homeAdmin'
import Page2Admin from './admincomponents/templates/sedanes';
import Page3Admin from './admincomponents/templates/pickUp'
import Page4Admin from './admincomponents/templates/Deportivos'
import CitasAdmin from './admincomponents/templates/cita';
import PapeleraCitas from './admincomponents/templates/papeleraDeCitas';
import PapeleraAutos from './admincomponents/templates/papeleraDeAutos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Routes>

   
    <Route path="/" element={<Inicio/>} />
    <Route path="/admin" element={<Admin/>} />
    <Route path="/sedanesAdmin" element={<Page2Admin/>} />
    <Route path="/pickupAdmin" element={<Page3Admin/>} />
    <Route path="/deportivosAdmin" element={<Page4Admin/>} />
    <Route path="/citas" element={<CitasAdmin/>} />
    <Route path="/papeleraCitas" element={<PapeleraCitas/>} />
    <Route path="/papeleraAutos" element={<PapeleraAutos/>} />
   
    

  
      </Routes>
    </Router>
    </>
  );
}

export default App;
