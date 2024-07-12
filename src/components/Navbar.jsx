import useScrollPosition from "../hooks/useScrollPosition";
function Navbar() {
  const pos = useScrollPosition();

  return (
    <nav className="w-full fixed top-0 left-0 z-10">
      <section
        className={`my-10 mx-36 max-lg:mx-4 rounded-2xl flex justify-between items-center px-6 ${
          pos !== 0
            ? ` bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 shadow-xl`
            : ``
        }  z-1`}
      >
        <a href="/">
          <img src="/sipnplay.png" className="w-20 mx-2 bg-transparent"></img>
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
    </nav>
  );
}

export default Navbar;
