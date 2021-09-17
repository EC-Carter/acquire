

import { useDispatch, useSelector } from 'react-redux';
import { useHistory,Link } from 'react-router-dom';

import { deleteTarget } from '../redux/actions/actions';
import { setIsEdit } from '../redux/actions/actions';


import { Button,Row,Col } from 'react-bootstrap';
import '../styles/targetDisplay.css'

import  AddEditForm from './AddEditForm';


const TargetDisplay = () => {

    //const targets = useSelector(state => state.targets);
    const isEdit = useSelector(state => state.isEdit);
    const targetToUpdate = useSelector(state => state.targetToUpdate);

    
    const history = useHistory();
    const dispatch = useDispatch();  
    let company = targetToUpdate;


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

            <Row md={5} className="mt-2 border-bottom border-danger mx-5 my-2 p-2 d-flex justify-content-center">
            <h3 className="text-center" >{company.info.companyName}</h3>
            </Row>

            <Row className="mt-2 bg-tan mx-5 my-2 p-2">
            <Col className="d-flex align-items-center justify-content-center">
            <Button onClick={()=>handleDelete(company.id)} variant="outline-dark" className="mont-font rounded-0 ms-2">Delete</Button>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
            <Button onClick={()=>handleEdit(company.id)} variant="outline-dark" className="mont-font rounded-0 ms-2">Edit</Button>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
            <Button as={Link} to="/maindisplay" variant="outline-dark" className="mont-font rounded-0 ms-2">Back to main</Button>
            </Col>
            </Row>

            <Row className=" mt-2 mx-5 my-2 p-2">
            <Col className="d-flex align-items-center justify-content-center">
            <h6>{`Status: ${company.status}`}</h6>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
            <h6>{`In House Contact: ${company.inHouseContact}`}</h6>
            </Col>
            </Row>

            <Row className="mt-2 bg-tan mx-5 my-2 p-2">
            
                <Col sm={12} md={true}>
                <p className="p-0 text-center">{` CEO : ${company.info.ceo}`}</p>
                <p className="p-0 text-center">{` Founded : ${company.info.founded}`}</p>
                </Col>
                <Col sm={12} md={true}>
                <p className="p-0 text-center">{` Industry : ${company.info.industry}`}</p>
                <p className="p-0 text-center">{` Located : ${company.info.location.city}, ${company.info.location.state}`}</p>
                </Col>
            
            </Row>

            <h5 className="text-center p-3">Company Contacts</h5>
        <Row className="mt-2 bg-tan mx-5 my-2 p-2">
            {company.keyContacts.map((contact,index) =>{
                return (
                    <Col sm={12} md={true} key={index}>
                    <h6 className="">{contact.name}</h6>
                    <div  className=" border-top border-danger mt-1">

                    
                    <p>{`Role: ${contact.role}`}</p>
                    <p>{`Phone: ${contact.phone}`}</p>
                    <p>{`Email: ${contact.email}`}</p>
                    </div>
                    </Col>
                )
            })}
            
        </Row>

            <h5 className="text-center p-3">Financial Information</h5>
        <Row className="mt-2 bg-tan mx-5 my-2 mb-5 p-2">
            {company.financialRecords.map((record,index) => {
                return(
                <Col sm={12} md={true} key={index}>
                <h6>{record.year}</h6>
                <div className="border-top border-danger mt-1">

                <ul>
                <li>{`Revenue: $${record.revenue}`}</li>
                <li>{`Gross Profit: $${record.grossProfit}`}</li>
                <li>{`Total Expenses: $${record.totalExpenses}`}</li>
                <li>{`Pre-tax earnings: $${record.preTaxEarnings}`}</li>
                <li>{`Taxes: $${record.taxes}`}</li>
                <li>{`Net Earnings: $${record.netEarnings}`}</li>
                </ul>
                </div>
                </Col>
                )

            })}
        </Row>

                
        

        </div> }

        
        </>
    )
}

export default TargetDisplay
