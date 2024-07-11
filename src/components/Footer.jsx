import SocialMediaLinks from "../SocialMediaLinks";

function Footer() {
  return (
    <footer className="flex flex-col w-[100vw] h-[70vh] mb-20 items-center justify-center ">
      <section className="p-8 max-md:p-4 bg-orangePale w-[70%] h-[90%] rounded-full shadow-lg grid grid-cols-2 max-lg:grid-cols-1 border-4 border-orangeVeryPale">
        <div className="flex flex-col justify-between max-md:items-center p-10 gap-5 max-md:p-2">
          <h1 className="text-5xl font-semibold">Apply for Franchise</h1>
          <p className="text-gray-800">
            Contact our Franchise Team. Be sure to choose FRANCHISE as your
            Subject and write to us. Our Franchise team will be in touch
            shortly.
          </p>
          <SocialMediaLinks />
        </div>

        <iframe
          className="w-full h-full rounded-2xl"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=tempe&key=AIzaSyALN2fUL0Wx_CgtyGlXH5hR_s45DZH7rU0"
        ></iframe>
      </section>
      <section className="px-10 w-[100vw] flex pt-20 pb-6 justify-between">
        <h4 className="text-gray-500 text-center">©2024 by Sip & Play</h4>
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
