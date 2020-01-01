import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Data from './PossibilitiesData';

import './App.css';

class App extends React.Component {

  state = {
    habit: "Netflix",
    hours: 2,
    unitTime: "day",
    hoursPerDay: 2,
    hoursSaved: { month: 60, year: 730, decade: 7306 },
    gif: "https://media.tenor.com/images/24827d8ae580f99b6955930bf461cab2/tenor.gif",
    message: "GG! You can master any language you choose! 🔥",
    message2: "",
    message3: "",
    url: "Source: https://www.clozemaster.com/blog/how-long-does-it-take-to-learn-a-language/",
  }

  shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
  calculate = () => {
    this.setState({ hoursSaved: { month: (this.state.hoursPerDay * 30), year: (this.state.hoursPerDay * 365), decade: (this.state.hoursPerDay * 3653) } });
    var ran = this.shuffle(Data);
    ran = ran.filter(datum => datum.requiredHours <= (this.state.hoursPerDay*3653));
    this.setState({gif: ran[0].gifURL, message: ran[0].message, url: ran[0].URL, message2: ran[0].message2, message3: ran[0].message3});
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
          <img src={this.state.gif}/>
          <br />
          <p>{this.state.message}</p>
          <p>{this.state.message2}</p>
          <p>{this.state.message3}</p>
        </div>
        <br />
        <Footer />
      </div>
    );
  }

}

export default App;
