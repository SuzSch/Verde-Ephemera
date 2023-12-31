import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Slider from "../Slider";
import ItemList from "../ItemList"
import arrang1 from "../../images/florist-slider-1.jpg";
import arrang2 from "../../images/florist-slider-2.jpg";
import arrang3 from "../../images/florist-slider-3.jpg";
import slider1 from "../../images/floralSlider1.jpg";
import slider2 from "../../images/floralSlider2.jpg";
import slider3 from "../../images/floralSlider3.jpg";
import Cart from "../Cart";


function FloristControl() {

  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setCartVisible(true);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);

    if (updatedCart.length === 0) {
      setCartVisible(false);
    }
  };

  const floristItems = [
    {
      title: 'Flower Bouquet',
      description: 'A beautiful bouquet of assorted flowers.',
      price: '$85',
      image: arrang3,
    },

    {
      title: 'Flower Bouquet',
      description: 'A beautiful bouquet of assorted flowers.',
      price: '$85',
      image: arrang1,
    },

    {
      title: 'Flower Bouquet',
      description: 'A beautiful bouquet of assorted flowers.',
      price: '$85',
      image: arrang2,
    },
  ];

  const sliderImages = [slider1, slider2, slider3];

  const styles = {
    header: {
      textAlign: 'center',
      marginTop: '50px',
      marginBottom: '50px',
      color: 'antiquewhite'
    }
  }

  return (
    <div>
      <Header />
      <h1 style={styles.header}>Welcome to the VerdeEphmera Flower Shop</h1>

      <Slider images={sliderImages}
        interval={5000}
        autoplay={true}
      />
      <h2 style={styles.header}>This is some text about what the florist has to offer.</h2>
      <ItemList items={floristItems} buttonText='Buy me' onBuyMe={addToCart} />
      {cartVisible && <Cart cart={cart} removeFromCart={removeFromCart} floristItems={floristItems} />}
      <Footer />
    </div>
  );
}

export default FloristControl;
