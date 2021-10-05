import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div>
            <div className="heading mb-5">
                    <h3>Our Services</h3>
                    <p>Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat</p>
            </div>
            <Row className="services g-4" xs={1} md={4}>
                {
                      services.map(service => <Service 
                        key={service.key}
                        service={service}
                        ></Service>)
                }
              </Row>
        </div>
    );
};

export default Services;