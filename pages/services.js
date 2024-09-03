import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Services() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={1} breadcrumbTitle="Our Services">
                <section className="services-area-five inner-services-bg" data-background="/assets/img/bg/inner_services_bg.jpg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8 col-md-10">
                                <div className="section-title-two text-center mb-50">
                                    <h2 className="title">Our Services</h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 custom-width col-md-6 col-sm-10">
                                <div className="services-item">
                                    <div className="services-content">
                                        <div className="content-top">
                                            <div className="icon">
                                                <i className="flaticon-briefcase" />
                                            </div>
                                            <h2 className="title">Finance & Accounting</h2>
                                        </div>
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/services_img01.jpg" alt="" />
                                            <Link href="/services-details" className="btn transparent-btn">Our Services</Link>
                                        </div>
                                        <ul className="list-wrap">
                                            <li>Accounting Services</li>
                                            <li>Virtual CFO Services</li>
                                            <li>Project Report & CMA Preparation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 custom-width col-md-6 col-sm-10">
                                <div className="services-item">
                                    <div className="services-content">
                                        <div className="content-top">
                                            <div className="icon">
                                                <i className="flaticon-taxes" />
                                            </div>
                                            <h2 className="title">Management Consulting</h2>
                                        </div>
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/services_img02.jpg" alt="" />
                                            <Link href="/services-details" className="btn transparent-btn">Our Services</Link>
                                        </div>
                                        <ul className="list-wrap">
                                            <li>Business Planning</li>
                                            <li>Business Decision-Making Support</li>
                                            <li>Business Process Improvement</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 custom-width col-md-6 col-sm-10">
                                <div className="services-item">
                                    <div className="services-content">
                                        <div className="content-top">
                                            <div className="icon">
                                                <i className="flaticon-money" />
                                            </div>
                                            <h2 className="title">Incorporation & Registration</h2>
                                        </div>
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/services_img03.jpg" alt="" />
                                            <Link href="/services-details" className="btn transparent-btn">Our Services</Link>
                                        </div>
                                        <ul className="list-wrap">
                                            <li>Company Formation</li>
                                            <li>Trust/Society/Firm Formation</li>
                                            <li>GST Registration</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 custom-width col-md-6 col-sm-10">
                                <div className="services-item">
                                    <div className="services-content">
                                        <div className="content-top">
                                            <div className="icon">
                                                <i className="flaticon-investment" />
                                            </div>
                                            <h2 className="title">Taxation & Compliance</h2>
                                        </div>
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/services_img04.jpg" alt="" />
                                            <Link href="/services-details" className="btn transparent-btn">Our Services</Link>
                                        </div>
                                        <ul className="list-wrap">
                                            <li>Taxation Management & Planning</li>
                                            <li>Monthly & Yearly Compliances</li>
                                            <li>Tax System Trainings</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}