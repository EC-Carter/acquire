import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../../styles/headerFooter.css';
import { Container } from 'react-bootstrap'


const BaseLayout = (props) => {
    return (
        <Container fluid className="base-height">
        <Header/>
        <main className="main">
        {props.children}
        </main>
        <Footer/>
        </Container>
    )
}

export default BaseLayout
