import React from 'react';
import styles from './Portfolio.module.css'
import {Row, Col, Image, Tabs, Tab, Container, Carousel} from 'react-bootstrap'
import {Fade} from 'react-reveal'
import logo from './../../images/logo.png'
import zillow from './../../images/zillow.png'
import ScrollButton from './ScrollToTopButton'
import ReactPlayer from 'react-player'
import {useLocation} from 'react-router-dom'
import './Tabbar.css'

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
// import Int12 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior10.jpg'
import Int12 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior11.jpg'
import Int13 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior12.jpg'
import Int14 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior13.jpg'
import Int15 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior14.jpg'
import Int16 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior15.jpg'
import Int17 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior16.jpg'
import Int18 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior17.jpg'
import Int19 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior18.jpg'
import Int20 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior19.jpg'
import Int21 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior20.jpg'
import Int22 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior21.jpg'
import Int23 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior22.jpg'
import Int24 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior23.jpg'
import Int25 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior24.jpg'
import Int26 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior25.jpg'
import Int27 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior26.jpg'
import Int28 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior27.jpg'
import Int29 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior28.jpg'
import Int30 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior29.jpg'
import Int31 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior30.jpg'
import Int32 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior31.jpg'
import Int33 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior32.jpg'
import Int34 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior33.jpg'
import Int35 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior34.jpg'
import Int36 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior35.jpg'
import Int37 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior36.jpg'
import Int38 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior37.jpg'
import Int39 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior38.jpg'
import Int40 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior39.jpg'
import Int41 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior40.jpg'
import Int42 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior41.jpg'
import Int43 from './../../images/Interior/real-estate-photo-picture-shot-of-house-interior42.jpg'

/* Exterior Photo Imports */
import Ext1 from './../../images/Exterior/real-estate-photo-picture-shot-of-house-exterior1.jpg'
import Ext2 from './../../images/Exterior/real-estate-photo-picture-shot-of-house-exterior2.jpg'
import Ext3 from './../../images/Exterior/real-estate-photo-picture-shot-of-house-exterior3.jpg'
import Ext4 from './../../images/Exterior/real-estate-photo-picture-shot-of-house-exterior4.jpg'
import Ext5 from './../../images/Exterior/real-estate-photo-picture-shot-of-house-exterior5.jpg'
import Ext6 from './../../images/Exterior/real-estate-photo-picture-shot-of-house-exterior6.jpg'
import Ext7 from './../../images/Exterior/real-estate-photo-picture-shot-of-house-exterior7.jpg'
import Ext8 from './../../images/Exterior/real-estate-photo-picture-shot-of-house-exterior8.jpg'
import Ext9 from './../../images/Exterior/real-estate-photo-picture-shot-of-house-exterior9.jpg'
import Ext10 from './../../images/Exterior/real-estate-photo-picture-shot-of-house-exterior10.jpg'

/* Portrait Photo Imports */
import Port1 from './../../images/Portraits/Portrait1.jpg'
import Port2 from './../../images/Portraits/Portrait2.jpg'
import Port3 from './../../images/Portraits/Portrait3.jpg'
import Port4 from './../../images/Portraits/Portrait4.jpg'
import Port5 from './../../images/Portraits/Portrait5.jpg'
import Port6 from './../../images/Portraits/Portrait6.jpg'


/* Drone Photo Imports */
import Drone1 from './../../images/Drone/real-estate-drone-shot-of-house-exterior1.jpg'
import Drone2 from './../../images/Drone/real-estate-drone-shot-of-house-exterior2.jpg'
import Drone3 from './../../images/Drone/real-estate-drone-shot-of-house-exterior3.jpg'
import Drone4 from './../../images/Drone/real-estate-drone-shot-of-house-exterior4.jpg'
import Drone5 from './../../images/Drone/real-estate-drone-shot-of-house-exterior5.jpg'
import Drone6 from './../../images/Drone/real-estate-drone-shot-of-house-exterior6.jpg'

