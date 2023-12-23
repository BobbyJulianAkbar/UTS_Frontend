import { useLocalStorage } from "usehooks-ts";
import { IKomputer } from "./useKomputers";

const useCart = () => {
  const [cart, setCart] = useLocalStorage<IKomputer[]>("cart", []);

  const addToCart = (item: IKomputer) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item: IKomputer) => {
    const newCart = cart.filter(
      (cartItem: IKomputer) => cartItem.id !== item.id
    );
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return { cart, addToCart, removeFromCart, clearCart };
};

export default useCart;
