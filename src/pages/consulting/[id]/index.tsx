import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

type ServerSideProps = {
	consultant: Consultant;
  id: string;
};

export const getServerSideProps : GetServerSideProps<ServerSideProps> = async (context) => {
  const id = context.query.id as unknown as string;
  // This is returning 304 NOT MODIFIED
  try {
    const response = await fetch(`${process.env.API_URL}/consultant/${id}`, { method: "GET" });
    if (response.status < 200 || response.status >= 400) return { notFound: true };
    const responseData = await response.json();
    return { props: { consultant: responseData[0], id } };
  } catch (e) {
    return { notFound: true };
  }
};

const ConsultantDetail: NextPage<ServerSideProps> = ({ consultant, id }: ServerSideProps) => {
  return (
    <div>
      <div className="group relative flex justify-center bg-black bg-opacity-50">
        <Image src="/assets/consulting.jpg" layout="fill" alt="Consultation background" className="group-hover:scale-105 object-cover transition-transform -z-10" />
        <div className="p-16">
          <h1 className="text-center md:text-4xl text-3xl font-semibold text-white">Consultant Information Detail</h1>
        </div>
      </div>

      <div className="md:flex-row flex flex-col gap-12 p-12">
        <div className="w-full mr-0">
          <div className="relative w-full h-[50vw]">
            {/* <Image src={consultant.src} layout="fill" className="object-top object-contain"/> */}
            <Image src={"/assets/man.png"} layout="fill" className="object-top object-contain"/>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="font-semibold text-xl">{consultant.name}</h2>
          <ol className="md:w-96 space-y-4">
            <DetailItem label="University" value={consultant.university} />
            <DetailItem label="Specialization" value={consultant.major} />
            <DetailItem label="Year" value={consultant.year} />
            <DetailItem label="Country" value={consultant.country} />
          </ol>
          <h3 className="font-semibold text-lg">Introduction</h3>
          <p className="text-justify">{consultant.introduction}</p>
          <Link href={{ pathname: `/consulting/booking/${id}` }}>
            <button className="md:w-80 w-full py-3 rounded-lg text-white bg-primary-light hover:bg-primary shadow-default hover:shadow-shrink transition-all">
              Make Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }: { label: string, value: string }) => {
  return (
    <li className="flex md:flex-row flex-col">
      <span className="flex md:flex-1 font-semibold md:font-normal">{label}</span>
      <div className="md:flex hidden mr-10 w-2 h-2 mt-2 rounded-xl bg-primary" />
      <span className="flex flex-[1.5]">{value}</span>
    </li>
  );
};

export default ConsultantDetail;
