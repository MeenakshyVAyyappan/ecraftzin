import React from 'react';
import HeaderThree from '../../sections/home-three/HeaderThree';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterThree from '../../sections/home-three/FooterThree';
import StrickyHeaderThree from '../../sections/home-three/StrickyHeaderThree';
import WhyChooseInner from '../../sections/service/WhyChooseInner';
import ContactInner from '../../sections/service/ContactInner';
import FaqInner from '../../sections/service/FaqInner';

import ServiceThree from '../../sections/home-three/ServiceThree';

const Service: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderThree />
            <BannerCommon title='Our' subtitle='Services' breadcrumb='Our Services' imageSrc="/breadcrumbimage.png" />
            <ServiceThree />
            <WhyChooseInner />
            <ContactInner />
            <FaqInner />
            <FooterThree />
            <StrickyHeaderThree />
        </div>
    );
};

export default Service;