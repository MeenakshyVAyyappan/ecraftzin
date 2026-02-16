import React, { useContext } from 'react';
import { Link } from 'react-router';

import ecraftzinlogo from '../../../public/ecraftzinlogo.png';
import FinrisContext from '../../components/context/FinrisContext';
import ManuList from '../common/ManuList';

const HeaderThree: React.FC = () => {
    const context = useContext(FinrisContext);
    if (!context) throw new Error("Context Null");
    const { setIsMobile} = context;
    return (
        <header className="main-header-two">
            <div className="main-menu-two__top">
                <div className="main-menu-two__top-inner">
                    <ul className="list-unstyled main-menu-two__contact-list">
                        <li>
                            <div className="icon">
                                <i className="icon-phone"></i>
                            </div>
                            <div className="text">
                                <p><a href="tel:+917994971119">+91 7994 971 119</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-envelope"></i>
                            </div>
                            <div className="text">
                                <p><a href="mailto:info@ecraftz.in">info@ecraftz.in</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-pin"></i>
                            </div>
                            <div className="text">
                                <p>Ecraftz, 2nd Floor, Above Federal Bank, Nv Tower Kallai Road<br /> calicut India</p>
                            </div>
                        </li>
                    </ul>
                    <div className="main-menu-two__top-right">
                        <div className="main-menu-two__top-time">
                            <div className="main-menu-two__top-time-icon">
                                <span className="icon-time"></span>
                            </div>
                            <p className="main-menu-two__top-text">Mon - Sat: 09:00 - 06:00</p>
                        </div>
                        <div className="main-menu-two__social">
                            <a href="https://x.com/i/flow/login?redirect_after_login=%2FEcraftz1"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.facebook.com/ecraftzinfosolutions"><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/ecraftz_info_solutions/"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/ecraftz-info-solutions-513889194/"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="main-menu main-menu-two">
                <div className="main-menu-two__wrapper">
                    <div className="main-menu-two__wrapper-inner">
                        <div className="main-menu-two__left">
                            <div className="main-menu-two__logo">
                                <Link to="/">
                                    <img src={ecraftzinlogo} alt="Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="main-menu-two__main-menu-box">
                            <a href="#" className="mobile-nav__toggler" onClick={() => setIsMobile((pre) => !pre)}><i className="fa fa-bars"></i></a>
                            <ManuList />
                        </div>
                        <div className="main-menu-two__right">
                            <div className="main-menu-two__call">
                                <div className="main-menu-two__call-icon">
                                    <i className="icon-phone"></i>
                                </div>
                            </div>
                            <div className="main-menu-two__btn-box">
                                <Link to="/contact" className="thm-btn thm-btn-two main-menu-two__btn">
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderThree;