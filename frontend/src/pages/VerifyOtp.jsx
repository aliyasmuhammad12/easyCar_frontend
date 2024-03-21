import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from "react-toastify";
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { SiLotpolishairlines } from 'react-icons/si';


const VerifyOtp = () => {
        const navigate = useNavigate();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [otp, setOtp] = useState('');
      
        const handleInput = (e) => {
          const { name, value } = e.target;
          if (name === 'email') setEmail(value);
          else if (name === 'password') setPassword(value);
          else if (name === 'otp') setOtp(value);
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            const response = await axios.post('http://localhost:5000/api/user/verify', {
              email,
              otp,
              newPassword: password,
            });
      
            toast.success('pasword changed successfully', {
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
              navigate('/login');
              
            },3000)
            
          } catch (error) {
            console.error('Error verifying OTP:', error);
           
          }
        };
      


  return (
    <>
     <form className="MainContainer" onSubmit={handleSubmit}>
      <div className="Login">
        <div className="text">Set New password</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">

        <div className="input EmailId">
          <MdOutlineEmail className='icon' />
          <input
            type="email"
            name='email'
            value={email}
            onChange={handleInput}
            className="user"
            placeholder='Email Id'
          />
        </div>
        <div className="input EmailId">
          <RiLockPasswordLine className='icon' />
          <input
            type="password"
            name='password'
            value={password}
            onChange={handleInput}
            className="user"
            placeholder='Password'
          />
        </div>
        <div className="input">
        <SiLotpolishairlines className='icon' />
          <input
            type="text"
            name='otp'
            value={otp}
            onChange={handleInput}
            className="user"
            placeholder='enter otp '
          />
        </div>
      </div>
      <div className="button">
      <button className="Loginbutton" type='submit'>Change Password</button>
      </div>
    </form>
    </>
  )
}

export default VerifyOtp;