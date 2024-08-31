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
                   
                    <h3 className="">Accounting Outsourcing Services</h3>
                    <p>Our accounting outsourcing services offer businesses the opportunity to delegate their accounting functions to a team of seasoned professionals. This allows companies to focus on their core operations while benefiting from our expertise in managing financial processes efficiently and cost-effectively.</p>
                    <h4 className="">Key Service</h4>
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
                    <div className="sd-inner-wrap">
                        <div className="row align-items-center">
                            <div className="col-56">
                                <div className="content">
                                    <h4 className="">Benefits</h4>
                                    <p> </p>
                                    <ul className="list-wrap">
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
                </div>
                <p>By choosing our accounting and accounting outsourcing services, you can ensure that your financial operations are managed with precision and professionalism, freeing you to concentrate on driving your business forward. Contact us today to learn more about how we can support your financial needs.</p>

                    <h2 className="title">VIRTUAL CFO SERVICES</h2>
                    <div className="services-details-thumb">
                        <img src="/assets/img/services/services_details01.jpg" alt="" />
                    </div>
                    
                    <p>Our Virtual CFO services provide businesses with the strategic financial expertise of a Chief Financial Officer without the cost and commitment of a full-time hire. Tailored to meet the unique needs of your business, our Virtual CFO services help you make informed financial decisions, manage risks, and drive growth.</p>
                    <h4 className="">Key Service</h4>
                    <div className="accordion-wrap-three">
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
                            <div className="col-56">
                                <div className="content">
                                    <h4 className="">Benefits</h4>
                                    <p> </p>
                                    <ul className="list-wrap">
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

                    <h2 className="title">ACCOUNTING & ALLIED SERVICES</h2>
                    <div className="services-details-thumb">
                        <img src="/assets/img/services/services_details01.jpg" alt="" />
                    </div>
                    
                    <p>Our Accounting & Allied Services are designed to provide comprehensive financial management solutions that ensure accuracy, compliance, and strategic insight. From financial statement preparation to account reconciliation and compliance assistance, our services cater to the diverse needs of businesses, enabling them to maintain robust financial health and regulatory adherence.</p>
                    <h4 className="">Key Service</h4>
                    <div className="accordion-wrap-three">
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
                            <div className="col-56">
                                <div className="content">
                                    <h4 className="">Benefits</h4>
                                    <p> </p>
                                    <ul className="list-wrap">
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


                    <h2 className="title">PROJECT REPORT AND CMA PREPARATION</h2>
                    <div className="services-details-thumb">
                        <img src="/assets/img/services/services_details01.jpg" alt="" />
                    </div>
                    
                    <p>Our Project Report and Credit Monitoring Arrangement (CMA) Preparation services are tailored to support businesses in obtaining financing and monitoring their credit health. We provide detailed and professionally crafted reports that meet the requirements of financial institutions, enabling businesses to secure loans, manage credit, and achieve their financial objectives.</p>
                    <h4 className="">Key Service</h4>
                    <div className="accordion-wrap-three">
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
                            <div className="col-56">
                                <div className="content">
                                    <h4 className="">Benefits</h4>
                                    <p> </p>
                                    <ul className="list-wrap">
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