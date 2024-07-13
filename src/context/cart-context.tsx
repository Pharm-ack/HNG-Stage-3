"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { toast } from "sonner";

interface Price {
  amount: number;
  currency: string;
  // Add other price properties as needed
}

interface Category {
  // Define category properties
  id: string;
  name: string;
  // Add other category properties as needed
}

interface Photo {
  url: string;
  is_default: boolean;
  // Add other photo properties as needed
}

interface Product {
  id: string;
  name: string;
  description: string | null;
  available_quantity: number;
  current_price: Price[] | number;
  categories: Category[];
  is_available: boolean;
  photos: Photo[];
  url_slug: string;
  unique_id: string;
  date_created: string;
  last_updated: string;
  selling_price: number | null;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  cartItemCount: number;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "shopping-cart";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isClient]);

  const addToCart = (product: Product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);
    if (isProductInCart) {
      toast.error("Item is already in the cart");
      return;
    }
    setCart((currentCart) => [...currentCart, { ...product, quantity: 1 }]);
    toast.success("Item added to cart");
  };

  const increaseQuantity = (productId: string) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (productId: string) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item,
      ),
    );
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const removeFromCart = (productId: string) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId),
    );
    toast.success("Item removed from cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        cartItemCount,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
