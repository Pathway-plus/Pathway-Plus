import type {  NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

const ConsultantDetail: NextPage = () => {
  const router = useRouter();
  const id = router.query.id as unknown as string;
  
  return (
    <div>
      <div className="group relative flex justify-center bg-black bg-opacity-50">
        <Image src="/assets/consulting.jpg" layout="fill" alt="Consultation background" className="group-hover:scale-105 object-cover transition-transform -z-10" />
        <div className="p-16">
          <h1 className="text-4xl font-semibold text-white">Consultant Booking Process</h1>
        </div>
      </div>

      <div className="sm:flex-row flex flex-col p-12">
        <div className="sm:mr-12 flex-1 mr-0">
          <div className="sm:h-[25vw] relative w-full h-[60vw] mb-12">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantDetail;
