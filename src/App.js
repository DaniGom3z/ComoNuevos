
import './App.css';
import Page from './components/screen/page';
import Page2 from './components/screen/page2';
import PageInfo from './components/screen/pageInfo';
import ThirdPage from './components/screen/page3'
import FordPage from '../src/components/screen/page4'
import Form from './components/screen/Form';
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

  
      </Routes>
    </Router>
    </>
  );
}

export default App;
