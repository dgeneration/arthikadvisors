import Link from "next/link"
import { useRouter } from "next/router"
import MobileMenu from "../MobileMenu"
import OffcanvusMenu from "../OffcanvusMenu"
import SearchPopup from "../SearchPopup"

export default function Header({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, isOffcanvus, handleOffcanvus }) {
    const router = useRouter();

    const isActive = (pathname) => router.pathname === pathname;

    return (
        <>
            <header id="sticky-header" className={`transparent-header header-style-two ${scroll ? "sticky-menu" : ""}`}>
                <div className="container custom-container header-container">
                    <div className="heder-top-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="header-top-left">
                                    <ul className="list-wrap">
                                        <li><i className="flaticon-location" />Indra Awas Colony, Haldwani, Uttarakhand, India, 263139</li>
                                        <li><i className="flaticon-mail" /><Link href="mailto:info.arthik@gmail.com">info.arthik@gmail.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="header-top-right">
                                    <div className="header-social">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                        </ul>
                                    </div>
                                    <div className="header-top-btn">
                                        <Link href="/contact"><i className="flaticon-briefcase" />Request Services</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu-area">
                        <div className="row header-row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="fas fa-bars" /></div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                                <li className={isActive("/") ? "active" : ""}><Link href="/">Home</Link></li>
                                                <li className={isActive("/services") ? "active" : ""}><Link href="/services">Services</Link></li>
                                                <li className={isActive("/team") ? "active" : ""}><Link href="/team">Team</Link></li>
                                                <li className={isActive("/queries") ? "active" : ""}><Link href="/queries">Queries</Link></li>
                                                <li className={isActive("/careers") ? "active" : ""}><Link href="/careers">Careers</Link></li>
                                                <li className={isActive("/about") ? "active" : ""}><Link href="/about">About Us</Link></li>
                                                <li className={isActive("/contact") ? "active" : ""}><Link href="/contact">Contact Us</Link></li>
                                            </ul>
                                        </div>
                                        <div className="header-action">
                                            <ul className="list-wrap">
                                                <li className="header-contact-two">
                                                    <div className="icon">
                                                        <i className="flaticon-phone-call" />
                                                    </div>
                                                    <div className="content">
                                                        <span>Phone Number</span>
                                                        <Link href="tel:6396377079">+91-6396377079</Link>
                                                    </div>
                                                </li>
                                                <li className="header-search" onClick={handleSearch}><Link href="#"><i className="flaticon-search" /></Link></li>
                                                <li className="offcanvas-menu" onClick={handleOffcanvus}>
                                                    <Link href="#" className="menu-tigger">
                                                        <span />
                                                        <span />
                                                        <span />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="mobile-search">
                                            <form action="#" name="search" id="search" >
                                                <input type="text" id="search" placeholder="Search here..." />
                                                <button><i className="flaticon-search" /></button>
                                            </form>
                                        </div>
                                        <div className="menu-outer">
                                            <MobileMenu />
                                        </div>
                                        <div className="social-links">
                                            <ul className="clearfix list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="menu-backdrop" onClick={handleMobileMenu} />
                            </div>
                        </div>
                    </div>
                </div>
                <SearchPopup isSearch={isSearch} handleSearch={handleSearch} />
                <OffcanvusMenu isOffcanvus={isOffcanvus} handleOffcanvus={handleOffcanvus} />
            </header>
        </>
    );
}
