import { useEffect, useState } from 'react';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import Slogan from './components/Slogan/Slogan';

function App() {
	const [isMobile, setisMobile] = useState(false);
	const [windowSize, setWindowSize] = useState({
		width: null,
		height: null,
	});

	useEffect(() => {
		const handleSize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		window.addEventListener('resize', handleSize);
		handleSize();
		return () => {
			window.removeEventListener('resize', handleSize);
		};
	}, []);

	useEffect(() => {
		setisMobile(windowSize.width < 640 ? true : false);
	}, [windowSize]);

	return (
		<div className="font-sora overflow-y-auto text-13 h-screen px-4 py-8 bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 dark:text-white md:px-20 from-white to-pink-500 text-black">
			<Navbar isMobile={isMobile} />
			<Slogan />
			<Content />
		</div>
	);
}

export default App;
