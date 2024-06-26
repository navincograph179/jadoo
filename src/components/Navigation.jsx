import React from 'react'
import './Navigation.css'
import logo from '../assets/Logo.png'

const Navigation = () => {
    return (
        <div className="navigation-bar">
            <img src={logo} alt="logo img" className='logo' />
            <ul className="nav-links">
                <li><a href="#">Destination</a></li>
                <li><a href="#">Hotels</a></li>
                <li><a href="#">Flights</a></li>
                <li><a href="#">Bookings</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#" className='btn'>Sign up</a></li>
                <li className='lang'>
                    <div>EN</div>
                    <span><i class='bx bxs-down-arrow'></i></span>
                </li>
            </ul>
        </div>
    )
}

export default Navigation