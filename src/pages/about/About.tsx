import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import HeaderThree from '../../sections/home-three/HeaderThree';
import FooterThree from '../../sections/home-three/FooterThree';
import StrickyHeaderThree from '../../sections/home-three/StrickyHeaderThree';
import AboutUsThree from '../../sections/about/AboutUsThree';
import WhyChooseA from '../../sections/about/WhyChooseA';
import CounterA from '../../sections/about/CounterA';
import TestimonialCarouselMain from '../../sections/testimonial/TestimonialCarouselMain';
import AwardsA from '../../sections/about/AwardsA';


const About: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderThree />
            <BannerCommon title='About' subtitle='Us' breadcrumb='About Us' videoSrc="/breadcrumbvideo.mp4" />
            <AboutUsThree />
            <WhyChooseA />
            <CounterA />
            <TestimonialCarouselMain className="pb-0" />
            <AwardsA />
            <FooterThree />
            <StrickyHeaderThree />
        </div>
    );
};

export default About;