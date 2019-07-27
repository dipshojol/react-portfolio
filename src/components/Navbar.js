import React from "react";
import Navlink from './Navlink';
import resume from "../img/shojolsResume.pdf";

const Navigation = () => {
    return (<>
        <nav>
            <div></div>
            <div>
                <Navlink target={'home'} />
                <Navlink target={'projects'} />
                <Navlink target={'skills'} />
                <Navlink target={'education'} />
                <Navlink target={'contact'} />
                <a href ={resume} target="_blank" rel="noopener noreferrer" alt="">RESUME</a>
            </div>
        </nav>
    </>);
}

export default Navigation