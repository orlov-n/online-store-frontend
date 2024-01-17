import { useState } from 'react'
import './Nav.css'
import { art, blog, projects, placeHolder, placeHolder2 } from '../../data/data'

export const Nav = () => {
    const [hover, setHover] = useState(false)
    const [navButtonValue, setNavButtonValue] = useState('')

    const changeHover = (e) => {
        console.log(e.target.innerText);
        setHover(!hover)
        setNavButtonValue(e.target.innerText)
    }

    const renderModalItems = (modalArray) => {
      return modalArray.map((item, index) => {
        return (
            <div key={index}>
                <p>{item}</p>
            </div>
        )
       })
    }

    const modalDescriptor = {
        'Art' : art,
        'Blog' : blog,
        'Projects' : projects,
        'Placeholder' : placeHolder,
        'placeHolder2' : placeHolder2,
    }



    return (
        <>
     <div className='nav-container'>
        <div>
           <ul className="nav-list">
            <li className='top-menu-nav-list-item' onMouseEnter={(e)=> changeHover(e)}>Art</li>
            <li className='top-menu-nav-list-item' onMouseEnter={(e)=> changeHover(e)}>Projects</li>
            <li className='top-menu-nav-list-item' onMouseEnter={(e)=> changeHover(e)}>Blog</li>
            <li className='top-menu-nav-list-item' onMouseEnter={(e)=> changeHover(e)}>Placeholder</li>
            <li className='top-menu-nav-list-item' onMouseEnter={(e)=> changeHover(e)}>placeHolder2</li>
            
            </ul> 
            
        </div>
        {hover  && (
            <div className={'dropdown-menu-center'} onMouseLeave={changeHover}>
         {renderModalItems(modalDescriptor[navButtonValue])}
        </div> )}
    </div>    
        </>
    )
}