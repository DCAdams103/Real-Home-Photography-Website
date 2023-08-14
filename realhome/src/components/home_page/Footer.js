import React from 'react'
import styles from './Footer.module.css'
import {Container, Image, Col, Row} from 'react-bootstrap'
import logo from './../../images/logo.png'
import veteran from './../../images/veteran.png'
import zillow from './../../images/zillow_white.png'
import insta from './../../images/insta.png'
import facebook from './../../images/facebook.png'

function Footer() 
{
    return (
        <div className={styles.footerdiv}>
            <Container fluid>
                <Row className={styles.row}>
                    <Col className={styles.col}>
                        <Image src={logo} className={styles.logo} alt="Real Home Photography" fluid />
                    </Col>

                    <Col className={styles.col}>
                        <Image src={veteran} className={styles.vet} alt="Real Home Photography"  />
                    </Col>

                    <Col className={styles.col}>
                        <Image src={zillow} className={styles.zillow} alt="Real Home Photography Zillow"  />
                    </Col>

                    <Col className={styles.col}>
                        <header className={styles.contactinfo}>
                            Phone : <a href="tel:9196791940" aria-label="Real Home Photography Phone Number" rel="noopener"> 919-679-1940 </a> 
                        </header>
                    </Col>

                    <Col className={styles.col} >
                        <a href="https://www.instagram.com/rhomephotography/" target="_blank" aria-label="Instagram" rel="noreferrer">
                            <Image src={insta} alt="Instagram" fluid />
                        </a>
                    </Col>

                    <Col className={styles.col}>
                        <a href="https://www.facebook.com/RealHomePhotography/" target="_blank" aria-label="Facebook" rel="noreferrer">
                            <Image src={facebook} alt="Facebook" fluid />
                        </a>
                    </Col>
                
                </Row>

            </Container>
        </div>
    )
}

export default Footer;