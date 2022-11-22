import { useState } from "react";
import axios from "axios";
import image1 from "../assets/images/bg-boost-desktop.svg";
import Button from "./Button";

const LinkBox = () => {
	const [linkText, setLinkText] = useState("");
	const [shortenedLinks, setShortenedLinks] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://api.shrtco.de/v2/shorten?url=${linkText}`
				);
				setShortenedLinks((prevState) => [
					...prevState,
					{
						originalLink: response.data.result.original_link,
						shortenedLink: response.data.result.full_short_link,
					},
				]);
				setLinkText("");
				console.log(shortenedLinks);
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	};

	const copyContent = async () => {
		let text = document.getElementById("shortenedLinkText").innerHTML;
		try {
			await navigator.clipboard.writeText(text);
			alert("Shortened link copied to clipboard");
		} catch (error) {
			console.error(`Failed to copy: ${error}`);
		}
	};

	const ListLinks = () => {
		return shortenedLinks.map((linkItem) => (
			<div className="bg-white flex flex-col md:flex-row items-start md:items-center justify-between py-3 px-5">
				<p className="truncate w-[99%] md:w-[45%] mb-2 md:mb-0">
					{linkItem.originalLink}
				</p>
				<div className="block md:hidden h-[1px] w-full bg-gray-200 mb-2" />
				<div className="w-full md:w-auto flex flex-col md:flex-row items-start md:items-center justify-center gap-4">
					<a
						id="shortenedLinkText"
						href={linkItem.shortenedLink}
						className="text-cyan-500"
					>
						{linkItem.shortenedLink}
					</a>
					<button
						className="w-full py-2 px-4 text-sm rounded-md bg-cyan-500 text-white"
						onClick={copyContent}
					>
						Copy
					</button>
				</div>
			</div>
		));
	};

	return (
		<>
			<section className="relative left-0 right-0 bg-deepBlue h-32 -top-12 py-20 md:py-14 px-5">
				<form
					className="absolute z-20 top-0 bottom-0 left-0 right-0 flex flex-col md:flex-row items-center justify-center gap-5"
					onSubmit={handleSubmit}
				>
					<input
						type="text"
						className="py-2.5 px-3 w-4/5"
						placeholder="Shorten a link here..."
						value={linkText}
						onChange={(e) => setLinkText(e.target.value)}
						autoComplete="on"
						required
					/>
					<Button
						text="Shorten It!"
						textSize="text-lg w-4/5 md:w-auto"
						rounded="rounded-none"
					/>
				</form>
				<img
					src={image1}
					className="absolute h-full w-full top-0 bottom-0 left-0 right-0 object-cover"
				/>
			</section>
			<div>
				{shortenedLinks.length > 0 ? (
					<div className="flex flex-col gap-4">
						<ListLinks />
					</div>
				) : null}
			</div>
		</>
	);
};

export default LinkBox;
