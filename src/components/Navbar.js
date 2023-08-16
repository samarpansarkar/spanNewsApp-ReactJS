import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand">SpaNNewS</a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
