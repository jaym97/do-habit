import { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import LoaderComponent from './components/loader/loader.component';

import './App.scss';

const DashboardPage = lazy(() => import('./pages/dashboard/dashboard.page'))
const LandingPage = lazy(() => import('./pages/landing/landing.page'))
const LoginPage = lazy(() => import('./auth/login/login.page'))
const PasswordResetPage = lazy(() => import('./auth/reset/password-reset.page'))
const SignUpPage = lazy(() => import('./auth/sign-up/sign-up.page'))



function App() {
	return (
		<div className="App">
			<Suspense fallback={<LoaderComponent loading={true} />}>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route path="/sign-up" component={SignUpPage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/password-reset" component={PasswordResetPage} />
					<Route path="/dashboard" component={DashboardPage} />
				</Switch>
			</Suspense>
		</div>
	);
}

export default App;
