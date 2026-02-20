import React from 'react';
import BannerThree from '../../sections/home-three/BannerThree';
import HeaderThree from '../../sections/home-three/HeaderThree';
import WelcomeThree from '../../sections/home-three/WelcomeThree';
import WhyChooseThree from '../../sections/home-three/WhyChooseThree';


import ProcessThree from '../../sections/home-three/ProcessThree';
import PortfolioThree from '../../sections/home-three/PortfolioThree';
import TestimonialCarouselMain from '../../sections/testimonial/TestimonialCarouselMain';
import BrandThree from '../../sections/home-three/BrandThree';
import BlogThree from '../../sections/home-three/BlogThree';
import FooterThree from '../../sections/home-three/FooterThree';
import StrickyHeaderThree from '../../sections/home-three/StrickyHeaderThree';

const HomeThree: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderThree />
            <BannerThree />
            <WelcomeThree />
            <WhyChooseThree />
            {/* <SlidingTextThree /> */}
            <ProcessThree />
            <PortfolioThree />
            <TestimonialCarouselMain />
            <BrandThree />
            <BlogThree />
            <FooterThree />
            <StrickyHeaderThree />
        </div>
    );
};

export default HomeThree;