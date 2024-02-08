import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import { Landing } from './pages/Landing';
import { Merchandise } from './pages/Merchandise';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				exact
				path="/"
				element={<NavBar/>}
			>
				<Route path='/' element={<Landing />}/>
				<Route path='/merchandise' element={<Merchandise />}/>
				{/* add component/pages here */}
			</Route>,
		),
	);

	return <RouterProvider router={router} />;
}

export default App;