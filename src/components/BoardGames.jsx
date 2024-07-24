export default function BoardGames() {
  return (
    <section className="flex items-center flex-col">
      <div className="w-[1200px] max-xl:w-[800px] max-md:w-full">
        <h1 className="text-[60px] text-center mt-40 font-bold z-10 relative max-xl:text-[45px] max-md:px-8 max-md:text-[50px] max-md:mt-24">
          {" "}
          <span className="gradientText">Play </span>from our collection{" "}
          <br></br> of over 500+ <br className="md:hidden"></br>
          <span className="gradientText"> board games</span>!{" "}
        </h1>
        <p className="text-[#8A8A8A] text-center m-8 text-xl relative z-10 max-xl:text-base">
          {" "}
          Come on in with your friends and family and play board games!{" "}
          <br></br>Just $10 a person for 3 hours of gameplay.
        </p>
        <div className=" relative flex justify-center items-center  m-12 max-xl:m-8">
          <div className="absolute left-[-100px] z-0">
            <img
              src="/cards4.jpg"
              className="w-[260px] max-xl:w-[200px] max-lg:hidden"
            ></img>
          </div>
          <div className="absolute right-[-100px] z-0">
            <img
              src="/dice.jpg"
              className="w-[350px] max-xl:w-[250px] max-lg:hidden"
            ></img>
          </div>
          <div className="flex justify-center max-md:m-8">
            {" "}
            <a
              className="gradientButton relative z-3"
              href="https://docs.google.com/spreadsheets/d/1-TOvwUh-ziCB6QmLYvQlxtXuBd-aGiiO72GWAasby8o/edit?gid=0#gid=0"
              target="_blank"
            >
              View Games{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
