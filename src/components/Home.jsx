import React from 'react'
import roundButton from '../assets/button-round.png'
import heroImage from '../assets/hero-img.png'
import shape from '../assets/Vector.png'
import './Home.css'
const Home = () => {
    return (
        <section className='home-section'>
            <div className="home-container">
            <img src={shape} alt="shage" className='shape'/>
            <div className="text-container">
                <h3 className='small-title'>Best Destinations Around The World</h3>
                <h1 className='big-title'>Travel, enjoy<br />
                    and live a new <br />
                    and full life</h1>
                <p className='paragraph'>
                    Built Wicket longer admire do barton vantity itself do in it. Preferred
                    to sportsmen it engrossed listening. Park gate sell they west hard
                    for the.
                </p>
                <div className='button-row'>
                    <button>Find out more</button>
                    <div>
                        <img src={roundButton} alt="round button image" />
                        <p>Play Demo</p>
                    </div>
                </div>

            </div>
            <div className="image-container">
                <img className='heroImg' src={heroImage} alt="hero image" />
            </div>
        </div>
        </section>
    )
}

export default Home