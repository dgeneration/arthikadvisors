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
                                        <h3 className="title-two">Qualifications and Specializations</h3>
                                        <div className="accordion-wrap-three">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                                        <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Chartered Accountant (CA) + DISA
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Vinit is a Chartered Accountant, demonstrating advanced proficiency in accounting, auditing, and financial management. He also holds a Diploma in Information Systems Audit (DISA), highlighting his specialized skills in auditing and controlling information systems.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                                        <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Member of the Association of Certified Fraud Examiners (ACFE)
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>As a member of the ACFE, Vinit is recognized for his expertise in fraud prevention, detection, and investigation. This membership underscores his commitment to upholding high standards in combating financial fraud and ensuring integrity in financial practices.</li>
                                                            </ul>

                                                            


                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                
                                                


                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-skill-wrap">
                                        <h3 className="title-two">Expertise Areas</h3>
                                        <div className="accordion-wrap-three">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                                        <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Finance and Accounting
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Vinit excels in overseeing financial operations, ensuring accuracy in accounting practices, and maintaining regulatory compliance. His work includes financial reporting, analysis, and the implementation of sound accounting principles.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                                        <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Strategy
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>He provides strategic counsel to businesses, aiding in the development and execution of strategies that support long-term objectives. This includes market analysis, strategic planning, and performance evaluation.</li>
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
                                                    <div id="collapseTwo" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Vinit helps organizations craft comprehensive financial plans, including budgeting, forecasting, and financial modelling. His planning ensures that resources are optimally allocated and financial targets are achieved.</li>
                                                            </ul>

                                                            


                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                                        <button className={activeKey === 4 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Valuation
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className={activeKey === 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Vinit performs precise valuations of businesses, assets, and securities using various methodologies. His valuations are critical for investment decisions, mergers, acquisitions, and financial disclosures.</li>
                                                            </ul>

                                                            


                                                        </div>
                                                    </div>
                                                </div> 


                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(5)}>
                                                        <button className={activeKey === 5 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        M&A Advisory
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className={activeKey === 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>He offers expert advice on mergers and acquisitions, assisting clients in evaluating targets, conducting due diligence, and structuring transactions to maximize value and mitigate risks.</li>
                                                            </ul>

                                                            


                                                        </div>
                                                    </div>
                                                </div> 
                                              
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(6)}>
                                                        <button className={activeKey === 6 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Due Diligence
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className={activeKey === 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Vinit conducts rigorous due diligence to assess the financial, operational, and legal aspects of potential investments or acquisitions, identifying risks and opportunities to support informed decision-making.</li>
                                                            </ul>

                                                            


                                                        </div>
                                                    </div>
                                                </div> 

                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(7)}>
                                                        <button className={activeKey === 7 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Risk Control Advisory
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className={activeKey === 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Vinit provides strategic guidance on risk management, helping businesses implement effective internal controls and risk mitigation strategies to protect against potential threats and ensure regulatory compliance.</li>
                                                            </ul>

                                                            


                                                        </div>
                                                    </div>
                                                </div> 
                                                

                                                <div className="team-skill-wrap">
                                        <h3 className="title-two">Experience with the Startup Ecosystem</h3>
                                        <div className="accordion-wrap-three">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(8)}>
                                                        <button className={activeKey === 8 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Startup Ecosystem Knowledge
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>With extensive experience in the startup sector, Vinit understands the unique challenges and opportunities faced by startups. He provides expertise in areas such as funding, growth strategies, and operational scaling tailored to high-growth and early-stage companies.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                

                                                
                                                
                                                
                                                


                                            </div>
                                        </div>
                                    </div>

                                    <div className="team-skill-wrap">
                                        <h3 className="title-two">Entrepreneurial Spirit and Consulting Experience</h3>
                                        <div className="accordion-wrap-three">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(9)}>
                                                        <button className={activeKey === 9 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Lead Consultant
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 9 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Vinit has demonstrated his entrepreneurial spirit by leading finance teams across various domestic and multinational corporations (MNCs). His role as a lead consultant involves offering strategic oversight, enhancing financial performance, and aligning finance functions with organizational goals.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                

                                                
                                                
                                                
                                                


                                            </div>
                                        </div>
                                    </div>


                                    <div className="team-skill-wrap">
                                        <h3 className="title-two">Clientele</h3>
                                        <div className="accordion-wrap-three">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(10)}>
                                                        <button className={activeKey === 10 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Vinit’s diverse clientele includes both established domestic companies and MNCs, showcasing his ability to adapt and provide tailored solutions in various business environments.
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 10 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li></li>
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
                                    <h2 className="title">Shashank Pandey</h2>
                                    <span>Director</span>
                                    <p>Shashank, a Law graduate & Intermediate of Chartered Accountancy course by profession, who started his career in the year of 2015. He has more than 9 years of experience with strong hold in indirect tax laws in India. He not just plans financial and taxation restructuring but also advises businesses on its legal implications.</p>
                                    <div className="team-skill-wrap">
                                        <h3 className="title-two">Educational Background</h3>
                                        <div className="accordion-wrap-three">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(11)}>
                                                        <button className={activeKey === 11 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Law Graduate
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 11 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Shashank holds a degree in Law, which equips him with a strong foundation in legal principles and practices. His legal education provides him with a deep understanding of regulatory frameworks, compliance issues, and legal intricacies that impact businesses.</li>
                                                                
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(12)}>
                                                        <button className={activeKey === 12 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Intermediate of Chartered Accountancy
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className={activeKey === 12 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>: Shashank has completed the Intermediate level of the Chartered Accountancy course, indicating advanced knowledge and expertise in accounting, finance, and taxation. This qualification demonstrates his proficiency in financial management, auditing, and tax regulations.</li>
                                                                
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>

                                    <div className="team-skill-wrap">
                                        <h3 className="title-two">Professional Experience</h3>
                                        <div className="accordion-wrap-three">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(13)}>
                                                        <button className={activeKey === 13 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Career Beginnings
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 13 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Shashank began his professional career in 2015, marking the start of his journey in the field of finance and taxation. Over the years, he has accumulated more than 9 years of experience, gaining significant expertise and practical knowledge in his areas of specialization.</li>
                                                                
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                
                                            </div>
                                        </div>
                                    </div>

                                    <div className="team-skill-wrap">
                                        <h3 className="title-two">Expertise and Specializations</h3>
                                        <div className="accordion-wrap-three">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(14)}>
                                                        <button className={activeKey === 14 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Indirect Tax Laws in India
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 14 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Shashank has a strong command of indirect tax laws in India, including Goods and Services Tax (GST), Value Added Tax (VAT), and other related regulations. </li>
                                                                
                                                            </ul>

                                                    



                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                
                                            </div>


                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(15)}>
                                                        <button className={activeKey === 15 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Advisory
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 15 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Providing strategic advice on indirect tax matters, such as tax planning, optimization, and implementation of tax-efficient strategies</li>
                                                                
                                                            </ul>

                                                    



                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                
                                            </div>

                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(16)}>
                                                        <button className={activeKey === 16 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Dispute Resolution
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 16 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Assisting businesses in resolving disputes with tax authorities, including handling audits and appeals.</li>
                                                                
                                                            </ul>

                                                    



                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                
                                            </div>

                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(17)}>
                                                        <button className={activeKey === 17 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Financial and Taxation Restructuring
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 17 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>: Shashank specializes in planning and executing financial and taxation restructuring for businesses.</li>
                                                                
                                                            </ul>

                                                    



                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                
                                            </div>

                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(18)}>
                                                        <button className={activeKey === 18 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Restructuring Strategies
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 18 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li> Developing and implementing strategies to optimize financial and tax positions, enhance operational efficiency, and improve overall financial health.</li>
                                                                
                                                            </ul>

                                                    



                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                
                                            </div>

                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(19)}>
                                                        <button className={activeKey === 19 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Legal Implications
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 19 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Assessing the legal implications of restructuring plans to ensure compliance with applicable laws and regulations. This includes evaluating the impact on contracts, corporate governance, and regulatory requirements.</li>
                                                                
                                                            </ul>

                                                    



                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                
                                            </div>

                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(20)}>
                                                        <button className={activeKey === 20 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Legal Advisory
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 20 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>In addition to his expertise in taxation, Shashank provides legal advisory services to businesses.</li>
                                                                
                                                            </ul>

                                                    



                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                
                                            </div>

                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(21)}>
                                                        <button className={activeKey === 21 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Regulatory Compliance
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 21 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Advising on compliance with various legal and regulatory requirements affecting business operations.</li>
                                                                
                                                            </ul>

                                                    



                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                
                                            </div>
                                            

                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(22)}>
                                                        <button className={activeKey === 22 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Contractual Matters
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 22 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Reviewing and drafting contracts to ensure legal soundness and protect business interests.</li>
                                                                
                                                            </ul>

                                                    



                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                
                                            </div>


                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(23)}>
                                                        <button className={activeKey === 23 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                        Risk Management
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className={activeKey === 23 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Identifying potential legal risks and offering solutions to mitigate them.</li>
                                                                
                                                            </ul>

                                                    



                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                
                                            </div>


                                            

                                           

                                            <p>Shashank’s profile reflects a robust blend of legal and accounting expertise, with a particular focus on indirect tax laws in India. His extensive experience and dual qualification enable him to provide comprehensive services, from financial and taxation restructuring to legal advisory. His approach ensures that businesses not only achieve optimal tax efficiency but also navigate the complex legal landscape effectively</p>


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
                                    <h2 className="title">Mayank Pandey</h2>
                                    <span>Principal Consultant</span>
                                    <p>Mayank Pandey, A Chartered Accountant having more than 10 years of experience and alumnus of IIM (Ahmadabad), is our principal advisor in case of Startup Strategy, Transfer pricing, M&A advisory, Audit and assurance activities and risk control advisory.</p>
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