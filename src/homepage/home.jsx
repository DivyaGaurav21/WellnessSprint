import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import IMG from '../img/doctor.png'

const home = () => {
    return (
        <div>
            <Navigation />
            <div className='mywork-doctor'>
                <div className='mywork'>
                    <h2>We Provide All Health Care Solution</h2>
                    <h3>we help in staying healthy and active a fun and engaging experience for individuals </h3>
                    <h3>Protect Your Health And Take Care To Of Your Health</h3>
                    <p>or we can create a motivating and enjoyable way for seniors to exercise , yoga regularly.</p>
                    <Link to='letstart' className='start-btn'>Lest's Start</Link>
                </div>
                <div className='doctor'>
                    <img src={IMG} alt='doctor-img' className='doctor-img' />
                </div>
            </div>
        </div>
    )
}

export default home