import React from 'react';
import logo from '../logo.jpg'
import styles from '../styles/SideBar.module.css';

function SideBar()
{

    

    return (
        <div className={styles.div}>
            <img src={logo} alt="Real Home Photography" />
            <h2> Home </h2>
            <h2> Contact Us </h2>
        </div>
    )
}

export default SideBar;