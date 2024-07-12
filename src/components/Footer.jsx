function Footer() {
  return (
    <footer className="bg-white flex flex-col w-[100vw] items-center justify-center">
      <section className="px-10 w-[100vw] flex sm:pt-20 pt-6 pb-6 justify-between max-md:justify-center">
        <h4 className="text-gray-500  text-center">
          ©2024 by Sip & Play. All Rights Reserved.
        </h4>
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
