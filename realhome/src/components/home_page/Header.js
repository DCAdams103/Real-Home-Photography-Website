import React from 'react'
import styles from '../../styles/Header.module.css';

function Header()
{

    return (
        <div>
            <header className="navbar" style={styles}> 
                Let me help you showcase your <br /> property with beautiful, <br />
                professional <br /> photos.
            </header>
         
            <div className={styles.rectangle} >
                <p> </p>
            </div>

        </div>
        
    )
}

export default Header;