import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="w-[100vw] flex items-center justify-between px-10 glassmorphism-effect bg-orangeMain">
      <img src="/sipnplay.png" className="w-20 mx-2"></img>
      <div>
        <ul className="list-none flex gap-x-10 font-roboto text-base font-bold">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Reservation</a>
          </li>
          <li>
            <a href="">Events</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-x-4 mx-4">
        <FaInstagram className="w-10 h-10" />
        <FaFacebook className="w-10 h-10" />
      </div>
    </nav>
  );
}

export default Navbar;
