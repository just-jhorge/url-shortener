/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				deepBlue: "hsl(257, 27%, 26%)",
				darkViolet: "hsl(260, 8%, 14%)",
			},
		},
	},
	plugins: [],
};
