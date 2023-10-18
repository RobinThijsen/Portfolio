import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowUpRightFromSquare, faPaperPlane} from "@fortawesome/free-solid-svg-icons"
import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'

export const Contact = () => {
    const form = useRef();
    const [numLetters, setNumLetters] = useState(0);

    const handleCheckName = e => {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]/;

        if (e.target.value.length === 0) {
            e.target.style.borderColor = "#161616";
        } else {
            if (!e.target.value.match(validRegex)) {
                e.target.style.borderColor = "#d94b2b";
            } else {
                e.target.style.borderColor = "#a0db49";
            }
        }
    }

    const handleCheckEmail = e => {

        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if (e.target.value.length === 0) {
            e.target.style.borderColor = "#161616"
        } else {
            if (!e.target.value.match(validRegex)) e.target.style.borderColor = "#d94b2b"
            else e.target.style.borderColor = "#a0db49"
        }
    }

    const handleCheckMessage = e => {
        setNumLetters(e.target.value.length)
        if (e.target.value.length <= 200 && e.target.value.length > 0) {
            e.target.style.borderColor = "#a0db49"
        } else {
            if (e.target.value.length === 0) e.target.style.borderColor = "#161616"
            else e.target.style.borderColor = "#d94b2b"
        }
    }

    const handleSendEmail = e => {
        e.preventDefault()

        emailjs.sendForm
        (
            'service_bvfockj',
            'template_je2fcil',
            form.current,
            'oqrTqVziPb3Bce_Rf'
        )
            .then(
                (r) => {
                    const p = document.querySelector(".message")
                    p.classList.add('success')
                    p.innerHTML = "Email send successfully!"

                    const nameInput = document.querySelector("input#name")
                    nameInput.value = ""
                    nameInput.style.borderColor = "#161616"
                    const emailInput = document.querySelector("input#email")
                    emailInput.value = ""
                    emailInput.style.borderColor = "#161616"
                    const messageInput = document.querySelector("textarea#message")
                    messageInput.value = ""
                    messageInput.style.borderColor = "#161616"
                }, (e) => {
                    const p = document.querySelector(".message")
                    p.classList.add('error')
                    p.innerHTML = e.text
                }
            )
    }

    return (
        <main className="contact">
            <section>
                <h2>Contact me via this form</h2>
                <form ref={ form } onSubmit={ handleSendEmail }>
                    <div className="input-wrapper">
                        <fieldset>
                            <input onChange={ handleCheckName } type="text" name="user_name" id="name" placeholder="name..." />
                            <label htmlFor="name">Your Name</label>
                        </fieldset>
                        <fieldset>
                            <input onChange={ handleCheckEmail } type="email" name="user_email" id="email" placeholder="email..." required />
                            <label htmlFor="email">Your Email</label>
                        </fieldset>
                        <fieldset>
                            <textarea onChange={ handleCheckMessage } name="message" id="message" placeholder="message..." required></textarea>
                            <label htmlFor="message">Your Message</label>
                            <p>{ numLetters } / 200</p>
                        </fieldset>
                    </div>
                    <p className="message"></p>
                    <button className="button plain" type="submit">Send!<FontAwesomeIcon icon={ faPaperPlane } /></button>
                </form>
            </section>
            <section>
                <h2>Or via these links</h2>
                <ul>
                    <li><a href="https://github.com/RobinThijsen" target="_blank">My GitHub<FontAwesomeIcon icon={ faArrowUpRightFromSquare } /></a></li>
                    <li><a href="https://www.linkedin.com/in/robin-thijsen-61004a252/" target="_blank">Linkedin<FontAwesomeIcon icon={ faArrowUpRightFromSquare } /></a></li>
                    <li><a href="mailto:robinthijen.pro@gmail.com">robinthijsen.pro@gmail.com<FontAwesomeIcon icon={ faArrowUpRightFromSquare } /></a></li>
                </ul>
            </section>
        </main>
    )
}