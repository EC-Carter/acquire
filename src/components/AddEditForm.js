import React,{ useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Form,Button,Col,Row } from 'react-bootstrap';

import { stateArray } from '../data/states';
import { yearsBetween } from '../utilities/years';

import { addTarget } from '../redux/actions/actions';
import { updateTarget } from '../redux/actions/actions';
import { setIsEdit } from '../redux/actions/actions';


const AddEditForm = ({formLabel,buttonText,company}) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const isEdit = useSelector(state => state.isEdit);

    // local state for controlled inputs
    const [companyName, setCompanyName] = useState('');
    const [founded, setFounded] = useState(0);
    const [ceo, setCeo] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [industry, setIndustry] = useState('');
    const [status, setStatus] = useState('new');
    const [contactList, setContactList] = useState([{name:"",role:"",phone:"",email:""}])
    const [fl1, setFl1] = useState({
        "year":"",
        "revenue":0,
        "grossProfit":0,
        "totalExpenses":0,
        "preTaxEarnings":0,
        "taxes":0,
        "netEarnings":0
        })
    const [fl2, setFl2] = useState({
        "year":"",
        "revenue":0,
        "grossProfit":0,
        "totalExpenses":0,
        "preTaxEarnings":0,
        "taxes":0,
        "netEarnings":0
        })
    const [fl3, setFl3] = useState({
        "year":"",
        "revenue":0,
        "grossProfit":0,
        "totalExpenses":0,
        "preTaxEarnings":0,
        "taxes":0,
        "netEarnings":0
        })
    const [inHouseContact, setInHouseContact] = useState('')

        useEffect(() => {
            if(isEdit){
                setCompanyName(company.info.companyName);
                setFounded(company.info.founded);
                setCeo(company.info.ceo);
                setCity(company.info.location.city);
                setState(company.info.location.state);
                setIndustry(company.info.industry);
                setStatus(company.status);
                setContactList(company.keyContacts);
                setFl1(company.financialRecords[0]);
                setFl2(company.financialRecords[0]);
                setFl3(company.financialRecords[0]);
                setInHouseContact(company.inHouseContact);

            }
            
            
        }, [isEdit,company])

    const years = yearsBetween();
    const fiYears = yearsBetween(2015);

    const handleContactChange = (e, index) => {
        const {name,value} = e.target;
        const list = [...contactList];
            list[index][name] = value;
            setContactList(list);
    }

    const handleRemoveContact =  index => {
        const list = [...contactList];
        list.splice(index,1);
        setContactList(list);
    }

    const handleAddContact = () => {
        setContactList([...contactList,{name:"",role:"",phone:"",email:""}])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit){
            let newTarget = {
                id:company.id,
                info:{
                    companyName,
                    founded,
                    ceo,
                    location:{
                        city,
                        state
                    },
                    industry
                },
                    status,
                    keyContacts:contactList,
                    financialRecords:[
                        fl1,
                        fl2,
                        fl3
                    ],
                    inHouseContact                
            }
            dispatch(updateTarget(newTarget));
            dispatch(setIsEdit(false))
            // history.push('/maindisplay')

        } else {

        let newTarget = {
            id:uuidv4(),
            info:{
                companyName,
                founded,
                ceo,
                location:{
                    city,
                    state
                },
                industry
            },
                status,
                keyContacts:contactList,
                financialRecords:[
                    fl1,
                    fl2,
                    fl3
                ],
                inHouseContact
            
        }
        dispatch(addTarget(newTarget));
        history.push('/maindisplay')
        }
    }
    
    return (
        <>
        <h1 className="mont-font text-center mt-2">{formLabel}</h1>
        <Form onSubmit={handleSubmit} className="mont-font">
        
        <div className="bg-tan mx-5 my-2 p-2 border-start  border-danger">
        <h3 className="text-center">Company Information</h3>
            <Form.Group className="p-2" >
                <Form.Label>Company Name</Form.Label>
                <Form.Control onChange={(e) => setCompanyName(e.target.value)} value={companyName} type="text" placeholder="Company name" required className="rounded-0" />
            </Form.Group>

            <Form.Group className="p-2" >
                <Form.Label>Year Founded</Form.Label>
                <Form.Control as="select" onChange={(e) => setFounded(e.target.value)} value={founded} className="rounded-0" >
                    {years.map((year,index) => {
                        return  <option key={index} value={year}>{year}</option>
                    })}
                </Form.Control>
            </Form.Group>

            <Form.Group className="p-2" >
                <Form.Label>CEO</Form.Label>
                <Form.Control onChange={(e) => setCeo(e.target.value)} value={ceo} type="text" placeholder=" Name of CEO" className="rounded-0" />
            </Form.Group>
            <Row className="">
            <Col>
            <Form.Group className="p-2" >
                <Form.Label>City</Form.Label>
                <Form.Control onChange={(e) => setCity(e.target.value)} value={city} type="text" placeholder="City" className="rounded-0" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="p-2" >
                <Form.Label>State</Form.Label>
                <Form.Control as="select" onChange={(e) => setState(e.target.value)} value={state} className="rounded-0" >
                    {stateArray.map((state,index) => {
                        return  <option  key={index} value={state}>{state}</option>
                    })}
                </Form.Control>
            </Form.Group>
            </Col>
            </Row>
            <Form.Group className="p-2" >
                <Form.Label>Industry</Form.Label>
                <Form.Control onChange={(e) => setIndustry(e.target.value)} value={industry} type="text" placeholder="Industry" className="rounded-0" />
            </Form.Group>
            <Row>
            <Col>
            <Form.Group className="p-2" >
                <Form.Label>Status</Form.Label>
                <Form.Control as="select" onChange={(e) => setStatus(e.target.value)} value={status} className="rounded-0">
                <option value="new" defaultValue >new</option>
                <option value="pending">pending</option>
                <option value="approved">approved</option>
                <option value="declined">declined</option>
                    
                </Form.Control>    
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="p-2">
                <Form.Label>In House Contact</Form.Label>
                <Form.Control onChange={(e) => setInHouseContact(e.target.value)} value={inHouseContact} type="text" placeholder="In House Contact" className="rounded-0" />
            </Form.Group>
            </Col>
            </Row>
            </div>
            <div className="bg-tan mx-5 my-2 p-2 border-end  border-danger">
            <h3 className="text-center">Contacts</h3>

            {contactList.map((contact,index) => {
                return(
                <div key={index}>    
                <Form.Group className="p-2 mt-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" onChange={e => handleContactChange(e, index)} value={contact.name} type="text" placeholder="Contact name" className="rounded-0" />
                </Form.Group>

                <Form.Group className="p-2" >
                    <Form.Label>Role</Form.Label>
                    <Form.Control name="role" onChange={e => handleContactChange(e, index)} value={contact.role} type="text" placeholder="Role" className="rounded-0" />
                </Form.Group>

                <Form.Group className="p-2" >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control name="phone" onChange={e => handleContactChange(e, index)} value={contact.phone} type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone" className="rounded-0" />
                    <Form.Text className="text-muted">
                    000-000-0000
                    </Form.Text>
                </Form.Group>

                <Form.Group className="p-2" >
                    <Form.Label>email</Form.Label>
                    <Form.Control name="email" onChange={e => handleContactChange(e, index)} value={contact.email} type="email" placeholder="Email" className="rounded-0"/>
                    <Form.Text className="text-muted">
                    name@email.com
                    </Form.Text>
                </Form.Group>

                {contactList.length !== 1 && <Button onClick={() => handleRemoveContact(index)} variant="outline-dark" className="mont-font rounded-0 ms-2">Remove</Button>}

                {contactList.length -1 === index && <Button onClick={handleAddContact} variant="outline-dark" className="mont-font rounded-0 ms-2 ">Add</Button>}
                </div>

                )
                
            })}
            </div>
            <div className="bg-tan mx-5 my-2 p-2 border-start border-danger">
            <h3 className="text-center">Financical Information</h3>
            <div className=" border-start border-danger mt-2">
            <Form.Group className="p-2" >
                <Form.Label>Year 1</Form.Label>
                <Form.Control as="select" name="year" onChange={e=>setFl1({...fl1,[e.target.name]:e.target.value})} value={fl1.year} className="rounded-0">
                {fiYears.map((year,index) => {
                    return  <option key={index} value={year}>{year}</option>
                })}
                </Form.Control>
            </Form.Group>
            <Row>
            <Col>
            <Form.Group className="p-2" >
                <Form.Label>Revenue</Form.Label>
                <Form.Control name="revenue" type="number" onChange={e=>setFl1({...fl1,[e.target.name]:e.target.value})} value={fl1.revenue}  placeholder="Revenue" className="rounded-0"/>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="p-2" >
                <Form.Label>Gross Profit</Form.Label>
                <Form.Control name="grossProfit"  type="number" onChange={e=>setFl1({...fl1,[e.target.name]:e.target.value})} value={fl1.grossProfit}  placeholder="Gross Profit" className="rounded-0"/>
            </Form.Group>
            </Col>
            </Row>

            <Row>
            <Col>
            <Form.Group className="p-2" >
                <Form.Label>Total Expenses</Form.Label>
                <Form.Control name="totalExpenses" type="number" onChange={e=>setFl1({...fl1,[e.target.name]:e.target.value})} value={fl1.totalExpenses}  placeholder="Total Expenses" className="rounded-0"/>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="p-2" >
                <Form.Label>Pre Tax Earnings</Form.Label>
                <Form.Control name="preTaxEarnings" type="number" onChange={e=>setFl1({...fl1,[e.target.name]:e.target.value})} value={fl1.preTaxEarnings}  placeholder="Pre-tax earnings" className="rounded-0"/>
            </Form.Group>
            </Col>
            </Row>

            <Row>
            <Col>
            <Form.Group className="p-2" >
                <Form.Label>Taxes</Form.Label>
                <Form.Control name="taxes" type="number" onChange={e=>setFl1({...fl1,[e.target.name]:e.target.value})} value={fl1.taxes}  placeholder="Taxes" className="rounded-0"/>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="p-2" >
                <Form.Label>Net Earnings</Form.Label>
                <Form.Control name="netEarnings" type="number" onChange={e=>setFl1({...fl1,[e.target.name]:e.target.value})} value={fl1.netEarnings}  placeholder="Net Earnings" className="rounded-0"/>
            </Form.Group>
            </Col>
            </Row>
            </div>
            
            <div className=" border-end border-danger mt-2">
            <Form.Group className="p-2" >
                <Form.Label>Year 2</Form.Label>
                <Form.Control as="select" name="year" onChange={e=>setFl2({...fl2,[e.target.name]:e.target.value})} value={fl2.year} className="rounded-0">
                {fiYears.map((year,index) => {
                    return  <option key={index} value={year}>{year}</option>
                })}
                </Form.Control>
            </Form.Group>

            <Row>
            <Col>
            <Form.Group className="p-2" >
                <Form.Label>Revenue</Form.Label>
                <Form.Control name="revenue" type="number" onChange={e=>setFl2({...fl2,[e.target.name]:e.target.value})} value={fl2.revenue}  placeholder="Revenue" className="rounded-0"/>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="p-2" >
                <Form.Label>Gross Profit</Form.Label>
                <Form.Control name="grossProfit" type="number" onChange={e=>setFl2({...fl2,[e.target.name]:e.target.value})} value={fl2.grossProfit}  placeholder="Gross Profit" className="rounded-0"/>
            </Form.Group>
            </Col>
            </Row>

            <Row>
            <Col>
            <Form.Group className="p-2" >
                <Form.Label>Total Expenses</Form.Label>
                <Form.Control name="totalExpenses" type="number" onChange={e=>setFl2({...fl2,[e.target.name]:e.target.value})} value={fl2.totalExpenses}  placeholder="Total Expenses" className="rounded-0" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="p-2" >
                <Form.Label>Pre Tax Earnings</Form.Label>
                <Form.Control name="preTaxEarnings" type="number" onChange={e=>setFl2({...fl2,[e.target.name]:e.target.value})} value={fl2.preTaxEarnings}  placeholder="Pre-tax earnings" className="rounded-0"/>
            </Form.Group>
            </Col>
            </Row>

            <Row>
            <Col>
            <Form.Group className="p-2" >
                <Form.Label>Taxes</Form.Label>
                <Form.Control name="taxes" onChange={e=>setFl2({...fl2,[e.target.name]:e.target.value})} value={fl2.taxes}  placeholder="Taxes" type="number" className="rounded-0"/>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="p-2" >
                <Form.Label>Net Earnings</Form.Label>
                <Form.Control name="netEarnings" type="number" onChange={e=>setFl2({...fl2,[e.target.name]:e.target.value})} value={fl2.netEarnings}  placeholder="Net Earnings" className="rounded-0"/>
            </Form.Group>
            </Col>
            </Row>
            </div>

            <div className=" border-start border-danger mt-2">
            <Form.Group className="p-2" >
                <Form.Label>Year 3</Form.Label>
                <Form.Control as="select" name="year" onChange={e=>setFl3({...fl3,[e.target.name]:e.target.value})} value={fl3.year} className="rounded-0">
                {fiYears.map((year,index) => {
                    return  <option key={index} value={year}>{year}</option>
                })}
                </Form.Control>
            </Form.Group>

            <Row>
            <Col>
            <Form.Group className="p-2" >
                <Form.Label>Revenue</Form.Label>
                <Form.Control name="revenue"  type="number" onChange={e=>setFl3({...fl3,[e.target.name]:e.target.value})} value={fl3.revenue}  placeholder="Revenue" className="rounded-0" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="p-2" >
                <Form.Label>Gross Profit</Form.Label>
                <Form.Control name="grossProfit"  type="number" onChange={e=>setFl3({...fl3,[e.target.name]:e.target.value})} value={fl3.grossProfit}  placeholder="Gross Profit" className="rounded-0"/>
            </Form.Group>
            </Col>
            </Row>

            <Row>
            <Col>
            <Form.Group className="p-2" >
                <Form.Label>Total Expenses</Form.Label>
                <Form.Control name="totalExpenses"  type="number" onChange={e=>setFl3({...fl3,[e.target.name]:e.target.value})} value={fl3.totalExpenses}  placeholder="Total Expenses" className="rounded-0" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="p-2" >
                <Form.Label>Pre Tax Earnings</Form.Label>
                <Form.Control name="preTaxEarnings" type="number" onChange={e=>setFl3({...fl3,[e.target.name]:e.target.value})} value={fl3.preTaxEarnings}  placeholder="Pre-tax earnings" className="rounded-0"/>
            </Form.Group>
            </Col>
            </Row>

            <Row>
            <Col>
            <Form.Group className="p-2" >
                <Form.Label>Taxes</Form.Label>
                <Form.Control name="taxes" type="number" onChange={e=>setFl3({...fl3,[e.target.name]:e.target.value})} value={fl3.taxes}  placeholder="Taxes" className="rounded-0" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="p-2" >
                <Form.Label>Net Earnings</Form.Label>
                <Form.Control name="netEarnings" type="number" onChange={e=>setFl3({...fl3,[e.target.name]:e.target.value})} value={fl3.netEarnings}  placeholder="Net Earnings" className="rounded-0"/>
            </Form.Group>
            </Col>
            </Row>
            </div>
            </div>
            <Row className=" mx-5 my-2 p-2">
            <Button type="submit" onSubmit={handleSubmit} variant="outline-dark" className="mont-font rounded-0 ">{buttonText}</Button>
            </Row>
        </Form>        
        </>
    )
}

export default AddEditForm
