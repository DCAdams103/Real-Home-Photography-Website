import React from 'react';
import logo from '../images/logo.jpg'
import styles from '../styles/SideBar.module.css';

function SideBar()
{

    return (
        <div className={styles.div}>
            
            <img src={logo} alt="Real Home Photography" />

            <h2> Home </h2>
            <h2> Pricing </h2>
            <h2> Services </h2>
            <h2> Contact Us </h2>
            <h2> Client Center </h2>
        </div>
    )
}

export default SideBar;