import React, { useEffect, useState } from "react";
import { Col } from "reactstrap";
import "../../styles/blog-item.css";
import { Link } from "react-router-dom";
import axios from "axios";

const BlogList = () => {
  const [carData, setCarData] = useState([]);

  const fetchCars = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/car");
      setCarData(response.data);
    } catch (error) {
      console.error("error fetching car data:", error);
    }
  };

  const deleteCar = async (id, title) => {
    try {
      await axios.delete(`http://localhost:5000/api/car/${id}`);
      fetchCars();
      alert(`${title} deleted`);
    } catch (error) {
      console.error("error deleting car:", error);
    }
  };

  useEffect(() => {
    fetchCars();

    const refreshInterval = setInterval(() => {
      fetchCars();
    }, 5000);

    return () => clearInterval(refreshInterval);
  }, []);

  return (
    <Col lg="4" md="6" sm="6" className="mb-5">
      {carData.length > 0 ? (
        <div className="blog__item">
          {carData.map((car) => (
            <div key={car._id}>
              <img src={car.imageUrl} alt="" className="w-100" />
              <div className="blog__info p-3">
              <Link to={`/blogs/${car.title}`} className="blog__title">
            {car.title}
          </Link>
          <p className="section__description mt-3">
            {car.description.length > 40
              ? car.description.substr(0, 40)
              : car.description}
          </p>

          <Link to={`/blogs/${car.title}`} className="read__more">
            Read More
          </Link>

  {/* Additional properties */}
  <p className="blog__author">
    <i className="ri-user-line"></i> {car.author}
  </p>
  <div className="d-flex align-items-center gap-3">
    <span className="d-flex align-items-center gap-1 section__description">
      <i className="ri-calendar-line"></i> {car.date}
    </span>

    <span className="d-flex align-items-center gap-1 section__description">
      <i className="ri-time-line"></i> {car.time}
    </span>
  </div>

  <div className="d-flex align-items-center gap-3">
    <button
      className="btn btn-warning"
      onClick={() => deleteCar(car._id, car.title)}
    >
      Delete
    </button>
  </div>
</div>

            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1>No blogs posted yet</h1>
        </div>
      )}
    </Col>
  );
};

export default BlogList;
