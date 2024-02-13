import React, { useState } from 'react'
import style from './Contact.module.css'


export default function Contact() {

  let[label,setLabel]=useState(style.label)
  function userName(){
    setLabel(style.labell)

  }
  let[agelabel,setAgelabel]=useState(style.label)
  function userAge(){
    setAgelabel(style.labell)

  }
  let[emailLabel,setEmaillabel]=useState(style.label)
  function userEmail(){
    setEmaillabel(style.labell)

  }
  let[passwordLabel,setPasswordlabel]=useState(style.label)
  function userPassword(){
    setPasswordlabel(style.labell)

  }
  return (<>
    <div className="container min-vh-100 d-flex w-100 justify-content-center align-items-center">
      <div className={` w-100 ${style.boxContent} mt-5 d-flex flex-column justify-content-center align-items-center border `}>

        <div className="userName w-75 position-relative mb-5">
          <label htmlFor="userName" className={`${label}`}>UserName :</label>
          <input onInput={userName} className={` form-control w-100 px-3 border-0 border-bottom `}  id='userName' type="text" />

        </div>
        <div className="userAge w-75 position-relative mb-5">
          <label htmlFor="UserAge" className={`${agelabel}`}>UserAge :</label>
          <input onInput={userAge} className={` form-control w-100 px-3 border-0 border-bottom `}  id='UserAge' type='number' />

        </div>
        <div className="userEmail w-75 position-relative mb-5">
          <label htmlFor="userEmail" className={`${emailLabel}`}>userEmail :</label>
          <input onInput={userEmail} className={` form-control w-100 px-3 border-0 border-bottom `}  id='userEmail' type='email' />

        </div>
        <div className="userEmail w-75 position-relative mb-5">
          <label htmlFor="userPassword" className={`${passwordLabel}`}>userPassword :</label>
          <input onInput={userPassword} className={` form-control w-100 px-3 border-0 border-bottom `}  id='userPassword' type='password' />

        </div>
        <button className=' btn btn-success'>Send Message</button>
      

      </div>
    </div>





  </>)
}
