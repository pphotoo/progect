import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles/style.css"

import Navbar from "./componets/Navbar";
import SimpleSlider from "./componets/SimpleSlider";
import React from "react";
import Footer from "./componets/Footer";
import AboutUs from "./componets/AboutUs";
import Missionaries from "./componets/Missionaries";
import TextBlock from "./componets/TextBlock";
import Block2 from "./componets/Block2";
import Block3 from "./componets/Block3";
import Block4 from "./componets/Block4";


function App() {
  return (
    <div className="App">
      <Navbar />
        <div style={{marginTop:"80px"}}>
            <SimpleSlider />

            <TextBlock />
            <Missionaries/>
            <Block2 />
            <AboutUs />
            <Block3 />
            <Block4 />
            <Footer />
        </div>

    </div>
  );
}

export default App;
