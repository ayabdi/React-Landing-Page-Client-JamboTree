import React , {useState} from "react";
import './css/Navbar.css'
import Logo from "../assets/logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {

// navBarToggle.addEventListener("click", function() {
//   mainNav.classList.toggle("active");
// });
const [active, setActive] = useState(false)
const toggleactive = () => {
  setActive(true)
}
const toggledeactive = () => {
  setActive(false)
}
  return (
    <div>
      <nav className="navbar">
        <div className = 'container'>
        <span className="navbar-toggle" >
          <FontAwesomeIcon icon = {faBars} onClick = {active? toggledeactive: toggleactive}/>
        </span>
        <a href="#" className="logo">
        <img src={Logo} alt="logo" style ={{height: '54px' , width: '74px'}}/>
        </a>
        <ul className={active ? 'main-nav active' : "main-nav"} id="js-menu" >
          <li>
            <a href="#" className="nav-links">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              Contact Us
            </a>
          </li>
          {/* <li>
            <a href="#" className="nav-links">
              Blog
            </a>
          </li> */}
        </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
