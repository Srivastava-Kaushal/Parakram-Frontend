import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import { Landing } from './pages/Landing';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				exact
				path="/"
				element={<NavBar/>}
			>
				<Route path='/' element={<Landing />}/>
				{/* add component/pages here */}
			</Route>,
		),
	);

	return <RouterProvider router={router} />;
}

export default App;