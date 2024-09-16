import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Layout from "@/components/layout/Layout"
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
                    <h2 className="title">ACCOUNTING & BOOKKEEPING</h2>
                    <div className="services-details-thumb">
                        <img src="/assets/img/services/service_details-1.png" alt="" />
                    </div>
                    <br/>
                    <section id="1">
                        <h3 className="sub-title">Accounting Services</h3>
                        <div className="sub-service-details">
                            <p>Our comprehensive accounting services are designed to support businesses in maintaining accurate and up-to-date financial records. With our expertise, we ensure that your financial statements reflect the true state of your business, providing a solid foundation for informed decision-making and regulatory compliance.</p>
                            <p>when an unknown printer took a galley of type and scrambled it to make a type specimen bookhas survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan galley of type and scrambled it to make a type specimen book.</p>
                            <h4 className="">Key Service</h4>
                            <div className="accordion-wrap-three sub-service-details">
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
                                    <div className="">
                                        <div className="content">
                                            <h4 className="">Benefits</h4>
                                            <p> </p>
                                            <ul className="list-wrap sub-service-details">
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
                    </section>
                    <br/>
                    <section id="2">
                        <h3 className="sub-title">Accounting Outsourcing Services</h3>
                        <div className="sub-service-details">
                            <p>Our accounting outsourcing services offer businesses the opportunity to delegate their accounting functions to a team of seasoned professionals. This allows companies to focus on their core operations while benefiting from our expertise in managing financial processes efficiently and cost-effectively.</p>
                            <h4 className="">Key Service</h4>
                            <div className="accordion-wrap-three sub-service-details">
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
                            <div className="sd-inner-wrap">
                                <div className="row align-items-center">
                                    <div className="">
                                        <div className="content">
                                            <h4 className="">Benefits</h4>
                                            <p> </p>
                                            <ul className="list-wrap sub-service-details">
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Focus on core business activities</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Access to specialized accounting expertise</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Enhanced data security and compliance</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Cost savings and improved efficiency</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Flexibility and scalability to meet business needs</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>By choosing our accounting and accounting outsourcing services, you can ensure that your financial operations are managed with precision and professionalism, freeing you to concentrate on driving your business forward. Contact us today to learn more about how we can support your financial needs.</p>
                        </div>
                    </section>
                    <br/>
                    <section id="3">
                        <h3 className="sub-title">Virtual CFO Services</h3>
                        <div className="sub-service-details">
                            <p>Our Virtual CFO services provide businesses with the strategic financial expertise of a Chief Financial Officer without the cost and commitment of a full-time hire. Tailored to meet the unique needs of your business, our Virtual CFO services help you make informed financial decisions, manage risks, and drive growth.</p>
                            <h4 className="">Key Service</h4>
                            <div className="accordion-wrap-three sub-service-details">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                            <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Financial Strategy and Planning
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Development of long-term financial strategies</li>
                                                    <li>Financial forecasting and budgeting</li>
                                                    <li>Scenario analysis and financial modeling</li>
                                                    <li>Strategic planning for growth and expansion</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                            <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Financial Reporting and Analysis
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Preparation of detailed financial reports and dashboards</li>
                                                    <li>In-depth financial analysis to identify trends and opportunities</li>
                                                    <li>Performance monitoring against key financial metrics</li>
                                                    <li>Customized management reports for stakeholders</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                            <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                Cash Flow Management
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Cash flow forecasting and monitoring</li>
                                                    <li>Strategies to optimize cash flow and working capital</li>
                                                    <li>Managing accounts receivable and payable</li>
                                                    <li>Cost control and expense management</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                            <button className={activeKey === 4 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Risk Management and Compliance
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Identification and mitigation of financial risks</li>
                                                    <li>Ensuring compliance with regulatory requirements</li>
                                                    <li>Implementation of internal controls and audit processes</li>
                                                    <li>Risk assessment and management strategies</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(5)}>
                                            <button className={activeKey === 5 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Fundraising and Investment
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Assistance with securing financing and investment</li>
                                                    <li>Preparation of financial presentations and pitch decks</li>
                                                    <li>Liaison with investors, banks, and financial institutions</li>
                                                    <li>Evaluation of investment opportunities and ROI analysis</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(6)}>
                                            <button className={activeKey === 6 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Business Performance Improvement
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Analysis of business operations to improve efficiency and profitability</li>
                                                    <li>Cost reduction strategies and process optimization</li>
                                                    <li>Benchmarking against industry standards</li>
                                                    <li>Implementation of performance improvement initiatives</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(7)}>
                                            <button className={activeKey === 7 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Strategic Advisory
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Mergers and acquisitions (M&A) advisory</li>
                                                    <li>Business restructuring and turnaround strategies</li>
                                                    <li>Exit planning and succession planning</li>
                                                    <li>Strategic advice on market entry and expansion</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sd-inner-wrap">
                                <div className="row align-items-center">
                                    <div className="">
                                        <div className="content">
                                            <h4 className="">Benefits</h4>
                                            <p> </p>
                                            <ul className="list-wrap sub-service-details">
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Access to high-level financial expertise</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Enhanced strategic decision-making</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Improved financial performance and profitability</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Better risk management and compliance</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Cost-effective solution compared to hiring a full-time CFO</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>By leveraging our Virtual CFO services, your business gains the financial leadership and strategic guidance necessary to navigate complex financial landscapes, achieve business objectives, and drive sustainable growth. Contact us today to learn how our Virtual CFO services can benefit your organization.</p>
                        </div>
                    </section>
                    <br/>
                    <section id="4">
                        <h3 className="sub-title">Accounting & Allied Services</h3>
                        <div className="sub-service-details">
                            <p>Our Accounting & Allied Services are designed to provide comprehensive financial management solutions that ensure accuracy, compliance, and strategic insight. From financial statement preparation to account reconciliation and compliance assistance, our services cater to the diverse needs of businesses, enabling them to maintain robust financial health and regulatory adherence.</p>
                            <h4 className="">Key Service</h4>
                            <div className="accordion-wrap-three sub-service-details">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                            <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Financial Statement Preparation
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Compilation of accurate and compliant financial statements</li>
                                                    <li>Preparation of balance sheets, income statements, and cash flow statements</li>
                                                    <li>Customized financial reports for management and stakeholders</li>
                                                    <li>Adherence to Indian Accounting Standards (Ind AS) and International Financial Reporting Standards (IFRS)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                            <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Account Reconciliation
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Regular reconciliation of bank statements to ensure accuracy</li>
                                                    <li>Reconciliation of accounts payable and receivable</li>
                                                    <li>Identification and rectification of discrepancies</li>
                                                    <li>Maintenance of accurate ledgers and sub-ledgers</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                            <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Compliance Assistance
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>GST return preparation and filing</li>
                                                    <li>TDS/TCS compliance and return filing</li>
                                                    <li>Income tax return preparation and filing</li>
                                                    <li>Compliance with Companies Act, 2013 and other regulatory requirements</li>
                                                    <li>oPeriodic statutory audits and internal audits</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                            <button className={activeKey === 4 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Bookkeeping Services
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Recording daily financial transactions</li>
                                                    <li>Maintenance of ledgers, journals, and subsidiary books</li>
                                                    <li>Ensuring accurate categorization and recording of expenses and revenues</li>
                                                    <li>Preparation of trial balance and adjusting entries</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(5)}>
                                            <button className={activeKey === 5 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Payroll Management
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
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
                                        <h2 className="accordion-header" onClick={() => handleToggle(6)}>
                                            <button className={activeKey === 6 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Tax Planning and Advisory
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Strategic tax planning to minimize liabilities</li>
                                                    <li>Advisory on tax-saving investments and deductions</li>
                                                    <li>Assistance with tax audits and assessments</li>
                                                    <li>Keeping abreast with changes in tax laws and regulations</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sd-inner-wrap">
                                <div className="row align-items-center">
                                    <div className="">
                                        <div className="content">
                                            <h4 className="">Benefits</h4>
                                            <p> </p>
                                            <ul className="list-wrap sub-service-details">
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Ensured compliance with all statutory and regulatory requirements</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Accurate and timely financial reporting</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Improved financial transparency and decision-making</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Enhanced operational efficiency and error reduction</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Cost-effective financial management solutions</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>By leveraging our Accounting & Allied Services, businesses can focus on their core operations while ensuring their financial processes are managed with precision and professionalism. Contact us today to learn more about how we can support your financial needs.</p>
                        </div>
                    </section>
                    <br/>
                    <section id="5">
                        <h3 className="sub-title">Project Report And CMA Preparation</h3>
                        <div className="sub-service-details">
                            <p>Our Project Report and Credit Monitoring Arrangement (CMA) Preparation services are tailored to support businesses in obtaining financing and monitoring their credit health. We provide detailed and professionally crafted reports that meet the requirements of financial institutions, enabling businesses to secure loans, manage credit, and achieve their financial objectives.</p>
                            <h4 className="">Key Service</h4>
                            <div className="accordion-wrap-three sub-service-details">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                    <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                    Project Report Preparation
                                    </button>
                                </h2>
                                <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Comprehensive analysis and documentation of business projects</li>
                                            <li>Detailed project descriptions including objectives, scope, and implementation plans</li>
                                            <li>Market analysis and feasibility studies</li>
                                            <li>Financial projections including revenue, expenses, and profitability</li>
                                            <li>Risk analysis and mitigation strategies</li>
                                            <li>Preparation of project timelines and milestones</li>
                                            <li>Customization to meet the specific requirements of banks and financial institutions</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                    <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                    CMA Data Preparation
                                    </button>
                                </h2>
                                <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Compilation of data required for Credit Monitoring Arrangement reports</li>
                                            <li>Preparation of projected balance sheets, profit & loss accounts, and cash flow statements</li>
                                            <li>Analysis of past performance and future projections</li>
                                            <li>Calculation of key financial ratios and indicators</li>
                                            <li>Detailed explanation of fund requirements and utilization</li>
                                            <li>Assessment of working capital requirements and sources of funds</li>
                                            <li>Ensuring compliance with RBI guidelines and bank requirements</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                    <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                    Financial Analysis and Projections
                                    </button>
                                </h2>
                                <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>In-depth financial analysis to support project viability</li>
                                            <li>Development of realistic and achievable financial projections</li>
                                            <li>Sensitivity analysis to evaluate different financial scenarios</li>
                                            <li>Preparation of break-even analysis and return on investment (ROI) calculations</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                    <button className={activeKey === 4 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                    Bank Loan Facilitation
                                    </button>
                                </h2>
                                <div id="collapseThree" className={activeKey === 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Assistance in preparing loan applications and documentation</li>
                                            <li>Liaison with banks and financial institutions for loan approval</li>
                                            <li>Guidance on the selection of appropriate financing options</li>
                                            <li>Support in negotiating loan terms and conditions</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(5)}>
                                    <button className={activeKey === 5 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                    Ongoing Credit Monitoring
                                    </button>
                                </h2>
                                <div id="collapseThree" className={activeKey === 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Regular review and updating of CMA data</li>
                                            <li>Monitoring of financial performance against projections</li>
                                            <li>Identification of potential credit risks and timely corrective actions</li>
                                            <li>Preparation of periodic reports for submission to banks</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                            </div>
                            <div className="sd-inner-wrap">
                                <div className="row align-items-center">
                                    <div className="">
                                        <div className="content">
                                            <h4 className="">Benefits</h4>
                                            <p> </p>
                                            <ul className="list-wrap sub-service-details">
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Enhanced ability to secure financing from banks and financial institutions</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Professional and comprehensive documentation to support loan applications</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Accurate financial projections and analysis for informed decision-making</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Improved credit monitoring and risk management</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Compliance with regulatory requirements and banking norms</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>By leveraging our Project Report and CMA Preparation services, businesses can effectively plan, execute, and monitor their financial strategies, ensuring sustained growth and financial stability. Contact us today to learn more about how we can support your financial needs.</p>
                        </div>
                    </section>
                </div>
            </>
        ),
        management: (
            <>
                <div className="services-details-content">
                    <h2 className="title">MANAGEMENT CONSULTING</h2>
                    <div className="services-details-thumb">
                        <img src="/assets/img/services/services_details02.jpg" alt="" />
                    </div>
                    <p>Our Management Consulting services are designed to help businesses navigate complex challenges, enhance performance, and achieve their strategic goals. With a focus on tailored solutions, we provide expert guidance and support in business planning, decision-making, and process improvement.</p>
                    <br/>
                    <section id="1">
                        <h3 className="sub-title">Business Planning</h3>
                        <div className="sub-service-details">
                            <p>Effective business planning is the cornerstone of long-term success. Our business planning services help organizations develop comprehensive plans that align with their vision and objectives, ensuring a clear roadmap for growth and sustainability.</p>
                            <h4 className="">Key Service</h4>
                            <div className="accordion-wrap-three sub-service-details">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                            <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Strategic Planning
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Development of long-term strategic plans</li>
                                                    <li>Market analysis and competitive benchmarking</li>
                                                    <li>SWOT analysis (Strengths, Weaknesses, Opportunities, Threats)</li>
                                                    <li>Identification of strategic goals and objectives</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                            <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Operational Planning
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Detailed operational plans to support strategic goals</li>
                                                    <li>Resource allocation and capacity planning</li>
                                                    <li>Performance metrics and KPIs</li>
                                                    <li>Contingency planning and risk management</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                            <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Financial Planning
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Budgeting and financial forecasting</li>
                                                    <li>Cash flow management and financial modeling</li>
                                                    <li>Investment planning and capital allocation</li>
                                                    <li>Break-even analysis and profitability projections</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sd-inner-wrap">
                                <div className="row align-items-center">
                                    <div className="">
                                        <div className="content">
                                            <h4 className="">Benefits</h4>
                                            <p> </p>
                                            <ul className="list-wrap sub-service-details">
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Clear strategic direction and vision</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Improved resource allocation and efficiency</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Enhanced financial management and forecasting</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Proactive risk management and mitigation</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>By choosing our accounting and accounting outsourcing services, you can ensure that your financial operations are managed with precision and professionalism, freeing you to concentrate on driving your business forward. Contact us today to learn more about how we can support your financial needs.</p>
                        </div>
                    </section>
                    <br/>
                    <section id="2">
                        <h3 className="sub-title">Business Decision-Making Support</h3>
                        <div className="sub-service-details">
                            <p>Informed decision-making is critical to business success. Our decision-making support services provide businesses with the data, analysis, and insights needed to make strategic and operational decisions confidently.</p>
                            <h4 className="">Key Service</h4>
                            <div className="accordion-wrap-three sub-service-details">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                            <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Data Analysis and Reporting
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Collection and analysis of relevant business data</li>
                                                    <li>Customized reports and dashboards</li>
                                                    <li>Trend analysis and forecasting</li>
                                                    <li>Performance monitoring and benchmarking</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                            <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Decision Support Systems
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Development of decision support models</li>
                                                    <li>Scenario planning and analysis</li>
                                                    <li>Cost-benefit analysis and ROI calculations</li>
                                                    <li>Risk assessment and impact analysis</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                            <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Advisory Services
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Strategic advice on business opportunities and challenges</li>
                                                    <li>Guidance on mergers, acquisitions, and partnerships</li>
                                                    <li>Market entry and expansion strategies</li>
                                                    <li>Crisis management and turnaround strategies</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sd-inner-wrap">
                                <div className="row align-items-center">
                                    <div className="">
                                        <div className="content">
                                            <h4 className="">Benefits</h4>
                                            <p> </p>
                                            <ul className="list-wrap sub-service-details">
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Data-driven decision-making</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Improved strategic and operational outcomes</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Enhanced ability to identify and capitalize on opportunities</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Reduced risk and increased confidence in decision-making</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <br/>
                    <section id="3">
                        <h3 className="sub-title">Business Process Improvement</h3>
                        <div className="sub-service-details">
                            <p>Streamlined and efficient business processes are essential for operational excellence. Our business process improvement services help organizations optimize their workflows, reduce costs, and enhance productivity.</p>
                            <h4 className="">Key Service</h4>
                            <div className="accordion-wrap-three sub-service-details">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                            <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Process Mapping and Analysis
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Detailed mapping of existing business processes</li>
                                                    <li>Identification of bottlenecks and inefficiencies</li>
                                                    <li>Root cause analysis and process diagnostics</li>
                                                    <li>Development of process improvement plans</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                            <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Process Redesign and Optimization
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Redesign of business processes for improved efficiency</li>
                                                    <li>Implementation of best practices and industry standards</li>
                                                    <li>Automation of routine tasks and workflows</li>
                                                    <li>Continuous improvement and Lean methodologies</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                            <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Performance Measurement and Management
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Establishment of process performance metrics and KPIs</li>
                                                    <li>Monitoring and reporting of process performance</li>
                                                    <li>Training and development for process improvement</li>
                                                    <li>Regular review and refinement of processes</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sd-inner-wrap">
                                <div className="row align-items-center">
                                    <div className="">
                                        <div className="content">
                                            <h4 className="">Benefits</h4>
                                            <p> </p>
                                            <ul className="list-wrap sub-service-details">
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Increased operational efficiency and productivity</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Reduced costs and improved profitability</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Enhanced quality and customer satisfaction</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Continuous improvement and innovation</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>By leveraging our Management Consulting services, businesses can achieve greater clarity, efficiency, and success in their strategic and operational endeavors. Contact us today to learn more about how we can support your business needs.</p>
                        </div>
                    </section>
                </div>
            </>
        ),
        incorporation: (
            <>
                <div className="services-details-content">
                    <h2 className="title">INCORPORATION AND REGISTRATION SERVICES</h2>
                    <div className="services-details-thumb">
                        <img src="/assets/img/services/services_details03.jpg" alt="" />
                    </div>
                    <p>Our Incorporation and Registration Services provide comprehensive support for businesses and organizations looking to establish themselves legally and compliantly in India. From company formation to various statutory registrations, we ensure a seamless and hassle-free experience.</p>
                    <br/>
                    <section id="1">
                        <h3 className="sub-title">Company Formation</h3>
                        <div className="sub-service-details">
                            <p>Starting a new business requires meticulous planning and adherence to legal requirements. Our company formation services assist entrepreneurs in setting up their business entities efficiently and in compliance with Indian laws.</p>
                            <h4 className="">Key Service</h4>
                            <div className="accordion-wrap-three sub-service-details">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                            <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Private Limited Company
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Name reservation and approval</li>
                                                    <li>Drafting and filing of Memorandum and Articles of Association</li>
                                                    <li>Obtaining Director Identification Numbers (DIN) and Digital Signatures (DSC)</li>
                                                    <li>Company incorporation with the Ministry of Corporate Affairs (MCA)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                            <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Limited Liability Partnership (LLP)
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Name reservation and approval</li>
                                                    <li>Drafting and filing of LLP Agreement</li>
                                                    <li>Obtaining DIN and DSC</li>
                                                    <li>LLP registration with MCA</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                            <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            One Person Company (OPC)
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Name reservation and approval</li>
                                                    <li>Drafting and filing of Memorandum and Articles of Association</li>
                                                    <li>Obtaining DIN and DSC</li>
                                                    <li>OPC registration with MCA</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sd-inner-wrap">
                                <div className="row align-items-center">
                                    <div className="">
                                        <div className="content">
                                            <h4 className="">Benefits</h4>
                                            <p> </p>
                                            <ul className="list-wrap sub-service-details">
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Legal recognition and protection</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Structured governance and compliance</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Enhanced credibility and trustworthiness</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Access to funding and growth opportunities</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <br/>
                    <section id="2">
                        <h3 className="sub-title">Trust / Society / Firm Formation</h3>
                        <div className="sub-service-details">
                            <p>Our Trust, Society, and Firm formation services support organizations and individuals in setting up charitable trusts, societies, and partnerships, ensuring compliance with relevant laws and regulations.</p>
                            <h4 className="">Key Service</h4>
                            <div className="accordion-wrap-three sub-service-details">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                            <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Trust Formation
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Drafting of trust deed</li>
                                                    <li>Registration with the local Registrar of Trusts</li>
                                                    <li>Assistance with obtaining PAN and TAN</li>
                                                    <li>Guidance on compliance and governance</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                            <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Society Formation
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Drafting of Memorandum of Association and Rules & Regulations</li>
                                                    <li>Registration with the Registrar of Societies</li>
                                                    <li>Assistance with obtaining PAN and TAN</li>
                                                    <li>Guidance on compliance and governance</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                            <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Partnership Firm Formation
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Drafting of partnership deed</li>
                                                    <li>Registration with the Registrar of Firms</li>
                                                    <li>Assistance with obtaining PAN and TAN</li>
                                                    <li>Guidance on compliance and governance</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sd-inner-wrap">
                                <div className="row align-items-center">
                                    <div className="">
                                        <div className="content">
                                            <h4 className="">Benefits</h4>
                                            <p> </p>
                                            <ul className="list-wrap sub-service-details">
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Legal structure and framework</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Compliance with statutory requirements</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Enhanced operational transparency</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Eligibility for various tax benefits and exemptions</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <br/>
                    <section id="3">
                        <h3 className="sub-title">GST Registration</h3>
                        <div className="sub-service-details">
                            <p>Goods and Services Tax (GST) registration is mandatory for businesses meeting certain turnover thresholds. Our GST registration services ensure timely and accurate registration, enabling businesses to comply with tax regulations.</p>
                            <h4 className="">Key Service</h4>
                            <div className="accordion-wrap-three sub-service-details">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                            <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Application preparation and filing
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                            <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Verification and submission of required documents
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                            <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Follow-up with tax authorities for approval
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                            <button className={activeKey === 4 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Guidance on GST compliance and return filing
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sd-inner-wrap">
                                <div className="row align-items-center">
                                    <div className="">
                                        <div className="content">
                                            <h4 className="">Benefits</h4>
                                            <p> </p>
                                            <ul className="list-wrap sub-service-details">
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Legal recognition as a supplier of goods or services</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Eligibility to collect GST from customers</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Input tax credit on purchases</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Enhanced business credibility</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <br/>
                    <section id="4">
                        <h3 className="sub-title">PF/ESI Registration</h3>
                        <div className="sub-service-details">
                            <p>Provident Fund (PF) and Employee State Insurance (ESI) registrations are crucial for businesses with employees. Our PF/ESI registration services ensure compliance with labor laws and provide social security benefits to employees.</p>
                            <h4 className="">Key Service</h4>
                            <div className="accordion-wrap-three sub-service-details">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                            <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Preparation and submission of PF and ESI registration applications
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                            <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Verification and submission of required documents
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                            <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Liaison with authorities for registration approval
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                            <button className={activeKey === 4 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Guidance on compliance and periodic filing
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sd-inner-wrap">
                                <div className="row align-items-center">
                                    <div className="">
                                        <div className="content">
                                            <h4 className="">Benefits</h4>
                                            <p> </p>
                                            <ul className="list-wrap sub-service-details">
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Legal compliance with labor laws</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Social security benefits for employees</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Enhanced employee satisfaction and retention</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Avoidance of legal penalties and fines</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <br/>
                    <section id="5">
                        <h3 className="sub-title">UDYAM AADHAR Registration</h3>
                        <div className="sub-service-details">
                            <p>Udyam Aadhar registration provides recognition and benefits to Micro, Small, and Medium Enterprises (MSMEs). Our Udyam Aadhar registration services help businesses gain access to various government schemes and incentives.</p>
                            <h4 className="">Key Service</h4>
                            <div className="accordion-wrap-three sub-service-details">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                            <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Preparation and submission of Udyam Aadhar application
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                            <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Verification and submission of required documents
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                            <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Assistance with obtaining Udyam Aadhar certificate
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                            <button className={activeKey === 4 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Guidance on benefits and compliance
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sd-inner-wrap">
                                <div className="row align-items-center">
                                    <div className="">
                                        <div className="content">
                                            <h4 className="">Benefits</h4>
                                            <p> </p>
                                            <ul className="list-wrap sub-service-details">
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Official recognition as an MSME</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Access to government schemes and subsidies</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Priority in government procurement</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Easier access to credit and financial support</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <br/>
                    <section id="6">
                        <h3 className="sub-title">FSSAI Registration</h3>
                        <div className="sub-service-details">
                            <p>Food Safety and Standards Authority of India (FSSAI) registration is mandatory for food businesses. Our FSSAI registration services ensure that your food business complies with safety standards and regulations.</p>
                            <h4 className="">Key Service</h4>
                            <div className="accordion-wrap-three sub-service-details">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                            <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Preparation and submission of FSSAI application
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                            <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Verification and submission of required documents
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                            <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Follow-up with FSSAI authorities for approval
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                            <button className={activeKey === 4 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Guidance on compliance and periodic renewal
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sd-inner-wrap">
                                <div className="row align-items-center">
                                    <div className="">
                                        <div className="content">
                                            <h4 className="">Benefits</h4>
                                            <p> </p>
                                            <ul className="list-wrap sub-service-details">
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Legal recognition for your food business</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Compliance with food safety standards</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Enhanced customer trust and credibility</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Avoidance of legal penalties and fines</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>By leveraging our Incorporation and Registration Services, businesses can ensure a smooth and compliant start, paving the way for growth and success. Contact us today to learn more about how we can support your incorporation and registration needs.</p>
                        </div>
                    </section>
                </div>
            </>
        ),
        taxation: (
            <>
                <div className="services-details-content">
                    <h2 className="title">TAXATION MANAGEMENT & PLANNING</h2>
                    <div className="services-details-thumb">
                        <img src="/assets/img/services/services_details05.jpg" alt="" />
                    </div>

                    <p>Effective tax management and planning are crucial for minimizing tax liabilities and ensuring compliance with applicable laws. Our services provide comprehensive tax solutions tailored to your business needs, ensuring optimal tax efficiency.</p>
                    <div className="sub-service-details">
                        <h4 className="">Key Service</h4>
                        <div className="accordion-wrap-three sub-service-details">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                        <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Tax Planning
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Strategic tax planning to minimize tax liabilities</li>
                                                <li>Advisory on tax-saving investments and deductions</li>
                                                <li>Tax-efficient business structuring</li>
                                                <li>Planning for mergers, acquisitions, and other transactions</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                        <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Direct Tax Management
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Preparation and filing of income tax returns</li>
                                                <li>Advance tax calculations and payments</li>
                                                <li>Handling tax assessments and scrutiny</li>
                                                <li>Representation before tax authorities</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                        <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Indirect Tax Management
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                        <div className="accordion-body">
                                            <ul>
                                                <li>GST registration, return filing, and compliance</li>
                                                <li>Advisory on GST rates, exemptions, and credits</li>
                                                <li>Handling GST audits and assessments</li>
                                                <li>Representation before GST authorities</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sd-inner-wrap">
                            <div className="row align-items-center">
                                <div className="">
                                    <div className="content">
                                        <h4 className="">Benefits</h4>
                                        <p> </p>
                                        <ul className="list-wrap sub-service-details">
                                            <li><img src="/assets/img/icons/check_icon.svg" alt="" />Optimized tax liabilities</li>
                                            <li><img src="/assets/img/icons/check_icon.svg" alt="" />Compliance with tax laws and regulations</li>
                                            <li><img src="/assets/img/icons/check_icon.svg" alt="" />Strategic financial planning</li>
                                            <li><img src="/assets/img/icons/check_icon.svg" alt="" />Reduced risk of penalties and disputes</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <section id="1">
                        <h3 className="sub-title">Monthly & Yearly Compliances</h3>
                        <div className="sub-service-details">
                            <p>Staying compliant with monthly and yearly regulatory requirements is essential for the smooth functioning of any business. Our compliance services ensure that your business meets all statutory obligations timely and accurately.</p>
                            <h4 className="">Key Service</h4>
                            <div className="accordion-wrap-three sub-service-details">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                        <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Monthly Compliances
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                        <div className="accordion-body">
                                            <ul>
                                                <li>GST return preparation and filing (GSTR-1, GSTR-3B)</li>
                                                <li>TDS/TCS return filing</li>
                                                <li>Payroll processing and statutory deductions (PF, ESI)</li>
                                                <li>Maintenance of statutory registers and records</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                        <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Quarterly Compliances
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Quarterly TDS return filing (24Q, 26Q)</li>
                                                <li>Advance tax calculations and payments</li>
                                                <li>Compliance with quarterly financial reporting requirements</li>
                                                <li>Submission of quarterly performance reports</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                        <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        Yearly Compliances
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Annual return filing (GST, income tax)</li>
                                                <li>Preparation and filing of financial statements</li>
                                                <li>Annual audit and report submission</li>
                                                <li>Compliance with the Companies Act, 2013</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="sd-inner-wrap">
                        <div className="row align-items-center">
                            <div className="">
                                <div className="content">
                                    <h4 className="">Benefits</h4>
                                    <p> </p>
                                    <ul className="list-wrap sub-service-details">
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Timely and accurate compliance</li>
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Avoidance of legal penalties and interest</li>
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Enhanced financial transparency and accountability</li>
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Peace of mind with professional management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                            </div>
                        </div>
                    </section>
                    <br/>
                    <section id="2">
                        <h3 className="sub-title">Tax System Trainings</h3>
                        <div className="sub-service-details">
                            <p>Understanding the tax system is essential for businesses to manage their tax responsibilities effectively. Our tax system training services equip your team with the knowledge and skills to handle tax-related matters confidently and efficiently.</p>
                            <h4 className="">Key Service</h4>
                            <div className="accordion-wrap-three sub-service-details">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                    <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                    Customized Training Programs
                                    </button>
                                        </h2>
                                        <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Tailored training sessions to meet your business needs</li>
                                                    <li>Practical workshops and interactive sessions</li>
                                                    <li>Training on direct and indirect tax regulations</li>
                                                    <li>Guidance on compliance procedures and documentation</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                            <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            GST Training
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>In-depth understanding of GST laws and regulations</li>
                                                    <li>Training on GST return filing and reconciliation</li>
                                                    <li>Handling GST audits and assessments</li>
                                                    <li>Practical insights on GST compliance</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                            <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                            Income Tax Training
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Overview of income tax laws and provisions</li>
                                                    <li>Training on income tax return preparation and filing</li>
                                                    <li>Tax planning and management strategies</li>
                                                    <li>Handling tax notices and assessments</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sd-inner-wrap">
                                <div className="row align-items-center">
                                    <div className="">
                                        <div className="content">
                                            <h4 className="">Benefits</h4>
                                            <p> </p>
                                            <ul className="list-wrap sub-service-details">
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Enhanced understanding of tax laws and regulations</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Improved compliance and reduced risk of errors</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Empowered team capable of managing tax responsibilities</li>
                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Up-to-date knowledge of latest tax developments</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>By leveraging our Taxation & Compliance services, businesses can ensure efficient tax management, timely compliance, and enhanced understanding of the tax system. Contact us today to learn more about how we can support your taxation and compliance needs.</p>
                        </div>
                    </section>
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
                                            <li className={content === "finance" ? "active" : ""}>
                          <Link
                            href={{
                              pathname: router.pathname,
                              query: { content: "finance" },
                            }}
                            onClick={() => setContent("finance")}
                          >
                            Finance & Accounting{" "}
                            <i className="flaticon-right-arrow" />
                          </Link>
                                            </li>
                                            <li
                          className={content === "management" ? "active" : ""}
                        >
                          <Link
                            href={{
                              pathname: router.pathname,
                              query: { content: "management" },
                            }}
                            onClick={() => setContent("management")}
                          >
                            Management Consulting{" "}
                            <i className="flaticon-right-arrow" />
                          </Link>
                                            </li>
                                            <li
                          className={content === "incorporation" ? "active" : ""}
                        >
                          <Link
                            href={{
                              pathname: router.pathname,
                              query: { content: "incorporation" },
                            }}
                            onClick={() => setContent("incorporation")}
                          >
                            Incorporation & Registration{" "}
                            <i className="flaticon-right-arrow" />
                          </Link>
                                            </li>
                                            <li className={content === "taxation" ? "active" : ""}>
                          <Link
                            href={{
                              pathname: router.pathname,
                              query: { content: "taxation" },
                            }}
                            onClick={() => setContent("taxation")}
                          >
                            Taxation & Compliance{" "}
                            <i className="flaticon-right-arrow" />
                          </Link>
                                            </li>
                                        </ul>
                                        </div>
                                        {/**
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
                                        */}
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* services-details-area-end */}
                </div>

            </Layout>
        </>
    )
}