import Layout from "@/components/layout/Layout"

export default function Contact() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={1} breadcrumbTitle="Queries">
                <div>
                    <section className="banner-area-two banner-bg-two queries-section" data-background="/assets/img/banner/h2_banner_bg.jpg">
                        <div className="features-item queries-outer-div">
                            <form action='https://forms.zohopublic.in/adminhet1/form/ServiceRequest/formperma/itEFuL95oJTEy844YcjMpf-ZeQuYu1ogZx1JlSzZlYg/htmlRecords/submit' name='form' id='form' method='POST' acceptCharset='UTF-8' encType='multipart/form-data'>
                                <input type="hidden" name="zf_referrer_name" value=""/>{/* To Track referrals , place the referrer name within the " " in the above hidden input field */}
                                <input type="hidden" name="zf_redirect_url" value=""/>{/* To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field */}
                                <input type="hidden" name="zc_gad" value=""/>{/* If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM */}
                                <div className="queries-form-div-section">
                                    <h6>Name</h6>
                                    <div className="queries-form-name">
                                        <div className="queries-form-input-div">
                                            <label className="queries-form-label">First Name</label>
                                            <input type="text" maxLength="255" name="Name_First" placeholder="" />
                                        </div>
                                        <div className="queries-form-input-div">
                                            <label className="queries-form-label">Last Name</label>
                                            <input type="text" maxLength="255" name="Name_Last" placeholder="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="queries-form-div-section">
                                    <h6>Firm Details</h6>
                                    <div className="queries-form-name">
                                        <div className="queries-form-input-div">
                                            <label className="queries-form-label">Firm Name</label>
                                            <input type="text" maxLength="255" name="SingleLine" placeholder="" />
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="queries-form-name">
                                        <div className="queries-form-input-div">
                                            <label className="queries-form-label">Street Address</label>
                                            <input type="text" maxLength="255" name="Address_AddressLine1" placeholder="" />
                                        </div>
                                        <div className="queries-form-input-div">
                                            <label className="queries-form-label">Address Line 2</label>
                                            <input type="text" maxLength="255" name="Address_AddressLine2" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="queries-form-name">
                                        <div className="queries-form-input-div">
                                            <label className="queries-form-label">City</label>
                                            <input type="text" maxLength="255" name="Address_City" placeholder="" />
                                        </div>
                                        <div className="queries-form-input-div">
                                            <label className="queries-form-label">State/Region/Province</label>
                                            <input type="text" maxLength="255" name="Address_Region" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="queries-form-name">
                                        <div className="queries-form-input-div">
                                            <label className="queries-form-label">Postal / Zip Code</label>
                                            <input type="text" maxLength="255" name="Address_ZipCode" placeholder="" />
                                        </div>
                                        <div className="queries-form-input-div">
                                            <label className="queries-form-label">Country</label>
                                            <input type="text" maxLength="255" name="Address_Country" placeholder="" />
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="queries-form-name">
                                        <div className="queries-form-input-div">
                                            <label className="queries-form-label">Email</label>
                                            <input type="text" maxLength="255" name="Email" placeholder="" />
                                        </div>
                                        <div className="queries-form-input-div">
                                            <label className="queries-form-label">Mobile Number</label>
                                            <input type="text" maxLength="255" name="PhoneNumber_countrycode" placeholder="" />
                                        </div>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}