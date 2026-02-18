
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
            'Our digital marketing services enhance online presence, boost visibility, and convert leads into sales through branding, SEO, and social media.',
        link: '/services',
    },
    {
        id: 2,
        icon: 'icon-software-development',
        title: 'Software Solutions',
        description:
            'Our custom software solutions streamline operations, reduce costs, and enhance efficiency, helping businesses achieve their goals with advanced technology.',
        link: '/services',
    },
    {
        id: 3,
        icon: 'icon-computer',
        title: 'Website Design Services',
        description:
            'Our web development services create visually appealing, user-friendly websites that enhance your online presence and meet your business needs.',
        link: '/services',
    },
    {
        id: 4,
        icon: 'icon-technology-1',
        title: 'Mobile Application Services',
        description:
            'Our mobile app development delivers custom, user-friendly apps to engage customers, enhance functionality, and ensure a seamless experience.',
        link: '/services',
    },
    {
        id: 5,
        icon: 'icon-search-1',
        title: 'Search Engine Optimization',
        description:
            'Our SEO services boost visibility with genuine, handcrafted techniques, improving rankings and traffic through in-depth market research and analysis.',
        link: '/services',
    },
    {
        id: 6,
        icon: 'icon-play-buttton',
        title: 'Video Production',
        description:
            'Our video production services create captivating content from concept to completion, producing promotional videos, demos, and more to enhance your brands visual storytelling.',
        link: '/services',
    },
    {
        id: 7,
        icon: 'icon-star-1',
        title: 'Branding',
        description:
            'We create unique brand identities that resonate with your audience, using storytelling and strategic design to ensure consistency, authenticity, and a lasting impression.',
        link: '/services',
    },
    {
        id: 8,
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
