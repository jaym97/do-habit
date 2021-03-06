import { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import LoaderComponent from './components/loader/loader.component';
import './App.scss';

const LandingPage = lazy(() => import('./pages/landing/landing.page'))

function App() {
	return (
		<div className="App">
			<Suspense fallback={<LoaderComponent loading={true} />}>
				<Switch>
					<Route exact path="/" component={LandingPage} />
				</Switch>
			</Suspense>
		</div>
	);
}

export default App;
