import React from "react";
import contactIcon from "../../assets/images/icon/contact-form-icon-1.png";

interface ContactItem {
    icon: string;
    title: string;
    text: string | React.ReactNode;
}

const contactInfo: ContactItem[] = [
    {
        icon: "icon-pin",
        title: "Our Address",
        text: "Ecraftz, 2nd Floor, Above Federal Bank,N.V Tower, Kallai Road Calicut, India",
    },
    {
        icon: "icon-user",
        title: "Contact Info",
        text: (
            <>
                <a href="tel:+917994111999">+91 7994111999</a>
                <br />
                <a href="tel:+979188839916">+97 9188839916</a>

            </>
        ),
    },
    {
        icon: "icon-live-chat",
        title: "Mail To us",
        text: (
            <>
                <a href="mailto:mail@ecraftz.in">mail@ecraftz.in</a>
                <br />
                <a href="mailto:info@ecraftz.in">info@ecraftz.in</a>
            </>
        ),
    },
    {
        icon: "icon-time",
        title: "Working Hour",
        text: (
            <>
                09:00 AM - 6:00 PM <br /> Monday - Saturday
            </>
        ),
    },
];

const ContactMain: React.FC = () => {
    const [result, setResult] = React.useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const subject = (form.elements.namedItem('subject') as HTMLInputElement).value;
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

        try {
            const mailtoLink = `mailto:mail@ecraftz.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

            // Use a hidden link click to avoid navigation preload warnings
            const link = document.createElement('a');
            link.href = mailtoLink;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setResult({ type: 'success', message: "Email client opened! Please click 'Send' in your mail app." });
            form.reset();
        } catch (error) {
            console.error("Mailto error:", error);
            setResult({ type: 'error', message: "Failed to open email client. Please try again or copy the email address manually." });
        }
    };


    return (
        <>
            {/* ================= Contact Page ================= */}
            <section className="contact-page" id='contact'>
                <div className="container">
                    <div className="row">
                        {/* LEFT SIDE CONTACT INFO */}
                        <div className="col-xl-6 col-lg-6">
                            <div className="contact-page__left">
                                <div className="row">
                                    {contactInfo.map((item: ContactItem, i) => (
                                        <div key={i} className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-page__contact-single">
                                                <div className="contact-page__contact-icon">
                                                    <span className={item.icon}></span>
                                                    <div className="contact-page__contact-icon-shape"></div>
                                                </div>
                                                <h3 className="contact-page__contact-single-title">
                                                    {item.title}
                                                </h3>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE FORM */}
                        <div className="col-xl-6 col-lg-6">
                            <div className="contact-page__right">
                                <div className="contact-page__contact-form-title-box">
                                    <div className="contact-page__contact-form-title-icon">
                                        <img src={contactIcon} alt="Contact Icon" />
                                    </div>
                                    <h3 className="contact-page__contact-form-title">
                                        Send Us Message
                                    </h3>
                                </div>



                                <form
                                    className="contact-form-validated contact-page__form"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="contact-page__input-box">
                                                <div className="contact-page__input-icon">
                                                    <span className="icon-user"></span>
                                                </div>
                                                <input type="text" name="name" placeholder="Name" required />
                                            </div>
                                        </div>


                                        <div className="col-xl-6">
                                            <div className="contact-page__input-box">
                                                <div className="contact-page__input-icon">
                                                    <span className="icon-envelope"></span>
                                                </div>
                                                <input type="email" name="email" placeholder="Email" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-6">
                                            <div className="contact-page__input-box">
                                                <div className="contact-page__input-icon">
                                                    <span className="icon-resume"></span>
                                                </div>
                                                <input type="text" name="subject" placeholder="Subject" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-12">
                                            <div className="contact-page__input-box text-message-box">
                                                <div className="contact-page__input-icon">
                                                    <span className="icon-write"></span>
                                                </div>
                                                <textarea name="message" placeholder="Message"></textarea>
                                            </div>

                                            <div className="contact-page__btn-box">
                                                <button
                                                    type="submit"
                                                    className="thm-btn contact-page__btn"
                                                >
                                                    <span className="icon-right"></span> SEND MESSAGE
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <div className="result">
                                    {result && (
                                        <div className={`alert ${result.type === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
                                            {result.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= Google Map ================= */}
            <section className="google-map-one">
                <div className="container">
                    <div className="google-map-one__inner">
                        <iframe
                            title="Google Map"
                            src="https://maps.google.com/maps?q=Ecraftz+Info+Solutions+LLP&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            className="google-map__one"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactMain;
