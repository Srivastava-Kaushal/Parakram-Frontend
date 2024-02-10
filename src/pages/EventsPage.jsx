import { motion } from 'framer-motion';
import EventsPageImg from '../assets/Images/EventsPageImg.jpg';
import EventsList from '../components/EventsPageComponent/EventsList';
import transition from '../transition';

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: 0.4,
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

const Events = () => {
	return (
		<>
			<motion.div
				className="relative"
				variants={container}
				initial="hidden"
				animate="show"
			>
				<motion.img
					src={EventsPageImg}
					alt="sport"
					className="w-full"
					variants={item}
				/>
				<motion.span
					className="absolute top-[40%] left-[50%] -translate-x-[50%] text-[#ffffff] font-bold z-20 text-[9rem] [text-shadow:_0_4px_4px_rgb(0,0,0)]"
					variants={item}
				>
					Events
				</motion.span>
			</motion.div>
			<div className="bg-gradient-to-b from-[#070707] via-[#232222] to-[#232222] relative" >
				<div className="py-6 text-4xl text-white text-center">
					Sports Categories
				</div>
				<EventsList />
			</div>
		</>
	);
};	

const EventsPage = transition(Events);
export default EventsPage;
