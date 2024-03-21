import React, { useState } from "react";
import "../../styles/addcar.css";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import axios from "axios";
// import { RiLockPasswordLine } from "react-icons/ri";

const AddCar = () => {
  const [car, setCar] = useState({
    imageUrl: "",
    title: "",
    author: "",
    date: "",
    description: "",
    time: "",
  });

  const {imageUrl, title, author, date, description, time} = car;

  const handleChange = (e)=>{
    setCar({...car,[e.target.name]:e.target.value})
  }
  
  const onSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:5000/api/car", car);
      
      const updatedCarData = response.data;
  
      setCar(updatedCarData);
      alert("Your data has been submitted successfully");
  
      setCar({
        imageUrl: "",
        title: "",
        author: "",
        date: "",
        description: "",
        time: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);

    }
  };
  

  return (
    <>
      <form className="MainContainer" onSubmit={onSubmit} >
        <div className="Login">
          <div className="text">ADD BLOG</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <FaRegUser className="icon" />
            <input
              type="text"
              name="title"
              value={title} onChange={handleChange}
              className="user"
              placeholder="Enter title"
            />
          </div>
          <div className="input">
            <FaRegUser className="icon" />
            <input
              type="text"
              name="imageUrl"
              value={imageUrl} onChange={handleChange}
              className="user"
              placeholder="Enter IImage url"
            />
          </div>
          <div className="input">
            <MdOutlineEmail className="icon" />
            <input
              type="text"
              name="description"
              value={description} onChange={handleChange}
              className="user"
              placeholder="Enter description"
            />
          </div>
          <div className="input">
            <MdOutlineEmail className="icon" />
            <input
              type="text"
              name="author"
              value={author} onChange={handleChange}
              className="user"
              placeholder="Enter your name"
            />
          </div>
          <div className="input">
            <MdOutlineEmail className="icon" />
            <input
              type="text"
              name="date"
              value={date} onChange={handleChange}
              className="user"
              placeholder="Enter date"
            />
          </div>
          <div className="input">
            <MdOutlineEmail className="icon" />
            <input
              type="text"
              name="time"
              value={time} onChange={handleChange}
              className="user"
              placeholder="Enter time"
            />
          </div>
        </div>
        <div className="button">
          <button className="Registerbutton" type="submit">
            ADD BLOG
          </button>
        </div>
      </form>
    </>
  );
};

export default AddCar;
