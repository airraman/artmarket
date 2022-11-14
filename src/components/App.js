import logo from '../hyperlocal.png';
import '../App.css';
import React from "react"
import CanvasPage from './CanvasPage';

function App() {
  return (
    <div className="App">
      <div className = "logo">
        <img  src = {logo}/>
      </div>
      <p className='tagline'>Connecting Local Creators and Buyers of Canvas Art</p>
    <CanvasPage />
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
