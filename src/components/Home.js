import React, { Component } from 'react'
import videoURL from '../images/runners.mp4'
import posterURL from '../images/runners-frame1.jpg'

class Home extends Component {

  render () {
    return <div className='homePage'>
      <header>
        <video autoPlay loop muted poster={posterURL} id='video-bg'>
          <source src={videoURL} type='video/mp4' />
        </video>
      </header>
    </div>
  }
}

export default Home
