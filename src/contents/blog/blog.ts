
import blogPostImg1 from '../../assets/images/blog/blog-2-1.jpg';
import blogPostImg2 from '../../assets/images/blog/blog-2-2.jpg';
import blogPostImg3 from '../../assets/images/blog/blog-2-3.jpg';
import type { BlogCarouselItem, BlogPage, BlogPost, BlogsListItem } from './blogType';
import blogImg1 from "../../assets/images/blog/blog-2-1.jpg"
import blogImg2 from "../../assets/images/blog/blog-2-2.jpg"
import blogImg3 from "../../assets/images/blog/blog-2-3.jpg"

// blog List
import blogListImg1 from "../../assets/images/blog/blog-list-1-1.jpg";
import blogListImg2 from "../../assets/images/blog/blog-list-1-2.jpg";
import blogListImg3 from "../../assets/images/blog/blog-list-1-3.jpg";
import client1 from "../../assets/images/blog/blog-list-client-img-1.jpg";
import client2 from "../../assets/images/blog/blog-list-client-img-2.jpg";
import client3 from "../../assets/images/blog/blog-list-client-img-3.jpg";
import client4 from "../../assets/images/blog/blog-list-client-img-4.jpg";
import shape1 from "../../assets/images/shapes/blog-list-single-shape-1.png";
import shape2 from "../../assets/images/shapes/blog-list-single-shape-2.png";
//blog carousel
import blogCarouselImg1 from "../../assets/images/blog/blog-1-1.jpg";
import blogCarouselImg2 from "../../assets/images/blog/blog-1-2.jpg";
import blogCarouselImg3 from "../../assets/images/blog/blog-1-3.jpg";
import userImg1 from "../../assets/images/blog/blog-one-user-1-1.jpg";
import userImg2 from "../../assets/images/blog/blog-one-user-1-2.jpg";
import userImg3 from "../../assets/images/blog/blog-one-user-1-3.jpg";
export const blogPosts: BlogPost[] = [
    {
        id: 1,
        image: blogPostImg1,
        date: 'August 20, 2025',
        tags: ['Productivity', '★', 'Tech Innovation'],
        title: `The Complete Digital Transformation Partner for Modern Businesses`,
        text: 'In today’s fast-paced digital economy, businesses can no longer rely on traditional systems and outdated marketing methods.',
        content: [
            {
                type: 'paragraph',
                text: "In today’s fast-paced digital economy, businesses can no longer rely on traditional systems and outdated marketing methods. Digital transformation is the key to survival and growth."
            },
            {
                type: 'heading',
                text: "Why Digital Transformation?"
            },
            {
                type: 'paragraph',
                text: "It streamlines operations, enhances customer experiences, and opens new revenue streams. By adopting modern digital tools, businesses can stay competitive and agile."
            }
        ],
        link: '/blog-details/1',
    },
    {
        id: 2,
        image: blogPostImg2,
        date: 'March 15, 2025',
        tags: ['Technology', '★', 'Wellness'],
        title: 'How Custom Software & Cloud Technology Are Reshaping Business Growth',
        text: "The business landscape has changed dramatically over the last decade. Manual processes, spreadsheets, and disconnected systems are no longer sufficient.",
        content: [
            {
                type: 'paragraph',
                text: "Digital transformation is not just about having a website. It’s about integrating technology into every area of your business — from customer interaction to operations and marketing. At Ecraftz, we help businesses embrace digital transformation through Mobile Applications, Website Designing, Digital Marketing, Software Solutions, SEO, Cloud Services, and Branding strategies that drive measurable growth."
            },
            {
                type: 'heading',
                text: "What is Digital Transformation?"
            },
            {
                type: 'paragraph',
                text: "Digital transformation is the integration of digital technology into all business areas, resulting in improved customer experience, operational efficiency, and scalable growth."
            }
        ],
        link: '/blog-details/2',
    },
    {
        id: 3,
        image: blogPostImg3,
        date: 'July 10, 2025',
        tags: ['Sustainability', '★', 'Eco-Friendly'],
        title: 'Why Digital Marketing & Branding Are Essential for Business Success in 2026',
        text: 'In 2026, competition is higher than ever. Customers research online before making any decision. If your business is not visible digitally, it practically does not exist.',
        content: [
            {
                type: 'paragraph',
                text: "In 2026, competition is higher than ever. Customers research online before making any decision. If your business is not visible digitally, it practically does not exist. A strong brand and digital marketing strategy are essential."
            },
            {
                type: 'heading',
                text: "The Power of Branding"
            },
            {
                type: 'paragraph',
                text: "Branding is more than just a logo. It's the emotional connection you build with your audience. In a crowded market, a strong brand stands out and builds trust."
            }
        ],
        link: '/blog-details/3',
    },
];

