import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import HeaderThree from '../../sections/home-three/HeaderThree';
import FooterThree from '../../sections/home-three/FooterThree';
import StrickyHeaderThree from '../../sections/home-three/StrickyHeaderThree';
import BlogDetailsMain from '../../sections/blog/BlogDetailsMain';
// import BlogDetailsCarousel from '../../sections/blog/BlogDetailsCarousel'; 

const BlogDetails: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderThree />
            <BannerCommon title='Blog' subtitle='Details' breadcrumb='Blog Details' />
            <BlogDetailsMain />
            {/* <BlogDetailsCarousel /> */}
            <FooterThree />
            <StrickyHeaderThree />
        </div>
    );
};

export default BlogDetails;