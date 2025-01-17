import SocialMediaLinks from "../SocialMediaLinks";

//const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

function Franchise() {
  return (
    <section className="mx-auto p-8 max-md:p-4 bg-orangeLight w-[70%] max-md:w-[100%] h-[90%] max-md:rounded-none rounded-2xl sm:mb-10 shadow-lg grid grid-cols-2 max-lg:grid-cols-1 max-md:border-0 border-4 border-orangeVeryPale">
      <div className="flex flex-col  justify-between max-md:items-center max-md:text-center  p-10 gap-5 max-md:p-2">
        <iframe
          className="w-full h-full rounded-2xl sm:hidden"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=tempe&key=AIzaSyALN2fUL0Wx_CgtyGlXH5hR_s45DZH7rU0"
        ></iframe>

        <h1 className="text-5xl max-md:text-2xl font-semibold ">
          Apply for Franchise.
        </h1>
        <p className="text-gray-800 ">
          Contact our Franchise Team. Be sure to choose FRANCHISE as your
          Subject and write to us. Our Franchise team will be in touch shortly.
        </p>
        <SocialMediaLinks />
      </div>

      <img src="/sipnplaymap.png" className="rounded-2xl"></img>
      {/* <iframe
        className="w-full h-full rounded-2xl max-md:hidden"
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?q=tempe&key=${GOOGLE_API_KEY}`}
      ></iframe> */}
    </section>
  );
}

export default Franchise;
