import React from 'react'
import Header from "./Header_bak";
import Footer from "./Footer_BAK";

const Layout = (props) => (
    <>
        <div>
            <Header/>
        </div>
        <div>
            {props.children}
        </div>
        <div>
            <Footer/>
        </div>
    </>

);

export default Layout