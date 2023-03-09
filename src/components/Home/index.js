import {Component} from 'react'

import Header from '../Header'

import './index.css'

const apiHomeRouteConst = {
  initilize: 'INITILIZE',
  success: 'SUCCESS',
  failure: 'FAILURE',
  isprogress: 'ISPROGRESS',
}

class Home extends Component {
  state = {initialPoster: {}, apiStatus: apiHomeRouteConst.initilize}

  render() {
    return (
      <div className="home-container">
        <Header />
        <h1 className="test">vv</h1>
      </div>
    )
  }
}

export default Home
