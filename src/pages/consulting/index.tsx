import type { NextPage } from "next";
import { FormEventHandler, useState } from "react";
import Image from "next/image";

interface Data {
    id: string;
    name: string;
    src: string;
    details: string[];
}

const tempPlaceholderData : Data[] = [
	{
		id: "12345",
		name: "Zu Zu",
		src: "/assets/girl.png",
		details: [
			"Korea",
			"Kasetsart University",
			"Civil Engineering (M.Sc)"
		]
	},
	{
		id: "12346",
		name: "Mg Mg",
		src: "/assets/girl.png",
		details: [
			"Japan",
			"Kasetsart University",
			"Civil Engineering (M.Sc)"
		]
	},
	{
		id: "12347",
		name: "Ko Ko",
		src: "/assets/girl.png",
		details: [
			"Thailand",
			"Kasetsart University",
			"Civil Engineering (M.Sc)"
		]
	},
	{
		id: "12348",
		name: "Min Min",
		src: "/assets/girl.png",
		details: [
			"UK",
			"Kasetsart University",
			"Civil Engineering (M.Sc)"
		]
	},
	{
		id: "12349",
		name: "Zu Zu",
		src: "/assets/girl.png",
		details: [
			"Korea",
			"Kasetsart University",
			"Civil Engineering (M.Sc)"
		]
	},
	{
		id: "12350",
		name: "Zu Zu",
		src: "/assets/girl.png",
		details: [
			"Korea",
			"Kasetsart University",
			"Civil Engineering (M.Sc)"
		]
	},
	{
		id: "12351",
		name: "Zu Zu",
		src: "/assets/girl.png",
		details: [
			"Korea",
			"Kasetsart University",
			"Civil Engineering (M.Sc)"
		]
	},
	{
		id: "12352",
		name: "Zu Zu",
		src: "/assets/girl.png",
		details: [
			"Korea",
			"Kasetsart University",
			"Civil Engineering (M.Sc)"
		]
	},
];

const Consulting: NextPage = () => {
	const [filter, setFilter] = useState("");
	const consultants = tempPlaceholderData.filter((data) => data.name.toLowerCase().includes(filter));

	const search : FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const searchElem = document.getElementById("search") as HTMLInputElement;
		if (searchElem === null) return;
		const query = searchElem.value;

		setFilter(query.toLowerCase());
	};

	return (
		<div className="w-full">
			<div className="relative flex flex-col mb-4 items-center">
				<Image src="/assets/consulting.jpg" layout="fill" alt="Consultation background" />
				<div className="relative flex flex-col p-10 space-y-12 max-w-2xl items-center">
					<h1 className="text-2xl font-semibold text-white">What is Consultation?</h1>
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
							<option disabled selected>Choose country</option>
							<option>Myanmar</option>
							<option>Japan</option>
							<option>Thailand</option>
						</select>
					</div>
				</div>
			</div>

			<div>
				<h1 className="text-center text-2xl font-semibold">Meet Our Consultants</h1>
				<div className="flex flex-wrap justify-center">
					{consultants.map((data) => (
						<Card key={data.id} data={data} />
					))}
				</div>
			</div>
		</div>
	);
};

const Card = ({ data } : { data: Data }) => {
	return (
		<div className="group flex flex-col px-10 py-4 m-6 mt-16 space-y-4 items-center rounded-lg shadow-[0_0px_10px_2px_rgba(0,0,0,0.2)] hover:shadow-[0_0px_15px_3px_rgba(0,0,0,0.25)] transition-shadow">
			<div className="group-hover:scale-105 transition-transform relative -mt-16 w-28 h-28">
				<Image src={data.src} layout="fill" alt={`Picture of ${data.name}`} />
			</div>
			<p className="text-lg font-semibold">{data.name}</p>
			<ul className="list-disc">
				{data.details.map((detail, index) => (
					<li key={index}>{detail}</li>
				))}
			</ul>
			<button className="w-28 py-3 rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition-colors">Book Now</button>
		</div>
	);
};

export default Consulting;
