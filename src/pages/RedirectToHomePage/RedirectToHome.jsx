import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Redirect.css'; 

const RedirectToHomePage = () => {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate('/home');
		}, 2000)
	}, [navigate]);
	return (
		<div id='fullpage'>
		<div className="spinner">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
		</div>
	);
};

export default RedirectToHomePage;
