import React from "react";
import '../../node_modules/font-awesome/css/font-awesome.min.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons"

export default function Footer(){
    return (
        <footer>
            <ul>
                <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitterSquare}/></a></li>
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare}/></a></li>
                <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagramSquare}/></a></li>
                <li><a href="https://www.github.com/victoria-parker" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare}/></a></li>
            </ul>
        </footer>
    )
}