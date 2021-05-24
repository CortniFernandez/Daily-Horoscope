import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json: {}
    };
  }

  componentDidMount() {
    if (localStorage.getItem("lastSign")) {
      document.getElementById("signs").value = (localStorage.getItem("lastSign"));
      this.getHoroscope();
    }
  }
    
  getHoroscope = () => {
    const mySign = document.getElementById("signs").value;
    const URL = `https://aztro.sameerkumar.website/?sign=${mySign}&day=today`;
    fetch(URL, {
        method: 'POST'
    }).then(response => response.json())
    .then(json => { this.setState({json}); });
    document.querySelector(".horoscope-data").classList.remove("d-none");
    localStorage.setItem("lastSign", mySign);
  }

render() {
    return (
      <React.Fragment>
        <div>
          <label htmlFor="signs">Your sign:</label>
          <select name="signs" id="signs" onChange={this.getHoroscope}>
            <option value="aries">Aries</option>
            <option value="taurus">Taurus</option>
            <option value="gemini">Gemini</option>
            <option value="cancer">Cancer</option>
            <option value="leo">Leo</option>
            <option value="virgo">Virgo</option>
            <option value="libra">Libra</option>
            <option value="scorpio">Scorpio</option>
            <option value="sagittarius">Sagittarius</option>
            <option value="capricorn">Capricorn</option>
            <option value="aquarius">Aquarius</option>
            <option value="pisces">Pisces</option>
          </select>
        </div>
        <div className="horoscope-data d-none">
          Current Date: {this.state.json.current_date} <br />
          Compatibility: {this.state.json.compatibility} <br />
          Lucky Number: {this.state.json.lucky_number} <br />
          Lucky Time: {this.state.json.lucky_time} <br />
          Color: {this.state.json.color} <br />
          Date Range: {this.state.json.date_range} <br />
          Mood: {this.state.json.mood} <br />
          Description: {this.state.json.description} <br />
      </div>
    </React.Fragment>
    );
}
}

export default App;
