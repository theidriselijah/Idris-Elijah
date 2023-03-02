import { useState } from 'react'
import './Navbar.css'
import Menu from './MenuIcon'

export default function Navbar() {
    const [showMenuIcon, setShowMenuIcon] = useState(false)

    return (
        <nav className="navbar">
            {showMenuIcon && <MenuIcon />}
        </nav>
    )
}