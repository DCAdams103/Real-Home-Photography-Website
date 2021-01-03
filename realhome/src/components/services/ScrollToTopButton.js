import React, {Component} from 'react'
import {Button, Grid} from '@material-ui/core'
import {Container} from 'react-bootstrap'
import styles from './ScrollToTopButton.module.css'

class ScrollToTopButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            is_visible: false
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e){
            scrollComponent.toggleVisibility();
        })
    }

    toggleVisibility() {
        if(window.pageYOffset > 400) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render()
    {
        const {is_visible} = this.state

        return (
            <div >
                {is_visible && (
                    <div onClick={() => this.scrollToTop()} >
                        <Grid container justify="center" className={styles.scroll}>
                            <Button size="large" variant="contained" color="primary" > Scroll To Top </Button>
                        </Grid>
                    </div>
                )}
                
            </div>
        );
    }

}

export default ScrollToTopButton;