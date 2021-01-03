import React from 'react';
import styles from '../../styles/services/Services.module.css'
import {Row, Col, Image, Tabs, Tab, Container} from 'react-bootstrap'
import {Fade} from 'react-reveal'
import logo from './../../images/logo.png'
import ScrollButton from './ScrollToTopButton'

/* Interior Photo Imports */
import Int1 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior1.jpg'
import Int2 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior2.jpg'
import Int3 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior2-2.jpg'
import Int4 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior3.jpg'
import Int5 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior4.jpg'
import Int6 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior5.jpg'
import Int7 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior6.jpg'
import Int8 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior7.jpg'
import Int9 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior8.jpg'
import Int10 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior8-2.jpg'
import Int11 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior9.jpg'
import Int12 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior10.jpg'
import Int13 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior11.jpg'
import Int14 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior12.jpg'
import Int15 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior13.jpg'
import Int16 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior14.jpg'
import Int17 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior15.jpg'
import Int18 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior16.jpg'
import Int19 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior17.jpg'
import Int20 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior18.jpg'
import Int21 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior19.jpg'
import Int22 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior20.jpg'
import Int23 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior21.jpg'
import Int24 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior22.jpg'
import Int25 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior23.jpg'
import Int26 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior24.jpg'
import Int27 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior25.jpg'
import Int28 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior26.jpg'
import Int29 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior27.jpg'
import Int30 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior28.jpg'
import Int31 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior29.jpg'
import Int32 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior30.jpg'
import Int33 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior31.jpg'
import Int34 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior32.jpg'
import Int35 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior33.jpg'
import Int36 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior34.jpg'
import Int37 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior35.jpg'
import Int38 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior36.jpg'
import Int39 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior37.jpg'
import Int40 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior38.jpg'
import Int41 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior39.jpg'
import Int42 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior40.jpg'
import Int43 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior41.jpg'
import Int44 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior42.jpg'

/* Exterior Photo Imports */
import Ext1 from './../../images/Exterior/real-estate-photo-picture-shot-of-house-exterior1.jpg'
import Ext2 from './../../images/Exterior/real-estate-photo-picture-shot-of-house-exterior2.jpg'
import Ext3 from './../../images/Exterior/real-estate-photo-picture-shot-of-house-exterior3.jpg'
import Ext4 from './../../images/Exterior/real-estate-photo-picture-shot-of-house-exterior4.jpg'
import Ext5 from './../../images/Exterior/real-estate-photo-picture-shot-of-house-exterior5.jpg'
import Ext6 from './../../images/Exterior/real-estate-photo-picture-shot-of-house-exterior6.jpg'
import Ext7 from './../../images/Exterior/real-estate-photo-picture-shot-of-house-exterior7.jpg'
import Ext8 from './../../images/Exterior/real-estate-photo-picture-shot-of-house-exterior8.jpg'

/* Drone Photo Imports */
import Drone1 from './../../images/Drone/real-estate-drone-shot-of-house-exterior1.jpg'
import Drone2 from './../../images/Drone/real-estate-drone-shot-of-house-exterior2.jpg'
import Drone3 from './../../images/Drone/real-estate-drone-shot-of-house-exterior3.jpg'
import Drone4 from './../../images/Drone/real-estate-drone-shot-of-house-exterior4.jpg'
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

class Services extends React.Component
{

    render()
    {
       
        return (
            <div className={styles.bg}>

                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
                </style>

                <Image className={styles.logo} src={logo} alt="" fluid />

                <header className={styles.title}>Portfolio</header>

                <Container fluid>

                    <ScrollButton />

                    <Tabs className={styles.tabs} defaultActionKey="profile" id="images-tabs"  >
                        
                        <Tab className="pad" eventKey="Interiors" title="Interiors" fluid>
                            
                            <NewRow src={Int1} src1={Int2} />
                            <br/>
                            <NewRow src={Int3} src1={Int4} />

                            <NewRow src={Int5} src1={Int6} />
                            
                            <NewRow src={Int7} src1={Int8} />

                            <NewRow src={Int9} src1={Int10} />

                            <NewRow src={Int11} src1={Int12} />

                            <NewRow src={Int13} src1={Int14} />

                            <NewRow src={Int15} src1={Int16} />

                            <NewRow src={Int17} src1={Int18} />

                            <NewRow src={Int19} src1={Int20} />

                            <NewRow src={Int21} src1={Int22} />

                            <NewRow src={Int23} src1={Int24} />

                            <NewRow src={Int25} src1={Int26} />
                            
                            <NewRow src={Int27} src1={Int28} />

                            <NewRow src={Int29} src1={Int30} />

                            <NewRow src={Int31} src1={Int32} />

                            <NewRow src={Int33} src1={Int34} />

                            <NewRow src={Int35} src1={Int36} />

                            <NewRow src={Int37} src1={Int38} />

                            <NewRow src={Int39} src1={Int40} />

                            <NewRow src={Int41} src1={Int42} />

                            <NewRow src={Int43} src1={Int44} />
                        
                        </Tab>

                        <Tab className="pad" eventKey="Exteriors" title="Exteriors" fluid>
                            
                            <NewRow src={Ext8} src1={Ext5} />

                            <NewRow src={Ext3} src1={Ext4} />

                            <NewRow src={Ext2} src1={Ext6} />

                            <NewRow src={Ext7} src1={Ext1} />

                        </Tab>

                        <Tab className="pad" eventKey="Drone" title="Drone" fluid>
                            
                            <NewRow src={Drone1} src1={Drone2} />

                            <NewRow src={Drone3} src1={Drone4} />

                        </Tab>

                        <Tab className="pad" eventKey="Video" title="Video" fluid>

                            <Row>
                        
                                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} >
                                    <ReactPlayer className={styles.imageLeft} url="https://youtu.be/zidN9eh1WSc" />
                                </Col >
                                
                                <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }}>
                                    <ReactPlayer className={styles.imageRight} url="https://youtu.be/RRxRGcVpPak" />
                                </Col>

                            </Row>

                        </Tab>

                    </Tabs>
                    
                </Container>

            </div>
        )
  
    }   
}

export default Services;