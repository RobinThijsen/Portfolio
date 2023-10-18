import { Routes, Route } from "react-router-dom"

import { Header } from '/src/components/Header.jsx'
import { Footer } from '/src/components/Footer.jsx'

import { Home } from '/src/pages/Home.jsx'
import { Work } from '/src/pages/Work.jsx'
import { About } from '/src/pages/About.jsx'
import { Contact } from '/src/pages/Contact.jsx'
import {useState} from "react";
import { BubblyContainer } from "react-bubbly-transitions"

export const App = () => {
    const [mousePosition, setMousePosition] = useState({
        left: 0,
        right: 0
    })

    const handleMouseMove = e => {
        setMousePosition(
            {
                left: e.clientX,
                top: e.clientY
            }
        )
    }

    const allA = document.querySelectorAll("a")
    for (let a of allA) {
        const cursor = document.getElementById("cursor")
        a.addEventListener("mouseover", e => {
            cursor.classList.add("hover")
        })
        a.addEventListener("mouseout", e => {
            cursor.classList.remove("hover")
        })
    }

    const allButton = document.querySelectorAll("button")
    for (let b of allButton) {
        const cursor = document.getElementById("cursor")
        b.addEventListener("mouseover", e => {
            cursor.classList.add("hover")
        })
        b.addEventListener("mouseout", e => {
            cursor.classList.remove("hover")
        })
    }

  return (
    <div className="container-app" onMouseMove={ handleMouseMove }>
        <BubblyContainer />
        <div id="cursor" style={{left:mousePosition.left, top:mousePosition.top}}></div>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Work />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        <Footer />
    </div>
  )
}