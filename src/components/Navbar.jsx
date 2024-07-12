function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0">
      <section className="m-10 bg-orangePale rounded-2xl shadow-xl flex justify-between items-center px-6 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border">
        <a href="/">
          <img src="/sipnplay.png" className="w-20 mx-2 bg-transparent"></img>
        </a>
        <div className="flex gap-14 font-bold ">
          <a href="/">
            <span className="">About</span>
          </a>
          <a href="/">
            <span>MTG schedule</span>
          </a>
          <a href="/">
            <span>Menu</span>
          </a>
          <a href="/">
            <span>Giftcards</span>
          </a>
          <a href="/">
            <span>Feedback</span>
          </a>
          <a href="/">
            <span>Press</span>
          </a>
        </div>
        <button className="rounded-full p-2 border-2 border-black">
          <a href="/">
            <span className="font-bold">Reservation</span>
          </a>
        </button>
      </section>
    </nav>
  );
}

export default Navbar;
