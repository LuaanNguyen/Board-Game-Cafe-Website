import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <img src="/nav/sipnplay.png" className="w-20 mx-2"></img>
      <div>
        <ul className="list-none flex gap-x-10 font-roboto text-base font-bold">
          <li>
            {" "}
            <a>Home</a>{" "}
          </li>
          <li>
            {" "}
            <a>Menu</a>
          </li>
          <li>
            {" "}
            <a>About</a>
          </li>
          <li>
            {" "}
            <a>Reservation</a>{" "}
          </li>
          <li>
            {" "}
            <a>Events</a>
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
