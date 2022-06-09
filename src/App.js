import React, { createContext, useState } from 'react';
import CustomThemeProvider from './components/CustomThemeProvider';
import CartPage from './components/pages/CartPage';
import HomePage from './components/pages/HomePage';

export const shoppingCartContext = createContext();

function App() {
  const [page, setPage] = useState('homePage');
  const [shoppingCart, setShoppingCart] = useState([]);

  const addToCart = (product) => {

    // Check if item already exists
    const productFound = shoppingCart.find(cartItem => cartItem.id === product.id)

    // Update quantity if it exists
    if (productFound) {
      const newShoppingCart = shoppingCart.map(cartItem => {

        const newQuantity = cartItem.quantity + 1;
        if (cartItem.id === productFound.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1, total: newQuantity * cartItem.price }
        }
        return cartItem
      }
      );
      return setShoppingCart(newShoppingCart);
    }

    // Otherwise add new item to cart
    const newShoppingCart = [...shoppingCart, {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
      total: product.price
    }];

    setShoppingCart(newShoppingCart)
  };

  const removeFromCart = (productId) => {
    const newShoppingCart = shoppingCart.filter(cartItem => cartItem.id !== productId)
    setShoppingCart(newShoppingCart);
  }

  return (
    <CustomThemeProvider>
      <shoppingCartContext.Provider value={{ shoppingCart, addToCart, removeFromCart }} >

        <button onClick={() => setPage('homePage')}>Home Page</button>
        <button onClick={() => setPage('cartPage')}>Cart Page</button>
        {
          page === 'homePage' ? <HomePage addToCart={addToCart} /> :
            <CartPage
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
        }
      </shoppingCartContext.Provider>
    </CustomThemeProvider>
  );
}

export default App;