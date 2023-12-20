import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand text-danger fw-bold">Vikram</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="education">Education</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="technology">Technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="projects">Projects</Link>
                        </li>
                    </ul>
                
                </div>
            </div>
        </nav>
    )
}

export default NavBar
