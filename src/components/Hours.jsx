function OfficeHours() {
  return (
    <section className="flex gap-4 flex-col items-center mt-24 mb-32">
      <h1 className="font-bold text-4xl text-center"> Opening Hours </h1>
      <p className="text-slate-600 mb-6">
        {" "}
        Our kitchen closes 2.5-3 hours before we close! ​
      </p>

      <section className="flex gap-4 flex-col max-w-[1115px]">
        <div className="hoursChildren">
          <div className="hoursTextContainer">
            <h2 className="day"> Monday - Thursday </h2>
            <p className="text-slate-500"> 11am - 11pm</p>
          </div>
        </div>
        <div className="flex flex-row gap-4 max-md:flex-col">
          <div className="hoursChildren">
            <div className="hoursTextContainer">
              <h2 className="day"> FRIDAY</h2>
              <p className="text-slate-500"> 11:00am - Midnight</p>
            </div>
          </div>
          <div className="hoursChildren">
            <div className="hoursTextContainer">
              <h2 className="day"> SATURDAY</h2>
              <p className="text-slate-500"> 10:00am - Midnight</p>
            </div>
          </div>{" "}
          <div className="hoursChildren">
            <div className="hoursTextContainer">
              <h2 className="day"> SUNDAY</h2>
              <p className="text-slate-500"> 10:00am - 11:00pm</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default OfficeHours;
