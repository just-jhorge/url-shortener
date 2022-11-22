import React from "react";
import LinkBox from "./LinkBox";
import FeatureCard from "./FeatureCard";
import BrandRecognition from "../assets/images/icon-brand-recognition.svg";
import DetailedRecords from "../assets/images/icon-detailed-records.svg";
import Customizable from "../assets/images/icon-fully-customizable.svg";

const cardData = [
	{
		id: 1,
		imgSrc: "/src/assets/images/icon-brand-recognition.svg",
		title: "brand recognition",
		content:
			"Boost your brand recognition with cach click. Generic links don't mean a thing. Branded links help instil confidence in your content",
	},
	{
		id: 2,
		imgSrc: "/src/assets/images/icon-detailed-records.svg",
		title: "detailed records",
		content:
			"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
	},
	{
		id: 3,
		imgSrc: "/src/assets/images/icon-fully-customizable.svg",
		title: "fully customizable",
		content:
			"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
	},
];

const Features = () => {
	return (
		<section className="w-full bg-gray-100 px-4 md:px-0 pb-20">
			<div className="relative container mx-auto">
				<LinkBox />
				<div className="flex flex-col items-center justify-center mt-20">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-5xl font-black mb-4">
							Advanced Statistics
						</h2>
						<p className="text-sm md:text-md text-gray-500">
							Track how your links are performing across the web with{" "}
							<br className="hidden md:block" /> our advanced statistics
							dashboard.
						</p>
					</div>
					<div className="relative">
						<div className="hidden md:block absolute h-4 w-full bg-cyan-500 top-1/2 left-0 right-0" />
						<div className="absolute md:hidden h-full w-4 bg-cyan-500 top-0 left-[48.5%] right-0" />
						<div className="flex flex-col md:flex-row gap-16 md:gap-0 items-center justify-between">
							{cardData.map((item) => (
								<FeatureCard
									key={item.id}
									img={item.imgSrc}
									title={item.title}
									content={item.content}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
