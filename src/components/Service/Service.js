import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const {name, img, price, courseDuration} = props.service;
    return (
        <Col>
        <Card>
           <Card.Img variant="top" src={img} />
           <Card.Body>
             <Card.Title className="title">{name}</Card.Title>
             <Card.Text className="price">
               <p>$ {price}.00</p>
             </Card.Text>
           </Card.Body>
           <Card.Footer>
             <small className="text-muted">{courseDuration} Weeks <i class="far fa-clock"></i></small>
           </Card.Footer>
         </Card>
        </Col>
        
    );
};

export default Service;