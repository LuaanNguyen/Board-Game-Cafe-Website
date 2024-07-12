import PropTypes from "prop-types";
import useScrollPosition from "../hooks/useScrollPosition";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";

function Navbar() {
  const pos = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-10">
      <section
        className={`my-10 mx-36 max-lg:mx-4 rounded-2xl flex justify-between items-center px-6 max-md:hidden ${
          pos !== 0
            ? ` bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 shadow-xl`
            : ``
        }  z-1`}
      >
        <Link to="/">
          <img src="/sipnplay.png" className="h-20 mx-2 bg-transparent"></img>
        </Link>
        <div className="flex gap-6">
          <Link
            to="/about"
            className="hover:bg-orangeLight hover:rounded-full p-2"
          >
            About
          </Link>
          <Link
            to="/mtgschedule"
            className="hover:bg-orangeLight hover:rounded-full p-2"
          >
            MTG schedule
          </Link>
          <Link
            to="/menu"
            className="hover:bg-orangeLight hover:rounded-full p-2"
          >
            Menu
          </Link>
          <Link
            to="/giftcards"
            className="hover:bg-orangeLight hover:rounded-full p-2"
          >
            Giftcards
          </Link>
          <Link
            to="/feedback"
            className="hover:bg-orangeLight hover:rounded-full p-2"
          >
            Feedback
          </Link>
          <Link
            to="/press"
            className="hover:bg-orangeLight hover:rounded-full p-2"
          >
            Press
          </Link>
        </div>

        <div className="flex gap-2">
          <div className="flex items-center justify-center w-32 h-12 rounded-full p-2 border-2 border-gray-600 bg-orangePale hover:bg-orangeVeryPale">
            <Link to="/menu" className="">
              Menu
            </Link>
          </div>
          <div className="flex items-center justify-center w-32 h-12 rounded-full p-2 border-2 border-gray-600 bg-orangeLight hover:bg-orangeVeryPale">
            <Link to="/reservation">Reservation</Link>
          </div>
        </div>
      </section>
      {/*Mobile Navigation*/}
      <MobileNavbar pos={pos} setIsOpen={setIsOpen} isOpen={isOpen} />
    </nav>
  );
}

function MobileNavbar({ setIsOpen, isOpen }) {
  return (
    <nav className="w-full fixed top-0 left-0 z-10 md:hidden">
      <section className=" my-2 mx-4 rounded-2xl flex flex-col justify-between items-center px-2  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 shadow-xl z-1">
        <div className="w-full flex flex-row justify-between">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <LiaTimesSolid className="text-4xl" />
            ) : (
              <RxHamburgerMenu className="text-4xl" />
            )}
          </button>
          <Link to="/">
            <img src="/sipnplay.png" className="w-16 bg-transparent"></img>
          </Link>
        </div>
        {isOpen ? <OpenedMobileNavbar /> : <></>}
      </section>
    </nav>
  );
}

function OpenedMobileNavbar() {
  return (
    <div className="w-full flex flex-col text-left gap-2 text-lg font-bold pt-2 pb-5">
      <Link to="/about" className="hover:bg-orangeLight hover:rounded-lg p-2">
        About
      </Link>
      <Link
        to="/mtgschedule"
        className="hover:bg-orangeLight hover:rounded-lg p-2"
      >
        MTG schedule
      </Link>
      <Link to="/menu" className="hover:bg-orangeLight hover:rounded-lg p-2">
        Menu
      </Link>
      <Link
        to="/giftcards"
        className="hover:bg-orangeLight hover:rounded-lg p-2"
      >
        Giftcards
      </Link>
      <Link
        to="/feedback"
        className="hover:bg-orangeLight hover:rounded-lg p-2"
      >
        Feedback
      </Link>
      <Link to="/press" className="hover:bg-orangeLight hover:rounded-lg p-2">
        Press
      </Link>
      <div className="flex gap-2 items-center justify-center">
        <div className="flex items-center justify-center w-32 h-12 rounded-full p-2 border-2 border-gray-600 bg-orangePale hover:bg-orangeVeryPale">
          <Link to="/menu" className="">
            Menu
          </Link>
        </div>
        <div className="flex items-center justify-center w-32 h-12 rounded-full p-2 border-2 border-gray-600 bg-orangeLight hover:bg-orangeVeryPale">
          <Link to="/reservation">Reservation</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

MobileNavbar.propTypes = {
  pos: PropTypes.any.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
