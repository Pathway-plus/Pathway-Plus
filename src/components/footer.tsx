const footer: React.FC = () => {
  return (
    <footer className="bg-orange-500">
      <div className="grid grid-cols-2 py-8 px-1 md:grid-cols-5">
        <span>LOGO</span>
        <div>
          <ul className="text-white">
            <li className="mb-4">
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-white">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Proof-Reading
              </a>
            </li>
            <li className="mb-4">
              <a href="/consulting" className="hover:underline">
                Consultation
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Events
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-white">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Blogs
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Account Info
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Booking
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-white">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Terms &amp; Conditions
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Privacy & Policy
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                FAQs
              </a>
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
