import React, {useState} from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";
import SliderData from "./data/SliderData"
import Dropdown from "./components/Dropdown";
import InfoSection from "./components/infoSection";
import {infoData} from './data/infoData'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <GlobalStyle />
      <Navbar  toggle={toggle} />
      <Hero  slides={SliderData}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <InfoSection {...infoData}/>
    </>
  );
};
export default App;

