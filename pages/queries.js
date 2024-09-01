import React, { useState } from "react"
import Layout from "@/components/layout/Layout"

export default function Contact() {
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        setCurrentStep(prevStep => prevStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(prevStep => prevStep - 1);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
    };

    const [TenureOption, setTenureOption] = useState('');
    const [customOption, setCustomOption] = useState('');

    const [LoanOption, setLoanOption] = useState('');

    const handleTenureChange = (event) => {
        const value = event.target.value;
        setTenureOption(value);
        if (value !== 'Other') {
            setCustomOption(''); // Clear custom option when other options are selected
        }
    };

    const handleLoanChange = (event) => {
        const value = event.target.value;
        setLoanOption(value);
    };

    const handleCustomOptionChange = (event) => {
        setCustomOption(event.target.value);
    };

    return (
        <>
            <Layout headerStyle={6} footerStyle={1} breadcrumbTitle="Queries">
                <div>
                    <section className="banner-area-two banner-bg-two queries-section" data-background="/assets/img/banner/h2_banner_bg.jpg">
                        <div className="features-item queries-outer-div">
                            <form action='https://forms.zohopublic.in/adminhet1/form/ServiceRequest/formperma/itEFuL95oJTEy844YcjMpf-ZeQuYu1ogZx1JlSzZlYg/htmlRecords/submit' name='form' id='form' method='POST' acceptCharset='UTF-8' encType='multipart/form-data'>
                                {currentStep === 1 && (
                                    <div>
                                        <input type="hidden" name="zf_referrer_name" value=""/>{/* To Track referrals , place the referrer name within the " " in the above hidden input field */}
                                        <input type="hidden" name="zf_redirect_url" value=""/>{/* To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field */}
                                        <input type="hidden" name="zc_gad" value=""/>{/* If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM */}
                                        <div className="queries-form-div-section">
                                            <h6>Name</h6>
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">First Name</label>
                                                    <input className="queries-form-input" type="text" maxLength="255" name="Name_First" placeholder="" />
                                                </div>
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Last Name</label>
                                                    <input className="queries-form-input" type="text" maxLength="255" name="Name_Last" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="queries-form-div-section">
                                            <h6>Firm Details</h6>
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Firm Name</label>
                                                    <input className="queries-form-input" type="text" maxLength="255" name="SingleLine" placeholder="" />
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Street Address</label>
                                                    <input className="queries-form-input" type="text" maxLength="255" name="Address_AddressLine1" placeholder="" />
                                                </div>
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Address Line 2</label>
                                                    <input className="queries-form-input" type="text" maxLength="255" name="Address_AddressLine2" placeholder="" />
                                                </div>
                                            </div>
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">City</label>
                                                    <input className="queries-form-input" type="text" maxLength="255" name="Address_City" placeholder="" />
                                                </div>
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">State/Region/Province</label>
                                                    <input className="queries-form-input" type="text" maxLength="255" name="Address_Region" placeholder="" />
                                                </div>
                                            </div>
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Postal / Zip Code</label>
                                                    <input className="queries-form-input" type="text" maxLength="255" name="Address_ZipCode" placeholder="" />
                                                </div>
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Country</label>
                                                    <input className="queries-form-input" type="text" maxLength="255" name="Address_Country" placeholder="" />
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Email</label>
                                                    <input className="queries-form-input" type="text" maxLength="255" name="Email" placeholder="" />
                                                </div>
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Mobile Number</label>
                                                    <input className="queries-form-input" type="text" maxLength="255" name="PhoneNumber_countrycode" placeholder="" />
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Type of Business</label>
                                                    <select name="Dropdown" className="queries-form-input">
                                                        <option className="queries-form-input" value="Manufacturer">Manufacturer</option>
                                                        <option className="queries-form-input" value="Service">Service</option>
                                                        <option className="queries-form-input" value="Traders">Traders</option>
                                                    </select>
                                                </div>
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Old Business</label>
                                                    <select name="Dropdown1" className="queries-form-input">
                                                        <option className="queries-form-input" value="Yes">Yes</option>
                                                        <option className="queries-form-input" value="No">No</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="queries-form-name queries-form-one-grid">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Business Description</label>
                                                    <textarea className="queries-form-input queries-form-large-input" type="text" maxLength="65535" name="MultiLine" placeholder="" />
                                                </div>
                                            </div>
                                            <button type="button" onClick={nextStep}>Next</button>
                                        </div>
                                    </div>
                                )}

                                {currentStep === 2 && (
                                    <div>
                                        <div className="queries-form-div-section">
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Amount of Term Loan</label>
                                                    <input className="queries-form-input" type="text" maxLength="50" name="Currency" placeholder="" />
                                                </div>
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Rate of Interest</label>
                                                    <input className="queries-form-input" type="text" maxLength="50" name="SingleLine1" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="queries-form-div-section">
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Tenure</label>
                                                    <select name="Dropdown3" className="queries-form-input" value={TenureOption} onChange={handleTenureChange}>
                                                        <option className="queries-form-input" value="1&#x20;Year">1 Year</option>
                                                        <option className="queries-form-input" value="3&#x20;Year">3 Year</option>
                                                        <option className="queries-form-input" value="5&#x20;Year">5 Year</option>
                                                        <option className="queries-form-input" value="7&#x20;Year">7 Year</option>
                                                        <option className="queries-form-input" value="Other">Other</option>
                                                    </select>
                                                </div>
                                                {TenureOption === 'Other' && (
                                                    <div className="queries-form-input-div">
                                                        <label className="queries-form-label">Enter Tenure</label>
                                                        <input className="queries-form-input" type="text" maxLength="50" value={customOption} onChange={handleCustomOptionChange} placeholder="" />
                                                    </div>
                                                )}
                                            </div>
                                            <br/>
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Amount of CC/OD</label>
                                                    <input className="queries-form-input" type="text" maxLength="50" name="Currency1" placeholder="" />
                                                </div>
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Loan Type</label>
                                                    <select name="Radio" className="queries-form-input" value={LoanOption} onChange={handleLoanChange}>
                                                        <option className="queries-form-input" value="New">New</option>
                                                        <option className="queries-form-input" value="Renewal">Renewal</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">New Limit</label>
                                                    <input className="queries-form-input" type="text" maxLength="50" name="Currency3" placeholder="" />
                                                </div>
                                                {LoanOption === 'Renewal' && (
                                                    <div className="queries-form-input-div">
                                                        <label className="queries-form-label">Existing Limit</label>
                                                        <input className="queries-form-input" type="text" maxLength="50" name="Currency2" placeholder="" />
                                                    </div>
                                                )}
                                            </div>
                                            <br/>
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Bank Name</label>
                                                    <input className="queries-form-input" type="text" maxLength="255" name="SingleLine2" placeholder="" />
                                                </div>
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Bank Branch Name </label>
                                                    <input className="queries-form-input" type="text" maxLength="255" name="SingleLine3" placeholder="" />
                                                </div>
                                            </div>
                                            <br/>
                                            <h6>Upload Documents</h6>
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div queries-form-upload-div">
                                                    <input className="queries-form-input" type="file" name="FileUpload" checktype="c1"  multiple="multiple" />
                                                    <label className="queries-form-label">Pan, Aadhar, GST Regn/ Udyam Aadhar</label>
                                                </div>
                                                <div className="queries-form-input-div queries-form-upload-div">
                                                    <input className="queries-form-input" type="file" name="FileUpload1" checktype="c1"  multiple="multiple" />
                                                    <label className="queries-form-label">Last Year Balance Sheet</label>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="queries-form-name queries-form-one-grid">
                                                <div className="queries-form-input-div queries-form-term-div">
                                                    <input className="queries-form-term-checkbox" name="TermsConditions" type="checkbox" /><label>I accept the Terms and Conditions.</label>
                                                </div>
                                            </div>
                                            <button type="button" onClick={prevStep}>Back</button>
                                            <button type="submit">Submit</button>
                                        </div>
                                    </div>
                                )}
                            </form>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}