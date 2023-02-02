import { useState } from "react";
import "./App.css";
import { Section1 } from "./components/Section1";
import { Section2 } from "./components/Section2";
import { Section3 } from "./components/Section3";
import { Section4 } from "./components/Section4";

function App() {
  return (
    <div className="App snap-y snap-mandatory h-screen w-screen overflow-y-auto overflow-x-hidden scroll-smooth ">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default App;
