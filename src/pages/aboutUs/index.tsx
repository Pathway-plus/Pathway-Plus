import Image from "next/image";
import type { NextPage } from "next";
import { useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import useVolunteers from "../../hooks/useVolunteers";

const timelineData = [
  { month: "January", year: 2021, title: "Organisation Launch" },
  { month: "June", year: 2021, title: "Production of Virtual Class" },
  { month: "August", year: 2021, title: "Production of Virtual Event/Workshops" },
  { month: "October", year: 2021, title: "Production of 1st Flagship Service: Consultation" },
  { month: "January", year: 2022, title: "Production of 1st Flagship Service: Proofreading" },
  { month: "March", year: 2022, title: "Operation Termination as Compass Learning Myanmar" },
  { month: "April", year: 2022, title: "Operation Initiation as Pathway Plus" },
  { month: "May", year: 2022, title: "Production of 2nd Flagship Service: PLUSXBEYOND: INDUSTRY TALK" },
  { month: "June", year: 2022, title: "Crossed over 100 proofread documents" },
  { month: "July", year: 2022, title: "Crossed over 300 consultation sessions" },
];

const AboutUs: NextPage = () => {

  const { loading, volunteers, getVolunteers } = useVolunteers();
  const volunteersData = loading ? [] : volunteers;

  useEffect(() => {
    getVolunteers();
  }, []);

  const VolunteerRow = ({ index, volunteer }: { index: number; volunteer: Volunteer }) => {
    return (
      <tr className="border-2 h-10 text-slate-600">
        <td></td>
        <td className="px-4">{index + 1}</td>
        <td>{volunteer.name}</td>
        <td>{volunteer.role.name}</td>
        <td>{volunteer.department.name}</td>
        <td>{volunteer.duration}</td>
      </tr>
    );
  };

  return(
    <div>
      <div className="group relative flex mb-4 justify-center">
        <Image src="/assets/about-us/fillPic.png" layout="fill" alt="About Us background" className="group-hover:scale-105 object-cover transition-transform" />
        <div className="relative flex flex-col p-10 space-y-16 max-w-2xl items-center">
          <div className="py-12 text-center">
            <h1 className="text-l font-normal text-white my-2">Get to know more about us</h1>
            <h1 className="text-xl font-semibold text-orange-600 my-4">Who We Are</h1>
            <p className="text-white text-xs leading-5">
              Pathway Plus is a fully youth-led non-profit-organization
              <br/>
              registered with the Ministery of Investment and Foreign
              <br/>
              Economic Relations (MIFER)
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="px-5 py-5 text-center font-semibold text-sm">Our Missions</p>
      </div>
      <div className="flex">
        <div className="relative left-0 top-48"><Image src={"/assets/about-us/twoOrangeL.png"} width="100" height="250"></Image></div>
        <div className="relative left-2 w-1/2"><Image src={"/assets/about-us/demo.png"} width="350" height="270"></Image></div>

        <div className="w-1/2 float-right mr-16 font-light">
          <div className="flex float-right py-2 mr-6">
            <span className="relative float-left"><Image src={"/assets/about-us/Vector.png"} width="20" height="20"></Image></span>
            <span className="mx-2 float-right text-xs">
              To empower Burmese youths by providing virtual
              <br />
              academic consultations and career events regardless
              <br />
              of race,religion,and ethnicity.
            </span>

          </div>

          <div className="flex float-right py-2">
            <span className="relative float-left"><Image src={"/assets/about-us/Vector.png"} width="20" height="20"></Image></span>
            <span className="mx-2 float-right text-xs">
              To establish the community not only to provide Burmese
              <br />
              youths through on-ground vocational training
              <br />
              programmes,and academic and career-related-
              <br />
              programmes,but also to assists mid-career changes for
              <br />
              experienced employees in terms of training and academic
              <br />
              programmes.
            </span>
          </div>

          <div className="flex float-right py-2 mr-[5px]">
            <span className="relative float-left"><Image src={"/assets/about-us/Vector.png"} width="20" height="20"></Image></span>
            <span className="mx-2 float-right text-xs">
              To undertake any research necessary to futher any of the
              <br />
              objects specified above
            </span>
          </div>

          <div className="flex float-right py-2 mr-6">
            <span className="relative float-left"><Image src={"/assets/about-us/Vector.png"} width="20" height="20"></Image></span>
            <span className="mx-2 float-right text-xs">
              To do all such other lawful things as are incidental or
              <br />
              conducive to the attainment of any or all of the above
              <br />
              objects.
            </span>
          </div>
        </div>
      </div>

      <div className="float-right -mt-20"><Image src={"/assets/about-us/twoOrangeR.png"} width="100" height="250"></Image></div>

      <div>
        <p className="px-24 mt-12 text-center font-semibold text-sm">Head Of Organizations</p>
        <br />
      </div>

      <div className="mt-5">

        <p className="px-24 mb-6 text-center font-semibold text-sm">Where We Start</p>
        <span className="-mt-12 float-right"><Image src={"/assets/about-us/rightTri.png"} width="50" height="100"></Image></span>
        <span className="-mt-12 float-left"><Image src={"/assets/about-us/leftTri.png"} width="50" height="100"></Image></span>

        <div className="px-20">
          <VerticalTimeline lineColor="#d2d2d2">
            {timelineData.map((item) => {
              return <VerticalTimelineElement
                key={item.title}
                icon={<div className="w-1/2 h-1/2 rounded-full bg-primary" />}
                iconStyle={{ marginTop: 50, color: "#F65A06", boxShadow: "none", borderWidth: 3, borderColor: "#F65A06", alignItems: "center", justifyContent: "center", display: "flex" }}
                contentStyle={{boxShadow: "none"}}>
                <p>{`${item.month} ${item.year}`}</p>
                <p className="text-primary">{item.title}</p>
              </VerticalTimelineElement>;
            })}
          </VerticalTimeline>
        </div>

      </div>

	  <span className="-mt-12 float-right"><Image src={"/assets/about-us/bottomR.png"} width="50" height="100"></Image></span>
        <span className="-mt-12 float-left"><Image src={"/assets/about-us/bottomL.png"} width="50" height="100"></Image></span>

      <div>
        <p className="px-5 mt-5 text-center font-semibold text-sm">Our Volunteers</p>
        <br />
        <div className="border-1 border-t-0 text-xs">
          <table className="w-11/12 mx-10">
            <thead>
              <tr className="h-14 text-white">
                <td className="rounded-l-lg bg-primary"></td>
                <td className="px-4 pr-2 bg-primary">No.</td>
                <td className="pr-2 bg-primary">Volunteer Name</td>
                <td className="pr-2 bg-primary">Role</td>
                <td className="pr-2 bg-primary">Department</td>
                <td className="pr-2 bg-primary">Duration</td>
              </tr>
            </thead>

            <tbody className="overflow-y-scroll">
              {volunteersData.map((volunteer, index) => (
                <VolunteerRow key={volunteer._id} index={index} volunteer={volunteer} />
              ))}
            </tbody>
          </table>
        </div>
        <br />
      </div>

    </div>
  );
};

export default AboutUs;
