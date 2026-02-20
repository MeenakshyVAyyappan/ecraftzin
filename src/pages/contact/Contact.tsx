import React from 'react';
import HeaderThree from '../../sections/home-three/HeaderThree';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterThree from '../../sections/home-three/FooterThree';
import StrickyHeaderThree from '../../sections/home-three/StrickyHeaderThree';
import ContactMain from '../../sections/contact/ContactMain';

const Contact: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderThree />
            <BannerCommon title='Contact' subtitle='Us' breadcrumb='Contact Us' imageSrc="/breadcrumbimage.png" />
            <ContactMain />
            <FooterThree />
            <StrickyHeaderThree />
        </div>
    );
};

export default Contact;