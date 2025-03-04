import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* Logo section with description */}
                    <div className="col-md-4 text-center">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="Shoose Logo"
                                style={{ width: '150px', height: 'auto' }}
                            />
                        </Link>
                        <p className="logo-description">
                            Your one-stop shop for the latest and trendiest footwear. 
                            Step into style and comfort with Shoose!
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 text-center">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/product">Products</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><Link to="/checkout">Checkout</Link></li>
                        </ul>
                    </div>

                    {/* Social Media centered */}
                    <div className="col-md-4 text-center">
                        <h5>Follow Us</h5>
                        <div className="social-icons">
                            <a href="#"><FaFacebook size={30} color="#87cefa" /></a>
                            <a href="#"><FaInstagram size={30} color="#87cefa" /></a>
                            <a href="#"><FaTwitter size={30} color="#87cefa" /></a>
                            <a href="#"><FaEnvelope size={30} color="#87cefa" /></a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Copyright */}
            <div className="copyright">
                <p>© 2025 Shoose. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
