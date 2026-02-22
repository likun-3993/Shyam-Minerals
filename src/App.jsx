import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Vision from "./components/Vision";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Vision />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
