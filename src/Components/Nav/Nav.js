import { useState } from 'react'
import './Nav.css'

export const Nav = () => {
    const [hover, setHover] = useState(false)

    const changeHover = () => {
        setHover(!hover)
    }

    return (
        <>
     
        <div>
           <ul className="nav-list">
            <li  className='top-menu-nav-list-item' onMouseEnter={changeHover} onMouseLeave={changeHover}>Monsters</li>
            <li className='top-menu-nav-list-item'>Aliens</li>
            <li className='top-menu-nav-list-item'>Objects</li>
            <li className='top-menu-nav-list-item'>Animals</li>
            <li className='top-menu-nav-list-item'>Political</li>
            
            </ul> 
            
        </div>
        {hover && (
            <div className={'dropdown-menu-center'}   onMouseEnter={changeHover} onMouseLeave={changeHover}>
            <p>HI!</p>
            <p>HI!</p>
            <p>HI!</p>
            <p>HI!</p>
            <p>HI!</p>
            <p>HI!</p>
        </div> )}
        </>
    )
}