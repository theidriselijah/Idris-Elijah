import './Menu.css'
import { Link } from "react-scroll"

export default function Menu() {
    return (
        <div className='menu'>
            <ul>
                <li><Link to="about" smooth={true} offset={-57} duration="500">About</Link></li>
                <li><Link to="portfolio" smooth={true} offset={-57} duration="500">Portfolio</Link></li>
                <li><Link to="contact" smooth={true} offset={-57} duration="500">Contact</Link></li>
            </ul>
        </div>
    )
}