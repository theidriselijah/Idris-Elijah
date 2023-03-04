import { useState } from 'react'
import './MenuIcon.css'

export default function MenuIcon(props) {

    return (
        <div>
            <div className = {props.isOpen ? 'menu-button-open' : 'menu-button'} onClick = {props.setOpenedState}>
                <div className='menu-button-burger'>
                </div>
            </div>
        </div>
        
    )
}