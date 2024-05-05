import React from 'react'

const Hero = () => {
  return (
    <div className="hero-image d-flex justify-content-center align-items-center text-white flex-column text-center">
        <div className="container">
            <h1>Welcome to QTrip</h1>
            <p className="hero-subheading">
                Explore the world with fantastic places to venture around
            </p>
            <input className="hero-input" placeholder="Search a City" />
        </div>
    </div>
  )
}

export default Hero
