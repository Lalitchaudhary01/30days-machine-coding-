import { createContext, useContext, useState } from "react"; // ✅ Make sure this line is at the top

// ✅ Create context
const CartContext = createContext();

// ✅ Create provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart([...cart, item]);
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// ✅ Custom hook to use cart
export const useCart = () => useContext(CartContext); // <-- this should work
