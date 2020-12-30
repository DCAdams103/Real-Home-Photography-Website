import React, { Component} from 'react'
import ImageExamples from './components/home_page/ImageExamples'
import MainContent from './components/home_page/MainContent'
import AboutMe from './components/home_page/AboutMe'
import Footer from './components/home_page/Footer'
import Pricing from './components/pricing/Pricing'
import Services from './components/services/Services'
import MainBar from './components/Navigation/MainBar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import DrawerToggleButton from './components/SideDrawer/DrawerToggleButton'
import Backdrop from './components/Backdrop/Backdrop'
import MediaQuery from 'react-responsive'
import Contact from './components/contact/Contact'
import ScrollToTop from './components/ScrollToTop'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      sideDrawerOpen: false
    };  
  }
  

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen)
    {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <div>
        <Router>
                <div>
                   
                    <Switch>

                        <Route path="/pricing">
                            <Pricing />
                            <MediaQuery minDeviceWidth={1224}>
                              <MainBar />
                            </MediaQuery>

                            <MediaQuery maxDeviceWidth={1224} minDeviceWidth={768}>
                              <MainBar />
                            </MediaQuery>
                          
                            <MediaQuery maxDeviceWidth={767}>
                              <DrawerToggleButton click={this.drawerToggleClickHandler} />
                              <SideDrawer show={this.state.sideDrawerOpen} click={this.drawerToggleClickHandler} />
                              {backdrop}
                            </MediaQuery>

                            <Footer />
                        </Route>
                        
                        <Route path="/portfolio">
                          <DrawerToggleButton click={this.drawerToggleClickHandler} />
                          <SideDrawer show={this.state.sideDrawerOpen} click={this.drawerToggleClickHandler} />
                          {backdrop}
                          <Services />
                        </Route>

                        <Route path="/contact">
                            <Contact />
                            <MediaQuery minDeviceWidth={1224}>
                              <MainBar />
                            </MediaQuery>

                            <MediaQuery maxDeviceWidth={1224} minDeviceWidth={768}>
                              <MainBar />
                            </MediaQuery>
                          
                            <MediaQuery maxDeviceWidth={767}>
                              <DrawerToggleButton click={this.drawerToggleClickHandler} />
                              <SideDrawer show={this.state.sideDrawerOpen} click={this.drawerToggleClickHandler}/>
                              {backdrop}
                            </MediaQuery>
                        </Route>

                        <Route path="/client">
                            <Client />
                        </Route>

                        <Route path="/">
                        
                          <MainContent />
                          
                          <MediaQuery minDeviceWidth={1224}>
                            <MainBar />
                          </MediaQuery>

                          <MediaQuery maxDeviceWidth={1224} minDeviceWidth={768}>
                            <MainBar />
                          </MediaQuery>
                          
                          <MediaQuery maxDeviceWidth={767}>
                            <DrawerToggleButton click={this.drawerToggleClickHandler} />
                            <SideDrawer show={this.state.sideDrawerOpen} click={this.drawerToggleClickHandler} />
                            {backdrop}
                          </MediaQuery>
                          
                          <ImageExamples />
                          <AboutMe />
                          <Footer />
                        </Route>
                    </Switch>

                </div>
            </Router>

      <div>
        
        
      </div>

    </div>
    );
  }
}

function Client()
{
    return <header>Client Center </header>
}

export default App;
