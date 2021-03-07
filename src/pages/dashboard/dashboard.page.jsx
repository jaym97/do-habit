import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Userfront from "@userfront/react"

function DashboardPage() {
    function renderFn({ location }) {
        // If the user is not logged in, redirect to login
        if (!Userfront.accessToken()) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          );
        }

        const userData = JSON.stringify(Userfront.user, null, 2)

        return (
            <div>
                <h2>Dashboard</h2>
                <pre style={{height: 300}}>{userData}</pre>
                <button onClick={Userfront.logout}>Logout</button>
            </div>
        )
    }

    return <Route render={renderFn} />
}

export default DashboardPage
