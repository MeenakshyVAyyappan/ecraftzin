import React from "react";


import { teamMembersTeamPage } from "../../contents/team/team";
import type { TeamMember } from "../../contents/team/teamType";
import ceoImg from "../../assets/images/team/aslam.jpeg";
import ctoImg from "../../assets/images/team/habeeb.jpeg";
const TeamMain: React.FC = () => {
    return (
        <section className="team-page" style={{ paddingBottom: '0' }}>
            <div className="container">
                {/* Section Title */}
                <div className="section-title-two text-center sec-title-animation animation-style2">
                    <div className="section-title-two__tagline-box justify-content-center">
                        <div className="section-title-two__tagline-icon-box">
                            <div className="section-title-two__tagline-icon-1"></div>
                            <div className="section-title-two__tagline-icon-2"></div>
                        </div>
                        <span className="section-title-two__tagline">Team Member</span>
                    </div>
                    <h2 className="section-title-two__title title-animation">
                        Connect with our <span>skilled team</span> <br /> and tap into their expertise.
                    </h2>
                </div>

                {/* CEO and CTO Section */}
                <div className="row justify-content-center mb-5">
                    {/* CEO */}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="team-page__single" style={{ transform: 'scale(1.05)', border: '2px solid var(--ecraftz-primary, #007bff)' }}>
                            <div className="team-page__img-box">
                                <div className="team-page__img">
                                    <img src={ceoImg} alt="Muhammed Aslam" />
                                </div>
                            </div>
                            <div className="team-page__content">
                                <h4 className="team-page__title">
                                    <a href="#">Muhammed Aslam</a>
                                </h4>
                                <p className="team-page__text">Chief Executive Officer</p>
                            </div>
                        </div>
                    </div>
                    {/* CTO */}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="team-page__single" style={{ transform: 'scale(1.05)', border: '2px solid var(--ecraftz-primary, #007bff)' }}>
                            <div className="team-page__img-box">
                                <div className="team-page__img">
                                    <img src={ctoImg} alt="Habeebu Rahman" />
                                </div>
                            </div>
                            <div className="team-page__content">
                                <h4 className="team-page__title">
                                    <a href="#">Habeebu Rahman</a>
                                </h4>
                                <p className="team-page__text">Chief Technical Officer</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="row">
                    {teamMembersTeamPage.map((member: TeamMember) => (
                        <div key={member.id} className="col-xl-3 col-lg-6 col-md-6">
                            <div className="team-page__single">
                                <div className="team-page__img-box">
                                    <div className="team-page__img">
                                        <img src={member.image} alt={member.name} />
                                    </div>
                                </div>

                                <div className="team-page__content">
                                    <h4 className="team-page__title">
                                        <a href={member.link}>{member.name}</a>
                                    </h4>
                                    <p className="team-page__text">{member.position}</p>


                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamMain;
