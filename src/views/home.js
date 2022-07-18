import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Corporate Interactions Associate</title>
        <meta property="og:title" content="Corporate Interactions Associate" />
      </Helmet>
    </div>
  )
}

export default Home
