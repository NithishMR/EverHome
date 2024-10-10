import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#002349] text-[#fff] py-10 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <nav>
          <h6 className="footer-title text-[#D4AF37] text-xl font-semibold mb-4">
            Services
          </h6>
          <ul className="space-y-2">
            <li>
              <a className="link link-hover text-base">Branding</a>
            </li>
            <li>
              <a className="link link-hover text-base">Design</a>
            </li>
            <li>
              <a className="link link-hover text-base">Marketing</a>
            </li>
            <li>
              <a className="link link-hover text-base">Advertisement</a>
            </li>
          </ul>
        </nav>
        <nav>
          <h6 className="footer-title text-[#D4AF37] text-xl font-semibold mb-4">
            Company
          </h6>
          <ul className="space-y-2">
            <li>
              <a className="link link-hover text-base">About us</a>
            </li>
            <li>
              <Link to={"/ContactPage"} className="link link-hover text-base">
                Contact
              </Link>
            </li>
            <li>
              <a className="link link-hover text-base">Jobs</a>
            </li>
            <li>
              <a className="link link-hover text-base">Press kit</a>
            </li>
          </ul>
        </nav>
        <nav>
          <h6 className="footer-title text-[#D4AF37] text-xl font-semibold mb-4">
            Legal
          </h6>
          <ul className="space-y-2">
            <li>
              <a className="link link-hover text-base">Terms of use</a>
            </li>
            <li>
              <a className="link link-hover text-base">Privacy policy</a>
            </li>
            <li>
              <a className="link link-hover text-base">Cookie policy</a>
            </li>
          </ul>
        </nav>
        <nav>
          <h6 className="footer-title text-[#D4AF37] text-xl font-semibold mb-4">
            Social
          </h6>
          <ul className="space-y-2">
            <li>
              <a className="link link-hover text-base">Twitter</a>
            </li>
            <li>
              <a className="link link-hover text-base">Instagram</a>
            </li>
            <li>
              <a className="link link-hover text-base">Facebook</a>
            </li>
            <li>
              <a className="link link-hover text-base">Github</a>
            </li>
          </ul>
        </nav>
        <nav>
          <h6 className="footer-title text-[#D4AF37] text-xl font-semibold mb-4">
            Explore
          </h6>
          <ul className="space-y-2">
            <li>
              <a className="link link-hover text-base">Features</a>
            </li>
            <li>
              <a className="link link-hover text-base">Enterprise</a>
            </li>
            <li>
              <a className="link link-hover text-base">Security</a>
            </li>
            <li>
              <a className="link link-hover text-base">Pricing</a>
            </li>
          </ul>
        </nav>
        <nav>
          <h6 className="footer-title text-[#D4AF37] text-xl font-semibold mb-4">
            Apps
          </h6>
          <ul className="space-y-2">
            <li>
              <a className="link link-hover text-base">Mac</a>
            </li>
            <li>
              <a className="link link-hover text-base">Windows</a>
            </li>
            <li>
              <a className="link link-hover text-base">iPhone</a>
            </li>
            <li>
              <a className="link link-hover text-base">Android</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>© 2024 Everhome Realty. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
