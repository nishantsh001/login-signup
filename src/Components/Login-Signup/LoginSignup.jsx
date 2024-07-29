import React, { useState } from 'react'
import user_icon from 'D:/wingz/Downloads/CDAC/FrontEnd/login-signup/src/Components/Assets/user_icon.png'
import password_icon from 'D:/wingz/Downloads/CDAC/FrontEnd/login-signup/src/Components/Assets/password_icon.png'
import email_icon from 'D:/wingz/Downloads/CDAC/FrontEnd/login-signup/src/Components/Assets/email.png'
import './LoginSignup.css'

export const LoginSignup = () => {
  const [action, setAction]=useState("Sign Up");
  return (
    <div className='container'>
      <div className='header'>

        <div className='text'>{action}</div>
        <div className='underline' ></div>

        <div className='inputs'>
          {action==="Login"?<div></div>:<div className='input'>
            <img src={user_icon} width="20"  alt=""></img>
            <input type='text' placeholder='Name'></input>
          </div>}
          {/* Ternary operator above */}

          <div className='input'>
            <img src={email_icon} width="20" alt=""></img>
            <input type='email' placeholder='Email-id'></input>
          </div>

          <div className='input'>
            <img src={password_icon} width="20"  alt=""></img>
            <input type='passsword' placeholder='password'></input>
          </div>

          {action === "Sign Up"?<div></div>:<div className='Forgot-Password'>Forgot Password?<span>Click here!</span></div>}

          <div className='submit-container'>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>  
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
          </div>
        </div>
      </div>
    </div>
  )
}

