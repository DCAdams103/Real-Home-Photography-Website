import React from 'react'
import styles from './MainBar.module.css'
import {Link} from 'react-router-dom';

function MainBar() {
    return (
        <div>
            <div className={styles.maindiv} fluid>
                <nav className={styles.nav} fluid>

                    <Link style={{textDecorationColor:'red'}} to="/"><header className={styles.navText}>Home</header></Link>
                    <Link style={{textDecorationColor:'red'}} to="/pricing"><header className={styles.navText} style={{ animationDelay: '.5s'}}>Pricing</header></Link>
                    <Link style={{textDecorationColor:'red'}} to="/portfolio"><header className={styles.navText} style={{animationDelay: '1s'}}>Portfolio</header></Link>
                    <Link style={{textDecorationColor:'red'}} to="/contact"><header className={styles.navText} style={{animationDelay: '1.5s'}}>Contact Us</header></Link>

                </nav>  
            </div>
        </div>
    )
}

export default MainBar;