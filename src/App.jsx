import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./Home";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import Preloader from "./components/preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <section className="home">
          <Navbar />
          <Home />
          <AnimatedBackground />
          <Footer />
        </section>
      )}
    </>
  );
}

export default App;
