import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    advice: ''
  }
  componentDidMount() {
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip
        /*this this.setstate allows us 
        to update the state and also allows us
         the advice string outside this function
         */
        this.setState({ advice: advice });
      })
      .catch((err) => {
        console.log(err);
      })
  }
  newQuote = () => {
    this.fetchAdvice();
  }

  render() {
    //simple destructing
    const { advice } = this.state;
    const { newQuote } = this;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button onClick={newQuote}>New Quote</button>
        </div>
      </div>

    );
  }
}

export default App;