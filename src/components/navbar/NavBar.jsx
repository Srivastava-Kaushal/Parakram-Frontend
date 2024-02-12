import { Fragment } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import Footer from "../footer/Footer";
// import { AnimatePresence } from "framer-motion";
import logo from '../../assets/logo-svg.svg';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const NavBar = () => {
	const currentPath = useLocation().pathname;

	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Events', href: '/events' },
		{ name: 'Merchandise', href: '/merchandise' },
		{ name: 'Accomodation', href: '/accomodation' },
		{ name: 'About Us', href: '/about' },
		{ name: 'Sponsors', href: '/sponsors' },
		{ name: 'Sign Up', href: '/signUp' },
		{ name: 'Log In', href: '/signIn' },
	];

	return (
		<Fragment>
			<Disclosure as="nav" className="sticky top-0 z-30 w-full">
				{({ open }) => (
					<div className="bg-[#0f0d09] ">
						<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
							<div className="relative flex h-16 items-center justify-between">
								<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
									{/* Mobile menu button*/}
									<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
										<span className="absolute -inset-0.5" />
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
										) : (
											<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
								<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start text-2xl font-bold">
									<Link to="/" className="flex flex-shrink-0 items-center">
										<img src={logo} height={50} width={120} />
									</Link>
									<div className="hidden sm:ml-6 sm:block">
										<div className="flex space-x-4">
											{navigation.map((item, ind) => (
												<span key={ind} className={item.name}>
													<Link
														to={item.href}
														className={classNames(
															item.href === currentPath
																? 'bg-[#584212] text-[#f2f1ef]'
																: 'text-[#f2f1ef] hover:underline hover:decoration-[#ffc946] hover:backdrop-opacity-10',
															'rounded-md px-3 py-2 text-base font-medium',
														)}
														aria-current={item.current ? 'page' : undefined}
													>
														{item.name}
													</Link>
												</span>
											))}
										</div>
									</div>
								</div>
								<div className="absolute my-auto inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
									{/* Profile dropdown */}
									<Menu as="div" className="relative ml-3">
										<div className="my-auto">
											<Menu.Button className="relative flex">
												{/* <span className="absolute -inset-1.5" /> */}
												{/* <span className="sr-only">Open user menu</span> */}
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="35"
													height="35"
													fill="white"
													className="bi bi-person"
													viewBox="0 0 16 16"
												>
													<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
												</svg>
											</Menu.Button>
										</div>
										<Transition
											as={Fragment}
											enter="transition ease-out duration-100"
											enterFrom="transform opacity-0 scale-95"
											enterTo="transform opacity-100 scale-100"
											leave="transition ease-in duration-75"
											leaveFrom="transform opacity-100 scale-100"
											leaveTo="transform opacity-0 scale-95"
										>
											<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
												<Menu.Item>
													{({ active }) => (
														<Link
															to="/profile"
															className={classNames(
																active ? 'bg-gray-100' : '',
																'block px-4 py-2 text-sm text-gray-700',
															)}
														>
															Your Profile
														</Link>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<Link
															to="/home"
															className={classNames(
																active ? 'bg-gray-100' : '',
																'block px-4 py-2 text-sm text-gray-700',
															)}
														>
															Sign out
														</Link>
													)}
												</Menu.Item>
											</Menu.Items>
										</Transition>
									</Menu>
								</div>
							</div>
						</div>

						<Disclosure.Panel className="sm:hidden">
							<div className="space-y-1 px-2 pb-3 pt-2">
								{navigation.map((item, ind) => (
									<Link
										key={ind}
										to={item.href}
										className={classNames(
											item.current
												? 'bg-gray-900 text-white'
												: 'text-gray-300 hover:bg-gray-700 hover:text-white',
											'block rounded-md px-3 py-2 text-base font-medium',
										)}
										aria-current={item.current ? 'page' : undefined}
									>
										{item.name}
									</Link>
								))}
							</div>
						</Disclosure.Panel>
					</div>
				)}
			</Disclosure>

			<main className="flex-grow flex flex-col">
				<Outlet />
			</main>
		</Fragment>
	);
};

export default NavBar;