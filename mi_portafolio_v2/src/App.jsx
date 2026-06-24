import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Scroll } from "./components/Scroll";
/* import Chatbot from "./components/Chatbot"; 
import AIChat from "./components/AIChat";*/


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Scroll/>
      {/* <AIChat /> */}
      {/* <Chatbot /> */}
      <Footer />
    </>
  );
}

export default App;
