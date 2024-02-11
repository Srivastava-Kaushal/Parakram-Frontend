import SportBanner from "./SportBanner";
import FootballImg from '../../assets/Images/Football2.jpg';
import CricketImg from '../../assets/Images/Cricket.jpg'
import HockeyImg from '../../assets/Images/Hockey.jpg'
import VolleyballImg from '../../assets/Images/Volleyball.jpg'
import BasketballImg from '../../assets/Images/Basketball.jpg'
import KabaddiImg from '../../assets/Images/Kabaddi.jpg'
import AthleticsImg from '../../assets/Images/ath.jpg';
import BadmintonImg from '../../assets/Images/Badminton.jpg'
import TableTennisImg from '../../assets/Images/TableTennis.jpg'
import SquashImg from '../../assets/Images/Squash.jpg'
import ChessImg from '../../assets/Images/Chess.jpg'
import TennisImg from '../../assets/Images/Tennis.jpg'
import WeightliftingImg from '../../assets/Images/Weightlifting.jpg'
import PowerliftingImg from '../../assets/Images/Powerlifting.jpg'
import BoxingImg from '../../assets/Images/Boxing.jpg'
import KarateImg from '../../assets/Images/Karate.jpg'

const EventsList = () => {
	return (
		<div className='w-full flex flex-col items-center'>
			<SportBanner sportImg={FootballImg} sportName={"Football"} eventLink={"/register"}/>
			<SportBanner sportImg={CricketImg} sportName={"Cricket"} eventLink={"/register"}/>
			<SportBanner sportImg={HockeyImg} sportName={"Hockey"} eventLink={"/register"}/>
			<SportBanner sportImg={VolleyballImg} sportName={"Volleyball"} eventLink={"/register"}/>
			<SportBanner sportImg={BasketballImg} sportName={"Basketball"} eventLink={"/register"}/>
			<SportBanner sportImg={KabaddiImg} sportName={"Kabaddi"} eventLink={"/register"}/>
			<SportBanner sportImg={AthleticsImg} sportName={"Athletics"} eventLink={"/register"}/>
            <SportBanner sportImg={BadmintonImg} sportName={"Badminton"} eventLink={"/register"}/>
            <SportBanner sportImg={TableTennisImg} sportName={"Table Tennis"} eventLink={"/register"}/>
            <SportBanner sportImg={SquashImg} sportName={"Squash"} eventLink={"/register"}/>
            <SportBanner sportImg={ChessImg} sportName={"Chess"} eventLink={"/register"}/>
            <SportBanner sportImg={TennisImg} sportName={"Tennis"} eventLink={"/register"}/>
            <SportBanner sportImg={WeightliftingImg} sportName={"Weightlifting"} eventLink={"/register"}/>
            <SportBanner sportImg={PowerliftingImg} sportName={"Power Lifting"} eventLink={"/register"}/>
            <SportBanner sportImg={BoxingImg} sportName={"Boxing"} eventLink={"/register"}/>
            <SportBanner sportImg={KarateImg} sportName={"Karate"} eventLink={"/register"}/>
		</div>
	);
};

export default EventsList;
