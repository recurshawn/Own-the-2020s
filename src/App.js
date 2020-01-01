import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {

  state = {
    habit: "Netflix",
    hours: 2,
    unitTime: "day",
    hoursPerDay: 2,
    hoursSaved: { month: 60, year: 730, decade: 7306 },
  }

  calculate = () => {
    this.setState({ hoursSaved: { month: (this.state.hoursPerDay * 30), year: (this.state.hoursPerDay * 365), decade: (this.state.hoursPerDay * 3653) } });
  }

  getHoursPerDay = (hours, unitTime) => {

    if (unitTime == "week") {
      this.setState({ hoursPerDay: (hours / 7) });
    }
    else if (unitTime == "month") {
      this.setState({ hoursPerDay: (hours / 30) });
    }
    else if (unitTime == "day") {
      this.setState({ hoursPerDay: hours });
    }

  }

  getUnitTime = (e) => {
    this.setState({ unitTime: e.target.value });
    this.getHoursPerDay(this.state.hours, e.target.value);
  }

  getHours = (e) => {
    if(e.target.value=='')
    {
      this.setState({ hours: 2 });
    }
    else
    {
      this.setState({ hours: e.target.value });
    }

    this.getHoursPerDay(e.target.value, this.state.unitTime);
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <br />
        <div className="wrapper block fixed Input">
          <p>I plan on giving up <input onChange={this.getHours} className="wrapper block fixed inline" type="number" name="hours" placeholder="2" /> hours of <input className="wrapper block inline fixed" type="text" name="habit" placeholder="Netflix" /> per <select onChange={this.getUnitTime} className="wrapper block fixed inline">
            <option value="day">day</option>
            <option value="week">week</option>
            <option value="month">month</option>
          </select> in the 2020s.</p>
          <br />
          <button onClick={this.calculate} className="block accent">Calculate free time</button>
        </div>
        <br />
        <div className="Output wrapper block fixed">
          <p>You can save {Math.round(this.state.hoursSaved.month)} hours per month, {Math.round(this.state.hoursSaved.year)} hours per year AND {Math.round(this.state.hoursSaved.decade)} hours in the 2020s!</p>
          <br />
          <img src="https://media2.giphy.com/media/5Zesu5VPNGJlm/source.gif" />
          <br />
          <p>You can learn to code and get a tech job with that time!</p>
        </div>
        <br />
        <Footer />
      </div>
    );
  }

}

export default App;
