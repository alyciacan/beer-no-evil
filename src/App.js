import logo from './logo.svg';
import './App.css';
import CardContainer from './CardContainer.js';
import Navbar from './Navbar.js';
import SingleBeer from './SingleBeer.js';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allBeers: [],
      currentBeer: null
    }
  }

  componentDidMount = () => {
    fetch('https://api.punkapi.com/v2/beers')
      .then(resp => resp.json())
      .then(data => this.setState({ allBeers: data }))
  }

  expandView = (id) => {
    console.log(this.state.allBeers.find(beer => beer.id === id))
    this.setState( {
      currentBeer: this.state.allBeers.find(beer => beer.id === id)
    } )
  }

  render = () => {
    return (
      <main className="main-section">
        <Navbar />
        { !this.state.currentBeer && <CardContainer 
          allBeers={this.state.allBeers}
          expandView={this.expandView}
          /> }
        { this.state.currentBeer && <SingleBeer currentBeer={this.state.currentBeer}/> }
      </main>
    )
  }
}

export default App;
