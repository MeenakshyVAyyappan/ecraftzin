import React from 'react';
import HeaderThree from '../../sections/home-three/HeaderThree';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterThree from '../../sections/home-three/FooterThree';
import StrickyHeaderThree from '../../sections/home-three/StrickyHeaderThree';
import TeamMain from '../../sections/team/TeamMain';

const Team: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderThree />
            <BannerCommon title='Team' subtitle='Member' breadcrumb='Team Member' />
            <TeamMain />
            <FooterThree />
            <StrickyHeaderThree />
        </div>
    );
};

export default Team;