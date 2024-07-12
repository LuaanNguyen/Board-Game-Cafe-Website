function Home() {
  return (
    <section className="w-[80vw] h-[300lvh] lg:mx-24 mt-24">
      {/* sip and play with image placeholder for 3d boba */}
      <div className="flex items-center justify-center w-[100vw] px-10">
        <div className="max-w-screen-sm">
          <h1 className="font-bold text-7xl max-md:text-4xl mb-2 ">
            {" "}
            Sip & Play{" "}
          </h1>
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
          <button className="bg-orangeLight px-8 py-4 rounded-full mt-6 hover:bg-[#F7E7DC]">
            {" "}
            Buy Now{" "}
          </button>
        </div>
        <div className="w-2/5 flex max-lg:hidden">
          <img src="/panda.png" className="w-full flex-end" />
        </div>
      </div>

      {/* view menu section
      <div className="my-32 text-4xl">
        <h3 className="text-center font-bold mb-24">
          {" "}
          Brewing Happiness, One Cup at a Time{" "}
        </h3>
        <div className="flex justify-evenly">
          <div className="flex flex-col items-center">
            <div className="menuIcon">
              <img src="/coffeeCup.png" />
            </div>
            <p className="menuItemsText"> coffee </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="menuIcon">
              <img src="/bobaCup.png" />
            </div>
            <p className="menuItemsText"> boba </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="menuIcon">
              <img src="/fries.png" />
            </div>
            <p className="menuItemsText"> hot bites </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="menuIcon">
              <img src="/sandwich.png" />
            </div>
            <p className="menuItemsText"> sandwiches </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="menuIcon">
              <img src="/beerCup.png" className="w-2/3 " />
            </div>
            <p className="menuItemsText"> beer/wine </p>
          </div>
        </div>
        <div className="flex justify-center m-16">
          <button className="bg-orangeLight px-6 py-2 rounded-full hover:bg-[#F7E7DC] ">
            {" "}
            View Menu{" "}
          </button>
        </div>
      </div> */}
      {/* board game section */}
      {/* <div className="w-[100vw] flex my-36">
        <div className="w-9/10 flex justify-center align-center gap-x-16">
          <div className="flex flex-col w-1/3 justify-center">
            <h2 className="text-6xl mb-6 font-bold"> Board Games</h2>
            <p className="text-xl my-6">
              {" "}
              Come on in with your friends and family and play boardgames from
              our collection of over 500+ games!
            </p>{" "}
            <p className="text-xl">
              {" "}
              Just $10 a person for 3 hours of gameplay.
            </p>
            <p className="text-xl">
              {" "}
              ($12 a person Friday-Sunday and Holidays)
            </p>
          </div>
          <div className="w-1/3">
            <img src="/boardGame.jpeg" className="rounded-3xl"></img>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <h3 className="text-4xl font-bold">
          {" "}
          Follow us on Instagram and FaceBook!{" "}
        </h3>
        <div className="flex flex-wrap">
          <img src="/boardGame.jpeg" className="w-60 h-60" />
        </div>
      </div> */}
    </section>
  );
}

export default Home;
