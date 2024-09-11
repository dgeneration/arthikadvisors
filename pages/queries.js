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
    const [BusinessOption, setBusinessOption] = useState('');

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

    const handleBusinessChange = (event) => {
        const value = event.target.value;
        setBusinessOption(value);
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
                            <form action='https://forms.zohopublic.in/arthikadvisors1/form/ProjectReportService/formperma/Whu0LWIVu7e32dfUVcIj4BoGOvzUjJJ9lD3njjgPuAE/htmlRecords/submit' name='form' id='form' method='POST' acceptCharset='UTF-8' encType='multipart/form-data' autoComplete="on" target="_blank">

                                {/**Page 1 */}

                                    <div className={currentStep === 1 ? '' : 'div-hide'}>
                                        <input type="hidden" name="zf_referrer_name" value=""/>{/* To Track referrals , place the referrer name within the " " in the above hidden input field */}
                                        <input type="hidden" name="zf_redirect_url" value=""/>{/* To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field */}
                                        <input type="hidden" name="zc_gad" value=""/>{/* If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM */}
                                        <div className="queries-form-div-section">
                                            <h6>Name</h6>
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">First Name*
                                                        <input className="queries-form-input" id="given-name" autoComplete="given-name" type="text" maxLength="255" name="Name_First" placeholder="" required/>
                                                    </label>
                                                </div>
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Last Name*
                                                        <input className="queries-form-input" id="family-name" autoComplete="family-name" type="text" maxLength="255" name="Name_Last" placeholder="" required/>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="queries-form-div-section">
                                            <h6>Firm Details</h6>
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Firm Name*
                                                        <input className="queries-form-input" id="organization" autoComplete="organization" type="text" maxLength="255" name="SingleLine" placeholder="" required/>
                                                    </label>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Street Address*
                                                        <input className="queries-form-input" id="address-line1" autoComplete="address-line1" type="text" maxLength="255" name="Address_AddressLine1" placeholder="" required/>
                                                    </label>
                                                </div>
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Address Line 2
                                                        <input className="queries-form-input" id="address-line2" autoComplete="address-line2" type="text" maxLength="255" name="Address_AddressLine2" placeholder="" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">City*
                                                        <input className="queries-form-input" id="address-level2" autoComplete="address-level2" type="text" maxLength="255" name="Address_City" placeholder="" required/>
                                                    </label>
                                                </div>
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">State/Region/Province*
                                                        <input className="queries-form-input" id="address-level1" autoComplete="address-level1" type="text" maxLength="255" name="Address_Region" placeholder="" required/>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Postal / Zip Code*
                                                        <input className="queries-form-input" id="postal-code" autoComplete="postal-code" type="text" maxLength="255" name="Address_ZipCode" placeholder="" required/>
                                                    </label>
                                                </div>
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Country*
                                                        <input className="queries-form-input" id="country-name" autoComplete="country-name" type="text" maxLength="255" name="Address_Country" placeholder="" required/>
                                                    </label>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Email*
                                                        <input className="queries-form-input" id="email" autoComplete="email" type="email" maxLength="255" name="Email" placeholder="" required/>
                                                    </label>
                                                </div>
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Mobile Number*
                                                        <input className="queries-form-input" id="tel" autoComplete="tel" type="tel" maxLength="255" name="PhoneNumber_countrycode" placeholder="" required/>
                                                    </label>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Type of Business*
                                                        <select name="Dropdown" className="queries-form-input" required>
                                                            <option className="queries-form-input" value="Manufacturer">Manufacturer</option>
                                                            <option className="queries-form-input" value="Service">Service</option>
                                                            <option className="queries-form-input" value="Traders">Traders</option>
                                                        </select>
                                                    </label>
                                                </div>
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Old Business*
                                                        <select name="Dropdown1" className="queries-form-input" value={BusinessOption} onChange={handleBusinessChange} required>
                                                            <option className="queries-form-input" value="Yes">Yes</option>
                                                            <option className="queries-form-input" value="No">No</option>
                                                        </select>
                                                    </label>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="queries-form-name queries-form-one-grid">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Business Description*
                                                        <textarea className="queries-form-input queries-form-large-input" type="text" maxLength="65535" name="MultiLine" placeholder="" required/>
                                                    </label>
                                                </div>
                                            </div>
                                            <br/>
                                            <button type="button" className="btn small-btn" onClick={nextStep}>Next</button>
                                        </div>
                                    </div>

                                {/**Page 2 */}

                                    <div className={currentStep === 2 ? '' : 'div-hide'}>
                                        <button type="button" className="back-button" onClick={prevStep}>Back</button>
                                        <br/>
                                        <br/>
                                        <div className="queries-form-div-section">
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Amount of Term Loan*
                                                        <input className="queries-form-input" type="text" maxLength="50" name="Currency" placeholder="" required/>
                                                    </label>
                                                </div>
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Rate of Interest*
                                                        <input className="queries-form-input" type="text" maxLength="50" name="SingleLine1" placeholder="" required/>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="queries-form-div-section">
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Tenure*
                                                        <select name="Dropdown3" className="queries-form-input" value={TenureOption} onChange={handleTenureChange} required>
                                                            <option className="queries-form-input" value="1&#x20;Year">1 Year</option>
                                                            <option className="queries-form-input" value="3&#x20;Year">3 Year</option>
                                                            <option className="queries-form-input" value="5&#x20;Year">5 Year</option>
                                                            <option className="queries-form-input" value="7&#x20;Year">7 Year</option>
                                                            <option className="queries-form-input" value="Other">Other</option>
                                                        </select>
                                                    </label>
                                                </div>
                                                {TenureOption === 'Other' && (
                                                    <div className="queries-form-input-div">
                                                        <label className="queries-form-label">Enter Tenure*
                                                            <input className="queries-form-input" type="text" maxLength="50" value={customOption} onChange={handleCustomOptionChange} placeholder="" />
                                                        </label>
                                                    </div>
                                                )}
                                            </div>
                                            <br/>
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Amount of CC/OD*
                                                        <input className="queries-form-input" type="text" maxLength="50" name="Currency1" placeholder="" required/>
                                                    </label>
                                                </div>
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Loan Type*
                                                        <select name="Radio" className="queries-form-input" value={LoanOption} onChange={handleLoanChange} required>
                                                            <option className="queries-form-input" value="New">New</option>
                                                            <option className="queries-form-input" value="Renewal">Renewal</option>
                                                        </select>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">New Limit*
                                                        <input className="queries-form-input" type="text" maxLength="50" name="Currency3" placeholder="" required/>
                                                    </label>
                                                </div>
                                                {LoanOption === 'Renewal' && (
                                                    <div className="queries-form-input-div">
                                                        <label className="queries-form-label">Existing Limit*
                                                            <input className="queries-form-input" type="text" maxLength="50" name="Currency2" placeholder="" required/>
                                                        </label>
                                                    </div>
                                                )}
                                            </div>
                                            <br/>
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Bank Name*
                                                        <input className="queries-form-input" type="text" maxLength="255" name="SingleLine2" placeholder="" required/>
                                                    </label>
                                                </div>
                                                <div className="queries-form-input-div">
                                                    <label className="queries-form-label">Bank Branch Name*
                                                        <input className="queries-form-input" type="text" maxLength="255" name="SingleLine3" placeholder="" required/>
                                                    </label>
                                                </div>
                                            </div>
                                            <br/>
                                            <h6>Upload Documents</h6>
                                            <div className="queries-form-name">
                                                <div className="queries-form-input-div queries-form-upload-div">
                                                    <label className="queries-form-label">
                                                        <input className="queries-form-input" type="file" name="FileUpload" checktype="c1"  multiple="multiple" required/>
                                                        Pan, Aadhar, GST Regn/ Udyam Aadhar
                                                    </label>
                                                </div>
                                                {BusinessOption === 'Yes' && (
                                                <div className="queries-form-input-div queries-form-upload-div">
                                                    <label className="queries-form-label">
                                                        <input className="queries-form-input" type="file" name="FileUpload1" checktype="c1"  multiple="multiple" />
                                                        Last Year Balance Sheet
                                                    </label>
                                                </div>
                                                )}
                                            </div>
                                            <br/>
                                            <div className="queries-form-name queries-form-one-grid">
                                                <div className="queries-form-input-div queries-form-term-div">
                                                    <label>
                                                        <input className="queries-form-term-checkbox" name="TermsConditions" type="checkbox" required />
                                                        I accept the Terms and Conditions.
                                                    </label>
                                                </div>
                                            </div>
                                            <br />
                                            <button type="submit" className="btn small-btn">Submit</button>
                                        </div>
                                    </div>

                            </form>
                        </div>
                        <iframe width="0" height="0" border="0" name="dummyframe" id="dummyframe"></iframe>
                    </section>
                </div>
            </Layout>
        </>
    )
}