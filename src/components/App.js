import React, { Component } from 'react'
// import videoURL from 'video/swatch.mp4'
class App extends Component {

  render () {
    return <div>
      <nav id='nav'>
        <ul id='navbar'>
          <li id='homeicons'>1</li>
          <li id='homeicons'>2</li>
          <li id='homeicons'>3</li>
        </ul>
      </nav>
      <h2>Kramer's
        <br />
        Department
        <br />
        Store
      </h2>
      {/* <video autoPlay loop muted id='fullscreen'>
        <source src={videoURL} type='video/mp4' />
      </video> */}
    </div>
  }
}

export default App
