import Link from "next/link"

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-area footer-bg" data-background="/assets/img/bg/footer_bg.jpg">
                    <div className="container">
                        <div className="footer-top">
                            <div className="row">
                                <div className="col-lg-3 col-md-7">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Information</h4>
                                        <div className="footer-info">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-pin" />
                                                    </div>
                                                    <div className="content">
                                                        <p>Indra Awas Colony, Haldwani, Uttarakhand, India, 263139</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-phone-call" />
                                                    </div>
                                                    <div className="content">
                                                        <Link href="tel:6396377079">+91-6396377079</Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-clock" />
                                                    </div>
                                                    <div className="content">
                                                        <p>Mon – Sat: 8 am – 5 pm, <br /> Sunday: <span>CLOSED</span></p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-5 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Quick Links</h4>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/about">Company</Link></li>
                                                <li><Link href="/careers">Careers</Link></li>
                                                <li><Link href="/contact">Contact Us</Link></li>
                                                <li><Link href="/services">Services</Link></li>
                                                <li><Link href="/contact">Privacy Policy</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="left-sider">
                                        <div className="f-logo">
                                            <Link href="/"><img src="/assets/img/logo/w_logo.png" alt="" /></Link>
                                        </div>
                                        <div className="copyright-text">
                                            <p>Copyright © RolexDev | All Right Reserved</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="footer-social">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
