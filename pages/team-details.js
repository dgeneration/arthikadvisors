import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

export default function TeamDetails() {

    const router = useRouter();
    const [content, setContent] = useState("finance");

    const [activeKey, setActiveKey] = useState(null);

    const handleToggle = (key) => {
        setActiveKey(prevKey => (prevKey === key ? null : key));
    };

    return (
        <>
            <Layout headerStyle={6} footerStyle={1} breadcrumbTitle="Team Details">
                <section className="team-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="team-details-info-wrap">
                                    <div className="team-details-thumb">
                                        <img src="/assets/img/team/team_details_img.jpg" alt="" />
                                    </div>
                                    <div className="team-details-info">
                                        <ul className="list-wrap">
                                            <li><i className="flaticon-phone-call" />+123 8989 444</li>
                                            <li><i className="flaticon-mail" />info@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="team-details-content">
                                    <h2 className="title">Vinit Kumar Sharma</h2>
                                    <span>Director</span>
                                    <p>A Chartered Accountant + DISA who specializes in finance and accounting, strategy, financial planning, valuation, M&A advisory, due diligence & risk control advisory. Vinit brings the expertise knowledge around the startup eco system. Given his entrepreneurial spirit, he has been led the role of lead consultant to multiple finance teams of established domestic and MNCs clientele.</p>
                                    <div className="team-skill-wrap">
                                        <h3 className="title-two">My Expertise  Skills</h3>
                                        <div className="accordion-wrap-three">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                                        <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        End-to-End Accounting
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Complete management of your accounting department</li>
                                                                <li>Transaction processing, bookkeeping, and financial reporting</li>
                                                                <li>General ledger maintenance</li>
                                                                <li>Month-end and year-end closing</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                                        <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Cloud-Based Accounting Solutions
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Implementation and management of cloud accounting systems (e.g., QuickBooks, Zoho, Tally)</li>
                                                                <li>Real-time access to financial data</li>
                                                                <li>Automation of routine accounting tasks</li>
                                                                <li>Data security and backup</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                                        <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Scalable Solutions
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Flexible service packages tailored to your business size and needs</li>
                                                                <li>Scalability to handle growth and changing business requirements</li>
                                                                <li>Support for multiple locations and international operations</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                                        <button className={activeKey === 4 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Specialized Expertise
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className={activeKey === 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Access to experienced accountants and financial analysts</li>
                                                                <li>Industry-specific accounting practices</li>
                                                                <li>Advisory services for complex accounting issues</li>
                                                                <li>Assistance with audits and regulatory compliance</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(5)}>
                                                        <button className={activeKey === 5 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Cost Efficiency
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className={activeKey === 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Reduction in overhead costs associated with in-house accounting staff</li>
                                                                <li>No need for investment in accounting infrastructure</li>
                                                                <li>Pay only for the services you need, when you need them</li>
                                                                <li>Improved efficiency and accuracy in financial processes</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="team-details-info-wrap">
                                    <div className="team-details-thumb">
                                        <img src="/assets/img/team/team_details_img.jpg" alt="" />
                                    </div>
                                    <div className="team-details-info">
                                        <ul className="list-wrap">
                                            <li><i className="flaticon-phone-call" />+123 8989 444</li>
                                            <li><i className="flaticon-mail" />info@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="team-details-content">
                                    <h2 className="title">Vinit Kumar Sharma</h2>
                                    <span>Director</span>
                                    <p>A Chartered Accountant + DISA who specializes in finance and accounting, strategy, financial planning, valuation, M&A advisory, due diligence & risk control advisory. Vinit brings the expertise knowledge around the startup eco system. Given his entrepreneurial spirit, he has been led the role of lead consultant to multiple finance teams of established domestic and MNCs clientele.</p>
                                    <div className="team-skill-wrap">
                                        <h3 className="title-two">My Expertise  Skills</h3>
                                        <div className="accordion-wrap-three">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                                        <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        End-to-End Accounting
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Complete management of your accounting department</li>
                                                                <li>Transaction processing, bookkeeping, and financial reporting</li>
                                                                <li>General ledger maintenance</li>
                                                                <li>Month-end and year-end closing</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                                        <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Cloud-Based Accounting Solutions
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Implementation and management of cloud accounting systems (e.g., QuickBooks, Zoho, Tally)</li>
                                                                <li>Real-time access to financial data</li>
                                                                <li>Automation of routine accounting tasks</li>
                                                                <li>Data security and backup</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                                        <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Scalable Solutions
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Flexible service packages tailored to your business size and needs</li>
                                                                <li>Scalability to handle growth and changing business requirements</li>
                                                                <li>Support for multiple locations and international operations</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                                        <button className={activeKey === 4 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Specialized Expertise
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className={activeKey === 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Access to experienced accountants and financial analysts</li>
                                                                <li>Industry-specific accounting practices</li>
                                                                <li>Advisory services for complex accounting issues</li>
                                                                <li>Assistance with audits and regulatory compliance</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(5)}>
                                                        <button className={activeKey === 5 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Cost Efficiency
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className={activeKey === 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Reduction in overhead costs associated with in-house accounting staff</li>
                                                                <li>No need for investment in accounting infrastructure</li>
                                                                <li>Pay only for the services you need, when you need them</li>
                                                                <li>Improved efficiency and accuracy in financial processes</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="team-details-info-wrap">
                                    <div className="team-details-thumb">
                                        <img src="/assets/img/team/team_details_img.jpg" alt="" />
                                    </div>
                                    <div className="team-details-info">
                                        <ul className="list-wrap">
                                            <li><i className="flaticon-phone-call" />+123 8989 444</li>
                                            <li><i className="flaticon-mail" />info@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="team-details-content">
                                    <h2 className="title">Vinit Kumar Sharma</h2>
                                    <span>Director</span>
                                    <p>A Chartered Accountant + DISA who specializes in finance and accounting, strategy, financial planning, valuation, M&A advisory, due diligence & risk control advisory. Vinit brings the expertise knowledge around the startup eco system. Given his entrepreneurial spirit, he has been led the role of lead consultant to multiple finance teams of established domestic and MNCs clientele.</p>
                                    <div className="team-skill-wrap">
                                        <h3 className="title-two">My Expertise  Skills</h3>
                                        <div className="accordion-wrap-three">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                                        <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        End-to-End Accounting
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Complete management of your accounting department</li>
                                                                <li>Transaction processing, bookkeeping, and financial reporting</li>
                                                                <li>General ledger maintenance</li>
                                                                <li>Month-end and year-end closing</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                                        <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Cloud-Based Accounting Solutions
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Implementation and management of cloud accounting systems (e.g., QuickBooks, Zoho, Tally)</li>
                                                                <li>Real-time access to financial data</li>
                                                                <li>Automation of routine accounting tasks</li>
                                                                <li>Data security and backup</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                                        <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Scalable Solutions
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Flexible service packages tailored to your business size and needs</li>
                                                                <li>Scalability to handle growth and changing business requirements</li>
                                                                <li>Support for multiple locations and international operations</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                                        <button className={activeKey === 4 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Specialized Expertise
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className={activeKey === 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Access to experienced accountants and financial analysts</li>
                                                                <li>Industry-specific accounting practices</li>
                                                                <li>Advisory services for complex accounting issues</li>
                                                                <li>Assistance with audits and regulatory compliance</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(5)}>
                                                        <button className={activeKey === 5 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Cost Efficiency
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className={activeKey === 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Reduction in overhead costs associated with in-house accounting staff</li>
                                                                <li>No need for investment in accounting infrastructure</li>
                                                                <li>Pay only for the services you need, when you need them</li>
                                                                <li>Improved efficiency and accuracy in financial processes</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="team-details-info-wrap">
                                    <div className="team-details-thumb">
                                        <img src="/assets/img/team/team_details_img.jpg" alt="" />
                                    </div>
                                    <div className="team-details-info">
                                        <ul className="list-wrap">
                                            <li><i className="flaticon-phone-call" />+123 8989 444</li>
                                            <li><i className="flaticon-mail" />info@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="team-details-content">
                                    <h2 className="title">Vinit Kumar Sharma</h2>
                                    <span>Director</span>
                                    <p>A Chartered Accountant + DISA who specializes in finance and accounting, strategy, financial planning, valuation, M&A advisory, due diligence & risk control advisory. Vinit brings the expertise knowledge around the startup eco system. Given his entrepreneurial spirit, he has been led the role of lead consultant to multiple finance teams of established domestic and MNCs clientele.</p>
                                    <div className="team-skill-wrap">
                                        <h3 className="title-two">My Expertise  Skills</h3>
                                        <div className="accordion-wrap-three">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                                        <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        End-to-End Accounting
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Complete management of your accounting department</li>
                                                                <li>Transaction processing, bookkeeping, and financial reporting</li>
                                                                <li>General ledger maintenance</li>
                                                                <li>Month-end and year-end closing</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                                        <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Cloud-Based Accounting Solutions
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Implementation and management of cloud accounting systems (e.g., QuickBooks, Zoho, Tally)</li>
                                                                <li>Real-time access to financial data</li>
                                                                <li>Automation of routine accounting tasks</li>
                                                                <li>Data security and backup</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                                        <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Scalable Solutions
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Flexible service packages tailored to your business size and needs</li>
                                                                <li>Scalability to handle growth and changing business requirements</li>
                                                                <li>Support for multiple locations and international operations</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                                        <button className={activeKey === 4 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Specialized Expertise
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className={activeKey === 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Access to experienced accountants and financial analysts</li>
                                                                <li>Industry-specific accounting practices</li>
                                                                <li>Advisory services for complex accounting issues</li>
                                                                <li>Assistance with audits and regulatory compliance</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(5)}>
                                                        <button className={activeKey === 5 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Cost Efficiency
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className={activeKey === 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Reduction in overhead costs associated with in-house accounting staff</li>
                                                                <li>No need for investment in accounting infrastructure</li>
                                                                <li>Pay only for the services you need, when you need them</li>
                                                                <li>Improved efficiency and accuracy in financial processes</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="team-details-info-wrap">
                                    <div className="team-details-thumb">
                                        <img src="/assets/img/team/team_details_img.jpg" alt="" />
                                    </div>
                                    <div className="team-details-info">
                                        <ul className="list-wrap">
                                            <li><i className="flaticon-phone-call" />+123 8989 444</li>
                                            <li><i className="flaticon-mail" />info@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="team-details-content">
                                    <h2 className="title">Vinit Kumar Sharma</h2>
                                    <span>Director</span>
                                    <p>A Chartered Accountant + DISA who specializes in finance and accounting, strategy, financial planning, valuation, M&A advisory, due diligence & risk control advisory. Vinit brings the expertise knowledge around the startup eco system. Given his entrepreneurial spirit, he has been led the role of lead consultant to multiple finance teams of established domestic and MNCs clientele.</p>
                                    <div className="team-skill-wrap">
                                        <h3 className="title-two">My Expertise  Skills</h3>
                                        <div className="accordion-wrap-three">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                                        <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        End-to-End Accounting
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Complete management of your accounting department</li>
                                                                <li>Transaction processing, bookkeeping, and financial reporting</li>
                                                                <li>General ledger maintenance</li>
                                                                <li>Month-end and year-end closing</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                                        <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Cloud-Based Accounting Solutions
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Implementation and management of cloud accounting systems (e.g., QuickBooks, Zoho, Tally)</li>
                                                                <li>Real-time access to financial data</li>
                                                                <li>Automation of routine accounting tasks</li>
                                                                <li>Data security and backup</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                                        <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Scalable Solutions
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Flexible service packages tailored to your business size and needs</li>
                                                                <li>Scalability to handle growth and changing business requirements</li>
                                                                <li>Support for multiple locations and international operations</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                                        <button className={activeKey === 4 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Specialized Expertise
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className={activeKey === 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Access to experienced accountants and financial analysts</li>
                                                                <li>Industry-specific accounting practices</li>
                                                                <li>Advisory services for complex accounting issues</li>
                                                                <li>Assistance with audits and regulatory compliance</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(5)}>
                                                        <button className={activeKey === 5 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Cost Efficiency
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className={activeKey === 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Reduction in overhead costs associated with in-house accounting staff</li>
                                                                <li>No need for investment in accounting infrastructure</li>
                                                                <li>Pay only for the services you need, when you need them</li>
                                                                <li>Improved efficiency and accuracy in financial processes</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="team-details-info-wrap">
                                    <div className="team-details-thumb">
                                        <img src="/assets/img/team/team_details_img.jpg" alt="" />
                                    </div>
                                    <div className="team-details-info">
                                        <ul className="list-wrap">
                                            <li><i className="flaticon-phone-call" />+123 8989 444</li>
                                            <li><i className="flaticon-mail" />info@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="team-details-content">
                                    <h2 className="title">Vinit Kumar Sharma</h2>
                                    <span>Director</span>
                                    <p>A Chartered Accountant + DISA who specializes in finance and accounting, strategy, financial planning, valuation, M&A advisory, due diligence & risk control advisory. Vinit brings the expertise knowledge around the startup eco system. Given his entrepreneurial spirit, he has been led the role of lead consultant to multiple finance teams of established domestic and MNCs clientele.</p>
                                    <div className="team-skill-wrap">
                                        <h3 className="title-two">My Expertise  Skills</h3>
                                        <div className="accordion-wrap-three">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                                        <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        End-to-End Accounting
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Complete management of your accounting department</li>
                                                                <li>Transaction processing, bookkeeping, and financial reporting</li>
                                                                <li>General ledger maintenance</li>
                                                                <li>Month-end and year-end closing</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                                        <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Cloud-Based Accounting Solutions
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Implementation and management of cloud accounting systems (e.g., QuickBooks, Zoho, Tally)</li>
                                                                <li>Real-time access to financial data</li>
                                                                <li>Automation of routine accounting tasks</li>
                                                                <li>Data security and backup</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                                        <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Scalable Solutions
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Flexible service packages tailored to your business size and needs</li>
                                                                <li>Scalability to handle growth and changing business requirements</li>
                                                                <li>Support for multiple locations and international operations</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                                        <button className={activeKey === 4 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Specialized Expertise
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className={activeKey === 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Access to experienced accountants and financial analysts</li>
                                                                <li>Industry-specific accounting practices</li>
                                                                <li>Advisory services for complex accounting issues</li>
                                                                <li>Assistance with audits and regulatory compliance</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(5)}>
                                                        <button className={activeKey === 5 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Cost Efficiency
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className={activeKey === 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Reduction in overhead costs associated with in-house accounting staff</li>
                                                                <li>No need for investment in accounting infrastructure</li>
                                                                <li>Pay only for the services you need, when you need them</li>
                                                                <li>Improved efficiency and accuracy in financial processes</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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