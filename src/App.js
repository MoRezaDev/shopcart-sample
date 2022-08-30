import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

//import components
import Navbar from "./components/shared/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";

//call contexts.....
import ProductContextProvider from "./context/ProductContextProvider";
import Details from "./components/shared/Details";
import CartContextProvider from "./context/CartContextProvider";
import ShopCart from "./components/ShopCart";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar />
          <Switch>
            <Route path="/shopcart" component={ShopCart} />
            <Route path="/products/:id" component={Details} />
            <Route path="/products" component={Products} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
