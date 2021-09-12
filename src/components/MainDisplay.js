
import targetData from '../data/targetData.json';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

import { setInital } from '../redux/actions/actions'

const MainDispalay = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setInital(targetData))
        
    }, [])

    const targets = useSelector(state => state.targets);

    return (
        <>
        <div>
        {targets.map((target,index) => {
            return (
            <>
                <p key={index}>{target.info.companyName}</p>
                <Button as={Link} to={`/detail/${target.info.companyName}`}>More</Button>
            </>
            )
        })}
        </div>
        </>
    )
}

export default MainDispalay
