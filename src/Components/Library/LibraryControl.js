import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Slider from "../Slider";
import librarySlider1 from "../../images/slider-book1.jpeg";
import librarySlider2 from "../../images/book-4.jpg";
import librarySlider3 from "../../images/book-5.jpg";
import ItemList from "../ItemList";

function LibraryControl() {

  const libraryItems = [
    {
      title: 'Book Title',
      description: 'A great book.',
      image: librarySlider1,
    },

    {
      title: 'Book Title',
      description: 'A great book.',
      image: librarySlider2,
    },

    {
      title: 'Book Title',
      description: 'A great book.',
      image: librarySlider3,
    },
  ];
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
      <h2>This is some text about the library and how cool it is.</h2>
      <ItemList 
      items={libraryItems} 
      buttonText="Check Me Out"/>
      <Footer />
    </div>
  );
}

export default LibraryControl;


