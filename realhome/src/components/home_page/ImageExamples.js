import React from 'react'
import Image1 from '../../images/image1.jpg'
import Image2 from '../../images/image2.jpg'
import Image3 from '../../images/image3.jpg'
import Image4 from '../../images/image4.jpg'
import Image5 from '../../images/image5.jpg'
import Image6 from '../../images/image6.jpg'
import {Row, Col, Image, Tabs, Tab, Container} from 'react-bootstrap'
import '../../styles/Tabbar.css'
import styles from '../../styles/ImageExamples.module.css'


function Welcome(props)
{
    return <img className={styles.image} src={props.src} alt="" />;
}

function ImageExample () 
{
    return (
        <div>

            {/* <header className={styles.exampleText}>
                Some Examples!
            </header> */}
            <Container fluid>
            <Tabs className="center" defaultActionKey="profile" id="images-tabs" >
                
                <Tab className="pad" eventKey="Interiors" title="Interiors">
                    
                <Row className="wid">
                    <Col >
                        <Image src={Image1} className={styles.image} />
                    </Col >
                    
                    <Col >
                        <Image src={Image2} className={styles.image}  />
                    </Col>
                </Row>

                <Row >
                    <Col>
                        <Image src={Image1} className={styles.image} fluid />
                    </Col >
                    
                    <Col >
                        <Image src={Image2} className={styles.image} fluid />
                    </Col>
                </Row>

                <Row >
                    <Col>
                        <Image src={Image1} className={styles.image} fluid />
                    </Col >
                    
                    <Col >
                        <Image src={Image2} className={styles.image} fluid />
                    </Col>
                </Row>

                </Tab>

                <Tab className="pad" eventKey="Exteriors" title="Exteriors">
                    
                <Row>
                    <Col>
                        <Image src={Image3} className={styles.image} fluid />
                    </Col >
                    
                    <Col >
                        <Image src={Image4} className={styles.image} fluid  />
                    </Col>
                </Row>

                <Row >
                    <Col>
                        <Image src={Image3} className={styles.image} fluid />
                    </Col >
                    
                    <Col >
                        <Image src={Image4} className={styles.image} fluid />
                    </Col>
                </Row>

                <Row >
                    <Col>
                        <Image src={Image3} className={styles.image} fluid />
                    </Col >
                    
                    <Col >
                        <Image src={Image4} className={styles.image} fluid />
                    </Col>
                </Row>

                </Tab>

                <Tab className="pad" eventKey="Drone" title="Drone">
                    
                <Row >
                    <Col>
                        <Image src={Image5} className={styles.image} fluid />
                    </Col >
                    
                    <Col >
                        <Image src={Image6} className={styles.image} fluid  />
                    </Col>
                </Row>

                <Row >
                    <Col>
                        <Image src={Image5} className={styles.image} fluid />
                    </Col >
                    
                    <Col >
                        <Image src={Image6} className={styles.image} fluid />
                    </Col>
                </Row>

                <Row >
                    <Col>
                        <Image src={Image5} className={styles.image} fluid />
                    </Col >
                    
                    <Col >
                        <Image src={Image6} className={styles.image} fluid />
                    </Col>
                </Row>


                </Tab>
            </Tabs>
            </Container>
            
            
            
            

            {/*<Welcome src={Image2} className={styles.image}/> */}
            
        </div>
    )
}

export default ImageExample;