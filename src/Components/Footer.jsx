import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer grid-rows-2 p-10  text-neutral-content bg-[#002349]">
      <nav>
        <h6 className="footer-title text-[#D4AF37]">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title text-[#D4AF37]">Company</h6>
        <a className="link link-hover">About us</a>
        <Link to={"/ContactPage"}>Contact</Link>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title text-[#D4AF37]">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav>
        <h6 className="footer-title text-[#D4AF37]">Social</h6>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">Instagram</a>
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">Github</a>
      </nav>
      <nav>
        <h6 className="footer-title text-[#D4AF37]">Explore</h6>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Enterprise</a>
        <a className="link link-hover">Security</a>
        <a className="link link-hover">Pricing</a>
      </nav>
      <nav>
        <h6 className="footer-title text-[#D4AF37]">Apps</h6>
        <a className="link link-hover">Mac</a>
        <a className="link link-hover">Windows</a>
        <a className="link link-hover">iPhone</a>
        <a className="link link-hover">Android</a>
      </nav>
    </footer>
  );
}
export default Footer;
