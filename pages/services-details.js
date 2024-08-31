import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Layout from "@/components/layout/Layout"
import BrandSlider from "@/components/slider/BrandSlider"
import Link from "next/link"


export default function ServiceDetails() {
    const router = useRouter();
    const [content, setContent] = useState("finance");

    const [activeKey, setActiveKey] = useState(null);

    const handleToggle = (key) => {
        setActiveKey(prevKey => (prevKey === key ? null : key));
    };

    const contentMap = {
        finance: (
            <>
                <div className="services-details-content">
                    <h2 className="title">Accounting & Bookkeeping</h2>
                    <div className="services-details-thumb">
                        <img src="/assets/img/services/services_details01.jpg" alt="" />
                    </div>
                    <h3 className="">Accounting Services</h3>
                    <p>Our comprehensive accounting services are designed to support businesses in maintaining accurate and up-to-date financial records. With our expertise, we ensure that your financial statements reflect the true state of your business, providing a solid foundation for informed decision-making and regulatory compliance.</p>
                    <p>when an unknown printer took a galley of type and scrambled it to make a type specimen bookhas survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan galley of type and scrambled it to make a type specimen book.</p>
                    <h4 className="">Key Service</h4>
                    <div className="accordion-wrap-three">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                    <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Bookkeeping
                                    </button>
                                </h2>
                                <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Recording of financial transactions</li>
                                            <li>Maintenance of ledgers and journals</li>
                                            <li>Reconciliation of bank statements</li>
                                            <li>Preparation of trial balance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                    <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Financial Reporting
                                    </button>
                                </h2>
                                <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Preparation of monthly, quarterly, and annual financial statements</li>
                                            <li>Customized management reports</li>
                                            <li>Cash flow statements and analysis</li>
                                            <li>Budgeting and forecasting</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                    <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Compliance and Regulatory Reporting
                                    </button>
                                </h2>
                                <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>GST return preparation and filing</li>
                                            <li>TDS/TCS return preparation and filing</li>
                                            <li>Compliance with the Companies Act, 2013</li>
                                            <li>Preparation and filing of income tax returns</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                    <button className={activeKey === 4 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Payroll Services
                                    </button>
                                </h2>
                                <div id="collapseThree" className={activeKey === 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Payroll processing and salary disbursement</li>
                                            <li>Compliance with PF, ESI, and other statutory requirements</li>
                                            <li>Generation of payslips and payroll reports</li>
                                            <li>Management of employee benefits and deductions</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(5)}>
                                    <button className={activeKey === 5 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Accounts Payable and Receivable
                                    </button>
                                </h2>
                                <div id="collapseThree" className={activeKey === 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Invoice processing and vendor payments</li>
                                            <li>Customer invoicing and collection management</li>
                                            <li>Aging analysis and reporting</li>
                                            <li>Management of credit terms and policies</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sd-inner-wrap">
                        <div className="row align-items-center">
                            <div className="col-56">
                                <div className="content">
                                    <h4 className="">Benefits</h4>
                                    <p> </p>
                                    <ul className="list-wrap">
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Accurate and timely financial data</li>
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Enhanced financial decision-making</li>
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Compliance with statutory requirements</li>
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Improved cash flow management</li>
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Cost savings through efficient processes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>By choosing our accounting and accounting outsourcing services, you can ensure that your financial operations are managed with precision and professionalism, freeing you to concentrate on driving your business forward. Contact us today to learn more about how we can support your financial needs.</p>
                </div>
            </>
        ),
        management: (
            <>
                <div className="services-details-content">
                    <h2 className="title">Accounting & Bookkeeping</h2>
                    <div className="services-details-thumb">
                        <img src="/assets/img/services/services_details01.jpg" alt="" />
                    </div>
                    <h3 className="">Accounting Services</h3>
                    <p>Our comprehensive accounting services are designed to support businesses in maintaining accurate and up-to-date financial records. With our expertise, we ensure that your financial statements reflect the true state of your business, providing a solid foundation for informed decision-making and regulatory compliance.</p>
                    <p>when an unknown printer took a galley of type and scrambled it to make a type specimen bookhas survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan galley of type and scrambled it to make a type specimen book.</p>
                    <h4 className="">Key Service</h4>
                    <div className="accordion-wrap-three">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                    <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Bookkeeping
                                    </button>
                                </h2>
                                <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Recording of financial transactions</li>
                                            <li>Maintenance of ledgers and journals</li>
                                            <li>Reconciliation of bank statements</li>
                                            <li>Preparation of trial balance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                    <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Financial Reporting
                                    </button>
                                </h2>
                                <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Preparation of monthly, quarterly, and annual financial statements</li>
                                            <li>Customized management reports</li>
                                            <li>Cash flow statements and analysis</li>
                                            <li>Budgeting and forecasting</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                    <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Compliance and Regulatory Reporting
                                    </button>
                                </h2>
                                <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>GST return preparation and filing</li>
                                            <li>TDS/TCS return preparation and filing</li>
                                            <li>Compliance with the Companies Act, 2013</li>
                                            <li>Preparation and filing of income tax returns</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                    <button className={activeKey === 4 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Payroll Services
                                    </button>
                                </h2>
                                <div id="collapseThree" className={activeKey === 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Payroll processing and salary disbursement</li>
                                            <li>Compliance with PF, ESI, and other statutory requirements</li>
                                            <li>Generation of payslips and payroll reports</li>
                                            <li>Management of employee benefits and deductions</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(5)}>
                                    <button className={activeKey === 5 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Accounts Payable and Receivable
                                    </button>
                                </h2>
                                <div id="collapseThree" className={activeKey === 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Invoice processing and vendor payments</li>
                                            <li>Customer invoicing and collection management</li>
                                            <li>Aging analysis and reporting</li>
                                            <li>Management of credit terms and policies</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sd-inner-wrap">
                        <div className="row align-items-center">
                            <div className="col-56">
                                <div className="content">
                                    <h4 className="">Benefits</h4>
                                    <p> </p>
                                    <ul className="list-wrap">
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Accurate and timely financial data</li>
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Enhanced financial decision-making</li>
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Compliance with statutory requirements</li>
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Improved cash flow management</li>
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Cost savings through efficient processes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>By choosing our accounting and accounting outsourcing services, you can ensure that your financial operations are managed with precision and professionalism, freeing you to concentrate on driving your business forward. Contact us today to learn more about how we can support your financial needs.</p>
                </div>
            </>
        ),
        incorporation: (
            <>
                <div className="services-details-content">
                    <h2 className="title">Accounting & Bookkeeping</h2>
                    <div className="services-details-thumb">
                        <img src="/assets/img/services/services_details01.jpg" alt="" />
                    </div>
                    <h3 className="">Accounting Services</h3>
                    <p>Our comprehensive accounting services are designed to support businesses in maintaining accurate and up-to-date financial records. With our expertise, we ensure that your financial statements reflect the true state of your business, providing a solid foundation for informed decision-making and regulatory compliance.</p>
                    <p>when an unknown printer took a galley of type and scrambled it to make a type specimen bookhas survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan galley of type and scrambled it to make a type specimen book.</p>
                    <h4 className="">Key Service</h4>
                    <div className="accordion-wrap-three">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                    <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Bookkeeping
                                    </button>
                                </h2>
                                <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Recording of financial transactions</li>
                                            <li>Maintenance of ledgers and journals</li>
                                            <li>Reconciliation of bank statements</li>
                                            <li>Preparation of trial balance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                    <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Financial Reporting
                                    </button>
                                </h2>
                                <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Preparation of monthly, quarterly, and annual financial statements</li>
                                            <li>Customized management reports</li>
                                            <li>Cash flow statements and analysis</li>
                                            <li>Budgeting and forecasting</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                    <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Compliance and Regulatory Reporting
                                    </button>
                                </h2>
                                <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>GST return preparation and filing</li>
                                            <li>TDS/TCS return preparation and filing</li>
                                            <li>Compliance with the Companies Act, 2013</li>
                                            <li>Preparation and filing of income tax returns</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                    <button className={activeKey === 4 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Payroll Services
                                    </button>
                                </h2>
                                <div id="collapseThree" className={activeKey === 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Payroll processing and salary disbursement</li>
                                            <li>Compliance with PF, ESI, and other statutory requirements</li>
                                            <li>Generation of payslips and payroll reports</li>
                                            <li>Management of employee benefits and deductions</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(5)}>
                                    <button className={activeKey === 5 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Accounts Payable and Receivable
                                    </button>
                                </h2>
                                <div id="collapseThree" className={activeKey === 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Invoice processing and vendor payments</li>
                                            <li>Customer invoicing and collection management</li>
                                            <li>Aging analysis and reporting</li>
                                            <li>Management of credit terms and policies</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sd-inner-wrap">
                        <div className="row align-items-center">
                            <div className="col-56">
                                <div className="content">
                                    <h4 className="">Benefits</h4>
                                    <p> </p>
                                    <ul className="list-wrap">
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Accurate and timely financial data</li>
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Enhanced financial decision-making</li>
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Compliance with statutory requirements</li>
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Improved cash flow management</li>
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Cost savings through efficient processes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>By choosing our accounting and accounting outsourcing services, you can ensure that your financial operations are managed with precision and professionalism, freeing you to concentrate on driving your business forward. Contact us today to learn more about how we can support your financial needs.</p>
                </div>
            </>
        ),
        taxation: (
            <>
                <div className="services-details-content">
                    <h2 className="title">Accounting & Bookkeeping</h2>
                    <div className="services-details-thumb">
                        <img src="/assets/img/services/services_details01.jpg" alt="" />
                    </div>
                    <h3 className="">Accounting Services</h3>
                    <p>Our comprehensive accounting services are designed to support businesses in maintaining accurate and up-to-date financial records. With our expertise, we ensure that your financial statements reflect the true state of your business, providing a solid foundation for informed decision-making and regulatory compliance.</p>
                    <p>when an unknown printer took a galley of type and scrambled it to make a type specimen bookhas survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan galley of type and scrambled it to make a type specimen book.</p>
                    <h4 className="">Key Service</h4>
                    <div className="accordion-wrap-three">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                    <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Bookkeeping
                                    </button>
                                </h2>
                                <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Recording of financial transactions</li>
                                            <li>Maintenance of ledgers and journals</li>
                                            <li>Reconciliation of bank statements</li>
                                            <li>Preparation of trial balance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                    <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Financial Reporting
                                    </button>
                                </h2>
                                <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Preparation of monthly, quarterly, and annual financial statements</li>
                                            <li>Customized management reports</li>
                                            <li>Cash flow statements and analysis</li>
                                            <li>Budgeting and forecasting</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                    <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Compliance and Regulatory Reporting
                                    </button>
                                </h2>
                                <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>GST return preparation and filing</li>
                                            <li>TDS/TCS return preparation and filing</li>
                                            <li>Compliance with the Companies Act, 2013</li>
                                            <li>Preparation and filing of income tax returns</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                    <button className={activeKey === 4 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Payroll Services
                                    </button>
                                </h2>
                                <div id="collapseThree" className={activeKey === 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Payroll processing and salary disbursement</li>
                                            <li>Compliance with PF, ESI, and other statutory requirements</li>
                                            <li>Generation of payslips and payroll reports</li>
                                            <li>Management of employee benefits and deductions</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(5)}>
                                    <button className={activeKey === 5 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Accounts Payable and Receivable
                                    </button>
                                </h2>
                                <div id="collapseThree" className={activeKey === 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Invoice processing and vendor payments</li>
                                            <li>Customer invoicing and collection management</li>
                                            <li>Aging analysis and reporting</li>
                                            <li>Management of credit terms and policies</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sd-inner-wrap">
                        <div className="row align-items-center">
                            <div className="col-56">
                                <div className="content">
                                    <h4 className="">Benefits</h4>
                                    <p> </p>
                                    <ul className="list-wrap">
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Accurate and timely financial data</li>
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Enhanced financial decision-making</li>
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Compliance with statutory requirements</li>
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Improved cash flow management</li>
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Cost savings through efficient processes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>By choosing our accounting and accounting outsourcing services, you can ensure that your financial operations are managed with precision and professionalism, freeing you to concentrate on driving your business forward. Contact us today to learn more about how we can support your financial needs.</p>
                </div>
            </>
        ),
    };

    useEffect(() => {
        const { content } = router.query;
        if (content && contentMap[content]) {
            setContent(content);
        }
    }, [router.query]);

    return (
        <>
            <Layout headerStyle={6} footerStyle={1} breadcrumbTitle="Service Details">
                <div>
                    <section className="services-details-area pt-120 pb-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-71 order-0 order-lg-2">
                                    <div className="services-details-wrap">
                                        {contentMap[content]}
                                    </div>
                                </div>
                                <div className="col-29">
                                    <aside className="services-sidebar">
                                        <div className="services-cat-list mb-30">
                                            <ul className="list-wrap">
                                                <li className={content === "finance" ? "active" : ""}><Link href="?finance" onClick={() => setContent("finance")}>Finance & Accounting <i className="flaticon-right-arrow" /></Link></li>
                                                <li className={content === "management" ? "active" : ""}><Link href="?management" onClick={() => setContent("management")}>Management Consulting <i className="flaticon-right-arrow" /></Link></li>
                                                <li className={content === "incorporation" ? "active" : ""}><Link href="?incorporation" onClick={() => setContent("incorporation")}>Incorporation & Registion <i className="flaticon-right-arrow" /></Link></li>
                                                <li className={content === "taxation" ? "active" : ""}><Link href="?taxation" onClick={() => setContent("taxation")}>Taxation & Complianc <i className="flaticon-right-arrow" /></Link></li>
                                            </ul>
                                        </div>
                                        <div className="services-widget">
                                            <h4 className="sw-title">Brochure</h4>
                                            <div className="services-brochure-wrap">
                                                <p>when an unknown printer took ga lley offer typey anddey.</p>
                                                <Link href="assets/img/services/services_details01.jpg" target="_blank" download className="download-btn"><i className="far fa-file-pdf" />PDF. Download</Link>
                                                <Link href="assets/img/services/services_details01.jpg" target="_blank" download className="download-btn"><i className="far fa-file-alt" />DOC. Download</Link>
                                            </div>
                                        </div>
                                        <div className="services-widget">
                                            <h4 className="sw-title">Get a Free Quote</h4>
                                            <div className="services-widget-form">
                                                <form action="#">
                                                    <div className="form-grp">
                                                        <input type="text" placeholder="Your Name" />
                                                    </div>
                                                    <div className="form-grp">
                                                        <input type="email" placeholder="E-mail Address" />
                                                    </div>
                                                    <div className="form-grp">
                                                        <textarea name="message" placeholder="Type Your Message" />
                                                    </div>
                                                    <button type="submit" className="submit-btn">Send Message</button>
                                                </form>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* services-details-area-end */}
                    {/* brand-area */}
                    <div className="brand-area-seven">
                        <div className="container">
                            <BrandSlider />
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}