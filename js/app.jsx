import React from 'react';
import ReactDOM from 'react-dom';
import './../scss/main.scss';

document.addEventListener('DOMContentLoaded', function(){

class Design extends React.Component {
  render() {
    return <header>
      <h1>Interactive World Map</h1>
    </header>
  }
}

class WorldMap extends React.Component {
  render() {
    var Isvg = require('react-inlinesvg')
    return <div className='map'>
            <Isvg src="./images/worldHigh3.svg"/>
       </div>
  }
}

class Country extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        header: 'Find information about that country',
        text: 'Write country name:',
      }
  }

  handleInputClick = () => {
    this.setState({
      text: '',
    })
  }

  handleInputChange = (event) => {
    this.setState({
      text: event.target.value,
      country: this.state.text,
    })
  }

  render() {
    return <div id='info'>
      <h3>{this.state.header}</h3>
      <h1 className='h1'></h1>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>

      <form>
        <input type='text' value={this.state.text}
          onChange={this.handleInputChange}
          onClick={this.handleInputClick}/>
        <br/><br/>
        <input type="submit" value='Check it'
          onClick={this.handleInputSubmitClick}/>
      </form>

      <br/><br/>
      <img src='' />
    </div>
  }
}

class Footer extends React.Component {
  render() {
    return <footer>
      <h3>based on <a href='https://restcountries.eu/'>REST COUNTRIES</a></h3>
    </footer>
  }
}



class App extends React.Component {
  render() {
    return <div>
              <Design />
              <WorldMap />
              <Country />
              <Footer />
            </div>
  }
}

  ReactDOM.render(
      <App />,
      document.getElementById('app')
  );
});
