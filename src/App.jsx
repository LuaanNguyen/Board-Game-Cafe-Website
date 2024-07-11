/* eslint-disable react/no-unknown-property */
import Footer from "./components/Footer";
import Home from "./Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <section className="home">
      <Navbar />
      <Home />
      <Footer />
    </section>
  );
}

export default App;
