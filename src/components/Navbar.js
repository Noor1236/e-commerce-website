import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-darkk py-3 shadow-sm" style={{ height: '80px' }}>
            <div className="container">
                <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
                    <img
                        src={logo}
                        alt="Shoose Logo"
                        style={{ width: '130px', height: '130px', marginRight: '10px' }}
                    />

                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Products
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item text-light" to="/product/sneakers">Sneakers</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item text-light" to="/product/formal-shoes">Formal</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item text-light" to="/product/sports-shoes">Sports</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item text-light" to="/product/casual-shoes">Casual</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link cart-icon" to="/cart">
                                🛒 Cart
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="btn btn-outline-primary ms-3" to="/checkout">
                                Checkout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
