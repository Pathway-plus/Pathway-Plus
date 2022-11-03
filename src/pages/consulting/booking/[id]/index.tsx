import type { GetServerSideProps, NextPage } from "next";
import React, { useState } from "react";
import Image from "next/image";

type ServerSideProps = {
	sessions: Array<Session>;
  id: string;
};

export const getServerSideProps : GetServerSideProps<ServerSideProps> = async (context) => {
  const id = context.query.id as unknown as string;
  // This is returning 304 NOT MODIFIED
  try {
    const response = await fetch(`${process.env.API_URL}/consultant/${id}/sessions`, { method: "GET" });
    if (response.status < 200 || response.status >= 400) return { notFound: true };
    const responseData = await response.json();
    return { props: { sessions: responseData, id } };
  } catch (e) {
    return { notFound: true };
  }
};

const ConsultantBooking: NextPage<ServerSideProps> = ({ sessions, id }: ServerSideProps) => {
  const [form, setForm] = useState({});

  const editForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((oldForm) => {
    const field = e.target.id;
    const newForm = JSON.parse(JSON.stringify(oldForm));
    newForm[field] = e.target.value;
    return newForm;
  });

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
        <form className="relative flex flex-col">
          <label htmlFor="name">Name</label>
          <input id="name" placeholder="Enter your name" onChange={editForm} className="sm:w-[600px] mt-2 mb-4 p-3 border-2" />
          <label htmlFor="email">Email Address</label>
          <input id="email" placeholder="Enter your email address" onChange={editForm} className="sm:w-[600px] mt-2 mb-4 p-3 border-2" />
          <label htmlFor="facebook">Facebook Profile URL</label>
          <input id="facebook" placeholder="Enter your facebook profile url" onChange={editForm} className="sm:w-[600px] mt-2 mb-4 p-3 border-2" />
          <label htmlFor="age">Age</label>
          <input id="age" placeholder="Enter your age" onChange={editForm} className="sm:w-[600px] mt-2 mb-4 p-3 border-2" />
          <label htmlFor="phone">Contact number</label>
          <input id="phone" placeholder="Enter your mobile phone number" onChange={editForm} className="sm:w-[600px] mt-2 mb-4 p-3 border-2" />
          <label htmlFor="education">Current Education</label>
          <input id="education" onChange={editForm} className="sm:w-[600px] mt-2 mb-4 p-3 border-2" />
          <label className="mb-3">Available Session</label>
          <p className="mb-3 text-xs text-gray-500">{"* Select session you'd like to meet *"}</p>
          <div className="flex flex-wrap">
            {sessions.length > 0 ? sessions.map((session) => <SessionCard key={session._id} session={session} />) : <p>No available sessions</p>}
          </div>
          <label htmlFor="education">Purpose of Consultation (Optional)</label>
          <textarea id="education" placeholder="Tell us something..." onChange={editForm} className="sm:w-[600px] h-40 mt-2 mb-4 p-3 border-2" />
          <p className="mb-3 text-xs text-gray-500">
            By submitting the form, you agree to the
            {" "}
            <span className="text-primary">terms & policy.</span>
          </p>
          <span className="space-x-4">
            <button className="w-28 py-3 rounded-lg text-primary bg-white border-primary border-2 hover:bg-gray-200 transition-colors">
              Cancel
            </button>
            <button className="w-28 py-3 rounded-lg text-white bg-primary-light hover:bg-primary transition-colors">
              Submit
            </button>
          </span>

        </form>
      </div>
    </div>
  );
};

function SessionCard({ session } : { session: Session }) {
  const date = new Date(session.date);
  const options: any = { year: "numeric", month: "short", day: "numeric" };
  const dateString = date.toLocaleDateString("en-US", options);
  const dayString = date.toLocaleDateString("en-US", { weekday: "short" });
  const time = `${session.startTime[0]} ${session.startTime[1]} - ${session.endTime[0]} ${session.endTime[1]}`;
  return (
    <div className="flex flex-col min-w-[45%] w-48 mr-4 mb-4 p-4 cursor-pointer text-xs text-gray-500 space-y-2 border-2 rounded-sm">
      <p>
        <span className="mr-4">Date</span>
        {`${dateString} (${dayString})`}
      </p>
      <p>
        <span className="mr-4">Time</span>
        {time}
      </p>
    </div>
  );
}

export default ConsultantBooking;
