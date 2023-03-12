import type { GetServerSideProps, NextPage } from "next";
import React, { SetStateAction, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { HiOutlineCalendar, HiOutlineClock, HiOutlineXCircle } from "react-icons/hi";
import { TbChecks } from "react-icons/tb";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type ServerSideProps = {
	sessions: Array<Session>;
  id: string;
};

export const getServerSideProps : GetServerSideProps<ServerSideProps> = async (context) => {
  const id = context.query.id as unknown as string;
  try {
    const response = await fetch(`${process.env.API_URL}/consultingsessions/sessionsofconsultant/${id}`, { method: "GET" });
    if (response.status < 200 || response.status >= 400) return { notFound: true };
    const responseData = await response.json();
    return { props: { sessions: responseData, id } };
  } catch (e) {
    return { notFound: true };
  }
};

const ConsultantBooking: NextPage<ServerSideProps> = ({ sessions, id }: ServerSideProps) => {
  const router = useRouter();
  const [form, setForm] = useState<BookingForm>({} as BookingForm);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selected, setSelected] = useState("");
  const isAvailable = sessions.length > 0;

  const goBack: React.FormEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    router.back();
  };

  const editForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((oldForm) => {
    const field = e.target.id;
    const newForm = JSON.parse(JSON.stringify(oldForm));
    newForm[field] = e.target.value;
    return newForm;
  });

  const handleSubmit: React.MouseEventHandler<HTMLDivElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/create_booking", {
        method: "POST",
        body: JSON.stringify({...form, ...sessions.find((session => session._id === selected))}),
      });
      const isSuccess: boolean = await response.json();

      if (isSuccess) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    } catch (e) {
      setSuccess(false);
    } finally {
      setLoading(false);
      setSubmitted(true);
      setShowConfirmation(false);
    }
  };

  const cancel: React.MouseEventHandler<HTMLElement> = () => {
    setSubmitted(false);
    setShowConfirmation(false);
  };

  const confirm: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setShowConfirmation(selected !== "");
  };

  return (
    <div>
      <div className="group relative flex justify-center bg-black bg-opacity-50">
        <Image src="/assets/consulting.jpg" layout="fill" alt="Consultation background" className="group-hover:scale-105 object-cover transition-transform -z-10" />
        <div className="p-16">
          <h1 className="text-4xl font-semibold text-white">Consultant Booking Process</h1>
        </div>
      </div>

      <div className="sm:px-32 flex flex-col p-12 px-4">
        <h2 className="border-l-8 border-l-primary p-2 mb-8 text-xl font-medium">Appointment Detail</h2>
        <form onSubmit={confirm} className="relative flex flex-col">
          <label htmlFor="name">Name</label>
          <input required id="name" placeholder="Enter your name" onChange={editForm} className="sm:w-[600px] mt-2 mb-4 p-3 border-2 rounded-md" />
          <label htmlFor="email">Email Address</label>
          <input required id="email" placeholder="Enter your email address" onChange={editForm} className="sm:w-[600px] mt-2 mb-4 p-3 border-2 rounded-md" />
          <label htmlFor="facebook">Facebook Profile URL</label>
          <input required id="facebook" placeholder="Enter your facebook profile url" onChange={editForm} className="sm:w-[600px] mt-2 mb-4 p-3 border-2 rounded-md" />
          <label htmlFor="age">Age</label>
          <input required id="age" placeholder="Enter your age" onChange={editForm} className="sm:w-[600px] mt-2 mb-4 p-3 border-2 rounded-md" />
          <label htmlFor="phone">Contact number</label>
          <input required id="phone" placeholder="Enter your mobile phone number" onChange={editForm} className="sm:w-[600px] mt-2 mb-4 p-3 border-2 rounded-md" />
          <label htmlFor="education">Current Education</label>
          <input required id="education" onChange={editForm} className="sm:w-[600px] mt-2 mb-4 p-3 border-2 rounded-md" />

          <label className="mb-3">Available Session</label>
          {isAvailable && <p className="mb-3 text-xs text-gray-500">* Select session you&apos;d like to meet *</p>}
          <div className="flex flex-wrap mb-4 gap-y-4 gap-x-4">
            {isAvailable
              ? sessions.map((session) => <SessionCard key={session._id} session={session} selected={selected} setSelected={setSelected} />)
              : <p className="text-sm text-gray-500">No available sessions</p>}
          </div>

          <label htmlFor="purpose">Purpose of Consultation (Optional)</label>
          <textarea id="purpose" placeholder="Tell us something..." onChange={editForm} className="sm:w-[600px] h-40 mt-2 mb-4 p-3 border-2 rounded-md" />
          <p className="mb-3 text-xs text-gray-500">
            By submitting the form, you agree to the
            <span className="text-primary"> terms & policy.</span>
          </p>
          <span className="space-x-4">
            <button type="button" onClick={goBack} className="w-28 py-3 rounded-lg text-primary bg-white border-primary border-2 hover:bg-gray-200 transition-colors">
              Cancel
            </button>
            <button type="submit" className="w-28 py-3 rounded-lg text-white bg-primary-light hover:bg-primary transition-colors">
              Submit
            </button>
          </span>

        </form>
      </div>

      {showConfirmation && <div className="fixed z-40 top-0 bottom-0 left-0 right-0 flex items-center justify-center text-primary bg-white/70">
        <div className="z-50 p-12 bg-white rounded-md shadow-default">
          <p className="mb-6">Are you sure to confirm booking?</p>
          <div className="flex justify-between gap-x-6">
            <p onClick={cancel} className="flex flex-1 justify-center items-center py-2 border-2 border-primary rounded-md cursor-pointer">Cancel</p>
            <p onClick={handleSubmit} className="flex flex-1 justify-center items-center py-2 border-2 border-primary rounded-md cursor-pointer bg-primary text-white">
              {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : "Confirm"}
            </p>
          </div>
        </div>
      </div>}

      {submitted && <div onClick={success ? goBack : cancel} className="fixed z-40 top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-white/70">
        <div className="p-12 bg-white rounded-md shadow-default text-center">
          {success === true
            ? <div>
              <div className="m-auto mb-4 p-2 w-max text-white bg-green rounded-full"><TbChecks className="text-3xl" /></div>
              <p>Thank you for your booking.</p>
              <p>Do check your email inbox for appointment link.</p>
            </div>
            : <div>
              <div className="m-auto mb-4 w-max text-pink-red"><HiOutlineXCircle className="text-5xl" /></div>
              <p className="text-pink-red">Something went wrong. Please try again.</p>
            </div>
          }
        </div>
      </div>}
    </div>
  );
};

function SessionCard({ session, selected, setSelected } : { session: Session, selected: string, setSelected: React.Dispatch<SetStateAction<string>> }) {
  const selectedStyle = session._id === selected ? "border-primary text-primary" : "";
  const date = new Date(session.date);
  const dateString = date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  const dayString = date.toLocaleDateString("en-US", { weekday: "short" });
  const time = `${session.start_time} - ${session.end_time}`;

  function changeSelected() {
    setSelected(session._id);
  }

  return (
    <div onClick={changeSelected} className={`min-w-[45%] w-48 p-4 cursor-pointer text-xs text-gray-500 space-y-3 border-2 rounded-md ${selectedStyle}`}>
      <p className={`flex flex-row items-center ${selectedStyle}`}>
        <HiOutlineCalendar className="mr-2" />
        <span className="mr-4">Date</span>
        {`${dateString} (${dayString})`}
      </p>
      <p className={`flex flex-row items-center ${selectedStyle}`}>
        <HiOutlineClock className="mr-2" />
        <span className="mr-4">Time</span>
        {time}
      </p>
    </div>
  );
}

export default ConsultantBooking;
