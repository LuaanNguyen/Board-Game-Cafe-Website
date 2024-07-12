import { motion } from "framer-motion";

function Feedback() {
  return (
    <>
      <motion.div
        className="w-[100vw] h-[100vh] mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        final={{ opacity: 0 }}
      >
        <section className="bg-white ">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black ">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-800 sm:text-xl">
              Excited to learn more about us? Drop your information below to let
              us know!
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black "
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="name@gmail.com"
                  required
                ></input>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-black "
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-black  rounded-lg border border-gray-300 shadow-sm "
                  placeholder="Let us know how we can help you"
                  required
                ></input>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-black rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-orangeMain sm:w-fit hover:bg-orangeLight focus:ring-4 focus:outline-none focus:ring-primary-300 "
              >
                Send message
              </motion.button>
            </form>
          </div>
        </section>
      </motion.div>
    </>
  );
}

export default Feedback;
