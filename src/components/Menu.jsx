import { useState } from 'react'
import './Menu.css'

export default function Menu() {
    
    const [isOpen, setIsOpen] = useState(false)

    function setOpenedState() {
        setIsOpen(prevIsOpen => !prevIsOpen)
    }

    return (
        <div className = {isOpen ? 'menu-button-open' : 'menu-button'} onClick = {() => setOpenedState()}>
            <div className='menu-button-burger'>

            </div>
        </div>
    )
}