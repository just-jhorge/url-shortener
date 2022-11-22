import React from "react";
import Button from "./Button";
import HeaderImage from "../assets/images/illustration-working.svg";

const Header = () => {
	return (
		<header className="w-full h-auto md:h-[70vh] flex items-center justify-center px-4 md:px-0 pb-28 md:pb-16">
			<div className="container mx-auto flex flex-col-reverse md:flex-row">
				<div className="flex flex-col items-center md:items-start justify-center">
					<h2 className="font-black text-center md:text-start text-4xl md:text-8xl mb-5">
						More than just <br /> shorter links
					</h2>
					<p className="text-center md:text-start text-gray-500 text-sm md:text-md font-medium mb-10">
						Build your brand's recognition and get detailed <br />
						insights on how your links are performing
					</p>
					<Button
						text="Get Started"
						rounded="rounded-full"
						textSize="text-sm md:text-xl"
					/>
				</div>
				<div className="mb-14 md:mb-0 md:translate-x-20">
					<img src={HeaderImage} alt="Illustration Working" />
				</div>
			</div>
		</header>
	);
};

export default Header;
