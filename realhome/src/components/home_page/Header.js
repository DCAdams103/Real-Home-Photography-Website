import React from 'react'
import styles from '../../styles/Header.module.css';
import logo from '../../images/logo.png'
import { Navbar, Container, Image} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import veteran from '../../images/veteran.png'

function Header()
{

    return (
        <div className={styles.pos}>
            
            <Container className={styles.cont}>
            <Navbar className={styles.offset} bg="none" variant="dark">
                {/* <Navbar.Brand className={styles.navbarbrand} href="#home"> Real Home Photography </Navbar.Brand> */}
                <Nav>
                    <Nav.Link className={styles.link} href=""> Home </Nav.Link>
                    <Nav.Link className={styles.link} href=""> Pricing </Nav.Link>
                    <Nav.Link className={styles.link} href=""> Services </Nav.Link>
                    <Nav.Link className={styles.link} href=""> Contact Us </Nav.Link>
                    <Nav.Link className={styles.link} href=""> Client Center </Nav.Link>
                </Nav>
                <Nav>
                
                </Nav>
                

            </Navbar>

            

            </Container>
            
        </div>
        
    )
}

export default Header;