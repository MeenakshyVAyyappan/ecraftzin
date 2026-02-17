
import blogPostImg1 from '../../assets/images/blog/blog-2-1.jpg';
import blogPostImg2 from '../../assets/images/blog/blog-2-2.jpg';
import blogPostImg3 from '../../assets/images/blog/blog-2-3.jpg';
import type { BlogCarouselItem, BlogPage, BlogPost, BlogsListItem } from './blogType';
import blogImg1 from "../../assets/images/blog/blog-2-1.jpg"
import blogImg2 from "../../assets/images/blog/blog-2-2.jpg"
import blogImg3 from "../../assets/images/blog/blog-2-3.jpg"

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
        link: '/blog-details',
    },
    {
        id: 2,
        image: blogPostImg2,
        date: 'March 15, 2025',
        tags: ['Technology', '★', 'Wellness'],
        title: 'How Custom Software & Cloud Technology Are Reshaping Business Growth',
        text: "The business landscape has changed dramatically over the last decade. Manual processes, spreadsheets, and disconnected systems are no longer sufficient.",
        link: '/blog-details',
    },
    {
        id: 3,
        image: blogPostImg3,
        date: 'July 10, 2025',
        tags: ['Sustainability', '★', 'Eco-Friendly'],
        title: 'Why Digital Marketing & Branding Are Essential for Business Success in 2026',
        text: 'In 2026, competition is higher than ever. Customers research online before making any decision. If your business is not visible digitally, it practically does not exist.',
        link: '/blog-details',
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
        link: "/blog-details",
    },
    {
        id: 2,
        image: blogImg2,
        date: "March 15, 2025",
        tags: ["Technology", "★", "Tech Innovation"],
        title: "How Custom Software & Cloud Technology Are Reshaping Business Growth",
        description: "The business landscape has changed dramatically over the last decade. Manual processes, spreadsheets, and disconnected systems are no longer sufficient.",
        link: "/blog-details",
    },
    {
        id: 3,
        image: blogImg3,
        date: "August 20, 2025",
        tags: ["Productivity", "★", "Tech Innovation"],
        title: "Why Digital Marketing & Branding Are Essential for Business Success in 2026",
        description: "In 2026, competition is higher than ever. Customers research online before making any decision. If your business is not visible digitally, it practically does not exist.",
        link: "/blog-details",
    },

];



export const blogCarouselData: BlogCarouselItem[] = [
    {
        id: 1,
        title: "The Complete Digital Transformation Partner for Modern Businesses",
        description: "In today’s fast-paced digital economy, businesses can no longer rely on traditional systems and outdated marketing methods.",
        image: blogCarouselImg1,
        userImage: userImg1,
        userName: "Alisa Olivia",
        date: "August 20, 2025",
        tags: ["Productivity", "Tech Innovation"],
        link: "/blog-details/1",
    },
    {
        id: 2,
        title: "How Custom Software & Cloud Technology Are Reshaping Business Growth",
        description: "The business landscape has changed dramatically over the last decade. Manual processes, spreadsheets, and disconnected systems are no longer sufficient.",
        image: blogCarouselImg2,
        userImage: userImg2,
        userName: "John Doe",
        date: "March 15, 2025",
        tags: ["Technology", "Wellness"],
        link: "/blog-details/2",
    },
    {
        id: 3,
        title: "Why Digital Marketing & Branding Are Essential for Business Success in 2026",
        description: "In 2026, competition is higher than ever. Customers research online before making any decision. If your business is not visible digitally, it practically does not exist.",
        image: blogCarouselImg3,
        userImage: userImg3,
        userName: "Sarah Jane",
        date: "July 10, 2025",
        tags: ["Sustainability", "Eco-Friendly"],
        link: "/blog-details/3",
    },
];

