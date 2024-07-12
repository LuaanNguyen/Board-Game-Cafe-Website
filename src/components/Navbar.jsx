import PropTypes from "prop-types";
import useScrollPosition from "../hooks/useScrollPosition";
import { useState } from "react";
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
        <a href="/">
          <img src="/sipnplay.png" className="h-20 mx-2 bg-transparent"></img>
        </a>
        <div className="flex gap-6">
          <a href="/" className="hover:bg-orangeLight hover:rounded-full p-2">
            About
          </a>
          <a href="/" className="hover:bg-orangeLight hover:rounded-full p-2">
            MTG schedule
          </a>
          <a href="/" className="hover:bg-orangeLight hover:rounded-full p-2">
            Menu
          </a>
          <a href="/" className="hover:bg-orangeLight hover:rounded-full p-2">
            Giftcards
          </a>
          <a href="/" className="hover:bg-orangeLight hover:rounded-full p-2">
            Feedback
          </a>
          <a href="/" className="hover:bg-orangeLight hover:rounded-full p-2">
            Press
          </a>
        </div>

        <div className="rounded-full p-2 border-2 border-gray-600 hover:bg-orangeLight">
          <a href="/">Reservation</a>
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
          <a href="/">
            <img src="/sipnplay.png" className="w-16 bg-transparent"></img>
          </a>
        </div>
        {isOpen ? (
          <div className="h-[50vh] w-full flex flex-col text-left gap-2 text-lg font-bold pt-2">
            <a href="/" className="hover:bg-orangeLight hover:rounded-lg p-2">
              About
            </a>
            <a href="/" className="hover:bg-orangeLight hover:rounded-lg p-2">
              MTG schedule
            </a>
            <a href="/" className="hover:bg-orangeLight hover:rounded-lg p-2">
              Menu
            </a>
            <a href="/" className="hover:bg-orangeLight hover:rounded-lg p-2">
              Giftcards
            </a>
            <a href="/" className="hover:bg-orangeLight hover:rounded-lg p-2">
              Feedback
            </a>
            <a href="/" className="hover:bg-orangeLight hover:rounded-lg p-2">
              Press
            </a>
          </div>
        ) : (
          <></>
        )}
      </section>
    </nav>
  );
}

function OpenedMobileNavbar() {
  return <h1>Hello</h1>;
}

export default Navbar;

MobileNavbar.propTypes = {
  pos: PropTypes.any.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
