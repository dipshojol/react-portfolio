import React from 'react';
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div id='footer'>
        <Link
                activeClass="active"
                to={"home"}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
            ><span>&uarr;</span></Link>
        </div>)
    ;
}


export default Footer;