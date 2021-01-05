import React from 'react'
import styles from './Pricing.module.css'
import {Container, Row, Col} from 'react-bootstrap'

class Pricing extends React.Component
{

    render()
    {
        return (
            <div className={styles.maindiv}>

                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
                </style>

                <header className={styles.title}>Pricing & Packages</header>

                <Container className={styles.rowcontainer} fluid>
                    <Row style={{padding:10, paddingTop:0}}>
                        <Col className={styles.columns} xs={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }} >
                            <header className={styles.headers}>Photos</header>
                            <br />
                            <header className={styles.packages}>30 Photo Package - $145</header>
                            <header className={styles.desc}>Interior & Exterior Delivered in less than 24 hours</header>
                            <br />
                            <header className={styles.packages}>Drone Package - $95</header>
                            <header className={styles.desc}> 6 Aerial Photos </header>
                            <br />
                            <header className={styles.packages}> Twilight Package - $95 </header>
                            <header className={styles.desc}> 6 Virtual Twilight Photos </header> 
                        </Col>

                        <Col className={styles.columns} xs={{ span: 12, order: 2 }} md={{ span: 4, order: 2 }} >
                            <header className={styles.headers}>Videos</header>
                            <br />
                            <header className={styles.packages}> 60 Second Video - $250 </header>
                            <header className={styles.desc}> Drone, Interior & Exterior Footage </header> 
                            <br/>
                            <header className={styles.packages}> 120 Second Video - $350 </header>
                            <header className={styles.desc}> Drone, Interior & Exterior Footage </header> 
                            <br/>
                            <header className={styles.packages}> 30 Sec. Drone Video - $95 </header>
                            <header className={styles.desc}> Drone Footage Only - No Ground Level Shots </header> 
                        </Col>

                        <Col className={styles.columns} style={{borderRight:'none'}} xs={{ span: 12, order: 3 }} md={{ span: 4, order: 3 }} >
                            <header className={styles.headers}>3D Tours</header>
                            <br />
                            <header className={styles.packages}> Up to 3000 sq ft - $165 </header>
                            <br/>
                            <br/>
                            <header className={styles.packages}> 3000 - 5000 sq ft - $195</header>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Pricing;