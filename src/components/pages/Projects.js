import React from 'react';
import apple from '../../img/discussionsApple.png'
import triabeauty from '../../img/triabeauty.png'
import movieDB from '../../img/movieDB.png'
import reactColorPalette from '../../img/react-color-palette.png'
import reactPortfolio from '../../img/react-portfolio.png'

const Projects = () => {
    return <>
        <div className="container" id="projects">
            <div className="projects">
                <div className="page-title"><p>PROJECTS AND CASE STUDIES</p></div>

                <ul>
                    <a alt="triabeauty" href="http://triabeauty.com" target="_blank" rel="noopener noreferrer"><li>
                        <span>
                            <img src={triabeauty} alt="triabeauty"/>
                        </span>
                        
                        <span>
                            <h2>TRIABEAUTY</h2>
                            <p>WEB DEVELOPER</p>
                            <h5>http://triabeauty.com</h5>
                            <p>Dublin, California<br/>2018</p>
                        </span>
                    </li></a>
                    <a alt="discussions.apple" href="http://discussions.apple.com" target="_blank" rel="noopener noreferrer"><li>
                        <span>
                            <img src={apple} alt="discussion.apple.com"/>
                        </span>
                        <span>
                            <h2>APPLE Inc.</h2>
                            <p>FRONT-END DEVELOPER</p>
                            
                            <h5>http://discussions.apple.com</h5>
                            <p>Sunnyvale, California<br/>2016-2017</p>
                    </span>
                        
                    </li></a>
                    <a alt="" href="http://shojolshake.com" target="_blank" rel="noopener noreferrer"><li>
                        <span>
                            <img src={reactPortfolio} alt="MyPortfolio"/>
                        </span>
                        <span>
                            <h2>PORTFOLIO</h2>
                            <p>ReactJs</p>
                            <h5>http://shojolshake.com</h5>
                            <p><br />2019</p>
                    </span>
                        
                    </li></a>
                    <a alt="" href="https://dipshojol.github.io/movieDB/" target="_blank" rel="noopener noreferrer"><li>
                        <span>
                            <img src={movieDB} alt="moviedb"/>
                        </span>
                        <span>
                            <h2>MovieDB</h2>
                            <p>CASE STUDIE</p>
                            <h5>https://dipshojol.github.io/movieDB/</h5>
                            <p>Totonto, CA<br/>2019</p>
                        </span>
                        
                    </li></a>
                    <a alt="" href="https://dipshojol.github.io/react-color-palette/" target="_blank" rel="noopener noreferrer"><li>
                        <span>
                            <img src={reactColorPalette} alt="colorPalette"/>
                        </span>
                        <span>
                            <h2>Color Palette</h2>
                            <p>ReactJs CASE STUDIE</p>                            
                            <h5>https://dipshojol.github.io/react-color-palette/</h5>
                            <p>Totonto, CA<br/>2019</p>
                    </span>
                        
                    </li></a>
                </ul>
            </div>
        </div>
    </>
    ;
}


export default Projects;