import React from 'react';
import { Link, useLocation } from 'react-router';

const ManuList: React.FC = () => {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <ul className="main-menu__list">
            <li className={pathname === "/index3" || pathname === "/" ? "current" : ""}>
                <Link to="/index3">Home</Link>
            </li>
            <li className={pathname === "/about" ? "current" : ""}>
                <Link to="/about">About Us</Link>
            </li>
            <li className={pathname === "/team" ? "current" : ""}>
                <Link to="/team">Team</Link>
            </li>
            <li className={pathname === "/services" ? "current" : ""}>
                <Link to="/services">Services</Link>
            </li>
            <li className={pathname === "/blog-carousel" ? "current" : ""}>
                <Link to="/blog-carousel">Blog</Link>
            </li>
            <li className={pathname === "/contact" ? "current" : ""}>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    );
}
export default ManuList;