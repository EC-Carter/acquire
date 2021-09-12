import React from 'react';
import Footer from './Footer';
import Header from './Header';


const BaseLayout = (props) => {
    return (
        <>
        <Header/>
        {props.children}
        <Footer/>
        </>
    )
}

export default BaseLayout
