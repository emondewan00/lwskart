const CartSummary = () => {
  return (
    <div className="max-w-sm mx-auto h-fit bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg lg:block hidden">
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
        Order Summary
      </h2>
      <div className="border-t border-zinc-200 dark:border-zinc-700 pt-4">
        <div className="flex justify-between items-center mb-4 gap-x-4">
          <p className="text-zinc-700 dark:text-zinc-300 text-nowrap">
            Add Coupon
          </p>
          <input
            type="text"
            className="border border-zinc-300 dark:border-zinc-600 rounded-full px-3 py-1 text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Coupon Code"
          />
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-zinc-700 dark:text-zinc-300">Subtotal</span>
          <span className="text-zinc-900 dark:text-zinc-100">$ 1000</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-zinc-700 dark:text-zinc-300">Shipping</span>
          <span className="text-zinc-900 dark:text-zinc-100">Free</span>
        </div>
        <div className="border-t border-zinc-200 dark:border-zinc-700 pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-zinc-700 dark:text-zinc-300">Total</span>
            <span className="text-zinc-900 dark:text-zinc-100">$ 1000</span>
          </div>
          <button className="w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
