import styles from '../../styles/MainContent.module.css';
import React from 'react'
import Image1 from '../../images/image1.jpg'
import Image2 from '../../images/image2.jpg'
import logo from '../../images/logo.png'
import logowhite from '../../images/logo-white.png'
import FadeIn from 'react-fade-in'
import {Image} from 'react-bootstrap'
import veteran from '../../images/veteran.png'


function MainContent()
{
    return (
        <div className={styles.middiv}>

        <Image className={styles.top} src={veteran} alt="" />

            <img className={styles.largeimg} src={Image1} alt="" />

            
            <header className={styles.welcomeText}> 
            
                <Image src={logo} className={styles.logo} fluid />
            
                <br/> Let me help you showcase your <br /> property with beautiful,
                <br /> professional <br /> photos.
        
            </header>

            <FadeIn>

            </FadeIn>

        </div>
    )
}

export default MainContent;