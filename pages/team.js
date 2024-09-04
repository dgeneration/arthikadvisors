import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Layout from "@/components/layout/Layout"


export default function Team() {
    const router = useRouter();
    const [content, setContent] = useState("team");

    const [activeKey, setActiveKey] = useState(null);

    const handleToggle = (key) => {
        setActiveKey(prevKey => (prevKey === key ? null : key));
    };

    const contentMap = {
        team: (
            <>
                <div className="services-details-content">
                    <h2 className="title">Our Team</h2>
                    <div className="services-details-thumb">
                        <img src="/assets/img/services/services_details01.jpg" alt="" />
                    </div>
                    <p>At Arthik Advisory Firm, our strength lies in the diverse expertise and dedication of our exceptional team. Led by Sarah Thompson, our Founder & Chief Executive Officer, who has over 20 years of experience in business strategy and financial planning, we are committed to providing world-class advisory services that help businesses grow and thrive. Sarah’s leadership and visionary approach have been the driving force behind the success of our firm and the transformative results we've delivered to our clients.</p>
                    

                    <br></br>
                    

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
            <Layout headerStyle={6} footerStyle={1} breadcrumbTitle="Team">
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