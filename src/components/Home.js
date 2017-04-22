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

// var user = newUser('Mahesha')
user.addSession('2017-02-05', 120)
user.addSession('2017-02-06', 35)
user.getData().total

var User = function (name) {
  var sessions = []
  var totalDuration = 0

  this.addSession = function (sessionDate, duration) {
    sessions.push({
      'sessionDate': sessionDate,
      'duration': duration
    })

    totalDuration += duration

    return totalDuration
  }
  this.getData = function () {
    return {
      'name': name,
      'total': totalDuration,
      'sessions': sessions.slice()
    }
  }
}

var buildUser = function (userData) {
  var user = new User(userData.name)
  userData.sessions.forEach(function (sesh) {
    user.addSession(sesh.sessionDate, sesh.duration)
  })
  return user
}

var userData = {
  'name': 'Mahesha',
  'sessions': [
    {'sessionDate': '2017-02-05', 'duration': 120},
    {'sessionDate': '2017-02-06', 'duration': 35},
    {'sessionDate': '2017-02-06', 'duration': 45}
  ]
}

var user = buildUser(userData)
console.log(user.addSession('2017-02-15', 40))
