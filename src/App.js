
import './App.css';
import Page from './components/screen/user/page';
import Page2 from './components/screen/user/page2';
import PageInfo from './components/screen/user/pageInfo';
import ThirdPage from './components/screen/user/page3'
import FordPage from '../src/components/screen/user/page4'
import Form from './components/screen/user/Form';
import Inicio from './components/screen/user/inicioSesion'
import Admin from './admincomponents/screen/pageAdmin'
import Page2Admin from './admincomponents/screen/page2Admin';
import Page3Admin from './admincomponents/screen/page3Admin'
import Page4Admin from './admincomponents/screen/page4Admin'
import CitasAdmin from './admincomponents/screen/citasAdmin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Routes>

    <Route path='/' element={<Page/>}/>
    <Route path='/seconPage' element={<Page2/>}/>
    <Route path='/thirdPage' element={<ThirdPage/>}/>
    <Route path='/fordPage' element={<FordPage/>}/>
    <Route path="/pageInfo/:id_auto" element={<PageInfo />} />
    <Route path="/Form" element={<Form/>} />
    <Route path="/inicio" element={<Inicio/>} />
    <Route path="/admin" element={<Admin/>} />
    <Route path="/sedanesAdmin" element={<Page2Admin/>} />
    <Route path="/pickupAdmin" element={<Page3Admin/>} />
    <Route path="/deportivosAdmin" element={<Page4Admin/>} />
    <Route path="/citas" element={<CitasAdmin/>} />
   
    

  
      </Routes>
    </Router>
    </>
  );
}

export default App;
