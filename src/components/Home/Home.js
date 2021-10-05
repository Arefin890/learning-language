import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardGroup, Carousel, Modal, Row } from 'react-bootstrap';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import './Home.css';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Home = () => {
  const [services] = useServices();
  return (
    <div>
      <div>
        <Carousel variant="dark">
          <Carousel.Item className="banner_item">
            <img
              className="d-block w-100"
              src={image1}
              alt="First slide"
            />
            <Carousel.Caption className="banner_description">
              <h2>Learn differnt language.</h2>
              <p>Teaching Turning Today’s Learners Into Tomorrow’s Leaders</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="banner_item">
            <img
              className="d-block w-100"
              src={image2}
              alt="Second slide"
            />
            <Carousel.Caption className="banner_description">
              <h2>COURSES GROUP OF PROFESSIONALS</h2>
              <p>Putting Children First, Preparing Children For Success In Life</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="banner_item">
            <img
              className="d-block w-100"
              src={image3}
              alt="Third slide"
            />
            <Carousel.Caption className="banner_description">
              <h2>Complatible with Sensei.</h2>
              <p>Temporibus autem quibusdam et aut officiis debitis aut rerum</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="heading mb-5">
        <h3>Our Services</h3>
        <p>Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat</p>
      </div>
      <div>
        <Row className="services g-4" xs={1} md={4}>
          {
            services.slice(0, 4).map(service => <Service
              key={service.key}
              service={service}
            ></Service>)
          }
        </Row>
      </div>

    </div>
  );
};

export default Home;