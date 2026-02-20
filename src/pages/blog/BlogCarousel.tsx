import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import HeaderThree from '../../sections/home-three/HeaderThree';
import FooterThree from '../../sections/home-three/FooterThree';
import StrickyHeaderThree from '../../sections/home-three/StrickyHeaderThree';
import BlogCarouselMain from '../../sections/blog/BlogCarouselMain';

const BlogCarousel: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderThree />
            <BannerCommon title='Our' subtitle='Blogs' breadcrumb='Our Blogs' imageSrc="/breadcrumbimage.png" />
            <BlogCarouselMain />
            <FooterThree />
            <StrickyHeaderThree />
        </div>
    );
};

export default BlogCarousel;