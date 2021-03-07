import React from 'react'
import Userfront from "@userfront/react";

import './sign-up.styles.scss'

Userfront.init("xbpmdmnz")

const SignupForm = Userfront.build({
    toolId: "nakrkm"
})

const SignUpPage = () => {
    return (
        <div className="sign-page-container">
            <SignupForm />
        </div>
    )
}

export default SignUpPage