/* Floor Plan Imports */
import FloorPlan1 from './../../images/FloorPlans/floorplan1.jpg'

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

        const location = useLocation();
        console.log("LOCATION" + location.hash);
        
        if(location.hash == ""){
            location.hash = "#interiors";
        }
       
        return (
            <div className={styles.bg}>

                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
                </style>

                <Image className={styles.logo} src={logo} alt="Real Home Photography Logo" fluid />

                <header className={styles.title}>Portfolio</header>

                <Tab.Container fluid>

                    <ScrollButton />

                    <Tabs className={styles.tabs} defaultActiveKey={location.hash} id="images-tabs" >
                        
                        <Tab className="pad" eventKey="#interiors" title="Interiors" fluid>
                            
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

                            <NewRow src={Int43}  />
                        
                        </Tab>

                        <Tab className="pad" eventKey="#exteriors" title="Exteriors" fluid>
                            
                            <NewRow src={Ext8} src1={Ext5} />

                            <NewRow src={Ext9} src1={Ext10} />

                            <NewRow src={Ext3} src1={Ext4} />

                            <NewRow src={Ext2} src1={Ext6} />

                            <NewRow src={Ext7} src1={Ext1} />

                        </Tab>

                        <Tab className="pad" eventKey="#drone" title="Drone" fluid>
                            
                            <NewRow src={Drone1} src1={Drone2} />

                            <NewRow src={Drone3} src1={Drone4} />

                            <NewRow src={Drone5} src1={Drone6} />

                        </Tab>

                        <Tab className="pad" eventKey="#portraits" title="Portraits" fluid>

                            <Container >
                                <Row xs={1} md={1} lg={2} className={styles.portfolioContainer}>
                                    <Col>
                                        <Carousel className={styles.carousel}>
                                            <Carousel.Item>
                                                <Image src={Port1} alt="Portrait"/>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Image src={Port2} alt="Portrait" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Image src={Port3} alt="Portrait" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Image src={Port4} alt="Portrait" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Image src={Port5} alt="Portrait" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Image src={Port6} alt="Portrait" />
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>  
                                    
                                    <Col>
                                        <div className={styles.desc}>
                                            <header className={styles.headers}>Headshots</header>
                                            <p className={styles.pricing}>$150</p>
                                            <p className={styles.text}>
                                            - Each session includes one professionally
                                            retouched photo with 8 different crops
                                            and a B&W<br/>
                                            - Choose between studio and casual shots<br/>
                                            - Additional retouched photos are $60 each
                                            </p>
                                        </div>
                                    </Col>
                                    

                                </Row>
                            </Container>


                        </Tab>

                        <Tab className="pad" eventKey="#video" title="Video" fluid>

                            <Row>
                        
                                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
                                    <div className={styles.playerwrapperleft}>
                                     <ReactPlayer className={styles.reactplayer} url="https://youtu.be/zidN9eh1WSc" width='100%' height='100%' />
                                    </div>
                                </Col >
                                
                                <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }}>
                                    <div className={styles.playerwrapperright}>
                                     <ReactPlayer className={styles.reactplayer} url="https://youtu.be/RRxRGcVpPak" width='100%' height='100%' />
                                    </div>
                                </Col>

                            </Row>

                        </Tab>

                        <Tab className="pad" eventKey="#3Dtours" title="3D Tours" fluid>

                            <Col>
                                <Image className={` d-block mx-auto img-fluid ${styles.zillow}`}  src={zillow} alt="Zillow Certified Photographer" fluid />
                            </Col>

                            <header className={`${styles.zillowText} ${styles.zillowProfile}`}>
                                <a href="https://www.zillow.com/profile/rusty433/" target="_blank" rel="noreferrer"> View Zillow Profile &#8594; </a> 
                            </header>

                            <header className={`${styles.zillowText} ${styles.zillowTitle}`}> 1016 Chimney Hill Dr, Apex, NC </header>

                            <Row>

                                <Col className={styles.tourCol}>
                                    <div className="embed-responsive embed-responsive-4by3 tour">
                                        <iframe
                                            src="https://www.zillow.com/view-3d-home/52f3d1be-3391-4628-a1b0-3cfbad66bdd9"
                                            title="Zillow 3D Tour 1016 Chimney Hill Dr"
                                            className="embed-responsive-item" 
                                            frameborder="0" allowfullscreen>
                                        </iframe>
                                    </div>
            
                                    <header className={styles.zillowText}> 
                                        <a href="https://www.zillow.com/view-3d-home/52f3d1be-3391-4628-a1b0-3cfbad66bdd9" target="_blank" rel="noreferrer"> View on Zillow &#8594; </a> 
                                    </header>

                                </Col >

                            </Row>
                                
                            <header className={`${styles.zillowText} ${styles.zillowTitle}`}> 218 Clay St, Cary, NC </header>

                            <Row>
                        
                                <Col className={styles.tourCol}>
                                    <div className="embed-responsive embed-responsive-4by3 tour">
                                        <iframe
                                            src="https://www.zillow.com/view-3d-home/53bfadef-b614-4712-9294-52f0fa0e8446?setAttribution=mls&wl=true"
                                            title="Zillow 3D Tour 218 Clay St"
                                            className="embed-responsive-item" 
                                            frameborder="0" allowfullscreen>
                                        </iframe>
                                    </div>
            
                                    <header className={styles.zillowText}> 
                                        <a href="https://www.zillow.com/view-3d-home/53bfadef-b614-4712-9294-52f0fa0e8446?setAttribution=mls&wl=true" target="_blank" rel="noreferrer"> View on Zillow &#8594; </a> 
                                    </header>

                                </Col >

                            </Row>

                        </Tab>

                        <Tab className="pad" eventKey="#floorPlans" title="Floor Plans" fluid>

                            <NewRow src={FloorPlan1} />

                        </Tab>

                    </Tabs>
                    
                </Tab.Container>

            </div>
        )
  
    
}

export default Services;