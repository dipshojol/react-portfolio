import React from 'react';
import Img from 'react-image';
import bganimation from '../../img/background01.webm';
import myPhoto from '../../img/3.jpg';
import logo from '../../img/logo-s.png';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller, handleSetActive } from 'react-scroll'

const Home = () => {
  return (
  <div id="home">
    <div className="landing-page-container">
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={bganimation} />
        </video>
      </div>
        
        <div className="overlay-container"></div>
        <img className="logo-main" src={logo} alt="logo"/>
        
      <div className="background-info-container">
        <div className="headshot-container">
          <Img src={myPhoto} alt="shojol" />
        </div>
        <div className="background-info">
            <p><span>Hello</span>, I'm <span> SHOJOL SHAKE </span>
            <br/>Web Developer living in Totonto, ON<br/>
              I love to design and develop web application that<br/> <span>make a difference</span>.</p>
            <div>
              <Link
                activeClass="active"
                to={"projects"}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
            ><span>&darr;</span></Link>
              {/* <button type="button"><span>&darr;</span></button> */}
            </div>

        </div>
      </div>
      </div>
  </div>);
  }

export default Home;