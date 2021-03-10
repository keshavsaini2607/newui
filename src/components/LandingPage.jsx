import React from 'react'
import './LandingPage.css'
import Navbar from './Navbar'
import vid from '../assets/aivid.mp4'

const LandingPage = () => {

    const landingPage = () => {
        return (
            <div className="landingPage">
                <Navbar />
                    <video src={vid} autoPlay preload="auto" loop muted />
                    <div className="landingPage__overlay"></div>
                <div className="landingPage__content">
                    <h1>Fastest route to your videos</h1>
                    <h3>Create videos fast and free in just few clicks</h3>
                    <button>Create Video</button>
                </div>
            </div>
        )
    }

    return (
        <div className="landingPage__main">
            {landingPage()}
        </div>
    )
}

export default LandingPage
