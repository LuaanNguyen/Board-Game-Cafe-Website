/* eslint-disable react/no-unknown-property */
import Footer from "./components/Footer";
import Home from "./Home";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <section className="home">
      <Navbar />
      <Home />
      {/* <AnimatedBackground /> */}
      <Footer />
    </section>
  );
}

export default App;
