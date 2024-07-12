import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Calendar.css"; // Import custom styles
import { CiCircleCheck } from "react-icons/ci";

export default function Reservation() {
  return (
    <>
      <section className="w-[100vw] mt-60 max-lg:mt-28 px-48 max-lg:px-14 z-11 pb-10">
        <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold">Reservation Packages</h1>
            <hr className="bg-black w-20"></hr>
            <p>
              We have just started using a new reservation software, Tock!
              Reservations are $15 a person for 3 hours of game time. All
              reservations can be made on our new site
            </p>
            <button
              type="button"
              href="https://www.exploretock.com/sipnplay/"
              className="bg-orangeLight hover:bg-orangePale p-4 rounded-lg w-40 shadow-md"
            >
              <span className="font-bold">Reserve Now!</span>
            </button>
          </div>
          <div>
            <CafeCalendar />
          </div>
        </div>
      </section>
      <BirthdayPackages />
    </>
  );
}

function CafeCalendar() {
  const [value, setValue] = useState(new Date());
  return (
    <div className="p-10 border-2 rounded-lg shadow-lg bg-white">
      <Calendar
        onChange={setValue}
        value={value}
        className="react-calendar"
        tileClassName="tile"
      />
    </div>
  );
}

function BirthdayPackages() {
  return (
    <section className="w-[100vw] pt-10 max-md:mb-20 px-20 max-lg:px-10 max-md:px-4">
      <h1 className="text-4xl font-bold text-center">Birthday Packages</h1>
      <section className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 p-10 gap-10">
        <div className="bg-orangePale rounded-2xl p-10 border-2 border-gray-200 shadow-lg text-center">
          <h1 className="text-3xl font-bold p-4">Renting Entire Backroom</h1>
          <h1 className="text-4xl font-bold p-4 text-center bg-white rounded-full">
            $350
          </h1>
          <p className="my-6 text-left text-md flex items-center gap-2">
            <CiCircleCheck /> 3 hours of game time all to your party!
          </p>
        </div>
        <div className="bg-orangePale rounded-2xl p-10 border-2 border-gray-200 shadow-lg text-center">
          <h1 className="text-3xl font-bold  p-4">
            Birthday Basic Package 🎁{" "}
          </h1>
          <h1 className="text-4xl text-black font-bold p-4 text-center bg-white rounded-full">
            $550
          </h1>
          <p className="my-6 text-left text-md flex items-center gap-2">
            <CiCircleCheck /> Have the entire backroom to yourselves.
          </p>
          <p className="my-6 text-left text-md flex items-center gap-2">
            <CiCircleCheck /> Get pizza and soda for the whole party.
          </p>
        </div>
        <div className="bg-orangePale rounded-2xl p-10 border-2 border-gray-200 shadow-lg text-center">
          <h1 className="text-3xl font-bold  p-4">
            Birthday Premium Package 🎂
          </h1>
          <h1 className="text-4xl font-bold p-4 text-center bg-white rounded-full">
            $700
          </h1>
          <p className="my-6 text-left text-md flex items-center gap-2">
            <CiCircleCheck /> Have the entire backroom to yourselves.
          </p>
          <p className="my-6 text-left text-md flex items-center gap-2">
            <CiCircleCheck /> Pizza, soda, unlimited bubble tea, unlimited
            appetizers.
          </p>
          <p className="my-6 text-left text-md flex items-center gap-2">
            <CiCircleCheck /> each participant gets a Sip & Play goodie bag!
          </p>
        </div>
      </section>
    </section>
  );
}
