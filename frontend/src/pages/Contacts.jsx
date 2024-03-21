import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import { Link } from 'react-router-dom';
import CommonSection from '../components/UI/CommonSection';
import '../styles/contact.css';
import ContactTable from './ContactTable';
import axios from "axios"
const socialLinks = [
  {
    url: '#',
    icon: 'ri-facebook-line',
  },
  {
    url: '#',
    icon: 'ri-instagram-line',
  },
  {
    url: '#',
    icon: 'ri-linkedin-line',
  },
  {
    url: '#',
    icon: 'ri-twitter-line',
  },
];

const Contacts = () => {

const [query, setQuery] = useState({
  name:"",
  email:"",
  message:"",
})

const {name,email,message} = query;

const handleChange = (e) =>{
  setQuery({...query,[e.target.name]:e.target.value})
}

const onSubmit = async(e) =>{
  e.preventDefault();
  const data = await axios.post("http://localhost:5000/api/query",query)
  setQuery(data);
  alert("Your query has been submitted successfully")

  setQuery({
    name: "",
    email: "",
    message: "",
  })
}

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get in Touch</h6>
              <Form onSubmit={onSubmit}>
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" name='name' value={name} onChange={handleChange}/>
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" name='email' value={email} onChange={handleChange}/>
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea rows="5" placeholder="Message" className="textarea" name='message' value={message} onChange={handleChange}></textarea>
                </FormGroup>
                <button className="SubmitBtn" type="submit">
                  Send
                </button>
              </Form>
            </Col>
            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description">15100 Jutial Gilgit City Pk</p>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Phone:</h6>
                  <p className="section__decription mb-0">+923 5548 12417</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Phone:</h6>
                  <p className="section__decription mb-0">+923 1197 30546</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__decription mb-0">easycarrent@gmail.com</p>
                </div>
                <h6 className="fw-bold mt-4">Follow Us</h6>
                <div className="d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link to={item.url}>
                      <i className={item.icon} key={index}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <ContactTable/>
    </Helmet>
  );
};

export default Contacts;
