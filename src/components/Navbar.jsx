import React from 'react'

import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import './navbar.css'
import { CgMenuRight } from 'react-icons/cg'
import { ImCancelCircle } from 'react-icons/im'
import { GrContactInfo } from 'react-icons/gr'

import logo from '../svg/logo.svg'

export default function NavBar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} width="60" height="60" alt="logo" />Bookshelf
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/shop"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
              >
                <button className="nav-btn login-btn">Login</button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/register"
              >
                <button className="nav-btn register-btn">Register</button>
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? <CgMenuRight /> : <CgMenuRight />}></i> */}
            <i>{click ? <ImCancelCircle /> : <CgMenuRight />}</i>
          </div>
        </div>
      </nav>
    </ div>
  );
}
