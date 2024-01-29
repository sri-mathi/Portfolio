import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialIcon } from 'react-social-icons';
import Nav from './Navbar';

const About = () => {
    return(
        <>
        <Nav/>
            <div className='About'>
              <div className="row">
                <div className="col-sm-1"></div>
                <div className="col"><img src="about.png" alt="About" /></div>
                <div className="col">
                  <h1 className="mt-3 pt-5 text-center">SRIMATHI E</h1><br />
                  <h4 className='text-center domain1'>ML ENGINEER & WEB DEVELOPER</h4><br />
                  <p className="fst-italic">Crafting intelligent solutions through machine learning, shaping digital experiences as a </p>
                  <p className="fst-italic text-center">web developer, and uncovering insights as a data analyst.</p>
                  <br />
                  <div className="col social-icon text-center">
                    <SocialIcon network="linkedin" url='https://www.linkedin.com/in/srimathi-elango-b0b0b2225/' className='icon1' />
                    <SocialIcon network="github" url='https://github.com/sri-mathi' className='icon2' />
                    <SocialIcon network="leetcode" url='https://leetcode.com/user3361NP/' className='icon2' />
                    <a href='mailto:srimathie.21aim@kongu.edu'><SocialIcon network="email" className='icon2' /></a>
                    <a href='https://auth.geeksforgeeks.org/user/srimathivfq7'><img src="gfg1.png" width={50} height={50} className='img1'/></a>
                  </div>
                  <img className="decor1" src="1671.png" />
                </div>
                <div className="col-sm-1"></div>
              </div>
            </div>
            </>
        );
}

export default About;
