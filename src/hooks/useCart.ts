import { useState, useEffect } from "react";
import type { CartItem, AddToCart } from "../types/CartItem";

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Charger le panier depuis localStorage au montage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart) as CartItem[]);
      } catch (error) {
        console.error("Erreur lors du chargement du panier:", error);
        setCart([]);
      }
    }
  }, []);

  // Sauvegarder le panier dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart: AddToCart = (plant) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === plant.name);

      if (existingItem) {
        // Augmenter la quantité si l'article existe déjà
        return prevCart.map((item) =>
          item.name === plant.name ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        // Ajouter un nouvel article
        return [...prevCart, { ...plant, amount: 1 }];
      }
    });
  };

  const removeFromCart = (plantName: string): void => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== plantName));
  };

  const updateQuantity = (plantName: string, newAmount: number): void => {
    if (newAmount <= 0) {
      removeFromCart(plantName);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === plantName ? { ...item, amount: newAmount } : item
      )
    );
  };

  const clearCart = (): void => {
    setCart([]);
  };

  const getTotal = (): number => {
    return cart.reduce((total, item) => total + item.price * item.amount, 0);
  };

  const getItemCount = (): number => {
    return cart.reduce((count, item) => count + item.amount, 0);
  };

  const getCartItem = (plantName: string): CartItem | undefined => {
    return cart.find((item) => item.name === plantName);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal,
    getItemCount,
    getCartItem,
  };
};
