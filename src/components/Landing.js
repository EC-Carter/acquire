import React from 'react';
import { Button,Col,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <Row className="mx-5 my-5 bg-tan p-5 border-start border-end border-danger">
            <Col className="my-auto justify-content-center align-items-center d-flex flex-column ">
                <p className="mont-font fs-3 text-center ">Acquire is a streamlined M&A platform designed to help companies work efficiently, tackle research and organize data.</p>
                <Button as={Link} to="/maindisplay" variant="outline-dark" className="mont-font rounded-0 w-15em btn-lg">Get started</Button>
            </Col>
        </Row>
    )
}

export default Landing
