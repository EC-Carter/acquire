import React from 'react';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <>
        <p>Text here describing app</p>
        <Button as={Link} to="/maindisplay">Get started</Button>
        </>
    )
}

export default Landing
