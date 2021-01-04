import React from 'react'
import styles from './Footer.module.css'
import {Container, Image, Col, Row} from 'react-bootstrap'
import logo from './../../images/logo.png'
import veteran from './../../images/veteran.png'
import insta from './../../images/insta.png'
import facebook from './../../images/facebook.png'

function Footer() 
{
    return (
        <div className={styles.footerdiv}>
            <Container fluid>
                <Row style={{paddingTop: 0}}>
                    <Col>
                        <Image src={logo} className={styles.logo} alt="Real Home Photography" fluid />
                    </Col>

                    <Col className="col-sm-2">
                        <Image src={veteran} className={styles.vet} alt="Real Home Photography"  />
                    </Col>

                    <Col fluid >
                        <header className={styles.contactinfo}>
                            Phone : <a href="tel:9196791940"> 919-679-1940 </a> 
                            <br/>
                            Email : <a href="mailto: Rusty@RHomePhotography.com" >
                                Rusty@RHomePhotography.com
                            </a>
                        </header>
                    </Col>

                    <Col fluid >
                        <a href="//www.instagram.com/rhomephotography/" target="_blank">
                            <Image src={insta}  className={styles.socials} alt="Instagram" fluid />
                        </a>
                        <a href="//www.facebook.com/RustyAAdams" target="_blank">
                            <Image src={facebook} className={styles.socials} alt="Facebook" fluid />
                        </a>
                    </Col>
                
                </Row>

            </Container>
        </div>
    )
}

export default Footer;