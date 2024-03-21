import React, { useState } from 'react';
import axios from 'axios';
import "../styles/LoginSignup.css";
// import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
const Login = () => {
 const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email:"",password:""
    });

    const handleInput = (e) =>{
        const {name,value}= e.target;
        setLoginData({ ...loginData, [name]: value});
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
          if(email | password === ''){
            toast.warn('please enter your email and password', {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });

          }else{
            const response = await axios.post('http://localhost:5000/api/user/login',loginData);
            toast.success('congratullation LOGIN successfully', {
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
              navigate("/home")
              
            },3000)
            console.log(response.data);
          }

        } catch (error) {
          if (error.response && error.response.status === 401) {
           
            alert("Password incorrect. Please check your password and try again.");
        } else {
            console.error("Login failed", error.message);
        }
        }
    }
    const {email,password} = loginData;
  return (
    <>
     <form className="MainContainer" onSubmit={handleSubmit}>
      <div className="Login">
        <div className="text">Login</div>
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

      </div>
      <div className="button">
      <button className="Loginbutton" type='submit'>Login</button>
      </div>
      <div className="submit-container">
      <div>
            <Link to="/ForgotPassword" className='forgetpassword'>Forgot Password</Link>
          </div>
          <div>
            Don't have an account? <Link to="/register" className='noAccount'>Register</Link>
          </div>
      </div>
    </form>
    </>
  )
}

export default Login;