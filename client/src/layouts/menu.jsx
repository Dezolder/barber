import React from "react-dom";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <>

            <div className="d-flex justify-content-center">
                <ul className="nav flex-column justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/select-master">Select Master</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/select-time">Select Time</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/select-service">Select Service</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create-record">Continue</Link>
                    </li>
                </ul>
            </div>

        </>);
};

export default Menu;
