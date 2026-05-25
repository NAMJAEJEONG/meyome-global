export default function HomePage() {
  const products = [
    {
      name: "Ice Blue Jelly Firkin",
      price: "USD 46",
      status: "Available",
      image: "https://ecimg.cafe24img.com/pg1834b67694111017/skawo9386/web/product/big/20260512/f935a830a548b6225543a0a41e8f21fd.png",
      link: "https://www.meyome.kr/상품주소넣기",
    },
    {
      name: "Green Jelly Firkin",
      price: "USD 80",
      status: "Available",
      image: "https://www.meyome.kr/이미지주소넣기.jpg",
      link: "https://www.meyome.kr/상품주소넣기",
    },
  ];

  return (
    <main style={{ background: "#fff8fb", color: "#181818" }}>
      <section
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=2000&auto=format&fit=crop"
          alt="Meyome Global"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.62))",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <p
            style={{
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              fontSize: "12px",
              marginBottom: "20px",
            }}
          >
            Meyome Seoul Archive
          </p>

          <h1
            style={{
              fontSize: "clamp(48px, 9vw, 72px)",
              lineHeight: "1",
              margin: 0,
              fontWeight: 700,
            }}
          >
            Meyome Global
          </h1>

          <p
            style={{
              maxWidth: "620px",
              marginTop: "24px",
              lineHeight: "1.7",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            Tiny Seoul archive for cute bag lovers worldwide.
            <br />
            Vintage bags, jelly pieces, and strange little treasures selected by Meyome.
            <br />
            Worldwide EMS shipping. PayPal invoice available.
          </p>

          <a
            href="#shop"
            style={{
              marginTop: "40px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "180px",
              height: "56px",
              borderRadius: "999px",
              background: "#fff",
              color: "#181818",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            SHOP NOW
          </a>
        </div>
      </section>

      <section
        id="shop"
        style={{
          padding: "80px 20px",
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "36px", marginBottom: "12px" }}>
          Available Pieces
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            lineHeight: 1.7,
            marginBottom: "44px",
          }}
        >
          For international orders, please DM us your country and item name.
          <br />
          We will check EMS shipping fee and send a PayPal invoice.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.name}
              style={{
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: "26px",
                overflow: "hidden",
              }}
            >
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    objectFit: "cover",
                    display: "block",
                    background: "#f1e8ee",
                  }}
                />
              </a>

              <div style={{ padding: "20px" }}>
                <p
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#999",
                    margin: "0 0 10px",
                  }}
                >
                  {product.status}
                </p>

                <h3 style={{ fontSize: "20px", margin: "0 0 8px" }}>
                  {product.name}
                </h3>

                <p style={{ fontWeight: 700, margin: "0 0 18px" }}>
                  {product.price}
                </p>

                <a
                  href="https://www.instagram.com/meyome.bag/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "46px",
                    borderRadius: "999px",
                    background: "#181818",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  DM to Order
                </a>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "60px",
            padding: "28px",
            borderRadius: "26px",
            background: "#fff",
            textAlign: "center",
            lineHeight: 1.8,
          }}
        >
          <strong>International Order Guide</strong>
          <br />
          1. Choose your item.
          <br />
          2. DM us your country and item name.
          <br />
          3. We will check EMS shipping fee.
          <br />
          4. Payment is available by PayPal invoice.
          <br />
          Instagram:{" "}
          <a href="https://www.instagram.com/meyome.bag/" target="_blank">
            @meyome.bag
          </a>
        </div>
      </section>
    </main>
  );
}
