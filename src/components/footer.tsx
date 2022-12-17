import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-500 text-white">
      <div className="grid grid-cols-2 py-8 md:grid-cols-5 space-x-5 space-y-4">
        <Image
          src="/assets/logo-white.png"
          width={160}
          height={160}
          layout="fixed"
          alt="Pathway Plus Logo"
        />

        <ul>
          <Item href="/aboutUs" title="About Us" />
          <Item href="/careers" title="Careers" />
          <Item href="/contact_us" title="Contact Us" />
        </ul>
        <ul>
          <Item href="/consulting" title="Consultation" />
          <Item href="/proofreading" title="Proofreading" />
          <Item href="/events" title="Events" />
        </ul>
        <ul>
          <Item href="#" title="Terms & Conditions" />
          <Item href="#" title="Privacy & Policy" />
          <Item href="#" title="FAQs" />
        </ul>

      </div>

      <p className="py-6 px-4 text-sm text-center">
          Copyright ©2022. All rights reserved by Pathway Plus.
      </p>
    </footer>
  );
};

interface ItemProps {
  href: string;
  title: string;
}

const Item = ({ href, title }: ItemProps) => {
  return (
    <li className="mb-4 hover:underline">
      <Link href={href}>{title}</Link>
    </li>
  );
};

export default Footer;
