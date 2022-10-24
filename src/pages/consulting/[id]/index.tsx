import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { FormEventHandler } from "react";

type ServerSideProps = {
	consultant: Consultant;
};

export const getServerSideProps : GetServerSideProps<ServerSideProps> = async (context) => {
  const id = context.query.id;
  // This is returning 304 NOT MODIFIED
  try {
    const response = await fetch(`${process.env.API_URL}/consultant/${id}`, { method: "GET" });
    if (response.status < 200 || response.status >= 400) return { notFound: true };
    const responseData = await response.json();
    return { props: { consultant: responseData[0] } };
  } catch (e) {
    return { notFound: true };
  }
};

const ConsultantDetail: NextPage<ServerSideProps> = ({ consultant }: ServerSideProps) => {
  const onClick : FormEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    // makeBooking(data.id)
  };
	
  return (
    <div>
      <div className="group relative flex justify-center bg-black bg-opacity-50">
        <Image src="/assets/consulting.jpg" layout="fill" alt="Consultation background" className="group-hover:scale-105 object-cover transition-transform -z-10" />
        <div className="p-16">
          <h1 className="text-4xl font-semibold text-white">Consultant Information Detail</h1>
        </div>
      </div>

      <div className="sm:flex-row flex flex-col p-12">
        <div className="sm:mr-12 flex-1 mr-0">
          <div className="sm:h-[25vw] relative w-full h-[60vw] mb-12">
            {/* <Image src={consultant.src} layout="fill" className="object-top object-contain"/> */}
            <Image src={"/assets/man.png"} layout="fill" className="object-top object-contain"/>
          </div>
        </div>
        <div className="flex-[3]">
          <h2 className="font-semibold text-xl mb-6">{consultant.name}</h2>
          <ol className="w-96 mb-6 space-y-2">
            <DetailItem label="University" value={consultant.university} />
            <DetailItem label="Specialization" value={consultant.major} />
            <DetailItem label="Year" value={consultant.year} />
            <DetailItem label="Country" value={consultant.country} />
          </ol>
          <h3 className="font-semibold text-lg mb-6">Introduction</h3>
          <p className="mb-12">{consultant.introduction}</p>
          <button onClick={onClick} className="w-80 py-3 rounded-lg text-white bg-primary-light hover:bg-primary shadow-[0_0px_10px_2px_rgba(0,0,0,0.25)] hover:shadow-[0_0px_10px_2px_rgba(0,0,0,0.05)] transition-all">
						Make Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }: { label: string, value: string }) => {
  return (
    <li className="flex">
      <span className="flex flex-1">{label}</span>
      <div className="mr-10 w-2 h-2 mt-2 rounded-xl bg-primary" />
      <span className="flex flex-[1.5]">{value}</span>
    </li>
  );
};

export default ConsultantDetail;
