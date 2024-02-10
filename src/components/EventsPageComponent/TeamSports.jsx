import SportBanner from "./SportBanner";
import FootballImg from '../../assets/Images/Football2.jpg';
import CricketImg from '../../assets/Images/Cricket.jpg'
import HockeyImg from '../../assets/Images/Hockey.jpg'
import VolleyballImg from '../../assets/Images/Volleyball.jpg'
import BasketballImg from '../../assets/Images/Basketball.jpg'
import KabaddiImg from '../../assets/Images/Kabaddi.jpg'

const TeamSports = () => {
	return (
		<div className='w-full flex flex-col items-center'>
			<SportBanner sportImg={FootballImg} sportName={"Football"} eventLink={"/register"}/>
			<SportBanner sportImg={CricketImg} sportName={"Cricket"} eventLink={"/register"}/>
			<SportBanner sportImg={HockeyImg} sportName={"Hockey"} eventLink={"/register"}/>
			<SportBanner sportImg={VolleyballImg} sportName={"Volleyball"} eventLink={"/register"}/>
			<SportBanner sportImg={BasketballImg} sportName={"Basketball"} eventLink={"/register"}/>
			<SportBanner sportImg={KabaddiImg} sportName={"Kabaddi"} eventLink={"/register"}/>
		</div>
	);
};

export default TeamSports;
