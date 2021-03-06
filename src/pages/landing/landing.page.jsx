import React from 'react'
import { Link } from 'react-router-dom'

import './landing.styles.scss'

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="landing-page_content-wrapper">
                <main className="landing-page_content">
                    <h1>Track your habits.<br /><br />Ensure you complete your tasks - all in one place.</h1>
                    <br /><br />
                    <div className="landing-page_content_auth-options">
                        <Link className="auth-links login" to="/login">Log in</Link>
                        <Link className="auth-links sign-up" to="/sign-up">Create an account</Link>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default LandingPage
