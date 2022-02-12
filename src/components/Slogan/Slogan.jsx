import Cards from '../../assets/desktop/isocard.svg';

const Slogan = () => {
	return (
		<section className="text-36 my-14 font-extrabold md:my:28 md:grid md:grid-cols-3 md:items-center md:text-48">
			<div className="text-center md:col-start-2">
				<p>
					Earn <span className="text-purple-300">More</span>
				</p>
				<p>Pay Less</p>
				<button className="btn-primary">Start</button>
			</div>
			<img src={Cards} className="mt-[69px] mx-auto text-center" alt="" />
		</section>
	);
};

export default Slogan;
