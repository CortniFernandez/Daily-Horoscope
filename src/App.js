import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      json: {}
    };
  }

  getHoroscope() {
    const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
    fetch(URL, {
        method: 'POST'
    }).then(response => response.json())
    .then(
      (json) => { 
        this.setState({
          isLoaded: true,
          json
        }); 
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
}

render() {
    return (
      <div>
      Current Date: {this.state.json.current_date} <br />
      Compatibility: {this.state.json.compatibility} <br />
      Lucky Number: {this.state.json.lucky_number} <br />
      Lucky Time: {this.state.json.lucky_time} <br />
      Color: {this.state.json.color} <br />
      Date Range: {this.state.json.date_range} <br />
      Mood: {this.state.json.mood} <br />
      Description: {this.state.json.description} <br />
    </div>
    );
}
}

export default App;
