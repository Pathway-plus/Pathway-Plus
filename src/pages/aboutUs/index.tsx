import Image from "next/image";
import type {NextPage } from "next";

const AboutUs:NextPage =() =>{

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
      <span className="-z-10 relative left-0 px-10"><Image src={"/assets/about-us/demo.png"} width="200" height="150"></Image></span>

      <div>
        <p className="px-5 py-5 text-center font-semibold text-sm">Head Of Organizations</p>
        <br />
      </div>
      <div>
        <p className="px-5 py-5 text-center font-semibold text-sm">Where We Start</p>
        <br />
      </div>
      <div>
        <p className="px-5 py-5 text-center font-semibold text-sm">Our Volunteers</p>
        <br />
      </div>

    </div>
  );
};

export default AboutUs;
