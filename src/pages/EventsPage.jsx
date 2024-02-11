import { motion, useInView } from 'framer-motion';
import EventsPageImg from '../assets/Images/EventsPageImg.jpg';
import EventsList from '../components/EventsPageComponent/EventsList';
import transition from '../transition';
import { animateScroll as scroll } from 'react-scroll';
import { useEffect, useRef } from 'react';

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: 0.4,
			staggerChildren: 0.1,
			duration: 0.2,
			ease: 'linear',
		},
	},
};
const item1 = {
	hidden: { opacity: 0, y: 100 },
	show: { opacity: 1, y: 0 },
};
const item2 = {
	hidden: { opacity: 0, y: -100 },
	show: { opacity: 1, y: 0 },
};
const SportingEvents = {
	hide: { },
	appear: {
		transition: {
			staggerChildren: 0.1,
			duration: 0.1,
		},
	},
};
const item3 = {
	hide: { opacity: 0, y: -50 },
	appear: { opacity: 1, y: 0 },
};

const Events = () => {
	useEffect(() => scroll.scrollToTop({ duration: 1000 }), []);

	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.2, once: true, });

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
					variants={item1}
				/>
				<span className="absolute top-[40%] left-[50%] -translate-x-[50%] text-[#ffffff] font-bold z-20 text-[9rem] [text-shadow:_0_4px_4px_rgb(0,0,0)]">
					<span className="sr-only">Events</span>
					{'Events'.split('').map((letter, index) => (
						<motion.span className="inline-block" key={index} variants={item2}>
							{letter}
						</motion.span>
					))}
				</span>
			</motion.div>
			<div className="bg-gradient-to-b from-[#070707] via-[#232222] to-[#232222] relative">
				<motion.div
					ref={ref}
					className="py-6 text-4xl text-white text-center"
					variants={SportingEvents}
					initial="hide"
					animate={isInView ? 'appear' : 'hide'}
				>
					{'Sporting'.split('').map((char, index) => (
						<motion.span
							key={index}
							variants={item3}
							className='inline-block'
						>
							{char}
						</motion.span>
					))}
					&nbsp;
					{'Events'.split('').map((char, index) => (
						<motion.span
							key={index}
							variants={item3}
							className='inline-block'
						>
							{char}
						</motion.span>
					))}
				</motion.div>
				<EventsList />
			</div>
		</>
	);
};

const EventsPage = transition(Events);
export default EventsPage;
