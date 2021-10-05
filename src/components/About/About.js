import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'
import { Accordion } from 'react-bootstrap';

const About = () => {
  return (
    <div >
      <div className="heading">
        <h3>About Us</h3>
        <p>Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat</p>
      </div>
      <div className="d-flex p-5">
        <div className="col-lg-6 photo">
          <img src="https://images.unsplash.com/photo-1508014924734-d75124b0f402?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1476&q=80" alt="" />
        </div>
        <div className="col-lg-6 p-5">
          <h1 className="custom-about">Online Class Facilities</h1>
          <h5>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</h5>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Over 300 Respected Teachers Appointed</Accordion.Header>
              <Accordion.Body className="accordian">
                we have highly graduate teachers.you will learn your lesson very easily.All of our teachers are ready to teach your lesson in a appropiate way. our teachers are like friendly so that you can share your all problems with them.we hope they will give you best solution.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Multiple Benefits buying Membership</Accordion.Header>
              <Accordion.Body className="accordian">
                For decades, education was relegated to stifling classrooms with blackboards and uncomfortable desks. Today, students of all ages and experience levels have far more options, including online courses.Online education comes in so many shapes and sizes. Students have an endless amount of opportunity to learn new things.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Over 1000 visitors from last year</Accordion.Header>
              <Accordion.Body className="accordian">
                There are so many student visits our site daily. you can also check our website. we hope you will find a best solution for your child education .thank you
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default About;