export const blogDetails = [
    {
        id: 1,
        title: "The Complete Digital Transformation Partner for Modern Businesses",
        image: blogPostImg1,
        author: "Alisa Olivia",
        date: "March 8, 2025",
        category: "Technology",
        content: (
            <>
                <p className="blog-details__text-1" >
                    In today’s hyper- connected world, businesses are no longer competing locally — they
                    are competing globally.Customers search online before buying, compare brands digitally,
                    and expect seamless online experiences.If your business doesn’t have a strong digital
                    presence, you are already behind.
                </p>
                < p className="blog-details__text-2" >
                    Digital transformation is not just about having a website.
                    It’s about integrating technology into every area of your business — from customer
                    interaction to operations and marketing.At Ecraftz, we help businesses embrace digital
                    transformation through Mobile Applications, Website Designing, Digital Marketing, Software
                    Solutions, SEO, Cloud Services, and Branding strategies that drive measurable growth.
                </p>
                < h3 className="blog-details__title-2" > What is Digital Transformation ? </h3>
                < p className="blog-details__text-3" >
                    Digital transformation is the integration of digital technology into
                    all business areas, resulting in improved customer experience, operational
                    efficiency, and scalable growth.
                </p>
                < ul className="blog-details__points-2 list-unstyled" >
                    <li><span className="fas fa-check" > </span> Website Designing – Your Digital Foundation</li >
                    <li><span className="fas fa-check" > </span> Mobile Application Development – Power in Your Customer’s Pocket</li >
                    <li><span className="fas fa-check" > </span> Digital Marketing – Driving Targeted Growth</li >
                    <li><span className="fas fa-check" > </span> Search Engine Optimization (SEO) – Long-Term Visibility</li >
                    <li><span className="fas fa-check" > </span> Software Solutions – Automating Success</li >
                </ul>
                < h3 className="blog-details__title-4" > Why Choose Ecraftz ? </h3>
                < ul className="blog-details__points-2 list-unstyled" >
                    <li><span className="fas fa-check" > </span> End-to-end digital solutions</li >
                    <li><span className="fas fa-check" > </span> Experienced development team</li >
                    <li><span className="fas fa-check" > </span> ROI-focused marketing strategies</li >
                    <li><span className="fas fa-check" > </span> Custom-built solutions</li >
                    <li><span className="fas fa-check" > </span> Scalable growth systems</li >
                </ul>
            </>
        )
    },
    {
        id: 2,
        title: "How Custom Software & Cloud Technology Are Reshaping Business Growth",
        image: blogPostImg2,
        author: "John Doe",
        date: "March 15, 2025",
        category: "Software",
        content: (
            <>
                <p className="blog-details__text-1" >
                    The business landscape has changed dramatically over the last decade.Manual processes, spreadsheets,
                    and disconnected systems are no longer sufficient for businesses that want to scale.
                    Custom software and cloud technology are now the backbone of modern enterprise growth.
                </p>
                < p className="blog-details__text-2" >
                    Unlike off - the - shelf software that forces you to adapt your processes, custom software fits your
                    business like a glove.It streamlines operations, reduces errors, and provides data - driven insights
                    that were previously impossible to obtain manually.
                </p>
                < h3 className="blog-details__title-2" > The Power of Cloud Computing </h3>
                < p className="blog-details__text-3" >
                    Cloud technology allows your team to access data from anywhere, ensuring collaboration and
                    flexibility.Whether it's remote work or real-time inventory management, the cloud enables
                    businesses to operate without physical limitations.
                </p>
                < ul className="blog-details__points-2 list-unstyled" >
                    <li><span className="fas fa-check" > </span> Scalability – Grow without infrastructure headaches</li >
                    <li><span className="fas fa-check" > </span> Cost Efficiency – Pay only for what you use</li >
                    <li><span className="fas fa-check" > </span> Security – Enterprise-grade data protection</li >
                    <li><span className="fas fa-check" > </span> Accessibility – Work from anywhere, anytime</li >
                </ul>
            </>
        )
    },
    {
        id: 3,
        title: "Why Digital Marketing & Branding Are Essential for Business Success in 2026",
        image: blogPostImg3,
        author: "Sarah Jane",
        date: "July 10, 2025",
        category: "Marketing",
        content: (
            <>
                <p className="blog-details__text-1" >
                    In 2026, competition is higher than ever.Customers research online before making any decision.
                    If your business is not visible digitally, it practically does not exist.
                    Digital marketing and branding are no longer optional—they are the engines of revenue.
                </p>
                < p className="blog-details__text-2" >
                    Branding is more than just a logo.It’s the feeling customers get when they interact with your company.
                    Combined with a strong digital marketing strategy, branding creates trust, loyalty, and recognition
                    that drives long - term success.
                </p>
                < h3 className="blog-details__title-2" > Key Marketing Strategies for 2026 </h3>
                < p className="blog-details__text-3" >
                    To stay ahead, businesses need to leverage multiple channels.From social media to SEO, every touchpoint matters.
                </p>
                < ul className="blog-details__points-2 list-unstyled" >
                    <li><span className="fas fa-check" > </span> Personalization – Tailored customer experiences</li >
                    <li><span className="fas fa-check" > </span> Video Content – Engaging and shareable</li >
                    <li><span className="fas fa-check" > </span> Voice Search Optimization – The future of search</li >
                    <li><span className="fas fa-check" > </span> Data-Driven Decisions – Marketing backed by analytics</li >
                </ul>
            </>
        )
    }
];
