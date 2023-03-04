import { useEffect, useState } from 'react'
import './BackToTopButton.css'
import upArrow from '../assets/up-icon.png'

export default function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    function scrollUp() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {backToTopButton && (
                <div className='btn' onClick={scrollUp}>
                    <img src={upArrow} />
                </div>
            )}
        </div>
    )
}