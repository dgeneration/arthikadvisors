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
                                    <h2 className="title">Services We Provide</h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 custom-width col-md-6 col-sm-10">
                                <div className="services-item">
                                    <div className="services-content">
                                        <div className="content-top content-top-center">
                                            <div className="icon">
                                                <i className="flaticon-briefcase" />
                                            </div>
                                            <h2 className="title">Finance & Accounting</h2>
                                        </div>
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/services_img01.jpg" alt="" />
                                            <Link href="/services-details?content=finance" className="btn transparent-btn">Our Services</Link>
                                        </div>
                                        <ul className="list-wrap">
                                            <li><Link href="/services-details?content=finance#1">Accounting Services</Link></li>
                                            <li><Link href="/services-details?content=finance#3">Virtual CFO Services</Link></li>
                                            <li><Link href="/services-details?content=finance#5">Project Report & CMA Preparation</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 custom-width col-md-6 col-sm-10">
                                <div className="services-item">
                                    <div className="services-content">
                                        <div className="content-top content-top-center">
                                            <div className="icon">
                                                <i className="flaticon-taxes" />
                                            </div>
                                            <h2 className="title">Management Consulting</h2>
                                        </div>
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/services_img02.jpg" alt="" />
                                            <Link href="/services-details?content=management" className="btn transparent-btn">Our Services</Link>
                                        </div>
                                        <ul className="list-wrap">
                                            <li><Link href="/services-details?content=management#1">Business Planning</Link></li>
                                            <li><Link href="/services-details?content=management#2">Business Decision-Making Support</Link></li>
                                            <li><Link href="/services-details?content=management#3">Business Process Improvement</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 custom-width col-md-6 col-sm-10">
                                <div className="services-item">
                                    <div className="services-content">
                                        <div className="content-top content-top-center">
                                            <div className="icon">
                                                <i className="flaticon-money" />
                                            </div>
                                            <h2 className="title">Incorporation & Registration</h2>
                                        </div>
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/services_img03.jpg" alt="" />
                                            <Link href="/services-details?content=incorporation" className="btn transparent-btn">Our Services</Link>
                                        </div>
                                        <ul className="list-wrap">
                                            <li><Link href="/services-details?content=incorporation#1">Company Formation</Link></li>
                                            <li><Link href="/services-details?content=incorporation#2">Trust/Society/Firm Formation</Link></li>
                                            <li><Link href="/services-details?content=incorporation#3">GST Registration</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 custom-width col-md-6 col-sm-10">
                                <div className="services-item">
                                    <div className="services-content">
                                        <div className="content-top content-top-center">
                                            <div className="icon">
                                                <i className="flaticon-investment" />
                                            </div>
                                            <h2 className="title">Taxation & Compliance</h2>
                                        </div>
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/services_img04.jpg" alt="" />
                                            <Link href="/services-details?content=taxation" className="btn transparent-btn">Our Services</Link>
                                        </div>
                                        <ul className="list-wrap">
                                            <li><Link href="/services-details?content=taxation">Taxation Management & Planning</Link></li>
                                            <li><Link href="/services-details?content=taxation#1">Monthly & Yearly Compliances</Link></li>
                                            <li><Link href="/services-details?content=taxation#2">Tax System Trainings</Link></li>
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