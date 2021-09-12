import React from 'react'
import targetData from '../data/targetData.json';

const MainDispalay = () => {

console.log(targetData[0].info.companyName)

    return (
        <>
        <div>
        {targetData.map(target => {
            return <h3>{target.info.companyName}</h3>
        })}
        </div>
        </>
    )
}

export default MainDispalay
