import SocialMediaLinks from "../SocialMediaLinks";

function Footer() {
  return (
    <footer className="flex flex-col w-[100vw] h-[80vh] items-center justify-center">
      <section className="p-8 max-md:p-4 bg-orangePale w-[70%] max-md:w-[100%] h-[90%] max-md:rounded-none rounded-2xl sm:mb-10 shadow-lg grid grid-cols-2 max-lg:grid-cols-1 max-md:border-0 border-4 border-orangeVeryPale">
        <div className="flex flex-col bg-orangePale justify-between max-md:items-center max-md:text-center  p-10 gap-5 max-md:p-2">
          <iframe
            className="w-full h-full rounded-2xl sm:hidden"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?q=tempe&key=AIzaSyALN2fUL0Wx_CgtyGlXH5hR_s45DZH7rU0"
          ></iframe>

          <h1 className="text-5xl max-md:text-2xl font-semibold bg-orangePale">
            Apply for Franchise
          </h1>
          <p className="text-gray-800 bg-orangePale">
            Contact our Franchise Team. Be sure to choose FRANCHISE as your
            Subject and write to us. Our Franchise team will be in touch
            shortly.
          </p>
          <SocialMediaLinks />
        </div>

        <iframe
          className="w-full h-full rounded-2xl max-md:hidden"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=tempe&key=AIzaSyALN2fUL0Wx_CgtyGlXH5hR_s45DZH7rU0"
        ></iframe>
      </section>
      <section className="px-10 w-[100vw] flex sm:pt-20 pt-6 pb-6 justify-between max-md:justify-center">
        <h4 className="text-gray-500  text-center">©2024 by Sip & Play</h4>
        <div className="flex gap-10 max-md:hidden ">
          <h4 className="text-gray-500">Term</h4>
          <h4 className="text-gray-500">Privacy</h4>
          <h4 className="text-gray-500">Cookies</h4>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
