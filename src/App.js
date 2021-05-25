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
    }).then(response => response.json())            // add error handling
    .then(json => { 
      this.setState({json}); 
    });
    document.querySelector(".horoscope-data").classList.remove("d-none");
    localStorage.setItem("lastSign", mySign);
  }

render() {
    return (
      <React.Fragment>
        <div>
          <div className="choose-sign">
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
            <div className="date">
              Current Date: <br/>
              {this.state.json.current_date}
            </div>
            
            <div className="row">
              <div className="col-12 col-md-3">
                <div className="row">
                  <div className="col-6 col-md-12">
                    <div className="bubble">
                      <div className="bubble-text">
                      Lucky Number: <br/>
                      {this.state.json.lucky_number}
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-12">
                    <div className="bubble">
                      <div className="bubble-text">
                      Lucky Color: <br/>
                      {this.state.json.color}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12">
                    <div className="bubble">
                      <div className="bubble-text desc">
                        Description: <br/>
                        {this.state.json.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="row">
                  <div className="col-6 col-md-12">
                    <div className="bubble">
                      <div className="bubble-text">
                      Lucky Time: <br/>
                      {this.state.json.lucky_time}
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-12">
                    <div className="bubble">
                      <div className="bubble-text">
                        Today's Mood: <br/>
                        {this.state.json.mood}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 offset-3 col-md-4 offset-md-4">
                <div className="bubble">
                  <div className="bubble-text">
                  Compatibility: <br/>
                  <img src="#" alt="compatible sign" id="compatibility"/>
                  {this.state.json.compatibility}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
    </React.Fragment>
    );
}
}

export default App;
