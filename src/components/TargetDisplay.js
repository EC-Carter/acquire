import React, { useEffect,useState }from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams,useHistory } from 'react-router-dom';

import { deleteTarget } from '../redux/actions/actions';
import { setIsEdit } from '../redux/actions/actions';


import {Button} from 'react-bootstrap';

import  AddEditForm from './AddEditForm';


const TargetDisplay = () => {

    const targets = useSelector(state => state.targets);
    const isEdit = useSelector(state => state.isEdit);

    const { name } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const [company, setCompany] = useState({});
    
    useEffect(() => {
            let companyArr = targets.filter(target => target.info.companyName === name);
            let target = {...companyArr[0]};
            console.log(target);
            setCompany(target)
    }, [targets])

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
        <div>
            <h3 style={{display:"inline-block"}}>{company.info.companyName}</h3>
            <Button className="ms-2" onClick={()=>handleDelete(company.id)}>Delete</Button>
            <Button className="ms-2" onClick={()=>handleEdit(company.id)}>Edit</Button>
            <h6>{`Status: ${company.status}`}</h6>
            <h6>{`In House Contact: ${company.inHouseContact}`}</h6>
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
