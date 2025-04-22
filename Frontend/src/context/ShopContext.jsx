import React, { createContext, useEffect, useState } from 'react';
import { products } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = props => {
  const currency = '₹';
  const Delivery_fee = 19;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = async itemId => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      // if (cartData[itemId]) {
      cartData[itemId] += 1;

      // }
    } else {
      // cartData[itemId]={};
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
  };
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      // console.log("yes loop")
      if (cartItems[items] > 0) {
        //         totalCount = totalCount+cartItems[items][item]
        //     }
        totalCount += cartItems[items];
      }
      //  for( const item in cartItems[items]){
      // try {
      //     if (cartItems[items][item]>0) {
      //         totalCount = totalCount+cartItems[items][item]
      //     }
      // } catch (error) {

      // }
      //}
    }
    return totalCount;
  };
  const updateQuantity = async (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;

    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find(product => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
  };

  const Value = {
    products,
    currency,
    Delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={Value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
