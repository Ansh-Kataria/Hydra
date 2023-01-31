import React from "react";
import {
  Navbar,
  Hero,
  About,
  Services,
  Tech,
  Process,
  Join,
  Footer,
} from "./components";

import "./App.css"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tech />
      <Process />
      <Join />
      <Footer />
    </div>
  );
};

export default App;
