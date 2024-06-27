import React from 'react'
import Header from './Header'
import './Style.css'
import Footer from './Footer'
const DefaultLayout = (props) => {
  return (
    <div>
        <div className="header">
        <Header></Header>
        </div>
 
        <div className="mainContent">
            {props.children}
        </div>

        <div className="footer">
        <Footer></Footer>
        </div>

    </div>
  )
}

export default DefaultLayout;