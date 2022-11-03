import type { NextPage } from "next";
import { FormEventHandler, useState, useEffect, ReactEventHandler, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import useConsultants from "../../hooks/useConsultants";

type ServerSideProps = {
	consultants: Consultant[];
};

const skeletonData = [{}, {}, {}] as Consultant[];
const tempPlaceholderCountries = [
  "Myanmar",
  "Japan",
  "Thailand",
];

const Consulting: NextPage<ServerSideProps> = () => {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [country, setCountry] = useState("");
  const { loading, totalPages, consultants, getConsultants } = useConsultants();

  const consultantsData = loading ? skeletonData : consultants;
  const noConsultantsFound = consultants.length === 0 && loading === false;

  useEffect(() => {
    getConsultants({ page, name, country });
  }, [page, name, country]);

  const filterName : FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const searchElem = document.getElementById("search") as HTMLInputElement;
    if (searchElem === null) return;
    setName(searchElem.value);
  };

  const filterCountry : ReactEventHandler<HTMLSelectElement> = () => {
    const selectElem = document.getElementById("select_country") as HTMLSelectElement;
    if (selectElem === null) return;
    setCountry(selectElem.value);
  };

  return (
    <div>
      <div className="group relative flex mb-4 justify-center">
        <Image src="/assets/consulting.jpg" layout="fill" alt="Consultation background" className="group-hover:scale-105 object-cover transition-transform" />
        <div className="relative flex flex-col p-10 gap-y-12 md:max-w-2xl w-11/12 items-center">
          <h1 className="md:text-4xl text-3xl font-semibold text-white text-center">What is Consultation?</h1>
          <p className="text-white md:text-lg text-sm">
						Lacus mattis odio sem fusce convallis vitae aliquam tempor. Quam ut odio
						eget eu amet. Aenean tortor amet sit lorem. Nibh pharetra lorem tellus nisl
						feugiat eu.
          </p>
          <div className="flex w-full flex-wrap gap-2">
            <form className="flex flex-1" onSubmit={filterName}>
              <input type="search" name="search" id="search" placeholder="Search your consultants" className="flex-1 px-3 py-1.5 outline-none rounded-l-md bg-slate-200" />
              {/* Replace emoji with vector icon */}
              <button type="submit" className="w-10 bg-primary-light hover:bg-primary transition-colors rounded-r-md">🔎</button>
            </form>
            <select onChange={filterCountry} id="select_country" className="p-1 bg-slate-200 text-primary font-semibold">
              <option disabled value="">Choose country</option>
              {tempPlaceholderCountries.map(country => <option key={country} value={country}>{country}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center md:text-3xl text-2xl font-semibold">Meet Our Consultants</h1>
        <div className="flex flex-wrap justify-center">
          {noConsultantsFound
            ? <p className="py-36">No consultants found...</p>
            : (consultantsData).map((data) => (
              <Card key={data._id} data={data} />
            ))}
        </div>
        <PageNavigation currentPage={page} totalPages={totalPages} setPage={setPage} />
      </div>
    </div>
  );
};

const Card = ({ data } : { data: Consultant }) => {
  return data._id !== undefined ? (
    <Link href={{ pathname: `/consulting/${data._id}` }}>
      <div className="group flex flex-col w-72 px-10 py-4 m-6 mt-20 gap-y-4 items-center rounded-lg cursor-pointer shadow-default hover:shadow-expand active:shadow-shrink transition-all">
        <div className="group-hover:scale-105 transition-transform relative -mt-20 w-36 h-36">
          {/* <Image src={data.profile} layout="fill" alt={`Picture of ${data.name}`}  className="object-cover rounded-full" /> */}
          <Image src={"/assets/man.png"} layout="fill" alt={`Picture of ${data.name}`} className="object-cover rounded-full" />
        </div>
        <p className="text-lg font-semibold">{data.name}</p>
        <ul className="flex-1 w-10/12 space-y-1 list-disc">
          <li>{data.country}</li>
          <li>{data.university}</li>
          <li>{data.major}</li>
        </ul>
        <Link href={{ pathname: `/consulting/booking/${data._id}` }}>
          <button className="w-28 py-3 rounded-lg text-white bg-primary-light hover:bg-primary shadow-default hover:shadow-shrink transition-all">
            Book Now
          </button>
        </Link>
      </div>
    </Link>
  ) : (<div className="flex w-72 h-80 m-6 mt-20 rounded-lg cursor-pointer shadow-default" />);
};

const PageNavigation = ({ currentPage, totalPages, setPage }: { currentPage:number, totalPages: number, setPage: Dispatch<SetStateAction<number>>}) => {
  const pages = Array.from(Array(totalPages).keys());

  const prevPage = () => currentPage > 1 && setPage(currentPage => currentPage - 1);
  const nextPage = () => currentPage < totalPages && setPage(currentPage => currentPage + 1);

  const buttonClassName = "flex w-10 h-10 justify-center items-center text-center border-2 border-gray-500 rounded-md";

  return (
    <div className="flex flex-row px-12 space-x-2 mb-6">
      <button onClick={prevPage} className={buttonClassName}><p>{"<"}</p></button>
      {pages.map((page) => {
        const isCurrent = currentPage === page + 1;
        return <button
          onClick={() => setPage(page + 1)}
          key={page}
          className={`${buttonClassName} ${isCurrent && "bg-primary border-0"}`}>
          <p className={isCurrent ? "text-white" : ""}>{page + 1}</p>
        </button>;
      },
      )}
      <button onClick={nextPage} className={buttonClassName}><p>{">"}</p></button>
    </div>
  );
};

export default Consulting;
