
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { Button,Row,Col } from 'react-bootstrap'
import { deleteTarget } from '../redux/actions/actions';
import { setTargetToUpdate } from '../redux/actions/actions';

const MainDisplay = () => {
    const dispatch = useDispatch();

    
    const targets = useSelector(state => state.targets);

    return (
        <>
        <Row  className="mx-5 my-2 p-2">
        <Button as={Link} to="/addnew" variant="outline-dark" className="mont-font rounded-0 mt-1 " >Add New</Button>
        </Row>
        
        {targets.map((target) => {
            return (
            
            <Row key={target.id} className="mx-5 my-2 bg-tan p-2 border-start border-end border-danger">
                <Col md={5} className="d-flex align-items-center justify-content-center">
                <p className="mont-font text-center">{target.info.companyName}</p>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                <p className="mont-font text-center">{target.status}</p>
                </Col>
                <Col className="d-flex align-items-center justify-content-center ">
                <Button as={Link} to={`/detail/${target.info.companyName}`} onClick={() => dispatch(setTargetToUpdate(target))} variant="outline-dark" className="mont-font rounded-0">More</Button>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                <Button onClick={()=>dispatch(deleteTarget(target.id))} variant="outline-dark" className="mont-font rounded-0 ">Delete</Button>
                </Col>
            
            </Row>
            
            )
        })}
       
        </>
    )
}

export default MainDisplay
