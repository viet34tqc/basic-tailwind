import React from 'react';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { animated, useSpring } from 'react-spring';
import checkIconMobile from '../../assets/mobile/checkpoint.svg';

const Content = () => {
	const customer = useSpring({ number: 10245, from: { number: 0 } });
	const card = useSpring({ number: 12405, from: { number: 0 } });
	return (
		<section className="md:flex">
			<div className="ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b shadow-md from-white/40 rounded-[24px] to-transparent md:w-[20%]">
				<div className="mt-16 gap-8 flex items-start">
					<FaUser size="22px" className="mt-[22px]" />
					<div className="text-26">
						<animated.div>
							{customer.number.to(val => Math.floor(val))}
						</animated.div>
						<p className="text-13 font-semibold mb-[36px] md:text-16">
							Customers
						</p>
					</div>
				</div>
				<div className="mb-16 gap-8 flex items-start">
					<BsFillCreditCardFill size="22px" className="mt-[22x]" />
					<div className="text-26">
						<animated.div>
							{card.number.to(val => Math.floor(val))}
						</animated.div>
						<p className="text-13 font-semibold md:text-16">Cards Issued</p>
					</div>
				</div>
			</div>
			<div className="text-13 flex flex-col w-[100%] mt-[90px] md:mt-0 font-semibold md:w-[30%] md:text-16 md:ml-[20%]">
				<div className="check-content">
					<img src={checkIconMobile} alt="" />
					<p>Card reports sent to your phone every week</p>
				</div>
				<div className="check-content">
					<img src={checkIconMobile} alt="" />
					<p>Card reports sent to your phone every week</p>
				</div>
				<div className="check-content">
					<img src={checkIconMobile} alt="" />
					<p>Card reports sent to your phone every week</p>
				</div>
			</div>
		</section>
	);
};

export default Content;
