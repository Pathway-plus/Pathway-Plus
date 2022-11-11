import type { NextPage } from "next";
import React, { useState } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTelegram } from "react-icons/fa";
import { IconType } from "react-icons";
import Image from "next/image";

const ContactUs: NextPage = () => {
  const [form, setForm] = useState({});

  const editForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((oldForm) => {
    const field = e.target.id;
    const newForm = JSON.parse(JSON.stringify(oldForm));
    newForm[field] = e.target.value;
    return newForm;
  });

  return (
    <div>
      <div className="absolute w-full h-96 -mt-36 -skew-y-3 bg-primary -z-10" />

      <div className="flex flex-col lg:flex-row m-8 p-8 gap-y-6 gap-x-20 rounded-md shadow-expand bg-white">
        <form className="flex flex-col flex-1">
          <h2 className="mb-6 text-xl font-medium">Contact Us For Business Inquries</h2>
          <input id="name" placeholder="Enter your name" onChange={editForm} className="mt-2 mb-4 p-3 border-2 border-gray-300 rounded-md" />
          <input id="email" placeholder="Enter your email address" onChange={editForm} className="mt-2 mb-4 p-3 border-2 border-gray-300 rounded-md" />
          <textarea id="body" placeholder="Tell us more" onChange={editForm} maxLength={150} className="h-40 mt-2 mb-4 p-3 border-2 border-gray-300 rounded-md" />
          <button className="w-36 py-3 rounded-lg text-white bg-primary hover:bg-primary-light transition-colors">
            Send
          </button>
        </form>

        <div className="flex flex-col flex-1 gap-4">
          {/* w:h = 1.32 */}
          <Image src="/assets/contact_us.png" width={280 * 1.32} height={280} layout="fixed" />
          <Icon IconType={FiMapPin} text="47 Thida Street, Yangon, Myanmar" />
          <Icon IconType={FiPhone} text="09 123 456 789" />
          <Icon IconType={FiMail} text="PathwayPlus@gmail.com" />
          <p className="text-xl font-medium">Follow Us On</p>
          <div className="flex gap-2">
            <IconLink IconType={FaFacebook} href="https://www.facebook.com/pathwayplusorg" />
            <IconLink IconType={FaInstagramSquare} href="https://www.instagram.com/pathwayplusorg/" />
            <IconLink IconType={FaLinkedin} href="https://mm.linkedin.com/company/pathwayplusorg" />
            <IconLink IconType={FaTelegram} href="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Icon = ({ IconType, text }: { IconType: IconType; text: string }) => (
  <div className="flex gap-2 items-center text-primary">
    <div className="max-w-fit p-2 border-[1px] border-primary rounded-full">
      <IconType />
    </div>
    <p>{text}</p>
  </div>
);

const IconLink = ({ IconType, href }: { IconType: IconType; href: string }) => (
  <a href={href}>
    <IconType className="text-lg text-primary" />
  </a>
);

export default ContactUs;
