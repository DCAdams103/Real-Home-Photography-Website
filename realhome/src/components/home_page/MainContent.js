import styles from '../../styles/home_page/MainContent.module.css';
import React from 'react'
import logo from '../../images/logo.png'
import FadeIn from 'react-fade-in'
import {Image, Nav, Navbar} from 'react-bootstrap'
import veteran from '../../images/veteran.png'

function MainContent()
{
    return (
        <div className={styles.middiv}>

            <Image className={styles.vet} src={veteran} alt="" fluid />

            {/* <Image className={styles.largeimg} src={Image1} alt=""  fluid/> */}

                <header className={styles.logoHeader} fluid>
                    <Image src={logo} className={styles.logo} fluid />
                </header>
            
                <header className={styles.welcomeText} fluid>
                    
                    <br/> Let me help you showcase your <br /> property with beautiful,
                    <br /> professional <br /> photos.
                </header>

        </div>
    )
}



export default MainContent;