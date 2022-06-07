import { Box } from '@mui/material';
import { useState } from 'react';
import Layout from '../Layout';


const sampleShoppingCart = [

  {
    id: '234',
    title: "Red Drum Set",
    price: 59999,
    quantity: 2,
    image: 'https://m.media-amazon.com/images/I/61YlBr7OQfS._AC_SL1500_.jpg',
 },
 {
  id: '123',
  title: "Blue Drum Set",
  price: 59999,
  quantity: 2,
  image: 'https://m.media-amazon.com/images/I/61YlBr7OQfS._AC_SL1500_.jpg',
},
];

const CartPage = () => {

  const [shoppingCart, setShoppingCart] = useState([]);

  const addToCart = (product) => {


    // does this product already exist in the shopping cart?

    const productFound = shoppingCart.find(cartItem => cartItem.id === product.id)
    
    // // If it does, update the quantity of the existing one
    if(productFound){
      const newShoppingCart = shoppingCart.map(cartItem => {

        const newQuantity = cartItem.quantity + 1;
        if(cartItem.id === productFound.id){
          return {...cartItem, quantity: cartItem.quantity + 1, total: newQuantity * cartItem.price}
        }
        return cartItem
        }
      );

      return setShoppingCart(newShoppingCart);
    }

    // // If it does not add it to the end of the list
  const newShoppingCart = [...shoppingCart, {
      id: product.id,
      title:  product.title,
      price:  product.price,
      quantity: 1,
      image:  product.image,
      total: product.price
    }];

    setShoppingCart(newShoppingCart)
  };
  

  // We want to display whats in the shopping cart.
  return (
    <Layout>
     <Box
        width={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <button onClick={
          () => addToCart(    {id: '234',
          title: "Red Drum Set",
          description: 'Red drums description',
          brand: 'Yamaha',
          price: 59999,
          image: 'https://m.media-amazon.com/images/I/61YlBr7OQfS._AC_SL1500_.jpg',
        })}>add RED DRUM SET
        </button>
        <button onClick={
          () => addToCart({
            id: '123',
            title: "Blue Drum Set",
            description: 'Blue drums description',
            brand: 'Yamaha',
            price: 59999,
            image: 'https://www.yamaha.com/yamahavgn/PIM/Images/19027_12073_1_1200x1200_80813f268e73483818697e99937dbd59.jpg',
          })}>add RED BLUE DRUM SET
        </button>
        {shoppingCart.map(cartItem =>
        <Box p={3}>{cartItem.title} - Qty: {cartItem.quantity} - ${cartItem.price / 100} total$: {cartItem.total/100}</Box>
        )}
     </Box>
    </Layout>
  )
}

export default CartPage;