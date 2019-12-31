import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {

  state = {
    habit : "Netflix",
    totalHours: 0,
  }

  calculate = () => {
    
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <br />
        <div className="wrapper block fixed Input">
          <p>I plan on giving up <input className="wrapper block fixed inline" type="number" name="hours" placeholder="2" /> hours of <input className="wrapper block inline fixed" type="text" name="habit" placeholder="Netflix" /> per <select className="wrapper block fixed inline">
            <option value="week">week</option>
            <option value="day">day</option>
            <option value="month">month</option>
          </select> in the 2020s.</p>
          <br />
          <button onClick={this.state.calculate} className="block accent">Calculate free time</button>
        </div>
        <br />
        <div className="Output wrapper block fixed">
          <p>You can save X hours per month, 12X hours per year AND 120X hours in the 2020s!</p>
          <p>You can learn to code and get a tech job with that time!</p>
        </div>
        <br/>
        <Footer />
      </div>
    );
  }

}

export default App;
