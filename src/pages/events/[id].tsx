import type { NextPage } from "next";
import { BsArrowLeft, BsChevronRight } from "react-icons/bs";

import { useRouter } from "next/router";

const EventDetails: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div className="p-6">
      <div className="flex items-center mb-8">
        <BsArrowLeft onClick={router.back} className="w-10 h-6 mr-4 text-primary border-2 border-primary rounded-lg cursor-pointer" />
        <h1 className="md:text-3xl text-2xl">Back to Upcoming Events</h1>
      </div>
      <div className="mx-52">
        <div className="bg-black w-full h-60 mb-4 rounded-lg" />
        <p className="flex items-center justify-end mb-4 text-primary">
          Register Here
          <BsChevronRight />
        </p>
        <h2 className="text-center mb-4 text-lg font-semibold">Annual GM</h2>
        <p className="text-gray-text">Venue: Online</p>
        <p className="text-gray-text">Date: Monday, 17/10/2022</p>
        <p className="text-gray-text">Time: 7:00 PM (Myanmar Time)</p>

        <h3 className="my-6 font-semibold text-primary">About the Event</h3>
        <div className="bg-black w-full h-96 mb-4 rounded-lg" />

      </div>
    </div>
  );
};

export default EventDetails;
