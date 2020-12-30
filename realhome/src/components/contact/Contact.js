import  React, {useState, setTimeout} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import styles from '../../styles/contact/contact.module.css'
import {TextField, Button, FormControl, Grid, ThemeProvider} from '@material-ui/core'

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
            <Container className="marg">
                <Col className="bg" style={{width: '100%'}} > 

                    <Row className="row" >
                        <FormControl style={{width: '50%'}} >
                            <TextField required label="Full Name" variant="outlined" id="full-name" name="name" className="form-field" value={data.name} onChange={handleChanges} />
                        </FormControl>
                    </Row>

                    <Row className="row">
                        <FormControl style={{width: '50%'}}>
                            <TextField required label="Agency" variant="filled" id="agency" name="agency" className="form-field" value={data.agency} onChange={handleChanges} />
                        </FormControl>
                    </Row>
                    
                    <Row className="row">
                        <FormControl style={{width: '50%'}}>
                            <TextField required label="Email" id="email" name="email" variant="filled" className="form-field" value={data.email} onChange={handleChanges}/>
                        </FormControl>
                    </Row>

                    <Row className="row" >
                        <FormControl clasName="tb" style={{width: '50%'}}>
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