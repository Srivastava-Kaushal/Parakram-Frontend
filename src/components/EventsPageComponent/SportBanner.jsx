import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
// Now I want to find proper image for the rest of the sports and populate individual sports too
// make use of array for banner info
// add hover effect =-> more backdrop and the slanted container shift animation

const bannerVariants = {
	hidden: { opacity: 0, x: 100, transition: { duration: 1, ease: 'easeOut' }},
	show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const SportBanner = ({ sportImg, sportName, eventLink }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { threshold: 0.2, triggerOnce: true, amount: 0.5, duration: 0.5});

	return (
		<motion.div
			ref={ref}
			className="h-[35vh] w-[80vw] bg-black my-10 rounded-2xl overflow-hidden relative shadow-[0_0_4px_2px_] shadow-[#727272]"
			initial="hidden"
			animate={isInView ? 'show' : 'hidden'}
			variants={bannerVariants}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
		>
			<Link to={eventLink}>
				<img src={sportImg} alt="sport" className="w-full" />
				<span className="w-[80vw] h-[120vh] bg-black/30 backdrop-blur-md absolute z-10 top-0 -left-96 rotate-45">
					s
				</span>
				<span className="text-white text-6xl absolute top-[50%] -translate-y-[50%] left-14 z-20">
					{sportName}
				</span>
			</Link>
		</motion.div>
	);
};

export default SportBanner;
