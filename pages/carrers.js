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
                    <h2 className="title">Join Our Dynamic Team</h2>
                    <div className="services-details-thumb">
                        <img src="/assets/img/services/services_details01.jpg" alt="" />
                    </div>
                    <p>At Arthik Advisors India Private Limited, we believe our greatest strength lies in our people. We are dedicated to creating an environment that fosters collaboration, innovation, and professional growth. As a leading business consultancy, we offer a range of career opportunities across Finance & Accounting, Management Consulting, and Taxation & Compliance.</p>
                    <h4 className="">Why Choose Us?</h4>
                    
                    <br></br>
                    <div className="accordion-wrap-three">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                    <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                    1. Professional Growth:
                                    </button>
                                </h2>
                                <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li><b>Career Advancement:</b> We offer clear career paths and opportunities for advancement. Our team members are encouraged to take on new challenges and broaden their skills.</li>
                                            <br></br>
                                            <li><b>Continuous Learning: </b> Access to ongoing professional development and training to enhance your expertise and support your career progression.</li>
                                            
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                    <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                    2. Innovative Work Environment:
                                    </button>
                                </h2>
                                <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li><b>Collaborative Culture: </b> Join a dynamic team that values open communication and teamwork, where your ideas and contributions are valued.</li>
                                            <br></br>
                                            <li><b>Diverse Projects: </b> Engage in a variety of impactful projects that will challenge you and contribute to your professional development.</li>
                                            
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                    <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                    3. Employee Well-being:
                                    </button>
                                </h2>
                                <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <ul>
                                            <li><b>Work-Life Balance: </b> We provide flexible working options to help you maintain a healthy balance between your professional and personal life.</li>
                                            <br></br>
                                            <li><b>Comprehensive Benefits: </b> Enjoy a competitive salary package and benefits designed to support your health, well-being, and financial stability.</li>
                                            
                                            
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
                                    <h4 className="">Join Our Team</h4>
                                    <p> We are always on the lookout for talented individuals who are passionate about making a difference. If you are interested in pursuing a career with us, we encourage you to explore the opportunities available and apply.</p>
                                    
                                    <h4 className="">How to Apply</h4>
                                    <p> To express your interest in joining our team, please send your resume and a cover letter detailing your experience and career goals to careers@arthikadvisors.com. Be sure to include your area of interest in the subject line of your email.</p>
                                    

                                    <h4 className="">Contact Us:</h4>
                                    <p> For more information about career opportunities or to discuss potential roles, please contact our HR department at careers@arthikadvisors.com.</p>


                                    <h4 className="">Become Part of Our Success</h4>
                                    <p> At Arthik Advisors India Private Limited, we are committed to building a team of dedicated professionals who are eager to contribute and grow. If you are looking for a rewarding career with ample opportunities for advancement, we invite you to apply and become part of our journey.</p>
                                        


                                </div>
                            </div>
                        </div>
                    </div>

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