import React from 'react'
import styles from './AboutMe.module.css'
import {Container, Image, Col, Row} from 'react-bootstrap'
import headshot from './../../images/headshot.JPG'
import {Fade} from 'react-reveal'

function AboutMe()
{
    return (
        <div>

            <Container className={styles.titlecontainer} fluid>
                <Fade>
                    <header className={styles.title}> About Us </header>
                </Fade>
            </Container>

            <Container fluid>
                <Row className={styles.inforow}>

                    <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
                    <Fade> 
                        <Image src={headshot} className={styles.headshot} alt="Rusty Adams" />
                    </Fade>
                    </Col>

                    <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
                    <Fade>
                        <header className={styles.paragraph}>
                        Rusty Adams graduated from NC State with a BS in Electrical Engineering. He has always had an interest in photography and while working at Nortel he did portrait and wedding photography.
                        </header>
                        <header className={styles.paragraph}>
                        After the demise of Nortel, he opened Quarter Note Music, a music store in Apex that was in business for 7 years.
                        </header>
                        <header className={styles.paragraph}>
                        His interest has shifted to Real Estate Photography including video and aerial shots. 
                        He is FAA drone certified, and a veteran of the US Air Force! 
                        </header>
                        <header className={styles.paragraph}>
                        Other interests include guitar, piano, singing, and his dog "Bella"! 
                        </header>
                    </Fade>
                    </Col>

                </Row>
            </Container>

        </div>
    )
}

export default AboutMe;