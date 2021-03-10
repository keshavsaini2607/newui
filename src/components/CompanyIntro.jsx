import React from 'react'
import editorimg from '../assets/editor.svg'
import './CompanyIntro.css'

const CompanyIntro = () => {
    return (
        <div className="companyIntro">
            <div className="companyIntro__content">
            <h1>We at QuantaVid</h1>
            <p>
                QuantaVid, LLC is a SaaS company based in The United States of
                America. It is an artificial intelligence (AI)-powered video
                generating platform, designed to automatically generate high quality
                personalized and promotional videos for brands, digital publishers
                and businesses. The data driven dynamic video content can be used
                for marketing and ad campaigns, sales promotion and much more.
            </p>
            </div>
            <div className="editorCompany">
            <img src={editorimg} alt="Editor" />
            </div>
        </div>
    )
}

export default CompanyIntro
