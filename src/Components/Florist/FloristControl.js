// FloristControl.js

import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Slider from "../Slider";
import ItemList from "../ItemList"
import floristSlider1 from "../../images/florist-slider-1.jpg";
import floristSlider2 from "../../images/florist-slider-2.jpg";
import floristSlider3 from "../../images/florist-slider-3.jpg";

function FloristControl() {

  const floristItems = [
    {
      title: 'Flower Bouquet',
      description: 'A beautiful bouquet of assorted flowers.',
      price: '$25',
      image: floristSlider3,
    },

    {
      title: 'Flower Bouquet',
      description: 'A beautiful bouquet of assorted flowers.',
      price: '$25',
      image: floristSlider1,
    },

    {
      title: 'Flower Bouquet',
      description: 'A beautiful bouquet of assorted flowers.',
      price: '$25',
      image: floristSlider2,
    },
  ];

  const sliderImages = [floristSlider1, floristSlider2, floristSlider3];
  return (
    <div>
      <Header />
      <h1>Welcome to the VerdeEphmera Flower Shop</h1>
      

      <Slider images={sliderImages} interval={5000} autoplay={true} />
      <h2>Ths is some text about what the florist has to offer.</h2>
      <ItemList items={floristItems} buttonText='See Options'/>
      <Footer />
    </div>
  );
}

export default FloristControl;
