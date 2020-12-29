import React from 'react'
import styles from '../../styles/App.module.css'
import Pricing from '../../components/pricing/Pricing'
import Services from '../../components/services/Services'
import ImageExamples from '../../components/home_page/ImageExamples'
import MainContent from '../../components/home_page/MainContent'
import AboutMe from '../../components/home_page/AboutMe'
import Footer from '../../components/home_page/Footer'

import {
    BrowserRouter as Router,
    Switch,
    Route,
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