import React, { Component } from 'react';
import Hero from './hero/hero.jsx';
import CaseStudies from './caseStudies/caseStudies.jsx';
import WhatWeDo from './whatWeDo/whatWeDo.jsx';
import Clients from './clients/clients.jsx';
import OurServices from './ourServices/ourServices.jsx';
import ContactUs from './ContactUs/contactUs.jsx';
import Testimonials from './testimonials/testimonials.jsx';
import Footer from './footer/footer.jsx';

import applicationState from '../../applicationState/applicationState';

export default class App extends Component {
  constructor() {
    super();
    this.state = applicationState;
  }

  render() {
    const {hero, caseStudies, clients, whatWeDo} = this.state;

    return (
      <React.Fragment>
        <Hero hero={hero}/>
        {/* <div id="page-content-wrapper">
          <div id="page-content-container">
            <WhatWeDo whatWeDo={whatWeDo}/>
            <CaseStudies caseStudies={caseStudies} />
            <Clients clients={clients}/> */}
            {/* <OurServices /> */}
            {/* <ContactUs /> */}
            {/* {/* <Testimonials /> */}
          {/* </div> */}
        {/* </div> */}
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}