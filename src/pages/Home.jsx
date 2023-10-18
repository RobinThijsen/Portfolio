import {NavLink} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { faHtml5, faSass, faVuejs, faReact, faPhp, faDocker, faJs } from "@fortawesome/free-brands-svg-icons"

export const Home = () => {
    const email = "robinthijsen.pro@gmail.com"

    return (
        <main className="home">
            <section className="content-wrapper">
                <article className="top-info-wrapper">
                    <div className="text-wrapper">
                        <h1>
                            <div><p>Hi! I'm</p><span>Frontend dev</span></div>
                            <p>Robin Thijsen</p>
                        </h1>
                        <p>
                            A junior frontend web developer in Belgium.<br/>
                            Currently learning at <a href="https://becode.org/fr/">BeCode</a>
                        </p>
                        <div>
                            <NavLink className="button plain blue" to="/works">Works</NavLink>
                            <a href="https://github.com/RobinThijsen" target="_blank">My GitHub<FontAwesomeIcon icon={ faArrowUpRightFromSquare } /></a>
                        </div>
                    </div>
                    <div className="skills-contact-wrapper">
                        <div>
                            <h3>Skills</h3>
                            <ul className="list-icon">
                                <li><FontAwesomeIcon icon={ faHtml5 } alt="html5 icon" /></li>
                                <li><FontAwesomeIcon icon={ faSass } alt="sass icon" /></li>
                                <li><FontAwesomeIcon icon={ faJs } alt="js icon" /></li>
                                <li><FontAwesomeIcon icon={ faVuejs } alt="vuejs icon" /></li>
                                <li><FontAwesomeIcon icon={ faReact } alt="react icon" /></li>
                                <li><FontAwesomeIcon icon={ faPhp } alt="php icon" /></li>
                                <li><FontAwesomeIcon icon={ faDocker } alt="docker icon" /></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Contact</h3>
                            <ul>
                                <li><a href={ "mailto:" + email }>{ email }</a></li>
                                <li><NavLink to="/contact">More way to<FontAwesomeIcon icon={ faArrowUpRightFromSquare } alt="square out icon" /></NavLink></li>
                            </ul>
                        </div>
                    </div>
                </article>
            </section>
            <section className="picture-wrapper">

            </section>
        </main>
    )
}