export const blogs: BlogPage[] = [
    {
        id: 1,
        image: blogImg1,
        date: "August 20, 2025",
        tags: ["Productivity", "★", "Tech Innovation"],
        title: "The Complete Digital Transformation Partner for Modern Businesses",
        description: "In today’s fast-paced digital economy, businesses can no longer rely on traditional systems and outdated marketing methods.",
        link: '/blog-details/1',
    },
    {
        id: 2,
        image: blogImg2,
        date: "March 15, 2025",
        tags: ["Technology", "★", "Tech Innovation"],
        title: "How Custom Software & Cloud Technology Are Reshaping Business Growth",
        description: "The business landscape has changed dramatically over the last decade. Manual processes, spreadsheets, and disconnected systems are no longer sufficient.",
        link: '/blog-details/2',
    },
    {
        id: 3,
        image: blogImg3,
        date: "August 20, 2025",
        tags: ["Productivity", "★", "Tech Innovation"],
        title: "Why Digital Marketing & Branding Are Essential for Business Success in 2026",
        description: "In 2026, competition is higher than ever. Customers research online before making any decision. If your business is not visible digitally, it practically does not exist.",
        link: '/blog-details/3',
    },

];



export const blogCarouselData: BlogCarouselItem[] = [
    {
        id: 1,
        title: "Top Strategies for Effective Time Management",
        description:
            "Discover actionable tips and techniques to enhance your productivity and manage your",
        image: blogCarouselImg1,
        userImage: userImg1,
        userName: "Michael Johnson",
        date: "August 15, 2025",
        tags: ["Digital", "Technology"],
        link: "/blog-list",
    },
    {
        id: 2,
        title: "The Future of Technology: Emerging Trends to Watch in 2025",
        description:
            "Explore the latest technology innovations shaping the future and how they’ll impact everyday life.",
        image: blogCarouselImg2,
        userImage: userImg2,
        userName: "Michael Johnson",
        date: "December 5, 2023",
        tags: ["Digital", "Technology"],
        link: "/blog-list",
    },
    {
        id: 3,
        title: "Healthy Eating Made Simple: Quick and Nutritious Recipes for Busy Lives",
        description:
            "Practical recipes designed for fast-paced lifestyles — nutritious, delicious,",
        image: blogCarouselImg3,
        userImage: userImg3,
        userName: "Michael Johnson",
        date: "June 22, 2025",
        tags: ["Health", "Lifestyle"],
        link: "/blog-list",
    },
    {
        id: 4,
        title: "Healthy Eating Made Simple: Quick and Nutritious Recipes for Busy Lives",
        description:
            "Practical recipes designed for fast-paced lifestyles — nutritious, delicious,",
        image: blogCarouselImg3,
        userImage: userImg3,
        userName: "Michael Johnson",
        date: "June 22, 2025",
        tags: ["Health", "Lifestyle"],
        link: "/blog-list",
    },
];

export const blogsListItems: BlogsListItem[] = [
    {
        id: 101,
        title: "Mastering the Art of Adapting to Changing Digital Marketing Algorithms",
        description:
            "Explore strategies for staying ahead in the ever-evolving world of digital advertising algorithms. Learn how to adjust your campaigns effectively to maintain visibility and performance.",
        date: "March 8, 2025",
        comments: 34,
        image: blogListImg1,
        clientImage: client1,
        author: "Alisa Olivia",
        shape: shape1,
        link: '/blog-details/101',
    },
    {
        id: 102,
        title: "Balancing Your Digital Marketing Budget: Strategies for Maximizing ROI",
        description:
            "Learn how to balance marketing investments and ROI through data-driven digital strategies. Understand cost-efficient ways to scale campaigns effectively.",
        date: "April 12, 2025",
        comments: 28,
        image: blogListImg2,
        clientImage: client2,
        author: "Thomas Alison",
        shape: shape2,
        link: '/blog-details/102',
    },
    {
        id: 103,
        title: "Standing Out in a Competitive Market: Strategies for Differentiation",
        description:
            "Discover how to build a distinctive brand presence with modern marketing tools and techniques that capture audience attention.",
        date: "May 18, 2025",
        comments: 42,
        image: blogListImg3,
        clientImage: client3,
        author: "Sarah Caine",
        shape: shape1,
        link: '/blog-details/103',
    },
    {
        id: 104,
        title: "Future of AI in Marketing: How Machine Learning is Changing Everything",
        description:
            "AI-driven marketing is the future. Learn how automation and predictive analytics can transform audience engagement.",
        date: "June 10, 2025",
        comments: 21,
        image: blogImg1,
        clientImage: client4,
        author: "Smith Jhon",
        shape: shape1,
        link: '/blog-details/104',
    },
];
