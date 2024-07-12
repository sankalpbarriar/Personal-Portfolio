import Header from "./components/Header";
import { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
// import Testimonial from "./components/Testimonial";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Leetcode from "./components/Leetcode";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { DarkModeProvider } from "./context/DarkModeContext";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);

  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);
    return()=>{
      window.removeEventListener("resize", resizeRatio);
    }
  },[ratio]);

  return ratio<3?(
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home ratio={ratio}/>
      <Work />
      <Timeline />
      <Services />
      <Leetcode />
      <Skills />
      <Contact />
      <Toaster />
      <Footer />
    </>
  ):(
  <em id="customMessege">Please change the ratio to view</em>
  )
    
}

export default App;
