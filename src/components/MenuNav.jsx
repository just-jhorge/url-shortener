import React from "react";
import Button from "./Button";

const MenuNav = ({ isOpen }) => {
	return (
		<div
			className={`absolute left-4 right-4 top-20 ${
				isOpen ? "block" : "hidden"
			} flex flex-col items-center justify-center gap-7 shadow-md bg-deepBlue font-bold text-xl text-white rounded-md py-8 px-5`}
		>
			<a href="/">Features</a>
			<a href="/">Pricing</a>
			<a href="/">Resources</a>
			<div className="h-[1px] w-full bg-gray-500" />
			<a href="/">Login</a>
			<Button text="Sign up" rounded="rounded-md w-full" />
		</div>
	);
};

export default MenuNav;
