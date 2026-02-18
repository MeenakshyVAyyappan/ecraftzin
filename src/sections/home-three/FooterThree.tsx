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
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={{ fill: 'currentColor' }}><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                                                    </Link>
                                                    <Link to="https://www.linkedin.com/in/ecraftz-info-solutions-513889194/">
                                                        <i className="icon-linkedin"></i>
                                                    </Link>
                                                    <Link to="https://www.instagram.com/ecraftz_info_solutions/">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{ fill: 'currentColor' }}><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
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
