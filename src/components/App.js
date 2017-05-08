import React, { Component } from 'react'
// import videoURL from '/video/swatch.mp4'
class App extends Component {

  constructor () {
    super()
    this.state = ({
      isNightTime: false,
      visibleCategory: null
    })
  }

  showCategory (category) {
    this.setState({
      visibleCategory: category
    })
  }

  hideCategory (category) {
    this.setState({
      visibleCategory: null
    })
  }

  isNightTime (event) {
    event.preventDefault()
    this.setState = ({
    })
  }

  render () {
    return <div id='page-wrap'>
      <input type='checkbox' id='sidebartoggler' name='' value='' />
      <div id='page-content'>
        <label htmlFor='sidebartoggler' id='toggle'>☰</label>
        <nav id='sidebar'>
          <a href='' id='toggle'>☰</a>
          <ul id='sidebar'>
            <li id='homeicons'>Home</li>
            <li id='homeicons'>Mens</li>
            <li id='homeicons'>Sale</li>
          </ul>
        </nav>
        <h2>Kramer's
        <br />
        Department
        <br />
        Store
      </h2>
        <button onClick={this.state.isNightTime}>
        Night Mode
      </button>
      </div>
    </div>
  }
}

export default App
