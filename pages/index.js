import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Choose from "@/components/sections/home1/Choose"
import Cta from "@/components/sections/home1/Cta"
import Features from "@/components/sections/home1/Features"
import Overview from "@/components/sections/home1/Overview"
import Pricing from "@/components/sections/home1/Pricing"
import Request from "@/components/sections/home1/Request"
import Services from "@/components/sections/home1/Services"
import Team from "@/components/sections/home1/Team"
import Testimonial from "@/components/sections/home1/Testimonial"

export default function Home1() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={2}>
                <Banner />
                <Features />
                <About />
                <Services />
                <Overview />
                {/*<Team />*/}
                <Request />
            </Layout>
        </>
    )
}