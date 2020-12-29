import styles from '../../styles/home_page/MainContent.module.css';
import React from 'react'
import logo from '../../images/logo.png'
import {Image, Nav, Navbar} from 'react-bootstrap'
import veteran from '../../images/veteran.png'

function MainContent()
{
    return (
        <div className={styles.middiv}>

            <Image className={styles.vet} src={veteran} alt="" fluid />

            <header className={styles.logoHeader} fluid>
                <Image src={logo} className={styles.logo} fluid />
            </header>

            <div className={styles.ani}>
                <header className={styles.logoHeader} fluid>
                    <main className={styles.test}>
                    <br/> Let me help you showcase your <br /> property with beautiful,
                    <br /> professional <br /> photos.
                    </main>
                </header>
            </div>

            <header className={styles.arrow}>
                &#8595;
            </header>

        </div>
    )
}



export default MainContent;