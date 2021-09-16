import React from 'react';
import '../../styles/headerFooter.css';
import { Row,Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <Row className=" hf-height bg-dark white ">
            <Col className="my-auto justify-content-center d-flex">
                <p className="text-center cor-font">Copyright 2021 &copy;<br/> A Very Good Company<span className="red">.</span></p>
            </Col>   
        </Row>
    )
}

export default Footer
