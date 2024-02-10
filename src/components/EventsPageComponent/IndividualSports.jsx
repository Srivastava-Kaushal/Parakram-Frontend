import SportBanner from "./SportBanner";
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

const IndividualSports = () => {
    return (
        <div className='w-full flex flex-col items-center'>
            <SportBanner sportImg={AthleticsImg} sportName={"Athletics"} eventLink={"/"}/>
            <SportBanner sportImg={BadmintonImg} sportName={"Badminton"} eventLink={"/"}/>
            <SportBanner sportImg={TableTennisImg} sportName={"Table Tennis"} eventLink={"/"}/>
            <SportBanner sportImg={SquashImg} sportName={"Squash"} eventLink={"/"}/>
            <SportBanner sportImg={ChessImg} sportName={"Chess"} eventLink={"/"}/>
            <SportBanner sportImg={TennisImg} sportName={"Tennis"} eventLink={"/"}/>
            <SportBanner sportImg={WeightliftingImg} sportName={"Weightlifting"} eventLink={"/"}/>
            <SportBanner sportImg={PowerliftingImg} sportName={"Power Lifting"} eventLink={"/"}/>
            <SportBanner sportImg={BoxingImg} sportName={"Boxing"} eventLink={"/"}/>
            <SportBanner sportImg={KarateImg} sportName={"Karate"} eventLink={"/"}/>
        </div>
    )
}

export default IndividualSports;