import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import CarsListing from '../pages/CarsListing';
import CarsDetails from '../pages/CarsDetails';
import Blog from '../pages/Blog';
import BlogDetails from '../pages/BlogDetails';
import NotFound from '../pages/NotFound';
import Contacts from '../pages/Contacts';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgetPassword';
import VerifyOtp from '../pages/VerifyOtp';
import ContactTable from '../pages/ContactTable';



const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarsListing />} />
      <Route path="/cars/:slug" element={<CarsDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contacts/>} />
      <Route path="/contact" element={<ContactTable/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />}/>
      <Route path="/VerifyOtp" element={<VerifyOtp />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
