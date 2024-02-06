//import ReactDOM from 'react-dom/client';
import {Routes,Route} from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
//import logo from './logo.svg';
//import './App.css';

function App() {
  return ( 
    <div>
       <Router>
          <NavBar/>
          <Routes>
              <Route exact path = "/" element={<Home/>}></Route>
              <Route path = "/about" element={<About/>}></Route>
          </Routes>
          <Footer/>
       </Router>
    </div>
  );
}

export default App;
