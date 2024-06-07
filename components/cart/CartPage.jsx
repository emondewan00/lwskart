import Card from "./Card";
import CartSummary from "./CartSummary";
import { auth } from "@/auth";
import EmptyCart from "./EmptyCartItems";

const CartPage = async () => {
  const session = await auth();
  const serverUlr = process.env.SERVER_URL;
  const cartList = await fetch(`${serverUlr}/cart/${session?.user?.id}`, {
    next: {
      tags: ["cartItems"],
    },
  });
  const data = await cartList.json();

  if (!data?.items?.length) {
    return <EmptyCart />;
  }

  return (
    <div className="my-8 container">
      <div className="grid grid-cols-8 gap-x-4 h-fit">
        {/* left side */}
        <div className="col-span-6 p-4 w-full bg-white shadow-md h-fit space-y-4">
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
        <CartSummary data={data} />
      </div>
    </div>
  );
};

export default CartPage;
