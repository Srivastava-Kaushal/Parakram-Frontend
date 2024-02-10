import { motion } from 'framer-motion';
import EventsPageImg from '../assets/Images/EventsPageImg.jpg';
import EventsList from '../components/EventsPageComponent/EventsList';

const titleVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const EventsPage = () => {
	return (
		<>
			<motion.div className="relative">
				<img src={EventsPageImg} alt="sport" className="w-full" />
				<motion.span
					className="absolute top-[40%] left-[50%] -translate-x-[50%] text-[#ffffff] font-bold z-20 text-[9rem] [text-shadow:_0_4px_4px_rgb(0,0,0)]"
					initial="hidden"
					animate="visible"
					variants={titleVariants}
				>
					Events
				</motion.span>
			</motion.div>
			<div className="bg-gradient-to-b from-[#070707] via-[#232222] to-[#232222] relative">
				<div className="py-6 text-4xl text-white text-center">
					Sports Categories
				</div>
				<EventsList />
			</div>
		</>
	);
};

export default EventsPage;
