import { FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-indigo-500 flex items-center justify-between">
      <img src="/nav/sipnplay.png" className="w-20 mx-2"></img>
      <div>
        <ul className="list-none flex gap-x-10">
          <li> Home</li>
          <li> Menu</li>
          <li> About</li>
          <li> Reservation </li>
          <li> Events</li>
        </ul>
      </div>
      <div>
        <FaInstagram />
      </div>
    </nav>
  );
}

export default Navbar;
