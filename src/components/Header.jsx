import { NavLink } from "react-router-dom"
import { BubblyLink } from "react-bubbly-transitions"

export const Header = () => {

    const activeElementClass = () => {
        const burgerButton = document.querySelector(".burger")
        const menuSmall = document.querySelector(".small-screen")

        burgerButton.classList.contains("active")
            ? burgerButton.classList.remove("active")
            : burgerButton.classList.add("active")

        menuSmall.classList.contains("active")
            ? menuSmall.classList.remove("active")
            : menuSmall.classList.add("active")

        document.body.classList.contains("active")
            ? document.body.classList.remove("active")
            : document.body.classList.add("active")
    }

    const handleClick = () => {
        activeElementClass()
    }

    return (
        <header>
            <h1>Robin</h1>
            <menu className="big-screen">
                <BubblyLink colorStart={ "#eed4c2" } colorEnd={ "#fff" } to="/">Home</BubblyLink>
                <BubblyLink colorStart={ "#eed4c2" } colorEnd={ "#fff" } to="/works">Works</BubblyLink>
                <BubblyLink colorStart={ "#eed4c2" } colorEnd={ "#fff" } to="/about">About</BubblyLink>
                <BubblyLink colorStart={ "#eed4c2" } colorEnd={ "#fff" } to="/contact">Contact</BubblyLink>
            </menu>
            <a href="mailto:robin.t@live.be" className="button border">Let's chat</a>
            <menu className="small-screen">
                <NavLink to="/" onClick={ handleClick }>
                    <p>Home</p>
                    <span></span>
                </NavLink>
                <NavLink to="/works" onClick={ handleClick }>
                    <p>Works</p>
                    <span></span>
                </NavLink>
                <NavLink to="/about" onClick={ handleClick }>
                    <p>About</p>
                    <span></span>
                </NavLink>
                <NavLink to="/contact" onClick={ handleClick }>
                    <p>Contact</p>
                    <span></span>
                </NavLink>
                <a href="mailto:robin.t@live.be">
                    <p>Let's chat</p>
                    <span></span>
                </a>
            </menu>
            <div className="burger" onClick={ handleClick }>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}