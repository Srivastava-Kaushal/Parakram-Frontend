import { useState } from 'react';
import TeamSports from './TeamSports';
import IndividualSports from './IndividualSports';

const style1 =
	'inline-block w-full p-4 border-gray-700 focus:ring-4 focus:ring-blue-300 active focus:outline-none bg-[#4a4949] text-white';
const style2 =
	'inline-block w-full p-4 border-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:text-white bg-[#232323] hover:bg-[#626060]';

const EventsList = () => {
	const [type, setType] = useState(0);
	return (
		<>
			<ul className="hidden text-sm font-medium text-center rounded-lg shadow sm:flex divide-gray-700 text-gray-400 mb-10 mx-36 sticky top-5 z-30">
				<li className="w-full">
					<span
						className={'rounded-s-lg ' + (type === 0 ? style1 : style2)}
						onClick={() => setType(0)}
					>
						Team Sports
					</span>
				</li>
				<li className="w-full">
					<span
						className={'rounded-e-lg ' + (type === 1 ? style1 : style2)}
						onClick={() => setType(1)}
					>
						Individual Sports
					</span>
				</li>
			</ul>
            {type===0 ? <TeamSports/ > : <IndividualSports />}
		</>
	);
};

export default EventsList;
