
import './App.css';
import Page from './components/screen/user/page';
import Page2 from './components/screen/user/page2';
import PageInfo from './components/screen/user/pageInfo';
import ThirdPage from './components/screen/user/page3'
import FordPage from '../src/components/screen/user/page4'
import Form from './components/screen/user/Form';
import Inicio from './components/screen/user/inicioSesion'
import Admin from './admincomponents/screen/pageAdmin'

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
    <Route path="/pageInfo" element={<PageInfo/>} />
    <Route path="/Form" element={<Form/>} />
    <Route path="/inicio" element={<Inicio/>} />
    <Route path="/admin" element={<Admin/>} />
   
    

  
      </Routes>
    </Router>
    </>
  );
}

export default App;
