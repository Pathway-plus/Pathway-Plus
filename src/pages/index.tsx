import type {NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {GiDiscussion} from "react-icons/gi";
import {AiOutlineFileSearch} from "react-icons/ai";
import {BiCalendarStar} from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import useConsultants from "../hooks/useConsultants";
import {useEffect} from "react";

type ServerSideProps = {
  consultant: Consultant;
};

// {JSON.stringify(consultantsData)}

const skeletonData = [{}, {}, {}] as Consultant[];

const Home:NextPage<ServerSideProps> = () => {
  const { loading, consultants, getConsultants} = useConsultants();
  const consultantsData = loading ? skeletonData : consultants;
  const noConsultantsFound = consultants.length === 0 && loading === false;
  useEffect(() => {
    getConsultants();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pathway Plus</title>
        <meta name="description" content="Pathway Plus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex py-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col px-4">
            <span className="text-xl">Welcome To</span>

            <p className="text-2xl text-bold">
              Pathway Plus!
              <Image src={"/assets/hiFive.png"} width="46" height="47" />
            </p>

            <span className="py-5 text-xs">
              Planning to study abroad? This is the right
              <br/>
              place for your goal!
            </span>

            <button className="w-48 py-3 rounded-lg text-white bg-orange-500 hover:bg-orange-600 shadow-[0_0px_10px_2px_rgba(0,0,0,0.25)] hover:shadow-[0_0px_10px_2px_rgba(0,0,0,0.05)] transition-all">
              <a href="/consulting">Explore Now</a>
            </button>
          </div>

        </div>

        <div className="grid grid-flow-col grid-rows-2 py-6 px-4 gap-2">
          <span className="ml-56">
            <Image src={"/assets/girlWithfile.png"} width="160" height="160"></Image>
          </span>
          <span className="ml-56"><Image src={"/assets/girl3.png"} width="150" height="150"></Image></span>
          <span className="px-4"><Image src={"/assets/girl2.png"} width="150" height="150"></Image></span>
          <span className="px-4"><Image src={"/assets/girl4.png"} width="150" height="150"></Image></span>
        </div>

        <span className="-z-10 absolute right-0 px-2"><Image src={"/assets/ellipse/yellow.png"} width="150" height="150"></Image></span>
        <span className="-z-10 absolute right-80 my-32"><Image src={"/assets/ellipse/blue.png"} width="15" height="15"></Image></span>
        <span className="-z-10 absolute px-48"><Image src={"/assets/ellipse/orange.png"} width="10" height="10"></Image></span>
        <span className="-z-10 absolute left-72 my-[330px]"><Image src={"/assets/ellipse/pink.png"} width="15" height="15"></Image></span>
        <span className="-z-10 absolute right-[280px] my-[370px]"><Image src={"/assets/ellipse/smallYellow.png"} width="20" height="20"></Image></span>
        <span className="-z-10 absolute -mx-20 right-[330px]"><Image src={"/assets/ellipse/orange.png"} width="10" height="10"></Image></span>
        <span className="-z-10 absolute right-8 my-[330px]"><Image src={"/assets/ellipse/pink.png"} width="15" height="15"></Image></span>
      </div>

      <div className="px-5 py-5 text-center font-semibold text-sm">
        Our Services
      </div>

      <div className="px-5 py-5 grid grid-flow-col grid-rows-1 grid-cols-3 gap-4">
        <a href="/consulting">
          <div className="w-54 h-40 bg-green-400 rounded-lg shadow-lg border-b">
            <br />
            <br />
            <GiDiscussion className="md:flex w-11/12 mx-1 my-2 h-10 text-center text-white"></GiDiscussion>
          </div>

          <div className="w-54 h-40 bg-white rounded-lg shadow-lg border-b">
            <p className = "text-sm text-center py-3 ">Consultation </p>
            <br />
            <p className = "text-xs text-center py-3 text-orange-600">Learn More &rarr;</p>
          </div>
        </a>

        <a href="#">
          <div className="w-54 h-40 bg-blue-500 rounded-lg shadow-lg border-b">
            <br />
            <br />
            <AiOutlineFileSearch className="md:flex w-11/12 mx-2 my-2 h-10 text-center text-white"/>
          </div>

          <div className="w-54 h-40 bg-white rounded-lg shadow-lg border-b">
            <p className= "text-sm text-center py-3">Proofreading </p>
            <br />
            <p className = "text-xs text-center py-3 text-orange-600"> Learn More &rarr;</p>
          </div>
        </a>

        <a href="#">
          <div className = "w-54 h-40 bg-purple-500 rounded-lg shadow-lg border-b ">
            <br />
            <br />
            <BiCalendarStar className="md:flex w-11/12 mx-2 my-2 h-10 text-center text-white"/>
          </div>

          <div className="w-54 h-40 bg-white rounded-lg shadow-lg border-b">
            <p className= "text-sm text-center py-3">Events </p>
            <br />
            <p className = "text-xs text-center py-3 text-orange-600">Learn More &rarr;</p>
          </div>
        </a>
      </div>

      <div className="h-32 bg-orange-500 text-white px-4 flex flex-row items-center">
        <p className="text-center text-sm border-r-2 basis-1/3">
          Events
          <br />
          <span className="py-3 text-xl">50+</span>
        </p>

        <p className="text-center text-sm border-r-2 basis-1/3">
          Volunteers
          <br />
          <span className="py-3 text-xl">100+</span>
        </p>

        <p className="text-center text-sm basis-1/3">
          Total Proofreading
          <br />
          <span className="py-3 text-xl">500+</span>
        </p>
      </div>

      <div>
        <p className="px-5 py-5 text-center font-semibold text-sm">
          Our Consultants
          <br />
          <span className = "text-xs text-center py-3 text-orange-600">Find More Consultants &rarr;</span>
        </p>

        <div className="grid grid-rows-2 grid-flow-col m-12 center">
          {noConsultantsFound
            ? <p className="py-36">No consultants found...</p>
            : (consultantsData).map((data) => (
              <CardImage key={data._id} data={data} />
            ))}
        </div>

        <div>
          <p className="px-5 py-5 text-center font-semibold text-sm">
            Testimonials
          </p>
        </div>

        <div>
          <p className="mx-5 my-16 text-center font-semibold text-sm">
            Recent Companies We've Worked With
          </p>
          <span className="ml-56">
            <Image src={"/assets/ayu.png"} width="200" height="120"></Image>
          </span>
          <span className="mr-48 mt-7 float-right">
            <Image src={"/assets/skynet.png"} width="250" height="180"></Image>
          </span>
        </div>
        <div className="ml-72 my-10">
          <Image src={"/assets/kbz.png"} width="100" height="100"></Image>
        </div>
      </div>
    </div>
  );
};

const CardImage= ({ data } : { data: Consultant }) => {
  return(
    <div className=" m-8 items-center w-36 h- 32 cursor-pointer hover:shadow">
      <Link href={{ pathname: `/consulting/${data._id}` }} passHref>
        <div className="p-5">
          <div className="mb-2 text-xs text-gray-900 dark:text-gray">{data.name}</div>
          <div className="mb-3 text-2xs text-gray-700 dark:text-gray">{data.major}</div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
