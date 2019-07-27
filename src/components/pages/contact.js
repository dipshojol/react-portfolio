import React from 'react';
import email from '../../img/email.svg'
import phone from '../../img/telephone.svg'
import linkedin from '../../img/linkedin.svg'
import { Footer } from '../';



const Contact = () => {
    return <>
        <div className="container" id="contact">
        <div className="contact-container">
            <div className="page-title"><p>CONTACT</p></div>
            <ul>
                    <li>
                        <a alt="" href="mailto:dip_shojol@yahoo.com">
                            <img src={email} alt="email"/><br />
                            dip_shojol@yahoo.com
                        </a>
                    </li>
                    <li>
                    <a href="tel:3652287013">
                    <img src={phone} alt="phone"/><br/>
                            +1.365.228.7013
                        </a></li>
                    <li>
                    <a href="https://www.linkedin.com/in/shojol-shake-899641123/" alt="">
                    <img src={linkedin} alt="linkedin"/><br/>
                            Linked In
                        </a>
                        </li>
                </ul>
        <Footer />

                
            </div>            
        </div>
    </>
    ;
}


export default Contact;