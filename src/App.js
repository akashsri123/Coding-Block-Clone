import React from "react";

import Footer from "./Footer";
import Blog from "./Blog";
import News from "./news";
import Events from "./events";
import Upper from "./Upper";
import Course from "./Course";
import Program from "./Program";
import Navbottom from "./Navbottom";
import Navupper from "./Navupper";
import Carousel1 from "./Carousel1";

function App() {
  return (
    <div className="App">
      <Navupper />
      <hr style={{margin:"0"}} />
      <Navbottom />
      <Carousel1 />
      <Upper />
      <Course />
      <Program />
      <Events />
      <News />
      <Blog />
      <Footer />
      

    </div>
  );
}

export default App;
