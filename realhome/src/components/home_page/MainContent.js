import styles from './MainContent.module.css';
import React from 'react'
import logo from './../../images/logo.png'
import {Image} from 'react-bootstrap'
import veteran from './../../images/veteran.png'
import zillow from './../../images/zillow.png'

function MainContent()
{
    return (
        <div className={styles.wholediv}>

            <Image className={styles.vet} src={veteran} alt="Real Home Photography is a Veteran owned business" fluid />

            <header className={styles.contentheader} fluid>
                <Image src={logo} className={styles.logo} alt="Real Home Photography logo based in Apex, North Carolina and RDU Area" fluid />
            </header>

            <div className={styles.textani}>
                <header className={styles.contentheader}>
                    <main className={styles.welcomeText}>
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