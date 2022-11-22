import React from "react";
import iconFacebook from "../assets/images/icon-facebook.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";
import iconPinterest from "../assets/images/icon-pinterest.svg";
import iconInstagram from "../assets/images/icon-instagram.svg";

const footerLinks = [
	{
		id: 1,
		heading: "features",
		links: ["link shortening", "branded links", "analytics"],
	},
	{
		id: 2,
		heading: "resources",
		links: ["blog", "developers", "support"],
	},
	{
		id: 3,
		heading: "company",
		links: ["about", "our team", "careers", "contact"],
	},
];

const Footer = () => {
	return (
		<footer className="w-full text-white bg-darkViolet py-16">
			<div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between">
				<div className="mb-16 md:mb-0">
					<h3 className="text-4xl font-bold">Shortly</h3>
				</div>
				<div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-28">
					<div className="flex flex-col md:flex-row items-center md:items-start justify-start gap-8 md:gap-16 text-center md:text-start">
						{footerLinks.map((item) => (
							<div key={item.id} className="flex flex-col gap-5">
								<h4 className="font-semibold text-lg capitalize">
									{item.heading}
								</h4>
								<ul>
									{item.links.map((link, index) => (
										<li
											key={index}
											className="capitalize text-gray-300 hover:text-cyan-500 leading-loose cursor-pointer"
										>
											{link}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<div className="flex items-center justify-center gap-7">
						<img src={iconFacebook} alt="Facebook" />
						<img src={iconTwitter} alt="Twitter" />
						<img src={iconPinterest} alt="Pinterest" />
						<img src={iconInstagram} alt="Instagram" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
