import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import MenuIcon from './MenuIcon'
import Menu from './Menu'

export default function Navbar() {
    const [showMenuIcon, setShowMenuIcon] = useState(false)
    const [screenWdith, setScreenWidth] = useState(window.innerWidth)
    const [isOpen, setIsOpen] = useState(false)

    function setOpenedState() {
        setIsOpen(prevIsOpen => !prevIsOpen)
    }

    function handleResize() {
        setScreenWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        if (screenWdith <= 560) {
            setShowMenuIcon(true)
        } else {
            setShowMenuIcon(false)
        }

        return () => window.removeEventListener("resize", handleResize)
    }, [screenWdith])

    return (
        <div>
            <nav className="navbar">
                {showMenuIcon ? <MenuIcon isOpen={isOpen} setOpenedState={setOpenedState}/> : <Menu />}
            </nav>
            <div className={isOpen ? 'show-menu' : 'hide-menu'}>
                <div>
                    <ul className='menu-links'>
                        <li><Link to="about" smooth={true} offset={-57} duration="500">About</Link></li>
                        <li><Link to="portfolio" smooth={true} offset={-57} duration="500">Portfolio</Link></li>
                        <li><Link to="contact" smooth={true} offset={-57} duration="500">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}