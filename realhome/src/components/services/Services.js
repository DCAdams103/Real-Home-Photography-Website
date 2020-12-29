import React from 'react';
import styles from '../../styles/services/Services.module.css'
import {Row, Col, Image, Tabs, Tab, Container} from 'react-bootstrap'
import {Fade} from 'react-reveal'
import Image1 from '../../images/image1.jpg'
import Image2 from '../../images/image2.jpg'
import Image3 from '../../images/image3.jpg'
import Image4 from '../../images/image4.jpg'
import Image5 from '../../images/image5.jpg'
import Image6 from '../../images/image6.jpg'
import ReactPlayer from 'react-player'

function NewRow(props)
{
    return <div>
        <Fade>
            <Row>
                
                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} >
                    <Image src={props.src} className={styles.imageLeft} fluid />
                </Col >
                
                <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
                    <Image src={props.src1} className={styles.imageRight}  fluid />
                </Col>

            </Row>
        </Fade>
    </div>
}

function Services()
{
    return (
        <div>

            <header className={styles.title}>Services</header>

            <Container fluid>

                <Tabs className="centerServices" defaultActionKey="profile" id="images-tabs"  >
                    
                    <Tab className="pad" eventKey="Interiors" title="Interiors" fluid>
                    
                        <NewRow src={Image1} src1={Image2} />

                        <NewRow src={Image1} src1={Image2} />

                        <NewRow src={Image1} src1={Image2} />
                    
                    </Tab>

                    <Tab className="pad" eventKey="Exteriors" title="Exteriors" fluid>
                        
                        <NewRow src={Image3} src1={Image4} />

                        <NewRow src={Image3} src1={Image4} />

                        <NewRow src={Image3} src1={Image4} />

                    </Tab>

                    <Tab className="pad" eventKey="Drone" title="Drone" fluid>
                        
                        <NewRow src={Image5} src1={Image6} />

                        <NewRow src={Image5} src1={Image6} />

                        <NewRow src={Image5} src1={Image6} />

                    </Tab>

                    <Tab className="pad" eventKey="Video" title="Video" fluid>

                        <Row>
                    
                            <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} >
                                <ReactPlayer className={styles.imageLeft} url="https://youtu.be/zidN9eh1WSc" />
                            </Col >
                            
                            <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
                                <ReactPlayer className={styles.imageRight} url="https://youtu.be/RRxRGcVpPak" />
                            </Col>

                        </Row>

                    </Tab>

                </Tabs>

            </Container>

        </div>
    )
}

export default Services;