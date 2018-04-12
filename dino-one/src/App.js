import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import JobList from './components/JobList'
import JobForm from './components/JobForm'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listings: []
  }
}

componentDidMount() {
  fetch('./listings.json')
  .then(response => response.json()).then(data => {
    this.setState({listings: data})
  })
}

jobListingSubmitted = (job) => {
  this.setState({
    listings: this.state.listings.concat(job).reverse()
  })
}

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <JobList listings={this.state.listings} />
          <JobForm jobListingSubmitted={this.jobListingSubmitted} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
