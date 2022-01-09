import React from "react"
import portrait from "../images/portrait.jpg"
import '../../node_modules/font-awesome/css/font-awesome.min.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/fontawesome-free-solid'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Info(){
    return (
        <div className="info">
        
            <div id="portrait">
                <img src={portrait} alt="portrait" />
            </div>
            <h1>Victoria Parker</h1>
            <h2>Web Developer</h2>
            <h3><a href="https://www.github.com/victoria-parker" target="_blank" rel="noopener noreferrer">github.com/victoria-parker</a></h3>
            <div className="buttons">
                <a className="btn" id="btn-email" href="mailto:mail@example.com"><FontAwesomeIcon icon={faEnvelope}/>Email</a>
                <a className="btn" id="btn-linkedin" href="https://www.linkedin.com/in/victoria-parker-web-developer/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/> LinkedIn</a>
            </div>
                
        </div>
    )
}
