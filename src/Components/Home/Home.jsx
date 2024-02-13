import React from 'react'
import homeImage from '../../assests/images/man5-512.webp'
import stylyHome from './Home.module.css'

export default function Home() {
    return (
        
           <div className= {`${stylyHome.homeContent} d-flex text-white justify-content-center align-items-center flex-column`}>
           <img src={homeImage} alt="" className=' mb-5' />
            <h1 className=' mb-3'>START FRAMEWORK</h1>
            <div className={`${stylyHome.Hicon} mb-3`}><i class={` fa-solid fa-star  `}></i></div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
           </div>
        

    )
}
