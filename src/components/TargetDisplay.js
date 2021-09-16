import React, { useEffect,useState }from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams,useHistory,Link } from 'react-router-dom';

import { deleteTarget } from '../redux/actions/actions';
import { setIsEdit } from '../redux/actions/actions';


import { Button,Row,Col } from 'react-bootstrap';

import  AddEditForm from './AddEditForm';


const TargetDisplay = () => {

    const targets = useSelector(state => state.targets);
    const isEdit = useSelector(state => state.isEdit);
    const targetToUpdate = useSelector(state => state.targetToUpdate);

    //const { name } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();  
    let company = targetToUpdate;

    
    console.log(targets)
    console.log(company)
            
    
    const handleDelete = id => {
        dispatch(deleteTarget(id))
        history.push('/maindisplay')

    }

    const handleEdit = id => {
        dispatch(setIsEdit(true))
        

    }


    

    return (
        <>
        {isEdit ? <AddEditForm formLabel={`Edit ${company.info.companyName}`} buttonText={"Update"} company={company}/>:
        <div className="mont-font">
            <Row className="mt-2 bg-tan mx-5 my-2 p-2">
            <Col md={5} className="d-flex align-items-center justify-content-center">
            <h3 style={{display:"inline-block"}}>{company.info.companyName}</h3>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
            <Button className="ms-2" onClick={()=>handleDelete(company.id)} variant="outline-dark" className="mont-font rounded-0 ">Delete</Button>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
            <Button className="ms-2" onClick={()=>handleEdit(company.id)} variant="outline-dark" className="mont-font rounded-0 ">Edit</Button>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
            <Button className="ms-2" as={Link} to="/maindisplay" variant="outline-dark" className="mont-font rounded-0 ">Back to main</Button>
            </Col>
            </Row>
            <Row>
            <Col className="d-flex align-items-center justify-content-center">
            <h6>{`Status: ${company.status}`}</h6>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
            <h6>{`In House Contact: ${company.inHouseContact}`}</h6>
            </Col>
            </Row>
            <ul>
                <li>{` CEO : ${company.info.ceo}`}</li>
                <li>{` Founded : ${company.info.founded}`}</li>
                <li>{` Industry : ${company.info.industry}`}</li>
                <li>{` Located : ${company.info.location.city}, ${company.info.location.state}`}</li>
            </ul>

            <h5>Company Contacts</h5>
            {company.keyContacts.map(contact =>{
                return (
                    <>
                    <h6>{contact.name}</h6>

                    <ul>
                    <li>{`Role: ${contact.role}`}</li>
                    <li>{`Phone: ${contact.phone}`}</li>
                    <li>{`Email: ${contact.email}`}</li>
                    </ul>
                    </>
                )
            })}

            <h5>Financial Information</h5>
            {company.financialRecords.map(record => {
                return(
                <>
                <h6>{record.year}</h6>

                <ul>
                <li>{`Revenue: ${record.revenue}`}</li>
                <li>{`Gross Profit: ${record.grossProfit}`}</li>
                <li>{`Total Expenses: ${record.totalExpenses}`}</li>
                <li>{`Pre-tax earnings: ${record.preTaxEarnings}`}</li>
                <li>{`Taxes: ${record.taxes}`}</li>
                <li>{`Net Earnings: ${record.netEarnings}`}</li>
                </ul>
                </>
                )

            })}

                
        

        </div> }

        
        </>
    )
}

export default TargetDisplay
