import Layout from "@/components/layout/Layout"

export default function Contact() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={1} breadcrumbTitle="Contact Us">
                <div>
                    <section className="inner-contact-area pt-120 pb-120">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="inner-contact-img">
                                        <img src="/assets/img/images/contact_img.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="inner-contact-info">
                                        <h2 className="title">Our Office Address</h2>
                                        <div className="contact-info-item">
                                            <h5 className="title-two">Haldwani Office</h5>
                                            <ul className="list-wrap">
                                                <li>Indra Awas Colony, Bly To Ntl Road, Halduchaur <br />  Haldwani, Nainital, Uttarakhand, India, 263139</li>
                                                <li>+91-6396377079</li>
                                                <li>info.arthik@gmail.com</li>
                                            </ul>
                                        </div>
                                        <div className="contact-info-item">
                                            <h5 className="title-two">Rudrapur Office</h5>
                                            <ul className="list-wrap">
                                                <li>D1D2, SRA-28, Kashipur Bypass Road <br /> Rudrapur, Udham Singh Nagar, Uttarakhand, 263153</li>
                                                <li>+91-6396377079</li>
                                                <li>info.arthik@gmail.com</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.1788768718284!2d79.39547967616654!3d28.98206996812093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a07fe9384f6ac1%3A0x44c9c41ab5b216f3!2s28%2F1%2C%20Kashipur%20Bypass%20Rd%2C%20Doctors%20Colony%2C%20Rudrapur%2C%20Jagatpura%2C%20Uttarakhand%20263153!5e0!3m2!1sen!2sin!4v1724912772379!5m2!1sen!2sin" allowFullScreen loading="lazy" />
                    </div>
                </div>
            </Layout>
        </>
    )
}