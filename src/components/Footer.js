import React from "react";
import '../../node_modules/font-awesome/css/font-awesome.min.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons"

export default function Footer(){
    return (
        <footer>
            <ul>
                <li><FontAwesomeIcon icon={faTwitterSquare}/></li>
                <li><FontAwesomeIcon icon={faFacebookSquare}/></li>
                <li><FontAwesomeIcon icon={faInstagramSquare}/></li>
                <li><FontAwesomeIcon icon={faGithubSquare}/></li>
            </ul>
        </footer>
    )
}