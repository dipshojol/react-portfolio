import React from "react"
import Skillscard from "../Skillscard"

import html5 from "../../img/html5.png"
import css from "../../img/css.png"
import bootstrap4 from "../../img/bootstrap4.png"
import scss from "../../img/scss.png"
import jsx from "../../img/jsx.png"

import js from "../../img/js.png"
import jquery from "../../img/jquery.png"
import angular from "../../img/angular.png"
import gatsby from "../../img/gatsby.png"

import node from "../../img/node.png"
import express from "../../img/express.png"
import handlebars from "../../img/handlebars.png"
import jive from "../../img/jive.png"

import mongodb from "../../img/mongodb.png"
import firebase from "../../img/firebase.png"
import postgres from "../../img/postgres.png"

import xd from "../../img/xd.png"
import photoshop from "../../img/photoshop.png"
import illustrator from "../../img/illustrator.png"
import github from "../../img/github.png"


const Skills = () => {
    const htmlcss = 
    [
        { 
        id: "01", 
        imgLink: `${html5}`,
        imgName: "HTML5"
     },
     { 
        id: "02", 
        imgLink: `${css}`,
        imgName: "CSS"
     },
     { 
        id: "03", 
        imgLink: `${bootstrap4}`,
        imgName: "BOOTSTRAP4"
     },
     { 
        id: "04", 
        imgLink: `${scss}`,
        imgName: "SCSS"
     },
     { 
        id: "05", 
        imgLink: `${jsx}`,
        imgName: "JSX"
     }
    ]

    const javascript = 
    [
        { 
        id: "01", 
        imgLink: `${jsx}`,
        imgName: "React"
        },
        { 
        id: "02", 
        imgLink: `${gatsby}`,
        imgName: "Gatsby"
        },
        { 
        id: "03", 
        imgLink: `${js}`,
        imgName: "JavaScript"
        },
        { 
        id: "04", 
        imgLink: `${jquery}`,
        imgName: "jQuesry"
        },
        { 
        id: "05", 
        imgLink: `${angular}`,
        imgName: "Angular"
        }
    ]

    const serverSide = 
    [
        { 
        id: "01", 
        imgLink: `${node}`,
        imgName: "NodeJs"
        },
        { 
        id: "02", 
        imgLink: `${express}`,
        imgName: "Express"
        },
        { 
        id: "03", 
        imgLink: `${handlebars}`,
        imgName: "Handlebars"
        },
        { 
        id: "04", 
        imgLink: `${jive}`,
        imgName: "Jive"
        }
    ]

    const database = 
    [
        { 
        id: "01", 
        imgLink: `${mongodb}`,
        imgName: "MongoDB"
        },
        { 
        id: "02", 
        imgLink: `${firebase}`,
        imgName: "Firebase"
        },
        { 
        id: "03", 
        imgLink: `${postgres}`,
        imgName: "Postgres"
        }
    ]
    const DesignOther = 
    [
        { 
        id: "01", 
        imgLink: `${xd}`,
        imgName: "Adobe XD"
        },
        { 
        id: "02", 
        imgLink: `${photoshop}`,
        imgName: "Adobe Photoshop"
        },
        { 
        id: "03", 
        imgLink: `${illustrator}`,
        imgName: "Adobe Illustrator"
        },
        { 
            id: "04", 
            imgLink: `${github}`,
            imgName: "Github"
        }
    ]
    return (
        <>
            <div className="container" id="skills">
                <div className="page-title">
                    <p>SKILLS</p>
                </div>
                <Skillscard items={htmlcss} cardName={"HTML & CSS"}/>
                <Skillscard items={javascript} cardName={"JavaScript"}/>
                <Skillscard items={serverSide} cardName={"Server Side Language"}/>
                <Skillscard items={database} cardName={"Database"}/>
                <Skillscard items={DesignOther} cardName={"Design and Others"}/>
            </div>
        </>
    )
}
export default Skills