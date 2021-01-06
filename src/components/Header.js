import React from 'react'
import './css/Header.scss'
import Logo from "../assets/logo.png";

const Header = () => {
    return (
        <>
        <header>
       
        <div className="intro">
        
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                <img src={Logo} alt="logo" className = 'header-logo' />
                  <h1>
                    WE are Jambo Tree
                    <span></span>
                  </h1>
                  <p>
                  Exporters of African exotic indigenous tree seedlings, fruits & vegetables 
                  </p> 
                  <p>&</p>
                  <p>
                  WORLDWIDE EXPORT OF MATURE BAOBAB TREES 
                  </p>
                  <button
                    href="#features"
                    className="btn btn-custom"
                  >
                    Learn More
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        </header>
            
        </>
        
    )
}

export default Header
