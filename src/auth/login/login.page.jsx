import React from 'react'
import Userfront from "@userfront/react"

import './login.styles.scss'

Userfront.init("xbpmdmnz")

const LoginForm = Userfront.build({
  toolId: "mnlrlm"
})

const LoginPage = () => {
    return (
        <div className="login-page-container">
            <LoginForm />
        </div>
    )
}

export default LoginPage
