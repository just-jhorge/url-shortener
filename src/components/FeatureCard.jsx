import React from "react";

const FeatureCard = ({ img, title, content }) => {
	return (
		<div className="relative w-4/5 md:w-[30%] h-[15rem] bg-white px-6 md:px-10 py-16">
			<div className="absolute flex items-center justify-center -top-8 left-[40%] md:left-10 h-16 w-16 rounded-full bg-deepBlue">
				<img src={img} className="h-8 w-8" />
			</div>
			<h2 className="text-xl mb-4 font-bold capitalize">{title}</h2>
			<p className="text-sm leading-relaxed text-gray-500">{content}</p>
		</div>
	);
};

export default FeatureCard;
