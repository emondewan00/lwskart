import Card from "./Card";
import CartSummary from "./CartSummary";
import { auth } from "@/auth";

const CartPage = async () => {
  const session = await auth();
  const cartList = await fetch(
    `http://localhost:3000/api/cart/${session?.user?.id}`,
    {
      next: {
        tags: ["cartItems"],
      },
    }
  );
  const data = await cartList.json();
  return (
    <div className="my-8 container">
      <div className="flex gap-x-4 h-fit">
        {/* left side */}
        <div className="p-4 w-full bg-white shadow-md h-fit space-y-4">
          <div className="hidden lg:flex gap-x-4 mb-4 bg-[#FEF0F0] px-4 py-2 *:text-xl">
            <p>Image</p>
            <p className="ml-auto">Product Name</p>
            <div className="flex ml-auto">
              <p className="mr-10">Quantity</p>
              <p>Remove</p>
            </div>
          </div>
          {/* card  */}
          {data?.items?.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
        {/* Cart Summary */}
        <CartSummary />
      </div>
    </div>
  );
};

export default CartPage;
