import React, { useState } from 'react'
import portStyle from './Portfolio.module.css'
import image1 from '../../assests/images/one.webp'
import image2 from '../../assests/images/two.png'
import image3 from '../../assests/images/three.png'


export default function Portfolio() {

let [display,changeDisplay]=useState(`d-none`)
function change(){
    changeDisplay(`d-block`)
}
function hidePhoto(){
    changeDisplay(`d-none`)
    // e.stopPropagation()
}


let[imgsrc,changeImg]=useState(null)
function imgChange(e){
    changeImg(e)
}

    return (<>
        <div className={`container ${portStyle.Portfolio} text-center d-flex flex-column`} >
            <h2 className={`${portStyle.porth2} mb-3`}>PORTFOLIO COMPONENT</h2>
            <div className={`${portStyle.Picon} mb-3`}><i class={` fa-solid fa-star  `}></i></div>
            <div className="row g-5">
                <div className={`col-md-4 `} onClick={()=>{change()}} >
                    <div className={`colContent py-4 ${portStyle.colImg} `} onClick={()=>{imgChange(image1)}}>
                        <img src={image1} alt="" />
                        <div className={`${portStyle.layer} d-flex justify-content-center align-items-center`} >
                            <i className={`fa-solid fa-plus fa-rotate-90  ${portStyle.icon} `}></i>
                        </div>
                    </div>

                </div>
                <div className={`col-md-4 `}onClick={change}>
                    <div className={`colContent py-4 ${portStyle.colImg} `} onClick={()=>{imgChange(image2)}}>
                        <img src={image2} alt="" />
                        <div className={`${portStyle.layer} d-flex justify-content-center align-items-center`} >
                            <i className={`fa-solid fa-plus fa-rotate-90  ${portStyle.icon} `}></i>
                        </div>
                    </div>

                </div>
                <div className={`col-md-4 `}onClick={change}>
                    <div className={`colContent py-4 ${portStyle.colImg} `} onClick={()=>{imgChange(image3)}}>
                        <img src={image3} alt="" />
                        <div className={`${portStyle.layer} d-flex justify-content-center align-items-center`} >
                            <i className={`fa-solid fa-plus fa-rotate-90  ${portStyle.icon} `}></i>
                        </div>
                    </div>

                </div>
                <div className={`col-md-4 `}onClick={change}>
                    <div  className={`colContent py-4 ${portStyle.colImg} `} onClick={()=>{imgChange(image1)}}>
                        <img  src={image1} alt="" />
                        <div className={`${portStyle.layer} d-flex justify-content-center align-items-center`} >
                            <i className={`fa-solid fa-plus fa-rotate-90  ${portStyle.icon} `}></i>
                        </div>
                    </div>

                </div>
                <div className={`col-md-4 `}onClick={change}>
                    <div className={`colContent py-4 ${portStyle.colImg} `} onClick={()=>{imgChange(image2)}}>
                        <img src={image2} alt="" />
                        <div className={`${portStyle.layer} d-flex justify-content-center align-items-center`} >
                            <i className={`fa-solid fa-plus fa-rotate-90  ${portStyle.icon} `}></i>
                        </div>
                    </div>

                </div>
                <div className={`col-md-4 `}onClick={change}>
                    <div className={`colContent py-4 ${portStyle.colImg} `} onClick={()=>{imgChange(image3)}}>
                        <img src={image3} alt="" />
                        <div className={`${portStyle.layer} d-flex justify-content-center align-items-center`} >
                            <i className={`fa-solid fa-plus fa-rotate-90  ${portStyle.icon} `}></i>
                        </div>
                    </div>

                </div>


            </div>
        </div>
        <div onClick={hidePhoto} className={`model position-fixed start-0 top-0 w-100 z-3 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center ${display} `}>
            <div className={`colContent p-5 ${portStyle.colImg} `}>
                <img onClick={(e)=>{e.stopPropagation()}} src={imgsrc} alt="" />
            </div>
        </div>


    </>)
}
