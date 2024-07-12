function Reservation() {
  return (
    <section className="w-[100vw] h-[100vh] mt-52 px-40 z-11">
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold">Reservation Details</h1>
          <hr className="bg-black w-20"></hr>
          <p>
            We have just started using a new reservation software, Tock!
            Reservations are $15 a person for 3 hours of game time. All
            reservations can be made on our new site
          </p>
          <button
            type="button"
            href="https://www.exploretock.com/sipnplay/"
            className="bg-greenAccent p-4 rounded-lg w-40 shadow-md"
          >
            <span className="font-bold">Reserve Now!</span>
          </button>
        </div>
        <div>2</div>
      </div>
    </section>
  );
}

export default Reservation;
