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

      const mySignIcon = document.getElementById("mySignIcon");
      const mySignName = document.getElementById("mySignName");
      switch(mySign) {
        case 'aries':
          mySignIcon.src = '/img/aries.png';
          mySignName.innerHTML = "Aries";
          break;
        case 'taurus':
          mySignIcon.src = '/img/taurus.png';
          mySignName.innerHTML = "Taurus";
          break;
        case 'gemini':
          mySignIcon.src = '/img/gemini.png';
          mySignName.innerHTML = "Gemini";
          break;
        case 'cancer':
          mySignIcon.src = '/img/cancer.png';
          mySignName.innerHTML = "Cancer";
          break;
        case 'leo':
          mySignIcon.src = '/img/leo.png';
          mySignName.innerHTML = "Leo";
          break;
        case 'virgo':
          mySignIcon.src = '/img/virgo.png';
          mySignName.innerHTML = "Virgo";
          break;
        case 'libra':
          mySignIcon.src = '/img/libra.png';
          mySignName.innerHTML = "Libra";
          break;
        case 'scorpio':
          mySignIcon.src = '/img/scorpio.png';
          mySignName.innerHTML = "Scorpio";
          break;
        case 'sagittarius':
          mySignIcon.src = '/img/sagittarius.png';
          mySignName.innerHTML = "Sagittarius";
          break;
        case 'capricorn':
          mySignIcon.src = '/img/capricorn.png';
          mySignName.innerHTML = "Capricorn";
          break;
        case 'aquarius':
          mySignIcon.src = '/img/aquarius.png';
          mySignName.innerHTML = "Aquarius";
          break;
        case 'pisces':
          mySignIcon.src = '/img/pisces.png';
          mySignName.innerHTML = "Pisces";
          break;
        default:
          break;                     
      }
    
      const compatibility = document.getElementById("compatibility");
      switch(this.state.json.compatibility) {
        case 'Aries':
          compatibility.src = '/img/aries.png';
          break;
        case 'Taurus':
          compatibility.src = '/img/taurus.png';
          break;
        case 'Gemini':
          compatibility.src = '/img/gemini.png';
          break;
        case 'Cancer':
          compatibility.src = '/img/cancer.png';
          break;
        case 'Leo':
          compatibility.src = '/img/leo.png';
          break;
        case 'Virgo':
          compatibility.src = '/img/virgo.png';
          break;
        case 'Libra':
          compatibility.src = '/img/libra.png';
          break;
        case 'Scorpio':
          compatibility.src = '/img/scorpio.png';
          break;
        case 'Sagittarius':
          compatibility.src = '/img/sagittarius.png';
          break;
        case 'Capricorn':
          compatibility.src = '/img/capricorn.png';
          break;
        case 'Aquarius':
          compatibility.src = '/img/aquarius.png';
          break;
        case 'Pisces':
          compatibility.src = '/img/pisces.png';
          break;
        default:
          break;      
      }
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
            <div className="row">
              <div className="col-6 offset-3 col-md-4 offset-md-4">
                <div className="date">
                  <h5>Current Date:</h5>
                  <h6>{this.state.json.current_date}</h6>
                </div>
                <div className="tile">
                  <div className="tile-text">
                    <h5>Today's Horoscope For</h5>
                    <img className="img-fluid" alt="" id="mySignIcon" />
                    <h6 id="mySignName"></h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-3">
                <div className="row">
                  <div className="col-6 col-md-12">
                    <div className="tile">
                      <div className="tile-text">
                        <h5>Lucky Number:</h5>
                        <h6>{this.state.json.lucky_number}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-12">
                    <div className="tile">
                      <div className="tile-text">
                        <h5>Lucky Color:</h5>
                        <h6>{this.state.json.color}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12">
                    <div className="tile">
                      <div className="tile-text desc">
                        <p>{this.state.json.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="row">
                  <div className="col-6 col-md-12">
                    <div className="tile">
                      <div className="tile-text">
                        <h5>Lucky Time:</h5>
                        <h6>{this.state.json.lucky_time}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-12">
                    <div className="tile">
                      <div className="tile-text">
                        <h5>Today's Mood:</h5>
                        <h6>{this.state.json.mood}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 offset-3 col-md-4 offset-md-4">
                <div className="tile">
                  <div className="tile-text">
                    <h5>Compatible With</h5>
                    <img className="img-fluid" alt="" id="compatibility" /> <br/>
                    <h6>{this.state.json.compatibility}</h6>
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
