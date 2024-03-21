import React, { useState } from 'react';
import axios from 'axios';
import "../styles/LoginSignup.css";
import {toast} from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { MdOutlineEmail } from "react-icons/md";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] =useState('');

    const handleSendOTP =  async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/user/forget', {email});
            toast.success('Otp send successfully', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            setTimeout(()=>{
              navigate("/VerifyOtp")

              
            },3000)
            console.log(response.data);
          }
          catch (error) {
          console.error('Error sending OTP:', error);
        }
    }



  return (
    <>
     <form className="MainContainer"  onSubmit={handleSendOTP}>
      <div className="Login">
        <div className="text">Forget passsword</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">

        <div className="input EmailId">
          <MdOutlineEmail className='icon' />
          <input
            type="email"
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email Id'
          />
        </div>
      </div>
      <div className="button">
      <button className="Loginbutton" type='submit'>Send OTP</button>
      </div>
    </form>
    </>
  )
}

export default ForgotPassword;