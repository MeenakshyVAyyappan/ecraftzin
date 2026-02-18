import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion"
import welcomeImg1 from '../../assets/images/resources/welcome-one-1-1.jpg';
import welcomeImg2 from '../../assets/images/resources/welcome-one-1-2.jpg';
import welcomeImg3 from '../../assets/images/resources/welcome-one-1-3.jpg';
import welcomeImg4 from '../../assets/images/resources/welcome-one-1-4.jpg';
import welcomeImg5 from '../../assets/images/resources/welcome-one-1-5.jpg';
import welcomeImg6 from '../../assets/images/resources/welcome-one-1-6.jpg';
import welcomeImg7 from '../../assets/images/resources/welcome-one-1-7.jpg';
import welocmeImg8 from '../../assets/images/resources/welcome-one-1-8.jpg';
import welcomeImg9 from '../../assets/images/resources/welcome-one-1-9.jpg';
import TextAnimation from '../../components/elements/TextAnimation';

type WelcomeItem = {
    id: number;
    img: string;
    iconClass: string; // existing icon font class
    title: string;
    link: string;
};

const items: WelcomeItem[] = [
    {
        id: 1,
        img: welcomeImg1,
        iconClass: 'icon-software-development',
        title: 'Software Solutions',
        link: '/services',

    },
    {
        id: 2,
        img: welcomeImg2,
        iconClass: 'icon-growth',
        title: 'Digital Marketing',
        link: '/services',

    },
    {
        id: 3,
        img: welcomeImg3,
        iconClass: 'icon-computer',
        title: 'Website Designing',
        link: '/services',

    },
    {
        id: 4,
        img: welcomeImg4,
        iconClass: 'icon-technology-1',
        title: 'Mobile Application Services',
        link: '/services',

    },
    {
        id: 5,
        img: welcomeImg5,
        iconClass: 'icon-search-1',
        title: 'Search Engine optimization',
        link: '/services',

    },
    {
        id: 6,
        img: welcomeImg6,
        iconClass: 'icon-play-buttton',
        title: 'Video Production',
        link: '/services',

    },
    {
        id: 7,
        img: welcomeImg7,
        iconClass: 'icon-star-1',
        title: 'Branding',
        link: '/services',

    },
    {
        id: 8,
        img: welocmeImg8,
        iconClass: 'icon-share',
        title: 'Social Media Marketing',
        link: '/services',

    },
    {
        id: 9,
        img: welcomeImg9,
        iconClass: 'icon-connected-cloudscape',
        title: 'Cloud Service',
        link: '/services',

    }
];

const WelcomeThree: React.FC = () => {
    return (
        <section className="welcome-one">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-icon-box">
                            <div className="section-title__tagline-icon-1"></div>
                            <div className="section-title__tagline-icon-2"></div>
                        </div>
                        <span className="section-title__tagline">Welcome to Ecraftz</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='Perfect solution for your' textColor='black' />
                        <TextAnimation text='IT problems' />
                    </h2>
                </div>

                <div className="row">
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            className="col-xl-4 col-lg-6"
                            initial={{ y: item?.id % 2 === 0 ? -30 : 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut"
                            }}
                            viewport={{ amount: 0.5, once: true }}
                        >
                            <div className="welcome-one__single">
                                <div className="welcome-one__img">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className="welcome-one__content">
                                    <div className="welcome-one__icon">
                                        <span className={item.iconClass}></span>
                                    </div>
                                    <h3 className="welcome-one__title">
                                        <Link to={item.link}>{item.title}</Link>
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WelcomeThree;
