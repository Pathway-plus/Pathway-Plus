import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { FormEventHandler } from "react";

const ConsultantDetail: NextPage = () => {
	const router = useRouter();
	const data = router.query as unknown as ConsultantDetails;

	const onClick : FormEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		// makeBooking(data.id)
	};
	
	return (
		<div>
			<div className="group relative flex justify-center bg-black bg-opacity-50">
				<Image src="/assets/consulting.jpg" layout="fill" alt="Consultation background" className="group-hover:scale-105 object-cover transition-transform -z-10" />
				<div className="p-16">
					<h1 className="text-4xl font-semibold text-white">Consultant Information Detail</h1>
				</div>
			</div>

			<div className="sm:flex-row flex flex-col p-12">
				<div className="sm:mr-12 flex-1 mr-0">
					<div className="sm:h-[25vw] relative w-full h-[60vw] mb-12">
						<Image src={data.src} layout="fill" className="object-top object-contain"/>
					</div>
				</div>
				<div className="flex-[3]">
					<h2 className="font-semibold text-xl mb-6">{data.name}</h2>
					<ol className="w-96 mb-6 space-y-2">
						<DetailItem label="University" value={data.university} />
						<DetailItem label="Specialization" value={data.specialization} />
						<DetailItem label="Year" value={data.year} />
						<DetailItem label="Country" value={data.country} />
					</ol>
					<h3 className="font-semibold text-lg mb-6">Introduction</h3>
					<p className="mb-12">{data.introduction}</p>
					<button onClick={onClick} className="w-80 py-3 rounded-lg text-white bg-orange-600 hover:bg-orange-700 shadow-[0_0px_10px_2px_rgba(0,0,0,0.25)] hover:shadow-[0_0px_10px_2px_rgba(0,0,0,0.05)] transition-all">
						Make Appointment
					</button>
				</div>
			</div>
		</div>
	);
};

const DetailItem = ({ label, value }: { label: string, value: string }) => {
	return (
		<li className="flex">
			<span className="flex flex-1">{label}</span>
			<div className="mr-10 w-2 h-2 mt-2 rounded-xl bg-orange-600" />
			<span className="flex flex-[1.5]">{value}</span>
		</li>
	);
};

export default ConsultantDetail;
