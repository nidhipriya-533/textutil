import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    // bg-body-tertiary ya fir navbar-light v kr shkte h 
    <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
        {/* props is a property use to pass the components */}
      <Link className="navbar-brand" to="/">{props.title}</Link>    
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
          </li>
          <li className="nav-item">
            {/* Page Reload n ho page ishiliye hmlog use krte h....'a' ke jagah 'Link' and 'href' ke jagah 'to' */}
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckfault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode </label>
        </div>
      </div>
    </div>
  </nav>
  )
}

 Navbar.propTypes = {
     title: PropTypes.string.isRequired,
     aboutText: PropTypes.string.isRequired
 }

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About text here'
};