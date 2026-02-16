import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion"
import footerLogo from '../../assets/images/resources/logo-2.png';
import shapeBg from '../../assets/images/shapes/site-footer-two-shape-bg.png';
import shapeStar from '../../assets/images/shapes/site-footer-two-star.png';
import { FOOTER_THREE_SERVICES, FOOTER_THREE_QUICK_LINKS } from '../../contents/footer/footer';

const FooterThree: React.FC = () => {



    return (
        <>

            {/* Footer Section */}
            <footer className="site-footer-two">
                <div
                    className="site-footer-two__shape-bg"
                    style={{ backgroundImage: `url(${shapeBg})` }}
                ></div>
                <div className="site-footer-two__shape-1 zoominout"></div>
                <div className="site-footer-two__shape-2 zoominout"></div>

                {/* Top Section */}
                <div className="site-footer-two__top">
                    <div className="site-footer-two__main-content">
                        <div className="container">
                            <div className="site-footer-two__main-content-inner">
                                <div className="site-footer-two__star rotate-me">
                                    <img src={shapeStar} alt="Star Shape" />
                                </div>

                                <div className="row justify-content-center">
                                    {/* About Widget */}
                                    <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="100ms">
                                        <div className="footer-widget-two__about">
                                            <div className="footer-widget-two__about-logo">
                                                <Link to="/">
                                                    <img src={footerLogo} alt="Footer Logo" />
                                                </Link>
                                            </div>
                                            <ul className="footer-widget-two__get-in-touch-list list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-pin"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>
                                                            Ecraftz, 2nd Floor, Above Federal Bank, <br /> Nv Tower Kallai Road
                                                            calicut India
                                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-envelope"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>
                                                            <a href="mailto:mail@ecraftz.in">mail@ecraftz.in</a>
                                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-phone"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>
                                                            <a href="tel:+917994971119">+91 7994 971 119</a>
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>

                                            <div className="site-footer-two__social-box">
                                                <p className="site-footer-two__social-title">Follow Us</p>
                                                <div className="site-footer-two__social">
                                                    <Link to="https://www.facebook.com/ecraftzinfosolutions">
                                                        <i className="icon-facebook"></i>
                                                    </Link>
                                                    <Link to="https://x.com/i/flow/login?redirect_after_login=%2FEcraftz1">
                                                        <i className="icon-twitter"></i>
                                                    </Link>
                                                    <Link to="https://www.linkedin.com/in/ecraftz-info-solutions-513889194/">
                                                        <i className="icon-linkedin"></i>
                                                    </Link>
                                                    <Link to="https://www.instagram.com/ecraftz_info_solutions/">
                                                        <i className="icon-instagram"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quick Links */}
                                    <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="200ms">
                                        <div className="footer-widget-two__quick-links">
                                            <h4 className="footer-widget-two__title">Quick Links</h4>
                                            <ul className="footer-widget-two__quick-links-list list-unstyled">
                                                {
                                                    FOOTER_THREE_QUICK_LINKS.map(Item => <motion.li
                                                        key={Item?.id}
                                                        initial={{ x: -70, opacity: 0 }}
                                                        whileInView={{ x: 0, opacity: 1 }}
                                                        transition={{
                                                            duration: 0.2 * Item?.id,
                                                            ease: "easeOut"
                                                        }}
                                                        viewport={{ amount: 0.01 }}
                                                    >
                                                        <Link to={Item?.link}>{Item?.value}</Link>
                                                    </motion.li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>



                                    {/* Services Links */}
                                    <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="400ms">
                                        <div className="footer-widget-two__services">
                                            <h4 className="footer-widget-two__title">Our Services</h4>
                                            <ul className="footer-widget-two__quick-links-list footer-widget-two__services-list list-unstyled">
                                                {
                                                    FOOTER_THREE_SERVICES.map(Item => <motion.li
                                                        key={Item?.id}
                                                        initial={{ x: -70, opacity: 0 }}
                                                        whileInView={{ x: 0, opacity: 1 }}
                                                        transition={{
                                                            duration: 0.2 * Item?.id,
                                                            ease: "easeOut"
                                                        }}
                                                        viewport={{ amount: 0.01 }}
                                                    >
                                                        <Link to={Item?.link}>{Item?.value}</Link>
                                                    </motion.li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="site-footer-two__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="site-footer-two__bottom-inner">
                                    <div className="site-footer-two__copyright">
                                        <p className="site-footer-two__copyright-text">
                                            &copy; 2026 <b></b> by{' '}
                                            <a href="https://ecraftz.in" target="_blank" rel="noreferrer">
                                                Ecraftz
                                            </a>
                                            . All Rights Reserved.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterThree;
