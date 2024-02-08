import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import NavBar from './components/navbar/NavBar';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				exact
				path="/"
				element={<NavBar/>}
			>
				{/* add component/pages here */}
			</Route>,
		),
	);

	return <RouterProvider router={router} />;
}

export default App;

