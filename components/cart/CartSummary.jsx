const CartSummary = ({ data }) => {
  const totalPrice = data?.items?.reduce(
    (sum, item) => item?.product_id?.price * item?.quantity + sum,
    0
  );
  return (
    <>
      <div className="h-fit col-span-2 p-4 rounded w-full shadow-md">
        <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
          order summary
        </h4>
        <div className="space-y-2">
          {data?.items?.length > 0 &&
            data?.items?.map((item) => (
              <div key={item._id} className="flex justify-between">
                <div className="flex gap-x-2">
                  <p className="text-gray-600">x{item?.quantity}</p>
                  <h5 className="text-gray-800 font-medium">
                    {item?.product_id?.name}
                  </h5>
                </div>
                <p className="text-gray-800 font-medium">
                  ${item?.product_id?.price}
                </p>
              </div>
            ))}
        </div>

        <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
          <p>subtotal</p>
          <p>${totalPrice?.toFixed(2)}</p>
        </div>

        <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
          <p>shipping</p>
          <p>Free</p>
        </div>

        <div className="flex justify-between text-gray-800 font-medium py-3 uppercase">
          <p className="font-semibold">Total</p>
          <p>${totalPrice?.toFixed(2)}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 dark:text-white">
            Payment Method
          </h3>
          <div className="flex flex-col">
            <div className="flex gap-x-1">
              <input type="radio" name="payment" id="cash" />
              <label htmlFor="cash" className="text-gray-600">
                Cash on delivery
              </label>
            </div>
            <div className="flex gap-x-1">
              <input type="radio" name="payment" id="card" />
              <label htmlFor="card" className="text-gray-600">
                Credit card
              </label>
            </div>
          </div>
        </div>
        <div className="flex items-center mb-4 mt-2">
          <input
            type="checkbox"
            name="aggrement"
            id="aggrement"
            className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
          />
          <label
            htmlFor="aggrement"
            className="text-gray-600 ml-3 cursor-pointer text-sm"
          >
            I agree to the{" "}
            <a href="#" className="text-primary">
              terms & conditions
            </a>
          </label>
        </div>

        <a
          href="#"
          className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
        >
          Place order
        </a>
      </div>
    </>
  );
};

export default CartSummary;
