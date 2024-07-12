import AnimatedBackground from "./components/AnimatedBackground";

function Home() {
  return (
    <section className="w-[80vw] h-[300lvh] lg:mx-24 mt-24">
      <AnimatedBackground />
      {/* sip and play with image placeholder for 3d boba */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full px-4 lg:px-10">
        <div className="max-w-screen-sm text-center lg:text-left">
          <h1 className="font-bold text-4xl lg:text-7xl mb-2"> Sip & Play </h1>
          <h2 className="font-bold text-3xl mb-4"> Boardgame Cafe</h2>
          <p className="font-sans mb-6">
            Come on in with your friends and family and play boardgames from our
            collection of over 500+ games! Just $10 a person for 3 hours of
            gameplay. ($12 a person Friday-Sunday and Holidays)
          </p>
          <p>
            Play while enjoying bubble tea, coffee, beer sandwiches or salads
            and have a great time! If you want to guarantee a table, you can
            make a reservation which is $15 a person for 3 hours of gameplay.
          </p>
          <button className="bg-orangeLight px-6 lg:px-8 py-3 lg:py-4 rounded-full mt-6 hover:bg-[#F7E7DC]">
            Buy Now
          </button>
        </div>
        <div className="w-full lg:w-2/5 flex max-lg:hidden">
          <img src="/panda.png" className="w-full flex-end" alt="3D Boba" />
        </div>
      </div>

      <div className="my-16 lg:my-32 text-2xl lg:text-4xl">
        <h3 className="text-center font-bold mb-12 lg:mb-24">
          Brewing Happiness, One Cup at a Time
        </h3>
        <div className="flex flex-wrap justify-evenly">
          <div className="flex flex-col items-center mb-6">
            <div className="menuIcon">
              <img src="/coffeeCup.png" alt="Coffee" />
            </div>
            <p className="menuItemsText"> coffee </p>
          </div>
          <div className="flex flex-col items-center mb-6">
            <div className="menuIcon">
              <img src="/bobaCup.png" alt="Boba" />
            </div>
            <p className="menuItemsText"> boba </p>
          </div>
          <div className="flex flex-col items-center mb-6">
            <div className="menuIcon">
              <img src="/fries.png" alt="Hot Bites" />
            </div>
            <p className="menuItemsText"> hot bites </p>
          </div>
          <div className="flex flex-col items-center mb-6">
            <div className="menuIcon">
              <img src="/sandwich.png" alt="Sandwiches" />
            </div>
            <p className="menuItemsText"> sandwiches </p>
          </div>
          <div className="flex flex-col items-center mb-6">
            <div className="menuIcon">
              <img src="/beerCup.png" className="w-2/3" alt="Beer/Wine" />
            </div>
            <p className="menuItemsText"> beer/wine </p>
          </div>
        </div>
        <div className="flex justify-center mt-8 lg:mt-16">
          <button className="bg-orangeLight px-6 py-2 rounded-full hover:bg-[#F7E7DC]">
            View Menu
          </button>
        </div>
      </div>
      {/* board game section */}
      <div className="w-full flex flex-col lg:flex-row my-24 lg:my-36">
        <div className="w-full lg:w-9/10 flex flex-col lg:flex-row justify-center items-center gap-x-16">
          <div className="flex flex-col w-full lg:w-1/3 justify-center text-center lg:text-left mb-6 lg:mb-0">
            <h2 className="text-4xl lg:text-6xl mb-6 font-bold">
              {" "}
              Board Games
            </h2>
            <p className="text-lg lg:text-xl my-6">
              Come on in with your friends and family and play boardgames from
              our collection of over 500+ games!
            </p>
            <p className="text-lg lg:text-xl">
              Just $10 a person for 3 hours of gameplay.
            </p>
            <p className="text-lg lg:text-xl">
              ($12 a person Friday-Sunday and Holidays)
            </p>
          </div>
          <div className="w-full lg:w-1/3">
            <img
              src="/boardGame.jpeg"
              className="rounded-3xl w-full"
              alt="Board Games"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-16">
        <h3 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-12">
          Follow us on Instagram and Facebook!
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <img
            src="/boardGame.jpeg"
            className="w-40 h-40 lg:w-60 lg:h-60"
            alt="Instagram and Facebook"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
