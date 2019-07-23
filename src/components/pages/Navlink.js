import React from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller, handleSetActive } from 'react-scroll'


const Navlink = ({target}) => {
    return <>
        <Link
            activeClass="active"
            to={target}
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
            isDynamic={true}
            ignoreCancelEvents={false}
        >{target.toUpperCase()}</Link>
    </>;
}

export default Navlink;