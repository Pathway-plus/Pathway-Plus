import type { NextPage } from "next";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Link from "next/link";

import useEvents from "../../hooks/useEvents";
import { useRouter } from "next/router";

const skeletonData = [{}, {}, {}] as AvailableEvent[];

const Consulting: NextPage = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const { loading, totalPages, events, getEvents } = useEvents();

  const eventsData = loading ? skeletonData : events;
  const noEventsFound = events.length === 0 && loading === false;

  useEffect(() => {
    getEvents({ page });
  }, [page]);

  return (
    <div className="p-6">
      <div className="flex items-center mb-8">
        <BsArrowLeft onClick={router.back} className="w-10 h-6 mr-4 text-primary border-2 border-primary rounded-lg cursor-pointer" />
        <h1 className="md:text-3xl text-2xl">Upcoming Events</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 mb-6">
        {noEventsFound
          ? <p className="py-36">No events found...</p>
          : (eventsData).map((data) => (
            <Card key={data._id} data={data} />
          ))}
      </div>
      <PageNavigation currentPage={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

function Card({ data } : { data: AvailableEvent }) {
  return (
    <div className="group flex flex-col  p-3 gap-y-4 items-center rounded-lg shadow-default hover:shadow-expand active:shadow-shrink transition-all">
      <div className="transition-transform relative w-full h-36">
        {/* <Image src={"/assets/events.png"} layout="fill" alt={`Picture of ${data.name}`} className="object-cover" /> */}
        <div className="bg-black w-full h-full rounded-lg" />
      </div>
      <p className="text-lg font-semibold">Study Medicine in Italy</p>
      <div className="self-start text-sm text-gray-text space-y-1">
        <p className="mb-2">Organizer: Pathway Plus</p>
        <p>Venue: Online</p>
        <p>Date: Monday, 17/10/2022</p>
        <p>Time: 7:00PM (Myanmar Time)</p>
      </div>
      <div className="flex w-full justify-between text-primary-light text-sm font-semibold">
        <p className="cursor-pointer hover:text-primary">Register Now</p>
        <p className="flex items-center cursor-pointer hover:text-primary">
            Read More
          <BsArrowRight className="ml-1"/>
        </p>
      </div>
    </div>

  );
}

const PageNavigation = ({ currentPage, totalPages, setPage }: { currentPage:number, totalPages: number, setPage: Dispatch<SetStateAction<number>>}) => {
  const pages = Array.from(Array(totalPages).keys());

  const prevPage = () => currentPage > 1 && setPage(currentPage => currentPage - 1);
  const nextPage = () => currentPage < totalPages && setPage(currentPage => currentPage + 1);

  const buttonClassName = "flex w-10 h-10 justify-center items-center text-center border-2 border-gray-500 rounded-md";

  return (
    <div className="flex flex-row space-x-2 mb-6">
      <button onClick={prevPage} className={buttonClassName}><p>{"<"}</p></button>
      {pages.map((page) => {
        const isCurrent = currentPage === page + 1;
        return <button
          onClick={() => setPage(page + 1)}
          key={page}
          className={`${buttonClassName} ${isCurrent && "bg-primary border-0"}`}>
          <p className={isCurrent ? "text-white" : ""}>{page + 1}</p>
        </button>;
      })}
      <button onClick={nextPage} className={buttonClassName}><p>{">"}</p></button>
    </div>
  );
};

export default Consulting;
