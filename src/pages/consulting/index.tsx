import type { NextPage } from "next";
import { FormEventHandler, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";

const tempPlaceholderData : ConsultantDetails[] = [
	{
		id: "12345",
		name: "Zu Zu",
		src: "/assets/man.png",
		university: "Tokyo University",
		country: "Japan",
		specialization: "Double Majoring in Finance and Economics",
		year: "Senior",
		introduction: "Hi Guys I am James and I am a second year student at Umass boston. I like to hang out with my friends and roam around the city. I also enjoy playing basketball.\n\nI'll be open to have chat with you! See you there!",
	},
	{
		id: "12346",
		name: "Mg Mg",
		src: "/assets/man.png",
		university: "Royal University",
		country: "Malaysia",
		specialization: "Civil Engineering (M.Sc)",
		year: "Sophomore",
		introduction: "Hi Guys I am Mg Mg and I am a second year student at Umass boston. I like to hang out with my friends and roam around the city. I also enjoy playing basketball.\n\nI'll be open to have chat with you! See you there!",
	},
	{
		id: "12347",
		name: "Ko Ko",
		src: "/assets/man.png",
		university: "National University",
		country: "Australia",
		specialization: "Electrical Engineering (M.Sc)",
		year: "Junior",
		introduction: "Hi Guys I am Ko Ko and I am a second year student at Umass boston. I like to hang out with my friends and roam around the city. I also enjoy playing basketball.\n\nI'll be open to have chat with you! See you there!",
	},
	{
		id: "12348",
		name: "Min Min",
		src: "/assets/man.png",
		university: "Oxford University",
		country: "UK",
		specialization: "Mechanical Engineering (M.Sc)",
		year: "Sophomore",
		introduction: "Hi Guys I am James and I am a second year student at Umass boston. I like to hang out with my friends and roam around the city. I also enjoy playing basketball.\n\nI'll be open to have chat with you! See you there!",
	},
	{
		id: "12349",
		name: "Ye Ye",
		src: "/assets/man.png",
		university: "John University",
		country: "Korea",
		specialization: "Double Majoring in Statistics and Physics",
		year: "Sophomore",
		introduction: "Hi Guys I am James and I am a second year student at Umass boston. I like to hang out with my friends and roam around the city. I also enjoy playing basketball.\n\nI'll be open to have chat with you! See you there!",
	},
	{
		id: "12350",
		name: "Paing Paing",
		src: "/assets/man.png",
		university: "Waterloo University",
		country: "Korea",
		specialization: "Chemical Engineering (M.Sc)",
		year: "Sophomore",
		introduction: "Hi Guys I am James and I am a second year student at Umass boston. I like to hang out with my friends and roam around the city. I also enjoy playing basketball.\n\nI'll be open to have chat with you! See you there!",
	},
];

const tempPlaceholderCountries = [
	"Myanamar",
	"Japan",
	"Thailand",
];

const Consulting: NextPage = () => {
	const [filter, setFilter] = useState("");
	// const [country, setCountry] = useState("");
	const consultants = tempPlaceholderData.filter((data) => data.name.toLowerCase().includes(filter));

	const search : FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const searchElem = document.getElementById("search") as HTMLInputElement;
		if (searchElem === null) return;
		const query = searchElem.value;

		setFilter(query.toLowerCase());
	};

	return (
		<div>
			<div className="group relative flex mb-4 justify-center">
				<Image src="/assets/consulting.jpg" layout="fill" alt="Consultation background" className="group-hover:scale-105 object-cover transition-transform" />
				<div className="relative flex flex-col p-10 space-y-12 max-w-2xl items-center">
					<h1 className="text-4xl font-semibold text-white">What is Consultation?</h1>
					<p className="text-white text-lg">
						Lacus mattis odio sem fusce convallis vitae aliquam tempor. Quam ut odio
						eget eu amet. Aenean tortor amet sit lorem. Nibh pharetra lorem tellus nisl 
						feugiat eu.
					</p>
					<div className="flex w-full">
						<form className="flex flex-1" onSubmit={search}>
							<input type="search" name="search" id="search" placeholder="Search your consultants" className="flex-1 px-3 py-1.5 outline-none rounded-l-md bg-slate-200" />
							{/* Replace emoji with vector icon */}
							<button type="submit" className="w-10 mr-2 bg-orange-500 hover:bg-orange-600 transition-colors rounded-r-md">🔎</button>
						</form>
						<select className="px-1 bg-slate-200 text-orange-600 font-semibold">
							<option disabled value="">Choose country</option>
							{tempPlaceholderCountries.map(country => <option key={country} value={country}>{country}</option>)}
						</select>
					</div>
				</div>
			</div>

			<div>
				<h1 className="text-center text-3xl font-semibold">Meet Our Consultants</h1>
				<div className="flex flex-wrap justify-center">
					{consultants.map((data) => (
						<Card key={data.id} data={data} />
					))}
				</div>
			</div>
		</div>
	);
};

const Card = ({ data } : { data: ConsultantDetails }) => {
	const onClick : FormEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		// makeBooking(data.id)
	};

	return (
		// Temporary solution using url query until AppContext has been set up
		<Link  href={{ pathname: `/consulting/${data.id}`, query: data as unknown as ParsedUrlQuery }}>
			<div className="group active:scale-105 flex flex-col w-72 px-10 py-4 m-6 mt-20 space-y-4 items-center rounded-lg cursor-pointer shadow-[0_0px_10px_2px_rgba(0,0,0,0.2)] hover:shadow-[0_0px_15px_3px_rgba(0,0,0,0.25)] active:shadow-[0_0px_15px_2px_rgba(0,0,0,0.1)] transition-all">
				<div className="group-hover:scale-105 transition-transform relative -mt-20 w-36 h-36">
					<Image src={data.src} layout="fill" alt={`Picture of ${data.name}`}  className="object-cover rounded-full" />
				</div>
				<p className="text-lg font-semibold">{data.name}</p>
				<ul className="flex-1 w-10/12 space-y-1 list-disc">
					<li>{data.country}</li>
					<li>{data.university}</li>
					<li>{data.specialization}</li>
				</ul>
				<button onClick={onClick} className="w-28 py-3 rounded-lg text-white bg-orange-500 hover:bg-orange-600 shadow-[0_0px_10px_2px_rgba(0,0,0,0.25)] hover:shadow-[0_0px_10px_2px_rgba(0,0,0,0.05)] transition-all">
					Book Now
				</button>
			</div>
		</Link>
	);
};

export default Consulting;
