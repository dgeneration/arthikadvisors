import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Layout from "@/components/layout/Layout"


export default function Carrers() {
    const router = useRouter();
    const [content, setContent] = useState("carrers");

    const [activeKey, setActiveKey] = useState(null);

    const handleToggle = (key) => {
        setActiveKey(prevKey => (prevKey === key ? null : key));
    };

    const contentMap = {
        carrers: (
            <>
                <div className="services-details-content">
                    <h2 className="title">MANAGEMENT CONSULTING</h2>
                    <div className="services-details-thumb">
                        <img src="/assets/img/services/services_details01.jpg" alt="" />
                    </div>
                    <p>Our Management Consulting services are designed to help businesses navigate complex challenges, enhance performance, and achieve their strategic goals. With a focus on tailored solutions, we provide expert guidance and support in business planning, decision-making, and process improvement.</p>
                    <h4 className="">BUSINESS PLANNING</h4>
                    
                    <p>Effective business planning is the cornerstone of long-term success. Our business planning services help organizations develop comprehensive plans that align with their vision and objectives, ensuring a clear roadmap for growth and sustainability.</p>
                    <h4 className="">Key Service</h4>
                    <div className="accordion-wrap-three">
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
                            <div className="col-56">
                                <div className="content">
                                    <h4 className="">Benefits</h4>
                                    <p> </p>
                                    <ul className="list-wrap">
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
            <Layout headerStyle={6} footerStyle={1} breadcrumbTitle="Carrers">
                <div>
                    <section className="services-details-area pt-120 pb-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-71 order-0 order-lg-2">
                                    <div className="services-details-wrap">
                                        {contentMap[content]}
                                    </div>
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