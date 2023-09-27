import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Slider from "../Slider";



function FloristControl() {

  const sliderImages = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
  ];
  return (

    <div>
      <Header />
      <h1>This is the Florist Page</h1>
      <Slider images={sliderImages} interval={5000} autoplay={true}/>
      <Footer />
    </div>
  );
}

export default FloristControl;