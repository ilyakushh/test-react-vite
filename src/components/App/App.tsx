import { useState } from "react";
import Header from "../Header/Header";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import Prices from "../Prices/Prices";
import Contact from "../Contact/Contact";
import SideBar from "../SideBar/SideBar";

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSideBar = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <SideBar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      <Header toggleSideBar={toggleSideBar} />
      <div className="container">
        <About />
        <Experience />
        <Skills />
        <Prices />
        <Contact />
      </div>
    </div>
  );
};

export default App;
