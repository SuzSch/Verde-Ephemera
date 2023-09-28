// FloristControl.js

import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Slider from "../Slider";
import floristSlider1 from "../../images/florist-slider-1.jpg";
import floristSlider2 from "../../images/florist-slider-2.jpg";
import floristSlider3 from "../../images/florist-slider-3.jpg";

function FloristControl() {
  const sliderImages = [floristSlider1, floristSlider2, floristSlider3];
  return (
    <div>
      <Header />
      <h1>This is the Florist Page</h1>
      <Slider images={sliderImages} interval={5000} autoplay={true} />
      <Footer />
    </div>
  );
}

export default FloristControl;
