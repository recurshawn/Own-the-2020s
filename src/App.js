import React from 'react';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <br/>
        <div className="Input wrapper block fixed">
          <p>I plan on giving up <input className="wrapper block fixed inline" type="number" name="hours" /> hours of <input className="wrapper block fixed inline" type="text" name="habit" /> per <select className="wrapper block fixed inline">
            <option value="volvo">week</option>
            <option value="saab">day</option>
            <option value="opel">month</option>
          </select> in the 2020s.</p>
          <br/>
          <button className="block accent">Calculate free time</button>
        </div>
      
    </div>
  );
}

export default App;
