import React from 'react'
import styles from '../../styles/App.module.css'

import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';

function MainBar() {
    return (
        <div>
            <div className={styles.maindiv} fluid>
                <nav className={styles.nav} fluid>
                    
                    <Link style={{textDecorationColor:'red'}} to="/"><header className={styles.navText}>Home</header></Link>
                    <Link style={{textDecorationColor:'red'}} to="/pricing"><header className={styles.navText}>Pricing</header></Link>
                    <Link style={{textDecorationColor:'red'}} to="/services"><header className={styles.navText}>Portfolio</header></Link>
                    <Link style={{textDecorationColor:'red'}} to="/contact"><header className={styles.navText}>Contact Us</header></Link>
                    <Link style={{textDecorationColor:'red'}} to="/client"><header className={styles.navText}>Client Center</header></Link>

                </nav>  
            </div>
        </div>
    )
}

export default MainBar;