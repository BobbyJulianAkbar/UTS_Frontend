import useCart from "./hooks/useCart";

const Cart = () => {
  const { cart, clearCart } = useCart();

  return (
    <div>
      <h1>Cart</h1>
      <div className="flex flex-col mt-2">
        {cart.length === 0 ? (
          <h1>Cart is empty</h1>
        ) : (
          cart.map((item) => (
            <div className="flex flex-row justify-between mt-4">
              <div className="flex flex-col gap-1">
                <h1>{item.name}</h1>
                <h1>Rp {item.price}</h1>
              </div>
            </div>
          ))
        )}
      </div>
      <h1 className="mt-5">
        Total: Rp {cart.reduce((acc, item) => acc + item.price, 0)}
      </h1>
      <button
        onClick={clearCart}
        className="bg-green-500 px-4 py-1 rounded-full mt-4 text-white"
      >
        Checkout
      </button>
      <button
        onClick={clearCart}
        className="bg-red-500 ml-4 px-4 py-1 rounded-full mt-4 text-white"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
