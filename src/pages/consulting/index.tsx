import type { GetServerSideProps, NextPage } from "next";
import { FormEventHandler, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ServerSideProps = {
	consultants: Consultant[];
};

export const getStaticProps : GetServerSideProps<ServerSideProps> = async () => {
  try {
    const response = await fetch(`${process.env.API_URL}/consultant/all`, { method: "GET" });
    if (response.status < 200 || response.status >= 300) return { notFound: true };
    const responseData = await response.json();
    return { props: { consultants: responseData } };
  } catch (e) {
    return { notFound: true };
  }
};

const tempPlaceholderCountries = [
  "Myanmar",
  "Japan",
  "Thailand",
];

const Consulting: NextPage<ServerSideProps> = ({ consultants }: ServerSideProps) => {
  const [filter, setFilter] = useState("");
  // const [country, setCountry] = useState("");
  const filteredConsultants = consultants.filter((data) => data.name.toLowerCase().includes(filter));

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
              <button type="submit" className="w-10 mr-2 bg-primary-light hover:bg-primary transition-colors rounded-r-md">🔎</button>
            </form>
            <select className="px-1 bg-slate-200 text-primary font-semibold">
              <option disabled value="">Choose country</option>
              {tempPlaceholderCountries.map(country => <option key={country} value={country}>{country}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center text-3xl font-semibold">Meet Our Consultants</h1>
        <div className="flex flex-wrap justify-center">
          {filteredConsultants.map((data) => (
            <Card key={data._id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ data } : { data: Consultant }) => {
  const onClick : FormEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    // makeBooking(data.id)
  };

  return (
    <Link  href={{ pathname: `/consulting/${data._id}` }}>
      <div className="group active:scale-105 flex flex-col w-72 px-10 py-4 m-6 mt-20 space-y-4 items-center rounded-lg cursor-pointer shadow-[0_0px_10px_2px_rgba(0,0,0,0.2)] hover:shadow-[0_0px_15px_3px_rgba(0,0,0,0.25)] active:shadow-[0_0px_15px_2px_rgba(0,0,0,0.1)] transition-all">
        <div className="group-hover:scale-105 transition-transform relative -mt-20 w-36 h-36">
          {/* <Image src={data.profile} layout="fill" alt={`Picture of ${data.name}`}  className="object-cover rounded-full" /> */}
          <Image src={"/assets/man.png"} layout="fill" alt={`Picture of ${data.name}`}  className="object-cover rounded-full" />
        </div>
        <p className="text-lg font-semibold">{data.name}</p>
        <ul className="flex-1 w-10/12 space-y-1 list-disc">
          <li>{data.country}</li>
          <li>{data.university}</li>
          <li>{data.major}</li>
        </ul>
        <button onClick={onClick} className="w-28 py-3 rounded-lg text-white bg-primary-light hover:bg-primary shadow-[0_0px_10px_2px_rgba(0,0,0,0.25)] hover:shadow-[0_0px_10px_2px_rgba(0,0,0,0.05)] transition-all">
					Book Now
        </button>
      </div>
    </Link>
  );
};

export default Consulting;
