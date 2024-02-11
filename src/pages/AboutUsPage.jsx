import transition from "../transition";
import BgImage from "../assets/Images/AboutUsBg.avif"

const AboutUs = () => {
    return (
        <div className="min-h-screen relative">
            <img src={BgImage} alt="bgimage" className="w-full fixed top-0 -z-10"/>
        </div>
    )
}

const AboutUsPage = transition(AboutUs);
export default AboutUsPage;