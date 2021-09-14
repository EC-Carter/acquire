
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

import { setInital } from '../redux/actions/actions';
import { deleteTarget } from '../redux/actions/actions'

const MainDispalay = () => {
    const dispatch = useDispatch();

    
    const targets = useSelector(state => state.targets);

    return (
        <>
        <Button as={Link} to="/addnew">Add New</Button>
        <div>
        {targets.map((target,index) => {
            return (
            <>
                <p style={{display:"inline-block",width:"245px"}} key={index}>{target.info.companyName}</p>
                <p style={{display:"inline-block",margin:"10px"}} key={index}>{target.status}</p>
                <Button as={Link} to={`/detail/${target.info.companyName}`}>More</Button>
                <Button className="ms-2" onClick={()=>dispatch(deleteTarget(target.id))}>Delete</Button>
                <br/>
            </>
            )
        })}
        </div>
        </>
    )
}

export default MainDispalay
