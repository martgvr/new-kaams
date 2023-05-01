import { createContext, useState } from 'react';

export const cartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const cartCopy = [...cart];

  const isInCart = (uid) => cart.some(item => item.uid === uid);

  const addToCart = (itemToCart, quantity) => {
    if (!isInCart(itemToCart.uid)) {
      cartCopy.push( {...itemToCart, quantity: quantity} );
      setCart(cartCopy);
    } else {
      const itemIndex = cartCopy.findIndex(item => item.uid === itemToCart.uid && item.size == itemToCart.size);
    
      if (itemIndex == -1) {
        cartCopy.push( {...itemToCart, quantity: quantity} );
      } else {
        cartCopy[itemIndex].quantity += quantity;
      }

      setCart(cartCopy);
    }
  }

  const decreaseQuantity = (uid, size) => {
    const itemIndex = cartCopy.findIndex(item => item.uid === uid && item.size == size)
    const itemQuantity = cartCopy[itemIndex].quantity
    itemQuantity > 1 && cartCopy[itemIndex].quantity--
    setCart(cartCopy)
  }

  const increaseQuantity = (uid, size) => {
    const itemIndex = cartCopy.findIndex(item => item.uid === uid && item.size == size)
    const itemQuantity = cartCopy[itemIndex].quantity
    itemQuantity < 10 && cartCopy[itemIndex].quantity++
    setCart(cartCopy)
  }

  const clearCart = () => setCart([]);

  const removeItem = (uid, size) => {
    if (isInCart(uid)) {
      const itemIndex = cartCopy.findIndex(item => item.uid === uid && item.size == size)
      cartCopy.splice(itemIndex, 1);
      setCart(cartCopy);
    }
  };

  return(
    <cartContext.Provider value={{ cart, addToCart, clearCart, removeItem, increaseQuantity, decreaseQuantity }}>
      {children}
    </cartContext.Provider>
  )
}