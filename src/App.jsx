import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./Home";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import Preloader from "./components/preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time with a timeout
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <section className="home">
          <Navbar />
          <Home />
          {/* <AnimatedBackground /> */}
          <Footer />
        </section>
      )}
    </>
  );
}

export default App;
