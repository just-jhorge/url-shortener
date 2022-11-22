import { useState } from "react";
import MobileNav from "./MenuNav";
import Logo from "../assets/images/logo.svg";
import Button from "./Button";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenuState = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative w-full px-4 md:px-0 h-24 flex items-center justify-center">
			<nav className="container mx-auto flex items-center justify-between">
				<div className="flex items-center justify-center gap-10">
					<div>
						<img src={Logo} alt="Shortly Logo" />
					</div>
					<div className="hidden md:flex gap-5 text-gray-500 font-semibold">
						<a className="hover:text-black" href="/">
							Features
						</a>
						<a className="hover:text-black" href="/">
							Pricing
						</a>
						<a className="hover:text-black" href="/">
							Resources
						</a>
					</div>
				</div>
				<div className="hidden md:flex items-center justify-center gap-5">
					<button className="text-gray-500">Login</button>
					<Button text="Sign Up" rounded="rounded-full" textSize="text-sm" />
				</div>
				<div onClick={toggleMenuState}>
					{isOpen ? (
						<GrClose className="text-3xl text-gray-500" />
					) : (
						<AiOutlineMenu className="text-3xl text-gray-500" />
					)}
				</div>
			</nav>
			<MobileNav isOpen={isOpen} />
		</div>
	);
};

export default Navbar;
