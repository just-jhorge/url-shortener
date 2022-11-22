import React from "react";

const Button = ({ text, rounded, textSize }) => {
	return (
		<button
			className={`flex items-center justify-center font-semibold bg-cyan-500 ${textSize} ${rounded} text-white px-5 py-2`}
		>
			{text}
		</button>
	);
};

export default Button;
