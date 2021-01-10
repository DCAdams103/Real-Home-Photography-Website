import React from 'react'
import Image1 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior8-2.jpg'
import Image2 from '../../images/Interior/real-estate-photo-picture-shot-of-house-interior3.jpg'
import Image3 from './../../images/Exterior/real-estate-photo-picture-shot-of-house-exterior5.jpg'
import Image4 from './../../images/Exterior/real-estate-photo-picture-shot-of-house-exterior8.jpg'
import Image5 from './../../images/Drone/real-estate-drone-shot-of-house-exterior1.jpg'
import Image6 from './../../images/Drone/real-estate-drone-shot-of-house-exterior2.jpg'
import {Row, Col, Image, Container} from 'react-bootstrap'
import styles from './ImageExamples.module.css'
import {Fade} from 'react-reveal'
import {NavLink} from 'react-router-dom'

function NewRow(props)
{
    return <div>
        <Fade>
            <Row>
                
                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} >
                    <Image src={props.src} className={styles.imageLeft} alt="Real Home Photography Real Estate Photography of House Exterior, Interior and Drone Shots" fluid />
                </Col >
                
                <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
                    <Image src={props.src1} className={styles.imageRight} alt="Real Home Photography Real Estate Photography of House Exterior, Interior and Drone Shots" fluid />
                </Col>

            </Row>
        </Fade>
    </div>
}

class ImageExample extends React.Component 
{

    render()
    {
        return (
            <div>
                
                <Container fluid>

                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
                    </style>
                    <div>
                    <Fade duration="2000">
                        <header className={styles.title}>Here are some examples...</header>
                    </Fade>
                    </div>
                    <NewRow src={Image1} src1={Image2} />

                    <NewRow src={Image3} src1={Image4} />

                    <NewRow src={Image5} src1={Image6} />

                    <NavLink to='/portfolio' style={{textDecorationColor:'red'}}>
                        <header className={styles.viewall}> View all &#8594; </header>
                    </NavLink>

                </Container>
                
            </div>
        )
    }
}

export default ImageExample;