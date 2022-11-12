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
      <div className="flex">
        <span className="relative left-12 w-1/2"><Image src={"/assets/about-us/demo.png"} width="350" height="250"></Image></span>

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

      <div className ="px-5 py-5 text-center font-semibold text-sm">
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
