import React from "react";
import axios from "axios";

import {Link, useNavigate} from "react-router-dom";


function Nav() {
    const navigate = useNavigate()
    const handleLogout = () => {
        window.localStorage.clear()
        axios.get('http://localhost:3001/auth/logout')
        .then (result =>navigate('/'))
        .catch(err => console.log(err))
    }
    return (
<nav className="navbar-expand navbar-dark bg-dark">
    <div className="container">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">TODO INFORMATION</Link>
            <ul className="navbar-nav ms-2 me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/create" aria-current="page">
                        Create
                    </Link>
                </li>

                
                
            </ul>
            {
                window.localStorage.length ?
                <button className="btn btn-outline-light" onClick={handleLogout}>
                    Logout
                </button>
            :
            <button className="btn btn-outline-light">
                <Link to="/register" className="text-decoration-none">
                Login/Register
                </Link>
           
            </button>
}
        </div>
    </div>
</nav>
    );
}
export default Nav