import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("pharmaCart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("pharmaCart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [cartItems]);

  const addToCart = useCallback((product) => {
    if (!product || typeof product.id === "undefined") {
      console.error("Invalid product added to cart");
      return;
    }

    setCartItems((prevItems) => {
      const items = Array.isArray(prevItems) ? prevItems : [];
      const existingItemIndex = items.findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...items];
        const existingItem = updatedItems[existingItemIndex];
        updatedItems[existingItemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + (product.quantity || 1),
        };
        return updatedItems;
      } else {
        const newItem = {
          ...product,
          quantity: product.quantity || 1,
        };
        return [...items, newItem];
      }
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCartItems((prevItems) => {
      const items = Array.isArray(prevItems) ? prevItems : [];
      return items.filter((item) => item.id !== productId);
    });
  }, []);

  const updateQuantity = useCallback(
    (productId, quantity) => {
      if (quantity < 1) {
        removeFromCart(productId);
        return;
      }

      setCartItems((prevItems) => {
        const items = Array.isArray(prevItems) ? prevItems : [];
        return items.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        );
      });
    },
    [removeFromCart]
  );

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const safeCartItems = Array.isArray(cartItems) ? cartItems : [];

  const cartTotal = safeCartItems.reduce((total, item) => {
    const price = typeof item.price === "number" ? item.price : 0;
    const quantity = typeof item.quantity === "number" ? item.quantity : 0;
    return total + price * quantity;
  }, 0);

  const cartCount = safeCartItems.reduce((total, item) => {
    const quantity = typeof item.quantity === "number" ? item.quantity : 0;
    return total + quantity;
  }, 0);

  const value = {
    cartItems: safeCartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
