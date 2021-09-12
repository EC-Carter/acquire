
import targetData from '../data/targetData.json';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setInital } from '../redux/actions/actions'

const MainDispalay = () => {
    const dispatch = useDispatch();

//dispatch the action inside useEffect
    useEffect(() => {
        dispatch(setInital(targetData))
        
    }, [])

//get the data from global state
    const targets = useSelector(state => state.targets);


//display the data on the page using global state

    return (
        <>
        <div>
        {targets.map(target => {
            return <h3>{target.info.companyName}</h3>
        })}
        </div>
        </>
    )
}

export default MainDispalay
