import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import logo from "/WorkFolio.svg";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-6 flex justify-between items-center">
      <img src={logo} alt="" />
      <div className="flex gap-x-3">
        <li>About</li>
        <li>Login</li>
      </div>
      <div className="flex gap-x-3">
        <FaFacebook />
        <FaInstagram />
        <FaWhatsapp />
        <FaTwitter />
      </div>
    </div>
  );
};
export default Footer;
