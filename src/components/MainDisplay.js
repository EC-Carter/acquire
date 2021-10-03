
import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link} from 'react-router-dom';
import { Button, Row, Col, ButtonGroup, DropdownButton, Dropdown, InputGroup, Form } from 'react-bootstrap'
import { deleteTarget } from '../redux/actions/actions';
import { setTargetToUpdate } from '../redux/actions/actions';

import { alpha, revAlpha, status, search } from '../utilities/sortFilter';

const MainDisplay = () => {
    const dispatch = useDispatch();
    const targets = useSelector(state => state.targets);

    const [searchTerm, setSearchTerm] = useState('');
    const [newTargets,setNewTargets] = useState(targets);
   

    // useEffect(() => {
    //     setNewTargets([...targets])
    // },[targets])


    const handleDelete = (id) => {
        dispatch(deleteTarget(id));
        
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setNewTargets(search(newTargets,searchTerm))
        setSearchTerm('')
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value)
        setNewTargets(search(newTargets,searchTerm))
        console.log( '41',searchTerm)
        console.log('42',e.target.value)
        if (e.target.value === ''){
            
            setNewTargets([...targets])
        }
    }
    
    return (
        <>
        <Row  className="mx-5 my-2 p-2">
        <Button as={Link} to="/addnew" variant="outline-dark" className="mont-font rounded-0 mt-1 " >Add New</Button>
        </Row>


        <Row className ="mx-5 my-2 p-2 ">
            <ButtonGroup vertical >
                
                <Button variant="outline-dark" className="mont-font rounded-0 mt-1 buttonGroup"
                onClick={()=>setNewTargets(alpha([...targets]))}
                >Sort A-Z</Button>
                
                <DropdownButton as={ButtonGroup} variant="outline-dark" className="mont-font rounded-0 mt-1" title="Filter by Status">
                    <Dropdown.Item eventKey="1" onClick={()=>setNewTargets(status(targets,"new"))}>new</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onClick={()=>setNewTargets(status(targets,"pending"))}>pending</Dropdown.Item>
                    <Dropdown.Item eventKey="3" onClick={()=>setNewTargets(status(targets,"approved"))}>approved</Dropdown.Item>
                    <Dropdown.Item eventKey="4" onClick={()=>setNewTargets(status(targets,"declined"))}>declined</Dropdown.Item>
                    <Dropdown.Item eventKey="5" onClick={()=>setNewTargets(targets)}>all</Dropdown.Item>
                </DropdownButton>

                <Button variant="outline-dark" className="mont-font rounded-0 mt-1"
                onClick={()=>setNewTargets(revAlpha([...targets]))}
                > Sort Z-A</Button>
            </ButtonGroup>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <InputGroup className="mt-1">
                        <InputGroup.Append>
                            <Button type="submit" variant="outline-dark" className="mont-font rounded-0 ">Search</Button>
                        </InputGroup.Append>
                        <InputGroup.Append>
                            <Button variant="outline-dark" className="mont-font rounded-0"
                            onClick={()=>setNewTargets(targets)}
                            >Reset</Button>
                        </InputGroup.Append>
                        
                        <Form.Control
                        className="rounded-0 border-dark"
                        type="text"
                        value={searchTerm}
                        onChange={e => handleSearch(e) }                
                        />                        
                    </InputGroup>
                </Form.Group>
            </Form>
            
        </Row>
        
        {newTargets.map((target) => {
            return (
            
            <Row key={target.id} className="mx-5 my-2 bg-tan p-2 border-start border-end border-danger">
                <Col sm={12} md={5} className="d-flex align-items-center justify-content-center">
                <p className="mont-font text-center">{target.info.companyName}</p>
                </Col>
                <Col sm={12} md={true} className="d-flex align-items-center justify-content-center">
                <p className="mont-font text-center">{target.status}</p>
                </Col>
                <Col sm={12} md={true} className="d-flex align-items-center justify-content-center ">
                <Button as={Link} to={`/detail/${target.info.companyName}`} onClick={() => dispatch(setTargetToUpdate(target))} variant="outline-dark" className="mont-font rounded-0 mt-1">More</Button>
                </Col>
                <Col sm={12} md={true} className="d-flex align-items-center justify-content-center">
                <Button onClick={()=>handleDelete(target.id)} variant="outline-dark" className="mont-font rounded-0 mt-1">Delete</Button>
                </Col>
            
            </Row>
            
            )
        })}

        </>
    )
}

export default MainDisplay
