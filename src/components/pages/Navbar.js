import React from "react";
import Navlink from './Navlink';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller, handleSetActive } from 'react-scroll'

const Navigation = () => {
    console.log("hi", Link);

    return (<>
        <nav>
            <div></div>
            <div>
                <Navlink target={'home'} />
                <Navlink target={'projects'} />
                <Navlink target={'skills'} />
                <Navlink target={'education'} />
                <Navlink target={'resume'} />
                <Navlink target={'contact'} />
            </div>
        </nav>
    </>);
}

export default Navigation