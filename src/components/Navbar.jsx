import { useState } from 'react'
import './Navbar.css'
import Menu from './Menu'

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className="navbar">
            <Menu />
        </nav>
    )
}