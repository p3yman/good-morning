import React from "react";

import "../../assets/scss/Style.scss";

import Header from "../Header";
import ToDo from "../ToDo";
import Image from "../Image";

function App() {
  return (
    <div className="App">
      <div className="left">
        <Header />
        <ToDo />
      </div>
      <Image />
    </div>
  );
}

export default App;
