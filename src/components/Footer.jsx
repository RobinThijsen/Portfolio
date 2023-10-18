import {NavLink} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faJs, faReact, faSass} from "@fortawesome/free-brands-svg-icons"

export const Footer = () => {

    return (
        <footer>
            <h2>End of the scroll...</h2>
            <div className="list">
                <ul>
                    <h3>Good links</h3>
                    <li>
                        <a href="https://github.com/RobinThijsen" target="_blank">My GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/robin-thijsen-61004a252/" target="_blank">Check Linkedin</a>
                    </li>
                    <li>
                        <a href="http://robin.thijsen.net/" target="_blank">All Works</a>
                    </li>
                </ul>
                <ul>
                    <h3>Nav link</h3>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/work">Works</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </ul>
                <ul>
                    <h3>Tools and Tech</h3>
                    <ul className="list-icon red">
                        <li><a href="https://react.dev/"><FontAwesomeIcon icon={ faReact } alt="react icon" /></a></li>
                        <li><a href="https://sass-lang.com/"><FontAwesomeIcon icon={ faSass } alt="sass icon" /></a></li>
                        <li><a href="https://www.javascript.com/"><FontAwesomeIcon icon={ faJs } alt="js icon" /></a></li>
                    </ul>
                </ul>
            </div>
            <div className="bottom">
                <cite>Copyright 2023 © | All rights reserved - Robin Thijsen</cite>
            </div>
        </footer>
    )
}