import React from "react";
import { useParams } from "react-router";
import { blogDetails } from "../../contents/blog/blogData";

// Default images if not found in data
import clientImg from "../../assets/images/blog/blog-details-client-img-1.jpg";
import imgBox1 from "../../assets/images/blog/blog-details-img-box-img-1.jpg";
import imgBox2 from "../../assets/images/blog/blog-details-img-box-img-2.jpg";


const BlogDetailsMain: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const numericId = Number(id);

    // Find the blog post in the new blogDetails array (from blogData.tsx)
    const post = blogDetails.find(p => p.id === numericId);

    // If not found
    if (!post) {
        return (
            <section className="blog-details">
                <div className="container">
                    <h2>Blog Post Not Found</h2>
                </div>
            </section>
        );
    }

    const { title, date, image, author, content } = post;

    // Fallback author image
    const authorImg = clientImg;

    return (
        <section className="blog-details">
            <div className="container">
                <div className="row justify-content-center">
                    {/* LEFT SIDE - Blog Details */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-details__left">
                            <div className="blog-details__img">
                                <img src={image} alt={title} />
                            </div>

                            <div className="blog-details__content">
                                {/* Meta */}
                                <ul className="blog-details__meta list-unstyled">
                                    <li>
                                        <div className="blog-details__client-img">
                                            <img src={authorImg} alt="Author" />
                                        </div>
                                        <div className="content">
                                            <p>Post By</p>
                                            <h4>{author}</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-calendar-alt"></span>
                                        </div>
                                        <div className="content">
                                            <p>Date</p>
                                            <h4>{date}</h4>
                                        </div>
                                    </li>
                                </ul>

                                {/* Main Content Title */}
                                <h3 className="blog-details__title-1">
                                    {title}
                                </h3>

                                {/* Dynamic Content from blogData.tsx */}
                                {content}

                                {/* Image Box (Static for now, unless added to data) */}
                                <div className="blog-details__img-box">
                                    <div className="blog-details__img-box-img">
                                        <img src={imgBox1} alt="Design Process" />
                                    </div>
                                    <div className="blog-details__img-box-img">
                                        <img src={imgBox2} alt="User Experience" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - Sidebar */}
                </div>
            </div>
        </section>
    );
};

export default BlogDetailsMain;
