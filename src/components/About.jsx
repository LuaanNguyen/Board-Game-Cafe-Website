import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

function About() {
  return (
    <section>
      <div className="w-full flex flex-col lg:flex-row my-24 lg:my-36">
        <div className="w-full lg:w-9/10 flex flex-col lg:flex-row justify-center items-center gap-x-16">
          <div className="flex flex-col w-full lg:w-1/3 justify-center text-center lg:text-left mb-6 lg:mb-0 max-lg:px-10">
            <h2 className="text-4xl lg:text-6xl mb-6 font-bold"> Our Story</h2>
            <p className="text-lg lg:text-xl my-6">
              Founder, Jonathan Li, shares a passion for board games, boba, and
              delicious food, so he combined them all to become Sip & Play, Park
              Slope’s first board game cafe. It is a straightforward concept,
              come in with your friends and family to play any board game from
              our library of 300+ games!
            </p>
          </div>
          <div className="w-full lg:w-1/3 max-lg:px-32 max-sm:px-10">
            <img
              src="/aboutUsCoffee.png"
              className="rounded-3xl w-full"
              alt="Board Games"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-16">
        <h3 className="text-4xl max-md:text-3xl max-sm:xl max-sm:px-4 font-bold mb-6 lg:mb-12 text-center">
          Follow us on Instagram and Facebook!
        </h3>
        <div className="flex flex-wrap justify-center gap-6 w-3/5 max-xl:gap-2 max-sm:w-4/5">
          <img
            src="/pic1.jpg"
            className="instagramIcons"
            alt="Instagram and Facebook"
          />
          <img
            src="/pic2.jpg"
            className="instagramIcons"
            alt="Instagram and Facebook"
          />
          <img
            src="/pic3.jpg"
            className="instagramIcons"
            alt="Instagram and Facebook"
          />
          <img
            src="/pic4.jpg"
            className="instagramIcons"
            alt="Instagram and Facebook"
          />
          <img
            src="/pic5.jpg"
            className="instagramIcons social-media-hide"
            alt="Instagram and Facebook"
          />
          <img
            src="/pic6.jpg"
            className="instagramIcons social-media-hide"
            alt="Instagram and Facebook"
          />
          <img
            src="/pic7.jpg"
            className="instagramIcons social-media-hide"
            alt="Instagram and Facebook"
          />
          <img
            src="/pic8.jpg"
            className="instagramIcons social-media-hide"
            alt="Instagram and Facebook"
          />
        </div>
        <div className="flex m-6 gap-x-6 flex-wrap justify-center">
          <button className="social-media-buttons">
            Instagram
            <AiFillInstagram className="w-8 h-8 ml-2" />
          </button>
          <button className="social-media-buttons">
            Facebook
            <FaFacebook className="w-8 h-8 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
