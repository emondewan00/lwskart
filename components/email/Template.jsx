import Image from "next/image";
import logo from "@/public/images/logo-white.svg";
const Template = ({ data: { _doc } }) => {
  console.log(_doc,"Template");
  const subTotal = _doc?.items?.reduce(
    (sum, item) => item?.product_id?.price * item?.quantity + sum,
    0
  );
  const { firstName, lastName, city, address, country, phone, zip } =
    _doc?.shipping;
  const tax = subTotal * 0.05;
  const total = subTotal + tax;
  const date = new Date(_doc?.createdAt).toLocaleDateString();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "2.5rem",
        backgroundColor: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "0.75rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {/* <Image src={logo} alt="logo" style={{ maxWidth: "100%" }} /> */}
          <h1
            style={{
              marginTop: "0.5rem",
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "#3490dc",
            }}
          >
            LWSkart
          </h1>
        </div>

        <div style={{ textAlign: "right" }}>
          <h2
            style={{
              fontSize: "1.875rem",
              fontWeight: "600",
              color: "#2d3748",
            }}
          >
            Invoice #
          </h2>
          <span
            style={{ marginTop: "0.25rem", display: "block", color: "#a0aec0" }}
          >
            {_doc?._id}
          </span>
          <address
            style={{
              marginTop: "1rem",
              color: "#2d3748",
              fontStyle: "normal",
            }}
          >
            H 106/2, North Badda,
            <br />
            Badda, Dhaka - 1212
            <br />
            Bangladesh
            <br />
          </address>
        </div>
      </div>

      <div
        style={{
          marginTop: "2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: "600",
              color: "#2d3748",
            }}
          >
            Bill to:
          </h3>
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: "600",
              color: "#2d3748",
            }}
          >
            {firstName} {lastName}
          </h3>
          <address style={{ marginTop: "0.5rem", color: "#a0aec0" }}>
            {address},
            <br />
            {city}, {zip},
            <br />
            {country}
            <br />
          </address>
        </div>

        <div style={{ textAlign: "right" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "3fr 2fr",
              gap: "0.5rem",
            }}
          >
            <dl
              style={{
                display: "grid",
                gridTemplateColumns: "3fr 2fr",
                gap: "0.5rem",
              }}
            >
              <dt style={{ fontWeight: "600", color: "#2d3748" }}>
                Invoice date:
              </dt>
              <dd style={{ color: "#a0aec0" }}>{date}</dd>
            </dl>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "1.5rem",
          border: "1px solid #e2e8f0",
          padding: "1rem",
          borderRadius: "0.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr" }}
        >
          <div
            style={{
              textTransform: "uppercase",
              fontSize: "0.75rem",
              fontWeight: "600",
              color: "#a0aec0",
            }}
          >
            Item
          </div>
          <div
            style={{
              textTransform: "uppercase",
              fontSize: "0.75rem",
              fontWeight: "600",
              color: "#a0aec0",
            }}
          >
            Qty
          </div>
          <div
            style={{
              textTransform: "uppercase",
              fontSize: "0.75rem",
              fontWeight: "600",
              color: "#a0aec0",
            }}
          >
            Rate
          </div>
          <div
            style={{
              textAlign: "right",
              textTransform: "uppercase",
              fontSize: "0.75rem",
              fontWeight: "600",
              color: "#a0aec0",
            }}
          >
            Amount
          </div>
        </div>

        {_doc?.items?.map(({ _id, product_id, quantity }) => (
          <div
            key={_id}
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: "1rem",
            }}
          >
            <div>
              <p style={{ fontWeight: "600", color: "#2d3748" }}>
                {product_id?.name}
              </p>
            </div>
            <div>
              <p style={{ color: "#2d3748" }}>{quantity}</p>
            </div>
            <div>
              <p style={{ color: "#2d3748" }}>{product_id?.discount_price}</p>
            </div>
            <div>
              <p style={{ textAlign: "right", color: "#2d3748" }}>
                ${(product_id?.discount_price * quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div style={{ maxWidth: "36rem", textAlign: "right" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "3fr 2fr",
              gap: "0.5rem",
            }}
          >
            <dl
              style={{
                display: "grid",
                gridTemplateColumns: "3fr 2fr",
                gap: "0.5rem",
              }}
            >
              <dt style={{ fontWeight: "600", color: "#2d3748" }}>Subtotal:</dt>
              <dd style={{ color: "#a0aec0" }}>${subTotal.toFixed(2)}</dd>
            </dl>
            <dl
              style={{
                display: "grid",
                gridTemplateColumns: "3fr 2fr",
                gap: "0.5rem",
              }}
            >
              <dt style={{ fontWeight: "600", color: "#2d3748" }}>Total:</dt>
              <dd style={{ color: "#a0aec0" }}>${total.toFixed(2)}</dd>
            </dl>
            <dl
              style={{
                display: "grid",
                gridTemplateColumns: "3fr 2fr",
                gap: "0.5rem",
              }}
            >
              <dt style={{ fontWeight: "600", color: "#2d3748" }}>Tax:</dt>
              <dd style={{ color: "#a0aec0" }}>${tax.toFixed(2)}</dd>
            </dl>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h4
          style={{ fontSize: "1.125rem", fontWeight: "600", color: "#2d3748" }}
        >
          Thank you!
        </h4>
        <p style={{ color: "#a0aec0" }}>
          If you have any questions concerning this invoice, use the following
          contact information:
        </p>
        <div style={{ marginTop: "0.5rem" }}>
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: "600",
              color: "#2d3748",
            }}
          >
            miremon5222@gmail.com
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: "600",
              color: "#2d3748",
            }}
          >
            +880 1741-235222
          </p>
        </div>
      </div>

      <p
        style={{ marginTop: "1.25rem", fontSize: "0.875rem", color: "#a0aec0" }}
      >
        © 2024 LWSkart.
      </p>
    </div>
  );
};

export default Template;
