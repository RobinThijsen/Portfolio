import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faJs, faPhp, faReact, faSass } from "@fortawesome/free-brands-svg-icons"
import data from "../assets/works.json"
import parse from "html-react-parser"

export const Work = () => {

    return (
        <main className="work">
            <h2>Here are my biggest projects</h2>
            {
                data.map(d => (
                    <section>
                        <article>
                            <h3>{ d.name }</h3>
                            <p>{ d.description }</p>
                            <ul className="list-icon">
                                {
                                    d.icons.map(icon => (
                                        <li>{ parse(icon) }</li>
                                    ))
                                }
                            </ul>
                            <a href={ d.link } target="_blank">
                                link
                                <FontAwesomeIcon icon={ faArrowUpRightFromSquare } />
                            </a>
                        </article>
                        <figure>
                            <img src={ d.src } alt={ d.alt } />
                        </figure>
                    </section>
                ))
            }
            <section className="more-wrapper">
                <h2>Get more works here</h2>
                <a className="button plain" href="https://github.com/RobinThijsen">More projects</a>
            </section>
        </main>
    )
}