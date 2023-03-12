import type { NextPage } from "next";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Link from "next/link";

import useConsultants from "../../hooks/useConsultants"; // temporary until careers api added
import { useRouter } from "next/router";

const skeletonData = [{}, {}, {}] as Careers[];

const Careers: NextPage = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const { loading, totalPages, consultants: careers, getConsultants: geCareers } = useConsultants();

  const prevPage = () => page > 1 && setPage(currentPage => currentPage - 1);
  const nextPage = () => page < totalPages && setPage(currentPage => currentPage + 1);

  const careersData = loading ? skeletonData : careers;
  const noCareersFound = careers.length === 0 && loading === false;

  useEffect(() => {
    geCareers({ page });
  }, [page]);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="md:text-3xl text-2xl">Opening Positions</h1>
        <div className="flex ml-5 space-x-5">
          <BsArrowLeft onClick={prevPage} className="w-10 h-6 text-primary border-2 border-primary rounded-lg cursor-pointer" />
          <BsArrowRight onClick={nextPage} className="w-10 h-6 text-primary border-2 border-primary rounded-lg cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mb-10">
        {noCareersFound
          ? <p className="py-36">No openings found...</p>
          : (careersData).map((data) => (
            <Card key={data._id} data={data} />
          ))}
      </div>
      <PageNavigation currentPage={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

const Card = ({ data } : { data: Careers }) => {
  return (
    <Link href={`/careers/${data._id}`}>
      <div className="group flex flex-col flex-1 min-w-[340px] max-w-[33vw] shrink p-3 gap-y-4 rounded-lg shadow-default cursor-pointer hover:shadow-expand active:shadow-shrink transition-all">
        <div className="transition-transform relative w-full h-36">
          {/* <Image src={"/assets/events.png"} layout="fill" alt={`Picture of ${data.name}`} className="object-cover" /> */}
          <div className="bg-black w-full h-full rounded-lg" />
        </div>
        <p className="text-lg font-semibold">Graphic Designer</p>
        <div className="self-start text-sm text-gray-text space-y-1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque eu risus quis pretium. Suspendisse ac nisl suscipit, ultrices dolor vitae, egestas nisi. Interdum et malesuada fames.</p>
        </div>
        <div className="flex w-full justify-between items-end">
          <p className="text-gray-text text-xs">Post Date: 3 weeks ago</p>
          <p className="flex items-center font-semibold text-sm text-primary-light hover:text-primary">
            Read More
            <BsArrowRight className="ml-1"/>
          </p>
        </div>
      </div>
    </Link>
  );
};

const PageNavigation = ({ currentPage, totalPages, setPage }: { currentPage:number, totalPages: number, setPage: Dispatch<SetStateAction<number>>}) => {
  const pages = Array.from(Array(totalPages).keys());

  const buttonClassName = "flex w-4 h-4 justify-center items-center text-center border-2 border-primary rounded-full";

  return (
    <div className="flex flex-row justify-center space-x-3 mb-6">
      {pages.map((page) => {
        const isCurrent = currentPage === page + 1;
        return <button
          onClick={() => setPage(page + 1)}
          key={page}
          className={`${buttonClassName} ${isCurrent && "bg-primary border-0"}`}>
        </button>;
      })}
    </div>
  );
};

export default Careers;
