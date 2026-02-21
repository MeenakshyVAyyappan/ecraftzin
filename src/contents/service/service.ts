
// service tow
import serviceIcon1 from '../../assets/images/icon/services-two-icon-1.png';
import serviceIcon2 from '../../assets/images/icon/services-two-icon-2.png';
import serviceIcon3 from '../../assets/images/icon/services-two-icon-3.png';
import serviceIcon4 from '../../assets/images/icon/services-two-icon-4.png';
import type { ServiceOneItem, ServicesTow } from './type';
import productDesignIcon from '../../assets/images/icon/product-design.png';
import digitalMarketingIcon from '../../assets/images/icon/digital-marketing.png';
import userResearchIcon from '../../assets/images/icon/user-reaserach.png';
import webDesignIcon from '../../assets/images/icon/web-design.png';



export const servicesTow: ServicesTow[] = [
    {
        id: 1,
        icon: serviceIcon1,
        title: 'Product Design & Branding',
        link: '/digital-marketing',
        description:
            "We create innovative product designs and develop cohesive branding that captures your audience's attention.",
    },
    {
        id: 2,
        icon: serviceIcon2,
        title: 'Web Design & Development',
        link: '/web-design-development',
        description:
            'We craft user-friendly websites that combine visually appealing design with powerful functionality.',
    },
    {
        id: 3,
        icon: serviceIcon3,
        title: 'Content Creation & Video Marketing',
        link: '/search-engine-optimization',
        description:
            'We produce compelling content and dynamic video marketing campaigns that engage and convert.',
    },
    {
        id: 4,
        icon: serviceIcon4,
        title: 'Digital Marketing & Ads Campaign',
        link: '/digital-marketing',
        description:
            'We design targeted digital marketing strategies and ad campaigns that deliver measurable results.',
    },
];


//service three
export const servicesThree: ServicesTow[] = [
    {
        id: 1,
        icon: 'icon-promotion',
        title: 'Digital Marketing',
        description:
            'Our digital marketing strategies are designed to strengthen your online presence, increase brand visibility, and convert audiences into customers through targeted campaigns, SEO, content, and social media marketing., and social media.',
        link: '/services',
    },
    {
        id: 2,
        icon: 'icon-software-development',
        title: 'Software Solutions',
        description:
            'We develop custom software solutions that simplify complex processes, improve operational efficiency, and reduce costs. Our scalable systems are built to adapt to your business goals using secure and modern technologies.',
        link: '/services',
    },
    {
        id: 3,
        icon: 'icon-computer',
        title: 'Website Design Services',
        description:
            'Ecraftz creates visually compelling, responsive, and user-focused websites that represent your brand effectively and deliver seamless user experiences across all devices.',
        link: '/services',
    },
    {
        id: 4,
        icon: 'icon-technology-1',
        title: 'Mobile Application Services',
        description:
            'We design and develop intuitive mobile applications that enhance user engagement, streamline functionality, and provide smooth performance across Android and iOS platforms.',
        link: '/services',
    },
    {
        id: 5,
        icon: 'icon-search-1',
        title: 'Search Engine Optimization',
        description:
            'Our SEO services use data-driven research and ethical optimization techniques to improve search rankings, drive organic traffic, and ensure long-term online visibility.',
        link: '/services',
    },
    {
        id: 6,
        icon: 'icon-play-buttton',
        title: 'Video Production',
        description:
            'From concept to final cut, our video production team crafts engaging visual content including promotional videos, brand stories, demos, and digital ads that captivate and convert.',
        link: '/services',
    },
    {
        id: 7,
        icon: 'icon-star-1',
        title: 'Branding',
        description:
            'We build strong brand identities through strategic storytelling, thoughtful design, and consistent messaging—helping your brand stand out, connect emotionally, and leave a lasting impression.',
        link: '/services',
    },
    {
      id:8,
      icon:'icon-share',
      title:'Sociel Media Marketing',
      description:'Ecraftz delivers result-focused social media marketing through creative content, platform-specific strategies, and expert management to boost engagement and drive meaningful conversions.',
      link:'/services',
    },
    {
        id: 9,
        icon: 'icon-connected-cloudscape',
        title: 'Cloud Services',
        description:
            'Ecraftzs cloud services enhance efficiency and security with tailored solutions, offering seamless collaboration, data backup, and disaster recovery.',
        link: '/services',
    },
];




export const servicesOneData: ServiceOneItem[] = [
    {
        id: 1,
        icon: productDesignIcon,
        title: 'Product Design & Branding',
        link: '/digital-marketing',
    },
    {
        id: 2,
        icon: digitalMarketingIcon,
        title: 'Digital Marketing & ADS Camping',
        link: '/digital-marketing',
    },
    {
        id: 3,
        icon: userResearchIcon,
        title: 'Ui/UX Design & User Research',
        link: '/web-design-development',
    },
    {
        id: 4,
        icon: webDesignIcon,
        title: 'Website Design & Development',
        link: '/web-design-development',
    }
];
