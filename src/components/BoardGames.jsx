export default function BoardGames() {
  return (
    <section className="flex items-center flex-col">
      <div className="w-[1200px]">
        <h1 className="text-[60px] text-center mt-40 font-bold z-10 relative">
          {" "}
          <span className="gradientText">Play </span>from our extensive
          collection <br></br> of over 500+
          <span className="gradientText"> board games</span>!{" "}
        </h1>
        <p className="text-[#8A8A8A] text-center m-8 text-xl relative z-10">
          {" "}
          Come on in with your friends and family and play board games!{" "}
          <br></br>Just $10 a person for 3 hours of gameplay.
        </p>
        <div className=" relative flex justify-center items-center  m-12">
          <div className="absolute left-[-100px] z-0">
            <img src="/cards4.jpg" className="w-[260px]"></img>
          </div>
          <div className="absolute right-[-100px] z-0">
            <img src="/dice.jpg" className="w-[350px]"></img>
          </div>
          <div className="flex justify-center">
            {" "}
            <button className="gradientButton relative z-3">View Games</button>
          </div>
        </div>
      </div>
    </section>
  );
}
