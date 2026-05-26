const products = [
  "Classic Shoulder Bag",
  "Soft Tote Bag",
  "Mini Archive Bag",
  "Daily Hobo Bag",
  "PVC Handbag",
  "Structured Tote",
  "Seoul Archive Bag",
  "Minimal Crossbody",
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <a href="#" className="logo">MEYOME</a>
        <nav>
          <a href="#new">NEW IN</a>
          <a href="#shop">BAGS</a>
          <a href="#order">ORDER</a>
          <a href="#shipping">SHIPPING</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">SEOUL BASED GLOBAL SHOP</p>
          <h1>Curated bags from Seoul.</h1>
          <p className="heroText">
            Selected handbags available for international order. Worldwide
            shipping from Korea with PayPal payment.
          </p>
          <div className="buttons">
            <a href="#new">SHOP NEW IN</a>
            <a href="#order" className="outline">HOW TO ORDER</a>
          </div>
        </div>
        <div className="heroImage">
          <span>MEYOME GLOBAL</span>
          <span>2026 COLLECTION</span>
        </div>
      </section>

      <section id="new" className="section">
        <div className="sectionTitle">
          <div>
            <p className="eyebrow">NEW ARRIVALS</p>
            <h2>Freshly selected</h2>
          </div>
          <a href="#shop">View all</a>
        </div>

        <div className="grid four">
          {products.slice(0, 4).map((name, index) => (
            <ProductCard key={name} name={name} index={index} />
          ))}
        </div>
      </section>

      <section className="categories">
        {["Shoulder Bags", "Tote Bags", "Mini Bags", "TPU / PVC"].map((c) => (
          <a href="#shop" key={c}>
            <p>Category</p>
            <h3>{c}</h3>
            <span>Shop now</span>
          </a>
        ))}
      </section>

      <section id="shop" className="section">
        <div className="sectionTitle">
          <div>
            <p className="eyebrow">BEST SELLERS</p>
            <h2>Available bags</h2>
          </div>
          <p>Order via DM / Email</p>
        </div>

        <div className="grid">
          {products.map((name, index) => (
            <ProductCard key={name} name={name} index={index} />
          ))}
        </div>
      </section>

      <section id="order" className="infoSection">
        <p className="eyebrow">HOW TO ORDER</p>
        <div className="steps">
          {[
            "Choose your item",
            "Send item name and country",
            "Receive total price",
            "Pay via PayPal",
          ].map((step, index) => (
            <div key={step}>
              <p>{String(index + 1).padStart(2, "0")}</p>
              <h4>{step}</h4>
            </div>
          ))}
        </div>
      </section>

      <section id="shipping" className="splitSection">
        <p className="eyebrow">SHIPPING</p>
        <div>
          <p>
            Worldwide shipping from Korea. Shipping fee depends on destination
            country and package quantity.
          </p>
          <p>Tracking number will be provided after shipment.</p>
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">CONTACT</p>
        <h2>Send us the item name and your country.</h2>
        <div>
          <a href="mailto:hello@meyome.kr">Email Order</a>
          <a href="https://www.instagram.com/">Instagram DM</a>
        </div>
      </section>

      <footer>
        <p>© 2026 MEYOME GLOBAL</p>
        <p>Worldwide shipping from Korea · PayPal available</p>
      </footer>
    </main>
  );
}

function ProductCard({ name, index }: { name: string; index: number }) {
  return (
    <a href="#contact" className="product">
      <div className="productImage">
        <span className="tag">{index % 2 === 0 ? "NEW" : "BEST"}</span>
        <span className="imageText">IMAGE {String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="productInfo">
        <p>{name}</p>
        <p>USD {98 + index * 8}</p>
      </div>
      <span className="orderText">Order via DM</span>
    </a>
  );
}
