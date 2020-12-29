import React from 'react'
import Image1 from './../../images/image1.jpg'
import Image2 from './../../images/image2.jpg'
import Image3 from './../../images/image3.jpg'
import Image4 from './../../images/image4.jpg'
import Image5 from './../../images/image5.jpg'
import Image6 from './../../images/image6.jpg'
import '../../styles/home_page/Tabbar.css'
import {Row, Col, Image, Tabs, Tab, Container} from 'react-bootstrap'
import styles from '../../styles/home_page/ImageExamples.module.css'
import {Fade} from 'react-reveal'
import {NavLink} from 'react-router-dom'

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

function ImageExample () 
{
    return (
        <div>

            {/* <header className={styles.exampleText}>
                Some Examples!
            </header> */}
            <Container fluid>

                <Tabs className="center" defaultActionKey="profile" id="images-tabs"  >
                    
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

                </Tabs>
                <NavLink to='/services' style={{textDecorationColor:'red'}}>
                    <header className={styles.more}> View all &#8594; </header>
                </NavLink>
                

            </Container>
            
        </div>
    )
}

export default ImageExample;