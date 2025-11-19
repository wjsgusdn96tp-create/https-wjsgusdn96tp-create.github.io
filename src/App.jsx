import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./common/Header.jsx";
import Main from "./common/Main.jsx";
import Footer from "./common/Footer.jsx";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div>
      <Header setActiveSection={setActiveSection} />

      <main>
        <Main />
      </main>

      <Footer />
    </div>
  );
};

export default App;
