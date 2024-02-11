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
				<div className="w-4/5 my-10 py-10 px-10 backdrop-blur-sm bg-cyan-600/20 text-white rounded-3xl shadow-2xl">
					<h1 className="text-white text-6xl font-bold text-center py-2">
						What is Parakram&apos;24?
					</h1>
					<p className="px-10 mt-10 text-xl text-justify">
						Parakram is the annual games and sports fest of IIT (ISM) Dhanbad.
					</p>
					<p className="px-10 text-xl text-justify">
						It encourages the competitive spirit among the nation&apos;s
						brightest minds and offers a perfect arena for participation by all
						sports fans. Students take part in every sport to demonstrate their
						athletic prowess.
					</p>
					<p className="px-10 text-xl text-justify">
						Our team works hard to encourage pupils to have a healthy sense of
						competition. Fostering a culture of good sportsmanship among the
						students, our goal is to serve as the venue for all important
						sporting events.
					</p>
					<p className="px-10 text-xl text-justify">
						This massive celebration of sports and games, one of the most
						important events in the country, will shatter limits and boundaries.{' '}
					</p>
					<p className="px-10 text-xl text-justify">
						This three-day festival is just as incredible as it sounds, offering
						an abundance of sporting events, jaw-dropping monetary prizes, and
						endless options
					</p>
				</div>
				<div className="w-4/5 my-10 py-10 px-10 backdrop-blur-sm bg-green-500/20 text-white rounded-3xl shadow-2xl">
					<h1 className="text-white text-6xl font-bold text-center py-2">
						Why to sponsor us?
					</h1>
					<p className="px-10 mt-10 text-xl text-justify">
						Broad outreach to more than 300 universities and businesses
						nationwide.
					</p>
					<p className="px-10 text-xl text-justify">
						Sponsor-sponsored discussion sessions aid the organization in
						learning the students&apos; perspectives and, as a result, improve
						mutual understanding.
					</p>
					<p className="px-10 text-xl text-justify">
						Advertising via banners, flexes, pamphlets, leaflets, and other
						accessories.
					</p>
					<p className="px-10 text-xl text-justify">
						Publicity via news channels, business journals, social networking
						websites, and national newspapers&apos; articles and commercials.
					</p>
					<p className="px-10 text-xl text-justify">
						On campus branding and publicity during the festival amongst 30000
						odd participants, including students, professors, and industry
						experts.
					</p>
					<p className="px-10 text-xl text-justify">
						Platform for introducing new goods and showcasing technologies.
						Certificates with the names and logos of the sponsors would be
						presented to all participants and winners.
					</p>
				</div>
				<div className="w-4/5 my-10 py-10 px-10 backdrop-blur-sm bg-pink-500/20 text-white rounded-3xl shadow-2xl">
					<h1 className="text-white text-6xl font-bold text-center py-2">
						Paintball Event
					</h1>
					<p className="px-10 mt-10 text-xl text-justify">
						We are excited to extend an invitation to you to participate in our
						next paintball event. It will be a fun-filled day filled with
						competitive games, friendship, and excitement, and we are looking
						for sponsors to help make this event a big success.
					</p>
					<p className="px-10 text-xl text-justify">
						It is anticipated that a diverse group of people would attend the
						paintball event, including casual players, business tourists, and
						anybody else seeking an exciting and different kind of experience.
						This is a great chance to present your company and products to a
						wide range of interested audiences. As a sponsor, your company will
						be highlighted extensively during the event, giving you excellent
						visibility and a chance to establish a connection with possible
						clients. Your sponsorship will be tailored to your unique marketing
						objectives.
					</p>
				</div>
				<div className="w-4/5 my-10 py-10 px-10 backdrop-blur-sm bg-purple-500/20 text-white rounded-3xl shadow-2xl">
					<h1 className="text-white text-6xl font-bold text-center py-2">
						Zorbing
					</h1>
					<p className="px-10 mt-10 text-xl text-justify">
						This year, we&apos;re excited to announce an amazing event: Zorbing,
						which promises a unique blend of thrill and excitement.
					</p>
					<p className="px-10 text-xl text-justify">
						Gain exposure among thousands of students, educators, and sports
						fans from across the country. Your brand will be prominently shown
						throughout our broad marketing initiatives, which include social
						media, posters, and campus promotions. As a sponsor, your brand will
						be integrated into the fabric of Parakram&apos;24. From Zorbing arenas to
						event banners, your logo will be clearly displayed, providing
						maximum brand recognition. Enjoy special mentions and announcements
						during Zorbing sessions to increase visibility and brand affinity.
					</p>
					<p className="px-10 text-xl text-justify">
						Your sponsorship will be tailored to your marketing objectives and
						budget. With your help, we can make the zorbing event accessible to
						everybody and create a positive impact on our community.
					</p>
				</div>
			</div>
		</div>
	);
};

const AboutUsPage = transition(AboutUs);
export default AboutUsPage;
