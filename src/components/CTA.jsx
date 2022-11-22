import React from "react";
import Button from "./Button";
import bgBoost from "../assets/images/bg-boost-desktop.svg";

const CTA = () => {
	return (
		<section className="relative w-full h-64 bg-deepBlue text-white flex items-center justify-center">
			<img
				src={bgBoost}
				className="absolute z-10 w-full h-full top-0 bottom-0 left-0 right-0 object-cover"
			/>
			<div className="absolute z-20 flex flex-col items-center justify-center">
				<h2 className="font-black text-2xl md:text-4xl mb-8">
					Boost your links today
				</h2>
				<Button
					text="Get Started"
					rounded="rounded-full"
					textSize="text-md md:text-lg"
				/>
			</div>
		</section>
	);
};

export default CTA;
