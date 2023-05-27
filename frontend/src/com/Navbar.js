import React, { useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { FcGoogle } from 'react-icons/fc';
import axios from "axios";
import { useNavigate } from 'react-router';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

import "../styles/navbar.css";

const Navbar = () => {

  {/*const navigate = useNavigate();*/}

    const responseGoogle= async (res)=>{
        try{
          const config = {
            method:"POST",
        }
        const userObject = jwt_decode(res.credential);
        if(userObject.email_verified){
            const {name,email,picture} = userObject;
           const data =await axios.post('http://localhost:5000/user/login',{name,email,picture},config);
      
           localStorage.setItem("userDetails", data);
          }
  
        }catch(err){
          console.error('Error logging in:', err);
        }
       }

       useEffect(()=>{
        if(localStorage.getItem("userDetails")){
          console.log("success");
        }
       },[]);
  return (
    <nav className="navigation">
    <a href="/" className="brand-name">
      ABC Stocks
    </a>
    <button className="hamburger">
      {/* icon from heroicons.com */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="white"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
    <div
      className="navigation-menu">
      <ul>
       <li>
        <GoogleOAuthProvider
     clientId='234583010778-62p7d1bfdvprlehsfq2247mu0ik7d4im.apps.googleusercontent.com'>
       <GoogleLogin
          render={(renderProps) => (
            <button
              type="button"
              className=""
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <FcGoogle className="" /> Sign in with google
            </button>
          )}
          onSuccess={responseGoogle}
          cookiePolicy="single_host_origin"
        />
     </GoogleOAuthProvider>
     </li>
        
      </ul>
    </div>
  </nav>
  )
}

export default Navbar