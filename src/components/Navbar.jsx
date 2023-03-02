import { useState, useEffect } from 'react'
import './Navbar.css'
import MenuIcon from './MenuIcon'
import Menu from './Menu'

export default function Navbar() {
    const [showMenuIcon, setShowMenuIcon] = useState(false)
    const [screenWdith, setScreenWidth] = useState(window.innerWidth)

    function handleResize() {
        setScreenWidth(window.innerWidth)
        if (screenWdith <= 560) {
            setShowMenuIcon(true)
        } else {
            setShowMenuIcon(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [screenWdith])

    return (
        <nav className="navbar">
            {showMenuIcon ? <MenuIcon /> : <Menu />}
        </nav>
    )
}