import React from 'react'
import './SideDrawer.css'
import {NavLink} from 'react-router-dom'
import {Image} from 'react-bootstrap'
import logo from '../../images/logo.png'

function SideDrawer(props) {

    let drawerClasses = 'side-drawer';
    if(props.show)
    {
        drawerClasses = 'side-drawer open'
    }

    return (
        <nav className={drawerClasses}>
            
            <ul>
                <Image className="logo" src={logo} />

                <li>
                    <NavLink to='/' >Home</NavLink>
                </li>
                <li>
                    <NavLink to='/pricing' >Pricing</NavLink>
                </li>
                <li>
                    <NavLink to='/services' >Services</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' >Contact Us</NavLink>
                </li>
                <li>
                    <NavLink to='/client' >Client Center</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default SideDrawer;