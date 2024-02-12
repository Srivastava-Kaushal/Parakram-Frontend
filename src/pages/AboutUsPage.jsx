import { useEffect } from 'react';
import transition from '../transition';
import { animateScroll as scroll } from 'react-scroll';
import BgImage from '../assets/Images/AboutUsBg.avif';

const AboutUs = () => {
	useEffect(() => {
		scroll.scrollToTop({ duration: 1000 });
	}, []);

	return (
		<div className="min-h-screen relative">
			<img src={BgImage} alt="bgimage" className="w-full fixed top-0 -z-10" />
			<div className="w-full min-h-screen backdrop-blur-lg bg-black/20 flex flex-col items-center">
				<h1 className="text-8xl font-bold text-white my-20">About Us</h1>
				<p className="w-4/5 text-white text-xl text-justify mb-20">
					The Indian Institute of Technology (Indian School of Mines), i.e., IIT
					(ISM), is a premier engineering and research institution located in
					the heart of the mineral-rich region of India in the city of Dhanbad.
					Founded in 1926 as Indian School of Mines, the institute is on the
					verge of completing its centenary year of establishment. It has the
					privilege of being recognized as the Institute of National Importance
					under the Institutes of Technology Act, 1961. This third oldest
					institute among the IITs stood envisioned to be a State of Art
					educational and research destination for earth sciences and
					engineering in India. With this legacy, it has witnessed exponential
					growth and expansion in various technical domains besides earth
					sciences. Recently, the institute featured at 25th rank in the QS
					World University Rankings of 2023 in the field of Mining and Mineral
					Engineering. The IIT (ISM) admits its undergraduate students through
					the Joint Entrance Examination (Advanced). The institute has 18
					academic departments covering Engineering, Applied Sciences,
					Humanities and Social Sciences, and Management studies.
				</p>
				<div className="w-4/5 my-10 py-10 px-10 backdrop-blur-sm bg-white/20 text-white rounded-3xl shadow-2xl">
					<h1 className="text-white text-5xl text-center py-5">
						Convener’s Message
					</h1>
					<p className="px-10 py-5 text-lg text-justify">
						The combination of talent, hard effort, compassion, competitive
						spirit, and enthusiasm is what makes sports great. It is the one
						thing that, regardless of gender, age, color, religion, caste, or
						anything else, can unite the entire globe in a state of innocent
						surprise and delight. Without a strong sports culture, I think
						education is still incomplete since healthy growth benefits
						everyone—individuals as well as society at large. Sports are the
						only activities that combine work with delight, anger with serenity,
						and brotherhood with rivalry. As we at IIT(ISM), Dhanbad are proud
						of India&apos;s multifarious sports culture, we are pleased to
						announce the creation of &apos;Parakram &apos;24&apos;, the most
						opulent annual sports gathering in East India, in honor of it. The
						three day annual sports festival strives to showcase the
						sportsmanship in every individual and make them realize their true
						potential ,rebrand the culture of sports and gaming that is
						unfortunately often looked down upon in our country. “In the
						symphony of life, sports provide the rhythm, the discipline, and the
						harmony that elevate us to the highest notes of achievement.”
					</p>
					<p className="px-10 py-5 text-lg text-justify">
						The goal of &apos;&apos;Parakram&apos;24&apos;&apos; is to provide
						an equitable and level playing field where all individuals and teams
						can showcase their full potential, both mentally and physically. As
						a team, we extend our warmest greetings and look forward to having
						you visit us at IIT (ISM), Winning or losing is a part of the
						game,the only thing that matters is that whether you give your best
						or not. “To be a champ you have to believe in yourself when no one
						else will”
					</p>
				</div>
			</div>
		</div>
	);
};

const AboutUsPage = transition(AboutUs);
export default AboutUsPage;
