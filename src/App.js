
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/Navbar/Navbar.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Pages/Home.jsx'
import About from './components/Pages/About.jsx'
import Register from './components/Pages/Register.jsx'
import Contact from './components/Pages/Contact.jsx'
import Show from './components/Pages/Show.jsx'
import ErrorPagx from './components/Pages/ErrorPagx.jsx'
import Update from './components/Pages/Update.jsx';
import Deletedata from './components/Pages/Deletedata.jsx';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
     <Navbar/>
      <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/show' element={<Show/>}></Route>
            <Route path='/update/student/:StudentId' element={<Update/>}></Route>
            <Route path='/delete/student/:StudentId' element={<Deletedata/>}></Route>
            <Route path={'*'} element={<ErrorPagx/>}></Route>
      </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
