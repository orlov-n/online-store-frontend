import { useState } from 'react'
import './Nav.css'
import { art, blog, projects, placeHolder, placeHolder2 } from '../../data/data'

export const Nav = () => {
    // a hook responsible for monitoring if the user is pointing at the target.
    const [hover, setHover] = useState(false)

    // a hook responsible for keeping track of the inner text of the Nav's item that's being hovered on.  It gets updated in the (changeHover) function.
    const [navButtonValue, setNavButtonValue] = useState('')

    // receives the event object after the user hovers over the Nav top item, flips the useState (hover) to opposite, and changes the value in the (navButtonValue) hook to the inner text of the event object.
    const turnModalOn = (e) => {
       
        setHover(true)
        
        console.log(e.target.innerText);
        setNavButtonValue(e.target.innerText)

        // if (hover) {

        //     setNavButtonValue(e.target.innerText)
        // } else {
        //     setNavButtonValue('')
        // }
    }

    const turnModalOff = () => {
        setHover(false)
    }

    // gets triggered when modal is activated.  Gets passed the array which is the value of the modalDescriptor object's property which is compared to the inner text of the Nav item using bracket notation.
    const renderModalItems = (modalArray) => {
      return modalArray.map((item, index) => {
        return (
            <div key={index}>
                <p>{item}</p>
            </div>
        )
       })
    }


    // the object with arrays of items from the data.js which will appear on the modal once the property of the object is matched to the inner text of the event.
    const modalDescriptor = {
        'Art' : art,
        'Blog' : blog,
        'Projects' : projects,
        'Placeholder' : placeHolder,
        'placeHolder2' : placeHolder2,
    }



    return (
        <>
        {/* this returns the items in the nav bar.  If user hovers over the item (onMouseEnter) it triggers the (changeHover and passes the event object to that function) */}
     <div className='nav-container'>
        <div>
           <ul className="nav-list" >
            <li className='top-menu-nav-list-item'  onMouseEnter={(e)=> turnModalOn(e)}>Art</li>
            <li className='top-menu-nav-list-item'  onMouseEnter={(e)=> turnModalOn(e)}>Projects</li>
            <li className='top-menu-nav-list-item'  onMouseEnter={(e)=> turnModalOn(e)}>Blog</li>
            <li className='top-menu-nav-list-item'  onMouseEnter={(e)=> turnModalOn(e)}>Placeholder</li>
            <li className='top-menu-nav-list-item'  onMouseEnter={(e)=> turnModalOn(e)}>placeHolder2</li>
            
            </ul> 
            
        </div>
        {/* this is a conditional that checks for the truthy value of the (hover) hook.  If it's truthy it renders the modal with menu items.  The (renderModalItems) gets triggered and it's passed the property inside the (modalDescriptor) object. The  bracket notation is used to compare the object's property to the inner text of the item that's being hovered on.  This data comes from the (navButtonValue) hook, which gets it when the (changeHover) function is triggered, which updates the hook.
        
        The matching property's value is an array of strings in the data.js file.  It iterates over the array and each item is returned as a div with the item.
        
        When the user moves off the Nav's item it triggers the (changeHover) function. The (hover) is flipped to false which is what makes the modal disappear.
         */}
        {hover  && (
            <div className={'dropdown-menu-center'} onMouseLeave={turnModalOff}>
         {renderModalItems(modalDescriptor[navButtonValue])}
        </div> )}
    </div>    
        </>
    )
}