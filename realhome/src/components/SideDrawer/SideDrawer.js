import React from 'react'
import './SideDrawer.css'
import {NavLink} from 'react-router-dom'
import {Image} from 'react-bootstrap'
import logowhite from './../../images/logo-white.png'

class SideDrawer extends React.Component {

    render ()
    {
        let drawerClasses = 'side-drawer';
        if(this.props.show)
        {
            drawerClasses = 'side-drawer open'
        }
        else
        {
            drawerClasses = 'side-drawer'
        }

        return (
            <nav className={drawerClasses}>
                
                <ul>
                    <Image className="logo" src={logowhite} />

                    <li onClick={this.props.click}>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li onClick={this.props.click}>
                        <NavLink to='/pricing'>Pricing</NavLink>
                    </li>
                    <li onClick={this.props.click}>
                        <NavLink to='/portfolio' >Portfolio</NavLink>
                    </li>
                    <li onClick={this.props.click}>
                        <NavLink to='/contact' >Contact Us</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default SideDrawer;