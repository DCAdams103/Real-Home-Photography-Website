import React from 'react'
import './DrawerToggleButton.css'
import {Container, Row, Col} from 'react-bootstrap'
function DrawerToggleButton(props)
{
    return (
        <div className="coltest"> 

            <Container className="cont">
                <Row >
                    <Col >
                         <button className="toggle-button" onClick={props.click}>
                            <div className="toggle-button-line" />
                            <div className="toggle-button-line" />
                            <div className="toggle-button-line" />
                        </button>
                    </Col>
                        
                    <Col >
                        <header className="text"> Menu </header>
                    </Col>
                </Row>
            </Container>
            
        </div>
        
    )
}

export default DrawerToggleButton;