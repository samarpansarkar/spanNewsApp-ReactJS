import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        <a className="navbar-brand">SpaNNewS</a>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable to dark mode</label>
                        </div>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </nav>
            </div>
        )
    }
}
Navbar.propTypes = {
    mode: PropTypes.string.isRequired
}

export default Navbar
