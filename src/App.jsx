import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Vision from "./components/Vision";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Vision />
      </main>
      <Footer />
    </>
  );
}

export default App;
