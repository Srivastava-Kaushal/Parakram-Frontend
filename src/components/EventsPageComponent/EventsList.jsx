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
			<SportBanner sportImg={FootballImg} sportName={"Football"} eventLink={"/registerEvent/football"}/>
			<SportBanner sportImg={CricketImg} sportName={"Cricket"} eventLink={"/registerEvent/cricket"}/>
			<SportBanner sportImg={HockeyImg} sportName={"Hockey"} eventLink={"/registerEvent/hockey"}/>
			<SportBanner sportImg={VolleyballImg} sportName={"Volleyball"} eventLink={"/registerEvent/volleyball"}/>
			<SportBanner sportImg={BasketballImg} sportName={"Basketball"} eventLink={"/registerEvent/basketball"}/>
			<SportBanner sportImg={KabaddiImg} sportName={"Kabaddi"} eventLink={"/registerEvent/kabaddi"}/>
			<SportBanner sportImg={AthleticsImg} sportName={"Athletics"} eventLink={"/registerEvent/athletics"}/>
            <SportBanner sportImg={BadmintonImg} sportName={"Badminton"} eventLink={"/registerEvent/badminton"}/>
            <SportBanner sportImg={TableTennisImg} sportName={"Table Tennis"} eventLink={"/registerEvent/tabletennis"}/>
            <SportBanner sportImg={SquashImg} sportName={"Squash"} eventLink={"/registerEvent/squash"}/>
            <SportBanner sportImg={ChessImg} sportName={"Chess"} eventLink={"/registerEvent/chess"}/>
            <SportBanner sportImg={TennisImg} sportName={"Tennis"} eventLink={"/registerEvent/tennis"}/>
            <SportBanner sportImg={WeightliftingImg} sportName={"Weightlifting"} eventLink={"/registerEvent/weightlifting"}/>
            <SportBanner sportImg={PowerliftingImg} sportName={"Power Lifting"} eventLink={"/registerEvent/powerlifting"}/>
            <SportBanner sportImg={BoxingImg} sportName={"Boxing"} eventLink={"/registerEvent/boxing"}/>
            <SportBanner sportImg={KarateImg} sportName={"Karate"} eventLink={"/registerEvent/karate"}/>
		</div>
	);
};

export default EventsList;
