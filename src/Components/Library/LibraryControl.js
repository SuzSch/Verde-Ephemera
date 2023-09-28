import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Slider from "../Slider";
import librarySlider1 from "../../images/slider-book1.jpeg";
import librarySlider2 from "../../images/slider-book2.jpg";
import librarySlider3 from "../../images/slider-book3.jpg";

function LibraryControl() {
  const sliderImages = [librarySlider1, librarySlider2, librarySlider3];
  return (
    <div>
      <Header />
      <h1>This is the Library Page</h1>
      <Slider
        images={sliderImages}
        interval={5000}
        autoplay={true}
      />
      <h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        vitae elit libero, a pharetra augue. Sed posuere consectetur est at
        lobortis. Vestibulum id ligula porta felis euismod semper.
      </h2>
      <Footer />
    </div>
  );
}

export default LibraryControl;


