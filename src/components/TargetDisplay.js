import React, { useEffect,useState }from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const TargetDisplay = () => {
    const targets = useSelector(state => state.targets)
    const { name } = useParams();
    
    let companyArr = targets.filter(target => target.info.companyName === name)
    let company = companyArr[0];
    
    

    console.log(company)

    return (
        <>
        <div>
            <h3>{company.info.companyName}</h3>
            <h6>{`Status: ${company.status}`}</h6>
            <h6>{`In House Contact: ${company.inHouseContact}`}</h6>
            <ul>
                <li>{` CEO : ${company.info.ceo}`}</li>
                <li>{` Founded : ${company.info.founded}`}</li>
                <li>{` Industry : ${company.info.industy}`}</li>
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
           
                
        

        </div> 
        </>
    )
}

export default TargetDisplay
