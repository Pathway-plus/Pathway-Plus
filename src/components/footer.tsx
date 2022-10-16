import Image from "next/image";
import Link from "next/link";

const footer: React.FC = () => {
  return (
    <footer className="bg-orange-500">
      <div className="grid grid-cols-2 py-8 px-1 md:grid-cols-5">
        <div className="mb-4 lg:ml-5">
          <Image
            src="/assets/logo-white.png"
            width={160}
            height={160}
            alt="Pathway Plus Logo"
          />
        </div>
        <div>
          <ul className="text-white ml-5">
            <li className="mb-4 hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="mb-4 hover:underline">
              <Link href="#">About Us</Link>
            </li>
            <li className="mb-4 hover:underline">
              <Link href="#">Careers</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-white ml-5">
            <li className="mb-4 hover:underline">
              <Link href="#">Proof-Reading</Link>
            </li>
            <li className="mb-4 hover:underline">
              <Link href="/consulting">Consultation</Link>
            </li>
            <li className="mb-4 hover:underline">
              <Link href="#">Events</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-white ml-5">
            <li className="mb-4 hover:underline">
              <Link href="#">Blogs</Link>
            </li>
            <li className="mb-4 hover:underline">
              <Link href="#">Contact Us</Link>
            </li>
            {/* <li className="mb-4 hover:underline">
              <Link href="#">Account Info</Link>
            </li> */}
            <li className="mb-4 hover:underline">
              <Link href="#">Booking</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-white ml-5">
            <li className="mb-4 hover:underline">
              <Link href="#">Terms &amp; Conditions</Link>
            </li>
            <li className="mb-4 hover:underline">
              <Link href="#">Privacy &amp; Policy</Link>
            </li>
            <li className="mb-4 hover:underline">
              <Link href="#">FAQs</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-6 px-4 bg-orange-500 flex items-center justify-between">
        <span className="m-auto text-sm text-white text-center">
          Copyright ©2022. All rights reserved by Pathway Plus.
        </span>
      </div>
    </footer>
  );
};

export default footer;
