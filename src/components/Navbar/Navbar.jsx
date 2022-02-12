import { useState } from 'react';
import { BsSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import useDarkMode from '../../useDarkMode';

const Nav = ({ isMobile }) => {
	const [openMenu, setOpenMenu] = useState(false);
	const handleMenu = () => {
		setOpenMenu(!openMenu);
	};
	if (!isMobile) {
		return (
			<ul className="sm:flex sm:gap-10 ml-auto text-16 font-semibold">
				<a href="google.com" className="link-hover">
					Features
				</a>
				<a href="google.com" className="link-hover">
					Menu{' '}
				</a>
				<a href="google.com" className="link-hover">
					Our Story
				</a>
				<a href="google.com" className="link-hover">
					Contact
				</a>
			</ul>
		);
	}
	return (
		<div className="relative ml-auto text-16 font-semibold">
			{openMenu ? (
				<>
					<MdOutlineClose
						size={'24px'}
						className="cursor-pointer"
						onClick={handleMenu}
					/>
					<div className="flex flex-col w-[200px] absolute right-0 gap-1 bg-white p-4 text-center z-10 text-black text-13">
						<a href="google.com" className="link-hover">
							Features
						</a>
						<a href="google.com" className="link-hover">
							Menu{' '}
						</a>
						<a href="google.com" className="link-hover">
							Our Story
						</a>
						<a href="google.com" className="link-hover">
							Contact
						</a>
					</div>
				</>
			) : (
				<HiOutlineMenu
					size={'24px'}
					className="cursor-pointer"
					onClick={handleMenu}
				/>
			)}
		</div>
	);
};
const NavBar = ({ isMobile }) => {
	const [isDarkMode, toggleDarkMode] = useDarkMode();
	return (
		<nav className="flex items-center">
			<div className="flex items-center">
				<div className="text-20 font-bold mr-2"> NerdCard </div>
				{isDarkMode ? (
					<BsSunFill
						size="24px"
						color="#e9c46a"
						className="cursor-pointer"
						onClick={toggleDarkMode}
					/>
				) : (
					<FaMoon
						size="24px"
						color="#e9c46a"
						className="cursor-pointer"
						onClick={toggleDarkMode}
					/>
				)}
			</div>
			<Nav isMobile={isMobile} />
		</nav>
	);
};

export default NavBar;
