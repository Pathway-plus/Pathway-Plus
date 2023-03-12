import type { NextPage } from "next";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { useRouter } from "next/router";

const CareerDetails: NextPage = () => {
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
        <div className="flex justify-between mb-4 text-primary">
          <p>Apply by: 12/12/2022</p>
          <p className="flex items-center">
            Apply here
            <BsArrowRight className="ml-1" />
          </p>
        </div>

        <h2 className="mb-4 font-semibold">Junior Web Developer (2)</h2>
        <div className="pl-4">
          <p>Job Description:</p>
          <ul className="pl-4 list-disc mb-4">
            <li>Lorem</li>
            <li>Ipsum</li>
          </ul>

          <p>Job Requirements:</p>
          <ul className="pl-4 list-disc mb-4">
            <li>Lorem</li>
            <li>Ipsum</li>
          </ul>
        </div>

        <p>Share via</p>

      </div>
    </div>
  );
};

export default CareerDetails;
