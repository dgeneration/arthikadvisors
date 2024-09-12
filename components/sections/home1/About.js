export default function About() {
    return (
        <>
            <section className="about-area-three">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-9">
                            <div className="about-img-wrap-three">
                                <img src="/assets/img/images/h2_about_img01.jpg" alt="" data-aos="fade-down-right" data-aos-delay={0} />
                                <img src="/assets/img/images/h2_about_img02.jpg" alt="" data-aos="fade-left" data-aos-delay={400} />
                                <div className="experience-wrap" data-aos="fade-up" data-aos-delay={300}>
                                    <h2 className="title">10 <span>Years</span></h2>
                                    <p>Of Experience in This Finance Advisory Company.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content-three">
                                <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                                    <span className="sub-title">Who We Are</span>
                                    <h2 className="title tg-element-title"> Your Trusted Advisors in Strategic Finance, Accounting, and Risk Control</h2>
                                </div>
                                <p className="info-one">We are a leading consultancy firm with a team of experienced professionals specializing in finance, accounting, management consulting, taxation, and risk control advisory. We combine strategic insights with practical solutions to help businesses overcome challenges and achieve their goals.</p>
                                <div className="about-list-two">
                                    <ul className="list-wrap">
                                        <li><i className="fas fa-arrow-right" />100% Better results</li>
                                        <li><i className="fas fa-arrow-right" />Client-Centric Approach</li>
                                        <li><i className="fas fa-arrow-right" />Commitment to Excellence</li>
                                    </ul>
                                </div>
                                <p>Our mission is to provide innovative and tailored solutions that drive business success and growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-shape-wrap-two">
                    <img src="/assets/img/images/h2_about_shape01.png" alt="" />
                    <img src="/assets/img/images/h2_about_shape02.png" alt="" />
                    <img src="/assets/img/images/h2_about_shape03.png" alt="" data-aos="fade-left" data-aos-delay={500} />
                </div>
            </section>
        </>
    )
}
