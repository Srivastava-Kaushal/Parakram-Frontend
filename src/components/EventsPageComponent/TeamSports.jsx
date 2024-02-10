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
			<SportBanner sportImg={FootballImg} sportName={"Football"} eventLink={"/"}/>
			<SportBanner sportImg={CricketImg} sportName={"Cricket"} eventLink={"/"}/>
			<SportBanner sportImg={HockeyImg} sportName={"Hockey"} eventLink={"/"}/>
			<SportBanner sportImg={VolleyballImg} sportName={"Volleyball"} eventLink={"/"}/>
			<SportBanner sportImg={BasketballImg} sportName={"Basketball"} eventLink={"/"}/>
			<SportBanner sportImg={KabaddiImg} sportName={"Kabaddi"} eventLink={"/"}/>
		</div>
	);
};

export default TeamSports;
