import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Red from './components/Red';
import Blue from './components/Blue';
import Home from './components/Home';
import Yellow from './components/Yellow';

function App() {

  return (
    <div id="container">
      <div id="navbar">
        <Link to="/">home</Link>
        <Link to="/blue">blue</Link>
        <Link to="/red">red</Link>
        <Link to="/yellow">yellow</Link>

      </div>
      <div id="main-section">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/blue" element={<Blue />}/>
          <Route path="/red" element={<Red/>} />
          <Route path="/yellow" element={<Yellow/>} />

        </Routes>
      </div>
    </div>
  )
}

export default App
