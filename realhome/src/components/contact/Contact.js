import  React, {useState, setTimeout} from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import styles from '../../styles/contact/contact.module.css'
import {TextField, Button, FormControl, Grid, ThemeProvider} from '@material-ui/core'
import logo from './../../images/logo.png'

import './contact.css'
function Contact() {

    const [data, setData] = useState({name: '', agency: '',email: '', message: '', sent: false, buttonText: 'Submit', err: ''});
    const axios = require('axios')

    const handleChanges = (e) => {
        const {name, value} = e.target 
            setData({
                ...data,
                [name]: value
            })
    }

    const formSubmit = (e) => {
        e.preventDefault();

        setData ({
            ...data,
            buttonText: 'Sending...'
        })

        axios.post('api/sendmail', data)
        .then(res => {
            if(res.data.result != 'success') {
                setData({
                    ...data,
                    buttonText: 'Failed to send',
                    sent: false,
                    err: 'fail'
                })
                setTimeout(() => {
                    resetForm()
                }, 6000)
            } else {
                setData({
                    ...data,
                    sent: true,
                    buttonText: 'Sent',
                    err: 'success'
                })
                setTimeout(() => {
                    resetForm();
                }, 6000)
            }
        }).catch( (err) => {
            
        })
    }

    const resetForm = () => {
        setData({
            name: '',
            agency: '',
            email: '',
            message: '',
            sent: false,
            buttonText: 'Submit',
            err: ''
        });
    }
    
    return (

        
        <div  className="bgimg">

            <style>
                @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
            </style>

            <Image className="contactlogo" src={logo} alt="" fluid />

            <Container className="marg">
            <header className="leave"> Leave Us a Message! </header>
                <Col className="bg" style={{width: '100%'}} > 
                    
                    <Row className="row" >
                        <FormControl className="ent" >
                            <TextField required label="Full Name" variant="filled" id="full-name" name="name" className="form-field" value={data.name} onChange={handleChanges} />
                        </FormControl>
                    </Row>

                    <Row className="row">
                        <FormControl className="ent">
                            <TextField required label="Agency" variant="filled" id="agency" name="agency" className="form-field" value={data.agency} onChange={handleChanges} />
                        </FormControl>
                    </Row>
                    
                    <Row className="row">
                        <FormControl className="ent">
                            <TextField required label="Email" id="email" name="email" variant="filled" className="form-field" value={data.email} onChange={handleChanges}/>
                        </FormControl>
                    </Row>

                    <Row className="row" >
                        <FormControl clasName="tb" className="ent">
                            <TextField required className="form-field" label="Message" variant="filled" name="message" defaultValue="Success" id="validation-outlined-input" multiline={true} rows="10" value={data.message} onChange={handleChanges} />
                        </FormControl>
                    </Row>

                    <Row>
                        <ThemeProvider>
                            <FormControl className="tb">
                                <div style={{paddingTop:5, paddingBottom:30}}>
                                    <Grid container spacing={2} >
                                        <div className="form-submit">
                                            <Button size="large" variant="contained" color="secondary" onClick={formSubmit}> {data.buttonText} </Button>
                                        </div>
                                    </Grid>
                                </div>
                            </FormControl>
                        </ThemeProvider>
                    </Row>

                </Col>
                

            </Container>
        </div>
    )
}

export default Contact;