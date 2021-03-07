import React from 'react'
import Userfront from "@userfront/react"

import './password-reset.styles.scss'

Userfront.init("xbpmdmnz")

const PasswordResetForm = Userfront.build({
  toolId: "aaldld"
})

const PasswordResetPage = () => {
    return (
        <div className="reset-page-container">
            <PasswordResetForm />
        </div>
    )
}

export default PasswordResetPage
