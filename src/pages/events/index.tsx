import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import useEvents from "../../hooks/useEvents";

const skeletonData = [{}, {}, {}] as AvailableEvent[];

export default function EventPage() {
  const { loading, totalPages, events, getEvents } = useEvents();

  const eventsData = loading ? skeletonData : events;
  const noEventsFound = events.length === 0 && loading === false;

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="min-h-screen px-6 md:px-20">
      <div className="flex md:min-w-max py-12 mb-20">
        <div className="space-y-5 pr-36">
          <p className="text-2xl">Meet Everyone</p>
          <p className="text-6xl">Explore More!</p>
          <p className="pb-10 text-gray-500">You will never walk alone.</p>
          <Link href="/events/all">
            <button className="w-52 py-3 rounded-md text-white bg-primary-light hover:bg-primary transition-colors">
            Explore All Events
            </button>
          </Link>
        </div>
        <div className="hidden md:flex relative min-h-[300px] min-w-[520px] self-end">
          <Image src="/assets/events.png" layout="fill" height={300} width={500} />
        </div>
      </div>

      <div className="flex justify-between mb-4">
        <p className="text-lg">Upcoming Events</p>
        <div className="flex space-x-5">
          <BsArrowLeft className="w-10 h-6 text-primary border-2 border-primary rounded-lg cursor-pointer" />
          <BsArrowRight className="w-10 h-6 text-primary border-2 border-primary rounded-lg cursor-pointer" />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-6  ">
        {noEventsFound
          ? <p className="py-36">No consultants found...</p>
          : (eventsData).map((data, index) => (
            index >= 3 ? null : <Card key={data._id} data={data} />
          ))}
      </div>
    </div>
  );
}

const Card = ({ data } : { data: AvailableEvent }) => {
  const options: Intl.DateTimeFormatOptions = { weekday: "long", day: "numeric", month: "numeric", year: "numeric" };
  const date = new Date(data.date);

  return (
    <div className="group flex flex-col flex-1 p-3 mb-8 last:mr-0 gap-y-4 items-center rounded-lg shadow-default hover:shadow-expand active:shadow-shrink transition-all">
      <div className="transition-transform relative w-full h-36">
        {/* <Image src={"/assets/events.png"} layout="fill" alt={`Picture of ${data.name}`} className="object-cover" /> */}
        <div className="bg-black w-full h-full rounded-lg" />
      </div>
      <p className="text-lg font-semibold">{data.name}</p>
      <div className="self-start text-sm text-gray-text space-y-1">
        <p className="mb-2">{`Organizer: ${data.organizer}`}</p>
        <p>{`Venue: ${data.venue}`}</p>
        <p>{`Date: ${date.toLocaleDateString("en-US", options)}`}</p>
        <p>{`Time: ${data.time} (Myanmar Time)`}</p>
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
};