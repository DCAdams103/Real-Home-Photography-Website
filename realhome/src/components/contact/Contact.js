import  React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import {TextField, Button, FormControl, Grid, ThemeProvider} from '@material-ui/core'
import logo from './../../images/logo.png'
import * as emailjs from 'emailjs-com'
import './contact.css'

class Contact extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            agency: '',
            email: '',
            message: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.resetForm = this.resetForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const { name, agency, email, message } = this.state
        const templateParams = {
            from_name: name,
            from_agency: agency,
            from_email: email,
            to_name: 'Real Home Photography',
            message_html: message,
        };
        emailjs.send(
            'gmail',
            'template_twvhxxx',
            templateParams,
            'user_p4MaUfpU124y8ZeYTEj3W'
        )
        this.resetForm()
    };

    resetForm() {
        this.setState({
            name: '',
            agency: '',
            email: '',
            message: '',
        });
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    render()
    {
        const { name, agency, email, message } = this.state
        
        return (

        
            <div  className="bgimg">
    
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
                </style>
    
                <Image className="contactlogo" src={logo} alt="" fluid />
    
                <Container className="container-marg">

                    <header className="leave"> Leave Us a Message! </header>

                    <Col className="colbg" style={{width: '100%'}} > 
                        
                        <Row className="formrow" >
                            <FormControl className="short-form-entries" >
                                <TextField required label="Full Name" variant="filled" id="full-name" name="name" className="form-field" value={name} onChange={this.handleChange} />
                            </FormControl>
                        </Row>
    
                        <Row className="formrow">
                            <FormControl className="short-form-entries">
                                <TextField required label="Agency" variant="filled" id="agency" name="agency" className="form-field" value={agency} onChange={this.handleChange} />
                            </FormControl>
                        </Row>
                        
                        <Row className="formrow">
                            <FormControl className="short-form-entries">
                                <TextField required label="Email" id="email" name="email" variant="filled" className="form-field" value={email} onChange={this.handleChange}/>
                            </FormControl>
                        </Row>
    
                        <Row className="formrow" >
                            <FormControl className="short-form-entries">
                                <TextField required className="form-field" label="Message" variant="filled" name="message" 
                                    defaultValue="Success" id="validation-outlined-input" multiline={true} 
                                    rows="10" value={message} onChange={this.handleChange} 
                                />
                            </FormControl>
                        </Row>
    
                        <Row className="formrow">
                            <ThemeProvider>
                                <FormControl className="button-form-control">
                                    <div style={{paddingTop:5, paddingBottom:30}}>
                                        <Grid container spacing={2} >
                                            <div className="form-submit">
                                                <Button size="large" variant="contained" color="secondary" onClick={this.handleSubmit}> Send </Button>
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
    
}

export default Contact;