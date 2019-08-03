import React from 'react'
import { Link } from 'react-scroll'


const Navlink = ({target}) => {
    return <>
        <Link
            activeClass="active"
            to={target}
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-100}
            duration={500}
            isDynamic={true}
            ignoreCancelEvents={false}
        >{target.toUpperCase()}</Link>
    </>;
}

export default Navlink;