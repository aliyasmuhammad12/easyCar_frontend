import React, { useState } from 'react';
import axios from 'axios';
import {toast} from "react-toastify";
import "../styles/LoginSignup.css";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import {Link, useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
  
  
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.warn('Please enter all required fields', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
  
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.warn('Password and Confirm Password do not match', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/api/user', formData);
      console.log(response.data);
      toast.success('Congratulations! Registered successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      })
      setTimeout(() => {
        navigate('/login');
      }, 3000);
  
    } catch (error) {
      console.error("Registration failed", error.message);
    }
  };
  

  const { name, email, password, confirmPassword } = formData;

  return (
    <>
    <form className="MainContainer" onSubmit={handleRegistration}>
      <div className="Login">
        <div className="text">Register</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
      <div className="input">
            <FaRegUser className='icon' />
            <input
              type="text"
              name='name'
              value={name}
              onChange={handleInputChange}
              className="user"
              placeholder='Name'
            />
          </div>
        <div className="input">
          <MdOutlineEmail className='icon' />
          <input
            type="email"
            name='email'
            value={email}
            onChange={handleInputChange}
            className="user"
            placeholder='Email Id'
          />
        </div>
        <div className="input">
          <RiLockPasswordLine className='icon' />
          <input
            type="password"
            name='password'
            value={password}
            onChange={handleInputChange}
            className="user"
            placeholder='Password'
          />
        </div>
        <div className="input">
            <RiLockPasswordLine className='icon' />
            <input
              type="password"
              name='confirmPassword'
              value={confirmPassword}
              onChange={handleInputChange}
              className="user"
              placeholder='Confirm Password'
            />
          </div>
      </div>
      <div className="button">
      <button className="Registerbutton" type='submit'>Register</button>
      </div>
      <div className="submit-container">
      <div>
            Already have an account? <Link to="/login" className='noAccount'>Login</Link>
          </div>
      </div>
    </form>
    </>
  )
}

export default Register;