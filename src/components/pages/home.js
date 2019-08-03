import React from 'react';
import Img from 'react-image';
import bgimg from '../../img/background1.jpg';
import myPhoto from '../../img/shojol.jpg';
import logo from '../../img/logo.png';
import { Link } from 'react-scroll'

const Home = () => {
  return (
  <div id="home">
    <div className="landing-page-container">
      <div className="bg-container">
        {/* <video autoPlay loop muted>
          <source src={bganimation} />
          </video> */}
          <img src={bgimg} alt=""/>
      </div>
        
        {/* <div className="overlay-container"></div> */}
        <img className="logo-main" src={logo} alt="logo"/>
        
        <div className="background-info-container">
          <span className="headshot-wrapper">
            <div className="headshot-container">
              <Img src={myPhoto} alt="shojol" />
            </div>
          </span>
        <div className="background-info">
            <p><span>Hello</span>, I'm <span> SHOJOL SHAKE </span>
            <br/>Web Developer living in Totonto, ON<br/>
              I love to design and develop web application that<br/> make a difference.</p>
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
            </div>

        </div>
      </div>
      </div>
  </div>);
  }

export default Home;