import React from "react";

const VisionMission: React.FC = () => {
    return (
        <section className="vision-mission">
            {/* Decorative background shapes */}
            <div className="vision-mission__bg-shape-1"></div>
            <div className="vision-mission__bg-shape-2"></div>

            <div className="container">
                {/* Section Header */}
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10 text-center">
                        <div className="vision-mission__header">
                            <div className="vision-mission__tagline-box">
                                <div className="vision-mission__tagline-icon-1"></div>
                                <span className="vision-mission__tagline">What Drives Us</span>
                                <div className="vision-mission__tagline-icon-2"></div>
                            </div>
                            <h2 className="vision-mission__title">
                                Our <span>Vision</span> &amp; <span>Mission</span>
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Cards Row */}
                <div className="row g-4 justify-content-center">
                    {/* Vision Card */}
                    <div className="col-xl-6 col-lg-6 col-md-10">
                        <div
                            className="vision-mission__card vision-mission__card--vision"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="100"
                        >
                            <div className="vision-mission__card-icon-wrap">
                                <div className="vision-mission__card-icon">
                                    <i className="fas fa-eye"></i>
                                </div>
                                <div className="vision-mission__card-icon-ring"></div>
                            </div>
                            <div className="vision-mission__card-body">
                                <h3 className="vision-mission__card-title">Our Vision</h3>
                                <div className="vision-mission__card-divider"></div>
                                <p className="vision-mission__card-text">
                                    Our vision is to become a globally recognized leader in digital
                                    marketing and software development, known for our innovation,
                                    technical expertise, and commitment to quality. We aspire to transform
                                    businesses through forward-thinking solutions and strategic insights,
                                    setting new benchmarks across digital platforms. By embracing emerging
                                    technologies and continuous improvement, we aim to create lasting value
                                    for our clients, team members, and communities.
                                </p>
                            </div>
                            <div className="vision-mission__card-glow"></div>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className="col-xl-6 col-lg-6 col-md-10">
                        <div
                            className="vision-mission__card vision-mission__card--mission"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="250"
                        >
                            <div className="vision-mission__card-icon-wrap">
                                <div className="vision-mission__card-icon">
                                    <i className="fas fa-bullseye"></i>
                                </div>
                                <div className="vision-mission__card-icon-ring"></div>
                            </div>
                            <div className="vision-mission__card-body">
                                <h3 className="vision-mission__card-title">Our Mission</h3>
                                <div className="vision-mission__card-divider"></div>
                                <p className="vision-mission__card-text">
                                    At Ecraftz, our mission is to deliver innovative digital marketing and
                                    software development solutions that enable businesses to grow and succeed
                                    in a competitive digital landscape. By combining advanced technology with
                                    creative thinking, we design impactful digital experiences that strengthen
                                    brand presence and drive measurable results. We are dedicated to excellence,
                                    transparency, and building long-term partnerships rooted in trust and
                                    performance.
                                </p>
                            </div>
                            <div className="vision-mission__card-glow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
