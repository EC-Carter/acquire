import React from 'react';
import '../../styles/headerFooter.css';
import { Row,Col } from 'react-bootstrap';

const Header = () => {
    return (
        <Row className="hf-height bg-dark white d-flex  ">
            <Col className="my-auto justify-content-center ">
                <h1 className="text-center cor-font logo">acquire<span className="red">.</span></h1> 
            </Col>   
        </Row>
       
    )
}

export default Header
