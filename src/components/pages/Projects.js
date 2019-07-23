import React from 'react';
import apple from '../../img/discussionsApple.png'
import triabeauty from '../../img/triabeauty.png'
import movieDB from '../../img/movieDB.png'
import reactColorPalette from '../../img/react-color-palette.png'
import reactPortfolio from '../../img/react-portfolio.png'

const Projects = () => {
    return <>
        <div className="projects container" id="projects">
            <div className="projects">
                <h1>PROJECTS AND CASE STUDIES</h1>

                <ul>
                    <li>
                        <span>
                            <img src={triabeauty} />
                        </span>
                        
                        <span>
                            <h2>Triabeauty</h2>
                            <h5>triabeauty.com</h5>
                            <p>WEB DEVELOPER</p>
                            <p>Dublin, California	2018</p>
                        </span>
                    </li>
                    <li>
                        <span>
                            <img src={apple} />
                        </span>
                        <span>
                        <h2>Triabeauty</h2>
                            <h5>triabeauty.com</h5>
                            <p>WEB DEVELOPER</p>
                            <p>Dublin, California	2018</p>
                    </span>
                        
                    </li>
                    <li>
                        <span>
                            <img src={reactPortfolio} />
                        </span>
                        <span>
                        <h2>Triabeauty</h2>
                            <h5>triabeauty.com</h5>
                            <p>WEB DEVELOPER</p>
                            <p>Dublin, California	2018</p>
                    </span>
                        
                    </li>
                    <li>
                        <span>
                            <img src={movieDB} />
                        </span>
                        <span>
                        <h2>Triabeauty</h2>
                            <h5>triabeauty.com</h5>
                            <p>WEB DEVELOPER</p>
                            <p>Dublin, California	2018</p>
                    </span>
                        
                    </li>
                    <li>
                        <span>
                            <img src={reactColorPalette} />
                        </span>
                        <span>
                        <h2>Triabeauty</h2>
                            <h5>triabeauty.com</h5>
                            <p>WEB DEVELOPER</p>
                            <p>Dublin, California	2018</p>
                    </span>
                        
                    </li>
                </ul>
            </div>
        </div>
    </>
    ;
}


export default Projects;